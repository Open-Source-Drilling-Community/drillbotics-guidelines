# Agent.md — Drillbotics® Guidelines Repository  

**Purpose:** Brief about the goals, scope, structure, and guardrails of this documentation repo so changes remain accurate, versioned, and safe.

---

## 1) Mission & Key Objectives

**Mission:** Make the Drillbotics® competition rules **clear, current, and trustworthy**—with transparent history and easy maintenance.

**Key Objectives**

- **Single Source of Truth:** Canonical rules live in Markdown under `docs/` (not in PDFs).
- **Versioned Access:** Readers can switch between **latest** and prior releases (e.g., 2024) via the version switcher.
- **Transparent Change History:** Human-readable **Changelog** plus Git line-level diffs.
- **Low-Friction Maintenance:** Docs-as-code workflow (branches/PRs), uv-managed Python, auto deploys.
- **Track Consistency:** Parallel structure for **Group A (Virtual)** and **Group B (Physical)**, with clear rubrics and specs.
- **Safety & Reproducibility:** Emphasize units, constraints, and unambiguous procedures; archive pages are immutable.

“Success” = teams find current rules in seconds, can compare to 2024, and trust that content here is authoritative.

---

## 2) Audiences & Tone

- **Primary:** Current teams & advisors.
- **Secondary:** Organizers, judges, sponsors, and future teams browsing archives.
- **Tone:** Clear, neutral, rule-oriented. Prefer short paragraphs, tables for specs, and admonitions for warnings/notes.

---

## 3) Source of Truth & File Map

- **Authoritative content:** `docs/`
  - `docs/competition/` — overview, timeline, general rules, general safety
  - `docs/tracks/group-a/` — Virtual: overview, technical specs, deliverables, judging
  - `docs/tracks/group-b/` — Physical: overview, safety, hardware, autonomy, deliverables, judging
  - `docs/resources/` — FAQ, downloads, logos/branding
  - `docs/2024/` — archived 2024 pages (stable, preserved)
- **Assets:** `docs/_assets/` (images, PDFs, attachments). PDF copies are **references only**.
- **Site config:** `mkdocs.yml` (Material theme w/ mike integration)
- **Custom styles:** `docs/stylesheets/extra.css`

> **Rule:** New/updated rules must be written in Markdown. PDFs may be attached for reference, not as the canonical source.

---

## 4) Versioning Model (mike)

- First released year (e.g., 2024):

  ```bash
  uv run mike deploy 2024
  uv run mike alias 2024 latest
  uv run mike set-default latest
  ```

- New release (e.g., 2025):

  ```bash
  uv run mike deploy 2025
  uv run mike alias 2025 latest
  ```

**Principles**

- **Archive immutability:** Do not rewrite history in `docs/2024/`. If a factual correction is unavoidable, add a small note.
- **Latest = active competition year.** Draft work happens in branches/PRs until merged.

---

## 5) Toolchain & Local Dev

- Python **3.13** (uv-managed)
- `mkdocs-material`, `mike`, `mkdocs-git-revision-date-localized-plugin`
- Optional: `mkdocs-redirects`, `mkdocs-glightbox`

Local preview:

```bash
uv python install 3.13
uv venv .venv && source .venv/bin/activate
uv pip install -r requirements.txt
uv run mkdocs serve
```

---

## 6) CI/CD & Pages

- Hosted on **GitHub Pages**.
- On merges to `main`, CI may deploy the rolling **latest** (if workflow enabled).
- Yearly versions are published with the `mike deploy` commands above.

Suggested CI improvements (optional):

- Use `astral-sh/setup-uv` and run `uv pip install -r requirements.txt` then `uv run mkdocs build`.
- Add a link checker (e.g., `mkdocs-htmlproofer-plugin`) to catch broken links in PRs.
- Consider `mkdocs-redirects` to keep old URLs working after reorganizations.

---

## 7) Editing Conventions & Safety Rails

- Headings use **sentence case**; keep hierarchy shallow (`#`, `##`, `###`).
- Prefer **tables** for specs; always include **units** and example values.
- Use Material admonitions:
  - `!!! note` (context), `!!! tip` (how-to), `!!! warning` (safety), `!!! example` (worked example).
- Use **stable anchors** for externally linked sections, e.g. `### Safety case {#gb-safety-case}`.
- Filenames = lowercase, hyphenated; links are **relative** within `docs/`.
- Do not invent rules or dates; if something’s missing, add a TODO and propose via PR.
- Do not move/rename archived files without adding redirects.

---

## 8) Common Tasks (recipes)

**A. Add a new rule to Group B hardware**

1. Edit `docs/tracks/group-b/hardware.md` and update the relevant table.
2. Add an entry to `docs/changelog.md` (human-readable summary).
3. Open a PR: `docs(gb): clarify hardware spec — sensors`.

**B. Publish a new release (yearly)**

1. Merge approved changes into `main`.
2. From `main`:

   ```bash
   uv run mike deploy 2025
   uv run mike alias 2025 latest
   ```

3. Verify version switcher shows **2025** & **latest**.

**C. Import from Word/PDF (bootstrap)**

```bash
pandoc "input.docx" -o docs/tracks/group-a/technical-specs.md --wrap=none
# Then clean headings, tables, and links.
```

---

## 9) Quality Gate (PR Checklist)

- [ ] Content lives under the correct section in `docs/`.
- [ ] Units, constraints, and examples are explicit.
- [ ] Links/anchors work; no hard-coded absolute URLs.
- [ ] `docs/changelog.md` updated.
- [ ] `uv run mkdocs build --clean` passes locally.
- [ ] No changes to `docs/2024/*` that break archives (use redirects if needed).

---

## 10) Glossary (minimum set)

- **Group A (Virtual):** Simulation-based track (e.g., OpenLab), D-WIS semantics for signals/interfaces.
- **Group B (Physical):** Mini-rig hardware & autonomous operation under safety constraints.
- **D-WIS:** Drilling-Well Information Standard—semantic tags/interfaces for drilling signals.
- **Latest:** Active competition year (alias managed by mike).

---

## 11) Ownership

- Content owners: **Guidelines Committee** (CODEOWNERS route track pages to the right reviewers).
- Technical owners: **Site maintainers** (MkDocs/mike/CI).

**If you’re an AI assistant:** prefer small, reviewable diffs; modify tables in place; include a concise Changelog note in your PR description.
