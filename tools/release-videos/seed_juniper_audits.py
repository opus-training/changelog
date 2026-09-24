# Simulate completed Facility Walkthrough Audits across locations (demo-data helper).
from django.db import transaction

from base.context_vars import set_tenant_org_id_context_var
from base.utils.testing import ExecuteTasksSynchronously
from internal.demo_data.controllers import _simulate_audit_completion

with set_tenant_org_id_context_var(13969), transaction.atomic(), ExecuteTasksSynchronously():
    _simulate_audit_completion(13969)
print("audits simulated")
