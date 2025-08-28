Contributing to Drillbotics® Guidelines
======================================

Thanks for helping improve the guidelines! This repo is a MkDocs + Material site with versioning via `mike`. Please follow the conventions below.

Branching & commits
-------------------

- Create topic branches from `main` for changes.
- Use clear, conventional commit messages (e.g., `docs: clarify Group B safety notes`).
- Open a Pull Request with a concise description and screenshots if UI changes are visible.

Local setup
-----------

Option A: fast path with `uv` (recommended)

- Install uv (see README)
- `uv venv .venv && source .venv/bin/activate`
- `uv pip install -r requirements.txt`
- `uv run mkdocs serve` and open <http://127.0.0.1:8000>

Option B: pip/venv

- `python3 -m venv .venv && source .venv/bin/activate`
- `pip install -r requirements.txt`
- `mkdocs serve`

Content authoring
-----------------

- Location: all content lives under `docs/`.
- Sections: prefer section index pages (`index.md` inside a folder) with grid cards that link to key pages.
- Tabs: when content differs between Group A vs Group B, use content tabs instead of duplicating entire pages:

  ```markdown
  === "Group A (Virtual)"
  - Item A1
  === "Group B (Physical)"
  - Item B1
  ```

- Admonitions: use `!!! info|warning|note` for rules/safety/CTAs.
- Buttons: `[...,](path){ .md-button .md-button--primary }` for downloads/important links.
- Tags: add `tags:` to front matter (e.g., `deliverables`, `safety`, `timeline`, `faq`) so pages appear on the Tags index.
- Images: use standard Markdown; images will open in a lightbox via `mkdocs-glightbox`.

Style
-----

- Keep titles clear and concise; one `#` H1 per page.
- Use sentence case in headings and buttons.
- Avoid deep nesting; prefer short sections with descriptive links.

Quality gates (CI)
------------------

- CI builds with `mkdocs build --strict` and checks links via `mkdocs-htmlproofer-plugin`.
- Locally, you can run the same: `mkdocs build --strict`.

Versioning with mike
--------------------

- Create a new version: `mike deploy 2025`
- Make it the default: `mike alias 2025 latest && mike set-default latest`
- Push from CI or locally with `--push` (CI uses `dev` for previews on `main`).

Code of Conduct
---------------

Be respectful, constructive, and inclusive. The maintainers reserve the right to moderate contributions that don’t meet our standards.
