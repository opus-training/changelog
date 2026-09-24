# Adds Excellent/Good/Fair/Needs improvement thresholds to the Facility Walkthrough
# Audit and backfills grades onto already-completed results. Idempotent.
from decimal import Decimal

from django.db import transaction

from base.context_vars import set_tenant_org_id_context_var
from drill_content.controllers.forms.completion.audit_form_completion import AuditFormCompletionController
from drill_content.models.content.library import LibraryItem
from drill_content.models.content.skills import ScoringThreshold
from drill_progress.models.assignment.skill_assignment import SkillInstance
from drill_progress.models.skill_instance_version import SkillInstanceSectionScore

BANDS = [
    ("Needs improvement", "RED", "0", "69.9"),
    ("Fair", "PURPLE", "70", "79.9"),
    ("Good", "BLUE", "80", "89.9"),
    ("Excellent", "GREEN", "90", "100"),
]

with set_tenant_org_id_context_var(13969), transaction.atomic():
    li = LibraryItem.objects.get(org_id=13969, _type="AUDIT", archived_at__isnull=True)
    sv = li.skill.published_version
    for title, color, start, end in BANDS:
        ScoringThreshold.objects.update_or_create(
            skill_version=sv, title=title,
            defaults={"color": color, "start_percentage": Decimal(start), "end_percentage": Decimal(end)},
        )
    thresholds = list(sv.scoring_thresholds.all())
    graded = 0
    for si in SkillInstance.objects.filter(skill=li.skill, points_possible__gt=0).select_related("published_version"):
        match = AuditFormCompletionController.match_scoring_threshold(thresholds, si.points_scored, si.points_possible)
        si.scoring_threshold = match
        si.save(update_fields=["scoring_threshold"])
        if si.published_version:
            si.published_version.scoring_threshold = match
            si.published_version.save(update_fields=["scoring_threshold"])
        graded += 1
    for sc in SkillInstanceSectionScore.objects.filter(skill_instance_version__skill_instance__skill=li.skill):
        sc.scoring_threshold = AuditFormCompletionController.match_scoring_threshold(thresholds, sc.points_scored, sc.points_possible)
        sc.save(update_fields=["scoring_threshold"])
    print("graded", graded)
