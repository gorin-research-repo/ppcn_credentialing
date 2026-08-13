# PeakPoint Central Nassau — Privileging Requirements Guide

Static web guide for clinical privileging documentation at PeakPoint Central Nassau Surgery Center.

## What’s included

| Path | Contents |
|------|----------|
| `index.html` | Interactive privileging guide |
| `admin.html` | Document inventory, credentialing checklist, and change log |
| `site-data.js` | Shared registry: filenames, version dates, privilege requirements |
| `changelog.js` | Change log entries rendered by `admin.html` |
| `assets/logo.png` | Brand logo |
| `dops/` | Final Delineation of Privileges PDFs |
| `case-logs/` | Case-log Excel templates |
| `forms/` | Annual Health Assessment & Physical Examination forms |

Both pages read their document list from `site-data.js`, so a filename or version
date is recorded once and the guide and the admin inventory stay in agreement.

## Provider flow

1. **Surgeon** → choose specialty (includes General Surgery, GI, Gynecology, ENT, Ortho, Ophthalmology, Plastic, Podiatry, Urology, Pain Medicine)
2. **Physician Assistant** → no specialty step; goes straight to credentialing questions and PA privilege blocks
3. **Anesthesia Provider** → choose **Physician (MD or DO)** or **CRNA** (not a surgical specialty list)

DOP forms open as linked PDFs from `dops/` (not embedded base64). Case-log templates link from `case-logs/` when available.

## Posting a new or revised document

Dropping a file into `dops/`, `case-logs/`, or `forms/` does not publish it — the
guide links documents from the registry in `site-data.js`. All three steps are
required:

1. Add the file, keeping the version date in the filename (`Urology_May_6_2026_FINAL.pdf`).
2. Point the registry at it in `site-data.js`: `DOP_FORM` for a privileges form,
   `CASE_LOG` for a case-log template. For a privileges form, also update that
   specialty's `version` in `DATA` to the new date.
3. Add a `CHANGELOG` entry in `changelog.js` recording what changed and the
   version dates it moved between. The field reference is in that file's header
   comment.

Open `admin.html` afterwards to confirm the document appears with the correct
version date and no warnings. It flags any specialty missing a template, and any
privileges form whose filename date disagrees with the version recorded in
`DATA` — which is what a form replaced without a version bump looks like. Serve
the folder over HTTP (see below) and use **Verify every file downloads** to
confirm nothing is linked to a missing file.

## Preview locally

Open `index.html` in a browser, or serve the folder so relative links work cleanly:

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

Then open `http://localhost:8080`.

## Push to GitHub

```bash
cd "H:\DOP Revamp\privileging-guide"
git init
git add .
git commit -m "Add PeakPoint privileging requirements guide"
gh repo create peakpoint-privileging-guide --public --source=. --remote=origin --push
```

Or create an empty repo on GitHub, then:

```bash
git remote add origin https://github.com/<you>/<repo>.git
git branch -M main
git push -u origin main
```

**Note:** The repo is ~23 MB because of the DOP PDFs. GitHub’s soft limit is fine; use Git LFS only if you expect much larger assets later.

## Source materials

DOPs are copied from `H:\DOP Revamp\FINAL DOPs\`. Re-copy if forms are revised:

```powershell
Copy-Item "H:\DOP Revamp\FINAL DOPs\*.pdf" ".\dops\" -Force
Copy-Item "H:\DOP Revamp\Case Log Templates\*.xlsx" ".\case-logs\" -Force
```
