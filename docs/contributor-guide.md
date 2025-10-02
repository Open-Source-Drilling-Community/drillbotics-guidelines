# Contributor Guide

This project uses MkDocs + Material with versioning via `mike`. Keep changes small, reviewable, and aligned with the style in this repo.

## Local setup (uv only)

```bash
brew install uv  # or see uv install script
uv venv .venv && source .venv/bin/activate
uv pip install -r requirements.txt
uv run mkdocs serve
```

Preview versioned docs locally (optional):

```bash
git fetch origin gh-pages:gh-pages
uv run mike serve --dev-addr 127.0.0.1:8000
```

## Authoring conventions

- Location: all content lives under `docs/`.
- Section index pages: prefer an `index.md` per section with cards linking to key pages.
- Admonitions: use `!!! info|warning|note` for rules/safety/CTAs.
- Buttons: `[...,](path){ .md-button .md-button--primary }` for important links.
- Tags: add `tags:` to front matter (e.g., `deliverables`, `safety`, `timeline`, `faq`).
- Filenames: lowercase, hyphenated. Use relative links.
- Anchors: use stable anchors for externally linked sections (e.g., `### Safety case {#gb-safety-case}`).

## Style

- Sentence case for headings and buttons; one `#` H1 per page.
- Prefer tables for specs; always include units and examples.
- Keep hierarchy shallow; split long pages instead of deep nesting.

## Versioning with mike

Cut a new year (example: 2025):

```bash
uv run mike deploy 2025
uv run mike alias 2025 latest
uv run mike set-default latest
```

Use the header version switcher to browse past releases (e.g., 2024). Archives are immutable; use redirects if reorganizing.

## Quality gates

- Build must pass locally: `uv run mkdocs build --strict`.
- Links work; no hard-coded absolute URLs.
- Units/constraints are explicit; `docs/changelog.md` updated.
- No breaking changes to `docs/2024/*`.

## PR workflow

- Create a branch from `main` and open a PR with a concise description and screenshots if UI changed.
- See `.github/PULL_REQUEST_TEMPLATE.md` for the review checklist.

## UI helpers

- Announcement banner text: edit `docs/_assets/scripts/announcement.js` (`CONFIG` block).
- Mermaid theme syncing and copy‑Markdown button are loaded from `docs/_assets/scripts/*`.
