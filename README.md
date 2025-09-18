# Drillbotics® Guidelines (Docs-as-Code) — **uv** Workflow

This repo hosts the official, versioned Drillbotics guidelines using **MkDocs + Material** and **mike**. It deploys to **GitHub Pages** and is easy to maintain via Markdown and pull requests.

This README uses **[uv](https://github.com/astral-sh/uv)** for fast Python envs. (pip/venv also works — see the bottom.)

---

## Quick start (with **uv**)

### 0) Install uv

- macOS: `brew install uv`
- Linux/macOS: `curl -LsSf https://astral.sh/uv/install.sh | sh`

### 1) Ensure Python

We target **Python 3.13** (same as CI):

```bash
uv python install 3.13
```

### 2) Create env and install deps

```bash
uv venv .venv
source .venv/bin/activate      # optional; uv can run without activation
uv pip install -r requirements.txt
```

### 3) Preview locally

```bash
uv run mkdocs serve
```

Need the mike version switcher? Fetch the `gh-pages` branch and run `uv run mike serve --dev-addr 127.0.0.1:8000` (no deploy step required).

`make serve` runs the same MkDocs dev server.

Open <http://127.0.0.1:8000>

### 4) Build & check locally

```bash
uv run mkdocs build --strict
```

Link checking runs via `mkdocs-htmlproofer-plugin` during build. External links have a short timeout and a couple of retries.

### 5) Initialize versioned docs (example: 2024 first release)

```bash
uv run mike deploy 2024
uv run mike alias 2024 latest
uv run mike set-default latest
```

### 6) Create GitHub repo and push

```bash
git init
git add .
git commit -m "seed: versioned Drillbotics guidelines (2024)"
git branch -M main
git remote add origin https://github.com/<org-or-user>/drillbotics-guidelines.git
git push -u origin main
```

### 7) Enable GitHub Pages

**Settings → Pages**: Source = *Deploy from a branch*, Branch = `gh-pages` (created by `mike deploy`).

If using a custom domain, set it in Pages settings and add a `CNAME` file on the `gh-pages` branch (e.g., commit a `CNAME` file once after the first deploy).

---

## Site organization

- **Competition** — overview, timeline, common rules, and safety.
- **Tracks** — Group A (Virtual) and Group B (Physical), each with specs, deliverables, judging.
- **Resources** — FAQ, downloads (PDFs), and branding assets.
- **Archive (2024)** — original 2024 pages preserved.
- **Changelog** — human-readable release notes (Git provides line-level diffs).

> The header shows a **version switcher** (powered by mike).

### Section index pages

- Each major section has an index page with grid cards for key entry points:
  - `docs/competition/index.md`
  - `docs/tracks/index.md`
  - Home (`docs/index.md`) also uses grids and content tabs.

### Tags

- Tags are enabled site‑wide; see `docs/tags.md`. Add `tags:` in page front matter (e.g., `deliverables`, `safety`, `timeline`, `faq`).

---

## Daily editing

- Edit Markdown in `docs/`.
- Commit and push to `main`.
- **CI (optional)**: add a workflow step to deploy `latest` on push, or deploy tagged versions manually:

  ```bash
  uv run mike deploy 2025 && uv run mike alias 2025 latest
  ```

### Cut a new version (summary)

```bash
uv run mike deploy 2025
uv run mike alias 2025 latest
uv run mike set-default latest
```

### CI & Deployment

- GitHub Actions builds on pushes and PRs with `--strict` and link checking.
- On pushes to `main`, CI deploys a `dev` preview version using `mike`.
- You can add a release workflow or run `mike` manually for tagged versions.

---

## Authors

Developed by Enrique Z. [@e-zl](https://github.com/e-zl). For questions and support, reach out to Drillbotics committee: [competition@Drillbotics.com](mailto:competition@Drillbotics.com)
