"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";

export const PRIVACY_POLICY_URL = "https://www.opus.so/legal/privacy";

const STORAGE_KEY = "opus-cookie-consent";

type Choice = "allow" | "deny";

function readChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "allow" || value === "deny" ? value : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Private windows can refuse storage; the choice still applies to this visit.
  }
}

/**
 * Opt-in consent, matching the banner on opus.so: marketing tags (GTM) load
 * only after the visitor accepts. gtmId is null outside production deploys,
 * so previews show the banner but never load the tag.
 */
export function CookieConsent({ gtmId }: { gtmId: string | null }) {
  // undefined until mounted, so the server render and first client render match.
  const [choice, setChoice] = useState<Choice | null | undefined>(undefined);

  useEffect(() => {
    setChoice(readChoice());
  }, []);

  const decide = (next: Choice) => {
    saveChoice(next);
    setChoice(next);
  };

  return (
    <>
      {choice === "allow" && gtmId && <GoogleTagManager gtmId={gtmId} />}
      {choice === null && (
        <div className="cookie-banner" role="region" aria-label="Cookie consent">
          <p>
            By using this website, you agree to the storing of cookies on your
            device to enhance site navigation, analyze site usage, and assist in
            our marketing efforts. View our{" "}
            <a href={PRIVACY_POLICY_URL}>Privacy Policy</a> for more
            information.
          </p>
          <div className="cookie-banner-actions">
            <button
              type="button"
              className="btn-outline btn-small"
              onClick={() => decide("deny")}
            >
              Deny
            </button>
            <button
              type="button"
              className="btn-solid btn-small"
              onClick={() => decide("allow")}
            >
              Accept all
            </button>
          </div>
        </div>
      )}
    </>
  );
}
