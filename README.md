# PeakPoint Central Nassau — Privileging Requirements Guide

Static web guide for clinical privileging documentation at PeakPoint Central Nassau Surgery Center.

## What’s included

| Path | Contents |
|------|----------|
| `index.html` | Interactive privileging guide |
| `assets/logo.png` | Brand logo |
| `dops/` | Final Delineation of Privileges PDFs |
| `case-logs/` | Case-log Excel templates |
| `forms/` | Annual Health Assessment & Physical Examination forms |

## Provider flow

1. **Surgeon** → choose specialty (includes General Surgery, GI, Gynecology, ENT, Ortho, Ophthalmology, Plastic, Podiatry, Urology, Pain Medicine)
2. **Physician Assistant** → no specialty step; goes straight to credentialing questions and PA privilege blocks
3. **Anesthesia Provider** → choose **Physician (MD or DO)** or **CRNA** (not a surgical specialty list)

DOP forms open as linked PDFs from `dops/` (not embedded base64). Case-log templates link from `case-logs/` when available.

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
