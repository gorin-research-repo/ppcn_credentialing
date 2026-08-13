/* Change log for the PeakPoint Central Nassau privileging guide.
   Rendered by admin.html. Nothing else reads this file.

   ── When to add an entry ────────────────────────────────────────────────────
   Add one every time a document on the site changes: a new form is posted, an
   existing form is replaced with a newer version, a version date is bumped, a
   file is renamed or removed, or the guide's requirement wording changes. Site
   appearance and behaviour changes are worth logging too, so the log doubles as
   the history of the tool itself.

   ── How to add an entry ─────────────────────────────────────────────────────
   Put the newest entry at the top. The renderer sorts by `at`, so being out of
   order is harmless, but keeping it chronological makes the file easier to read.

     at      Required. ISO 8601 with a UTC offset, e.g. "2026-08-13T09:30:00-04:00".
             Use -04:00 for Eastern Daylight Time (Mar–Nov) and -05:00 for
             Eastern Standard Time. Displayed in Eastern time on the admin page.
     by      Who made the change.
     ref     Pull request, branch, or ticket the change arrived on. Optional.
     kind    "document" when a form/template changed, "site" for everything else.
     scope   Who it affects: a specialty, a provider type, "All providers", or
             "Site-wide".
     summary One line. This is the headline shown in the log.
     detail  The specifics: what changed, and anything a future reader would
             need in order to understand why.
     docs    Files touched, each as {path, action, from, to}. `action` is one of
             "added", "replaced", "renamed", "relinked", or "removed". `from`
             and `to` are version dates as printed on the document; use null
             where one does not apply (a first posting has no `from`).
             Omit `docs` entirely for changes that touch no documents.
*/

const CHANGELOG = [
  {
    at:"2026-08-13T07:05:00-04:00",
    by:"Cursor Agent",
    ref:"branch cursor/add-admin-inventory-and-changelog-aee7",
    kind:"site",
    scope:"Site-wide",
    summary:"Added this admin page: document inventory, credentialing checklist, and change log.",
    detail:"New admin.html, linked from the footer of the guide, listing every document the site "+
      "serves grouped by provider type and specialty, with download links and version dates. It "+
      "also shows the basic credentialing checklist and this change log. To keep the admin page "+
      "and the guide from ever disagreeing about which file is current, the shared document "+
      "registry and privileging data moved out of index.html into site-data.js, which both pages "+
      "load. No requirement wording, version date, or filename changed in that move. The admin "+
      "page cross-checks the date in each DOP filename against the version recorded in the code "+
      "and flags any mismatch, so a form replaced without a version bump shows up as a warning."
  },
  {
    at:"2026-08-13T06:44:05-04:00",
    by:"Cursor Agent",
    ref:"branch cursor/point-pa-case-log-template-aee7",
    kind:"document",
    scope:"Physician Assistant",
    summary:"Physician Assistant case-log template is now linked in the guide.",
    detail:"The PA case-log template was the last one missing. The guide had a placeholder for it "+
      "(the PA entry in the case-log registry was empty), so the requirements page printed \"Case "+
      "Log\" as plain text with nothing to download, in both the basic credentialing checklist and "+
      "the privilege-specific requirements. Pointing that entry at the uploaded file turned both "+
      "into working download links. The file was also renamed to drop the \" - Copy\" suffix left "+
      "over from the upload, since the filename is visible in the download URL and every other "+
      "template follows the SPECIALTY_CASE_LOG_TEMPLATE_Month_D_YYYY pattern.",
    docs:[
      {path:"case-logs/PA_CASE_LOG_TEMPLATE_August_13_2026.xlsx", action:"relinked",
       from:null, to:"August 13, 2026"}
    ]
  },
  {
    at:"2026-08-13T06:42:01-04:00",
    by:"Gorin",
    ref:"commit 459da02",
    kind:"document",
    scope:"Physician Assistant",
    summary:"Physician Assistant case-log template uploaded to the repository.",
    detail:"First PA case-log template, added to case-logs/ as "+
      "\"PA_CASE_LOG_TEMPLATE_August_13_2026 - Copy.xlsx\". Uploading the file did not by itself "+
      "put it on the site: the guide links documents from a registry in the code, so the template "+
      "sat in the folder unreferenced until it was wired up two minutes later. Worth remembering "+
      "when posting future documents — the upload is only half the job.",
    docs:[
      {path:"case-logs/PA_CASE_LOG_TEMPLATE_August_13_2026 - Copy.xlsx", action:"added",
       from:null, to:"August 13, 2026"}
    ]
  },
  {
    at:"2026-08-07T11:21:49-04:00",
    by:"Gorin",
    ref:"PR #2",
    kind:"site",
    scope:"Site-wide",
    summary:"Tightened the white space above the footer.",
    detail:"The page content had 80px of bottom padding and the footer another 20px, which left an "+
      "obvious empty band above the attribution line. Reduced to 24px of content padding and 14px "+
      "of footer padding."
  },
  {
    at:"2026-08-07T11:10:47-04:00",
    by:"Cursor Agent",
    ref:"PR #1",
    kind:"site",
    scope:"Site-wide",
    summary:"Added the tool attribution footer.",
    detail:"New site-wide footer crediting @michael_gorin / @AugmentedMD, shown on every view of "+
      "the guide."
  },
  {
    at:"2026-08-07T08:13:36-04:00",
    by:"Gorin",
    kind:"site",
    scope:"Site-wide",
    summary:"Centered and enlarged the PeakPoint logo in the header.",
    detail:"The logo was left-aligned at 64px tall (46px on narrow screens). Centered it in the "+
      "header and raised it to 88px (64px on narrow screens)."
  },
  {
    at:"2026-08-07T08:00:47-04:00",
    by:"Gorin",
    kind:"document",
    scope:"All providers",
    summary:"Guide published with the initial set of 27 documents.",
    detail:"First publication of the privileging requirements guide, covering surgeons across ten "+
      "specialties, physician assistants, and anesthesia providers (physician and CRNA). Baseline "+
      "document set: 13 Delineation of Privileges forms with version dates from April 30 to "+
      "August 4, 2026; 12 case-log templates dated July 8, 2026 (every provider type except "+
      "physician assistant, whose template came later); and the two general forms, the Annual "+
      "Health Assessment and the Physical Examination Form, neither of which carries a printed "+
      "version date. Per-document versions are listed in the inventory above."
  }
];
