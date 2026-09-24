-- Move ~92% of overdue incomplete module instances 5-45 days into the future so
-- overviews read as a healthy org; clear their past_due status. Idempotent-ish
-- (re-running only touches whatever is still overdue).
begin;
create temp table moved on commit drop as
select id from drill_progress_moduleinstance
where rls_tenant_org_id = 13969 and completed_at is null and due_date < current_date
  and abs(hashtext(id::text)) % 100 >= 8;
update drill_progress_moduleinstance mi
set due_date = current_date + (5 + abs(hashtext(mi.id::text)) % 41),
    _status = 'incomplete'
where mi.id in (select id from moved);
update drill_progress_assignment a
set _status = 'incomplete'
where a.current_module_instance_id in (select id from moved) and a._status = 'past_due';
update drill_content_libraryitem set due_date = current_date + 38
where org_id = 13969 and archived_at is null and due_date < current_date;
commit;
