// Shared helpers for rough-cut recordings. Each clip file exports
// `async (page) => {...}` for browser_run_code_unsafe and builds its own
// recording context from page.context().browser().
const BASE = 'https://dashboard-5b9451693a4afe43.opus-dev.ngrok.app';
const SESSION = process.env.DASHBOARD_SESSION_ID; // from local-auth-bypass
const OUT = '/app/tmp/release-redesign/raw';

const CURSOR = `
(() => {
  const install = () => {
    if (document.getElementById('__cur')) return;
    const c = document.createElement('div');
    c.id = '__cur';
    Object.assign(c.style, {
      position: 'fixed', left: '-40px', top: '-40px', width: '18px', height: '18px',
      borderRadius: '50%', background: 'rgba(0,69,64,0.85)', border: '2px solid #fff',
      boxShadow: '0 2px 6px rgba(0,0,0,.25)', zIndex: 2147483647, pointerEvents: 'none',
      transform: 'translate(-50%,-50%)', transition: 'width .12s, height .12s',
    });
    document.documentElement.appendChild(c);
    addEventListener('mousemove', e => { c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px'; }, true);
    addEventListener('mousedown', () => { c.style.width = '30px'; c.style.height = '30px'; }, true);
    addEventListener('mouseup', () => { c.style.width = '18px'; c.style.height = '18px'; }, true);
  };
  if (document.readyState === 'loading') addEventListener('DOMContentLoaded', install); else install();
})();`;

async function openRecorder(page, width, height) {
  const browser = page.context().browser();
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    ignoreHTTPSErrors: true,
    recordVideo: { dir: OUT, size: { width, height } },
  });
  await ctx.addCookies([{ name: 'sessionid', value: SESSION, domain: '.opus-dev.ngrok.app', path: '/', secure: true, sameSite: 'None' }]);
  await ctx.addInitScript(CURSOR);
  const p = await ctx.newPage();
  const t0 = Date.now();
  return { ctx, p, t: () => (Date.now() - t0) / 1000 };
}

async function glide(p, locator, opts = {}) {
  const box = await locator.boundingBox();
  const x = box.x + box.width / 2, y = box.y + box.height / 2;
  await p.mouse.move(x, y, { steps: opts.steps ?? 25 });
  await p.waitForTimeout(opts.pause ?? 350);
  if (opts.click !== false) await p.mouse.click(x, y);
}

async function smoothScroll(p, dy, ms = 1200) {
  const steps = Math.max(1, Math.round(ms / 16));
  for (let i = 0; i < steps; i++) { await p.mouse.wheel(0, dy / steps); await p.waitForTimeout(16); }
}

async function finish(ctx, p, name, marks) {
  const video = p.video();
  await ctx.close();
  const path = await video.path();
  return { name, path, marks };
}
