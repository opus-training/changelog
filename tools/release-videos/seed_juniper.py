# Rebrands the attached "Ben's Opus Demo" snapshot (org 13969) as the fictional
# "Juniper Kitchen" for release-page product videos. Idempotent; replay with:
#   cd /app/scadmin && python manage.py shell < /app/tmp/release-redesign/seed_juniper.py
import random

from django.db import transaction
from django.db.models import Q

from base.context_vars import set_tenant_org_id_context_var
from base.utils.datetimes import now
from drill_content.models.content.base import TranslationSet
from drill_content.models.content.library import LibraryItem
from drill_content.models.content.modules import ModuleContentMembership
from identity.controllers.user_archive_library_item import archive_library_item
from identity.models.org import Group, Org, User

ORG_ID = 13969
ORG_NAME = "Juniper Kitchen"

GROUP_RENAMES = {
    "Vasa Littleton": "Larimer Square",
    "Vasa Thompson": "Pearl Street",
    "New Club Opening Staging": "Union Station (Opening Soon)",
    "Madison Square Garden": "Hudson Yards",
    "Mets Citi Field": "Harbor Point",
    "Arapahoe - NCO": "Host",
    "Layton - NCO": "Bartender",
    "Editor - QA": "Trainer",
    "Viewer - QA": "Shift Supervisor",
}

# Modules to keep, keyed by current title -> new title.
KEEP_MODULES = {
    "New Store Opening | Big Chicken": "New Store Opening",
    "New Hire Onboarding": "New Hire Onboarding",
    "New Team Member Onboarding": "New Team Member Onboarding",
    "Running a Shift: Manager-In-Training": "Running a Shift: Manager-in-Training",
    "Shift Leader Training Plan | Five Guys Franchisee": "Shift Leader Training Plan",
    "Back-of-House Refresher | Taim": "Back-of-House Refresher",
    "M-LIVE": "Refunds & Payments",
    "Seasonal Menu Rollout | Swingers Crazy Golf": "Fall Cocktail Menu Rollout",
    "Limited Time Offering | Salt & Straw": "Fall Limited Time Offering",
    "New Process- Updated Pastry Display | Call Your Mother Deli": "Updated Pastry Display",
    "Guest Service Expert Recertification | Smashburger": "Guest Service Recertification",
    "New Hire Orientation- Week 1 | Swingers Crazy Golf": "New Hire Orientation: Week 1",
    "Training Tracker | Clutch Coffee": "Barista Training Tracker",
}

CHILD_RENAMES = {
    "Welcome To Big Chicken  Knowledge Check": "Welcome Knowledge Check",
    "BOK Hospitality": "Hospitality Basics",
    "Thawing Dunks": "Thawing Chicken Bites",
    "Breading & Frying Dunks": "Breading & Frying Chicken Bites",
    "All Things Chicken WINGS!": "All Things Chicken Wings",
    "The Safety 2 for Ladder Safety": "Ladder Safety Basics",
    "Welcome To Newk's": "Welcome to Juniper Kitchen",
    "Steps to Providing the Newk's Experience": "Steps to the Juniper Experience",
    "Be a P.A.R.T.N.E.R When Solving Guest Issues": "Solving Guest Issues",
    "taïm Falafel Overview": "Menu Overview",
    "Berries Berries Berries LTO": "Harvest Berry LTO",
    "Recertification - GSE Quiz": "Recertification Quiz",
}

# Standalone items (not in any kept module) worth keeping.
KEEP_STANDALONE = {
    "Allergen Chart",
    "Basic Food Safety Chapter 5 Video",
    "Cash Out Policy for Managers on Duty",
    "Chicken Burger",
    "Chicken Burger - Prep",
    "Chicken Parm Build Card",
    "Clock in Policy",
    "Cocktail Recipe Guide",
    "Cocktail Recipe Guide Shooters",
    "Conducting A Pre-shift Worksheet",
    "Credit Card Handling Guide for Cashiers",
    "Deep Fryer Cleaning Guide",
    "Dinner Menu Template",
    "Dress Code Policy",
    "Exhaust Hood Cleaning Guide",
    "FOH Manager Job Description",
    "FOH Manager Promotion",
    "FOH Manager Training Guide",
    "FOH Safety Tips.mp4",
    "Ground Chicken Burger Recipe.pdf",
    "Hand Washing Video",
    "How to Issue a Refund Using ToastTab Payments By Item",
    "How to Issue a Refund for a Tip on ToastTab Payments",
    "Martini Recipe",
    "Memo- Chemical Cleaning Process Update",
    "Menu Template for Managers",
    "New Menu Item Builds Guide for Managers",
    "Our Mission",
    "Pouring & Serving Size Standards",
    "Refunding a Check on Toast Tab Without a Receipt - Entire Check",
    "Restaurant Manager",
    "Restaurant Trainer",
    "Roast Beef Build Card",
    "Setting the Table Standards",
    "Specialty Cocktails Recipes",
    "Company Standards & Code of Conduct",
    "Employee Handbook Quick Reference",
    "Beer & Cider Reference Guide for Bartenders",
    "Beers On Tap",
    "Daily Closing Checklist",
    "General Manager Opening Checklist",
    "Facility Walkthrough Audit",
}

KEEP_FOLDERS = {"LTOs", "Manager Training", "New Hire Training", "Point of Sale", "Policies & SOPs"}

FIRST = ["Maya", "Jordan", "Priya", "Marcus", "Elena", "Theo", "Aisha", "Daniel", "Sofia", "Ravi",
         "Hannah", "Luis", "Grace", "Omar", "Chloe", "Nate", "Ingrid", "Caleb", "Rosa", "Kenji"]
LAST = ["Chen", "Alvarez", "Patel", "Brooks", "Rossi", "Nakamura", "Okafor", "Bennett", "Lindqvist",
        "Garcia", "Hughes", "Moreau", "Kim", "Duarte", "Fischer", "Reyes", "Walsh", "Singh", "Park", "Novak"]


def name_of(li):
    return li.name.en if li.name_id else ""


def children_of(module_li):
    mod = module_li.module
    version_id = mod.published_version_id or mod.draft_version_id
    ids = set()
    for m in ModuleContentMembership.objects.filter(module_version_id=version_id, deleted_at__isnull=True):
        q = Q()
        if m.course_id:
            q = Q(course_id=m.course_id)
        elif m.training_resource_id:
            q = Q(training_resource_id=m.training_resource_id)
        elif m.skill_id:
            q = Q(skill_id=m.skill_id)
        else:
            continue
        ids.update(LibraryItem.objects.filter(q).values_list("id", flat=True))
    return ids


with set_tenant_org_id_context_var(ORG_ID), transaction.atomic():
    org = Org.objects.get(id=ORG_ID)
    org.name = ORG_NAME
    org.save(update_fields=["name"])

    for old, new in GROUP_RENAMES.items():
        Group.objects.filter(org_id=ORG_ID, name=old).update(name=new)

    rng = random.Random(7)
    staff = User.objects.filter(org_id=ORG_ID, email__iendswith="@opus.so").select_related("person").order_by("id")
    used = set()
    for u in staff:
        while True:
            pair = (rng.choice(FIRST), rng.choice(LAST))
            if pair not in used:
                used.add(pair)
                break
        u.person.first_name, u.person.last_name = pair
        u.person.save(update_fields=["first_name", "last_name"])

    archiver = User.objects.filter(org_id=ORG_ID, _user_type="ADMIN", deactivated_at__isnull=True).order_by("id").first()

    live = LibraryItem.objects.filter(org_id=ORG_ID, archived_at__isnull=True).select_related("name", "module")
    keep_ids = set()
    for li in live.filter(_type="MODULE"):
        new = KEEP_MODULES.get(name_of(li))
        if new is None and name_of(li) in KEEP_MODULES.values():
            new = name_of(li)
        if new is not None:
            keep_ids.add(li.id)
            keep_ids |= children_of(li)
            if li.name.en != new:
                li.name.en = new
                li.name.save(update_fields=["en"])

    for li in live.exclude(id__in=keep_ids):
        n = name_of(li)
        if n in KEEP_STANDALONE or (li._type == "FOLDER" and n in KEEP_FOLDERS):
            keep_ids.add(li.id)

    for li in live.filter(id__in=keep_ids):
        new = CHILD_RENAMES.get(name_of(li))
        if new:
            li.name.en = new
            li.name.save(update_fields=["en"])

    to_archive = list(live.exclude(id__in=keep_ids).values_list("id", flat=True))
    LibraryItem.objects.filter(id__in=to_archive).update(archived_at=now(), archived_by=archiver)
    for lid in to_archive:
        try:
            archive_library_item(archiver.id, lid)
        except Exception as e:  # noqa: BLE001
            print("archive cleanup failed", lid, e)
    print(f"kept={len(keep_ids)} archived={len(to_archive)} staff_renamed={staff.count()}")

# Path Builder: chain modules into an onboarding path (idempotent).
from drill_content.models.on_completion_assignment_rules import OnCompletionAssignmentRule

PATH_RULES = [
    ("New Hire Orientation: Week 1", "New Hire Onboarding", 0),
    ("New Hire Onboarding", "Back-of-House Refresher", 7),
    ("Back-of-House Refresher", "Shift Leader Training Plan", 14),
    ("Shift Leader Training Plan", "Running a Shift: Manager-in-Training", 0),
    ("New Hire Onboarding", "Guest Service Recertification", 30),
    ("New Team Member Onboarding", "Refunds & Payments", 0),
]

with set_tenant_org_id_context_var(ORG_ID), transaction.atomic():
    modules = {
        li.name.en: li
        for li in LibraryItem.objects.filter(org_id=ORG_ID, _type="MODULE", archived_at__isnull=True).select_related("name")
    }
    creator = User.objects.filter(org_id=ORG_ID, _user_type="ADMIN", deactivated_at__isnull=True).order_by("id").first()
    made = 0
    for src, dst, days in PATH_RULES:
        _, created = OnCompletionAssignmentRule.objects.get_or_create(
            library_item=modules[src], next_library_item=modules[dst],
            defaults={"created_by": creator, "unlock_days": days},
        )
        made += created
    print(f"path rules created={made}")

# Recording admin: a fictional face for the account that drives the videos.
with set_tenant_org_id_context_var(ORG_ID), transaction.atomic():
    maya = User.objects.select_related("person").get(id=1639256)
    maya.email = "maya@juniperkitchen.example"
    maya.job_title = "Director of Training"
    maya.save(update_fields=["email", "job_title"])
    maya.person.first_name, maya.person.last_name = "Maya", "Chen"
    maya.person.save(update_fields=["first_name", "last_name"])
    print("recording admin:", maya.email)

# Cover images: many are customer logos/photos. Swap every image cover on a kept
# item for an emoji + gradient chosen from the title.
from drill_content.models.content.base import CoverImage

EMOJI_RULES = [
    (("hand",), "🧼"), (("fire",), "🧯"), (("allergen",), "🥜"),
    (("temperature", "cooling", "thaw", "foodborne", "food safety", "cross contamination"), "🌡️"),
    (("clean", "sanit", "chemical", "warewash", "janitor"), "🧽"),
    (("safety", "hazard", "ladder"), "🦺"),
    (("chicken", "wing", "bites"), "🍗"), (("sandwich", "burger"), "🥪"),
    (("cocktail", "halloween", "martini"), "🍸"), (("beer",), "🍺"),
    (("refund", "payment", "pos", "register", "till"), "💳"),
    (("welcome", "onboarding", "orientation", "new hire"), "👋"),
    (("guest", "hospitality", "service", "greeting"), "🤝"),
    (("shift", "manager", "leader", "plan"), "🧑‍🍳"),
    (("pastry",), "🥐"), (("berry", "lto", "limited", "seasonal", "fall"), "🍂"),
    (("menu", "build"), "📋"), (("uniform", "dress"), "👕"),
    (("mission", "vision", "values", "beliefs", "experience", "positions"), "⭐"),
    (("receiving", "storing", "product"), "📦"),
    (("knowledge", "quiz", "check", "exam", "day "), "✅"),
    (("store opening", "opening"), "🏪"), (("pay", "schedul", "systems"), "🗓️"),
    (("barista", "coffee", "espresso", "tea"), "☕"), (("policies", "policy", "sop"), "📘"),
    (("point of sale",), "💳"), (("training",), "🎓"),
]
GRADIENTS = [f"GRADIENT_{i}" for i in range(1, 11)]


def emoji_for(title):
    t = title.lower()
    for keys, emoji in EMOJI_RULES:
        if any(k in t for k in keys):
            return emoji
    return "📘"


with set_tenant_org_id_context_var(ORG_ID), transaction.atomic():
    items = (
        LibraryItem.objects.filter(org_id=ORG_ID, archived_at__isnull=True, cover_image__image_urls__isnull=False)
        .select_related("name", "cover_image")
        .order_by("id")
    )
    swapped = 0
    for i, li in enumerate(items):
        c = li.cover_image
        c.image_urls = None
        c.emoji_icon = emoji_for(name_of(li))
        c.background = GRADIENTS[i % len(GRADIENTS)]
        c.save(update_fields=["image_urls", "emoji_icon", "background"])
        swapped += 1
    print(f"covers swapped={swapped}")

# Recording admin's phone shows on profile pages: use a reserved 555 number.
with set_tenant_org_id_context_var(ORG_ID), transaction.atomic():
    maya = User.objects.select_related("person").get(id=1639256)
    maya.person.phone_number = "+12025550142"
    maya.person.save(update_fields=["phone_number"])
