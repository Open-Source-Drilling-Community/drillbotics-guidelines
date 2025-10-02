---
tags:
  - competition
  - rules
  - scoring
status: updated
---

# Rules & Scoring

This section summarizes the 2025.1 rules and how teams are scored. Track‑specific examples and clarifications live on the Judging pages.

## General Rules

- Eligibility and team composition follow prior years; cite all external sources and code. Publishable artifacts are encouraged (see Resources → Downloads and OSDC references).
- Submissions **MUST** include required datasets and documentation. Use the fixed‑schema `drilling_timeseries.csv` (≥1 Hz; D‑WIS names) and a static LAS 2.0 log where suggested.
- Interoperability checks are **REQUIRED** prior to final tests. For **Mode Physical (P)** these are read‑only/shadow (**no PLC writes**). For **Mode Virtual (V)**, verify OpenLab API connectivity.
- Safety and compliance are **MANDATORY**. Judges grade both the plan and implementation.
- Outcomes‑first and algorithm‑agnostic: judges score outcomes and evidence; no preference is given to specific algorithms or model families (e.g., PID vs MPC vs RL; CNN vs rules vs LLM), provided constraints and safety are met.

!!! warning "Mandatory Rule"
    - Teams **MUST** pass interoperability checks before Phase II testing.
    - Mode P interop is read‑only/shadow; teams **MUST NOT** write to PLCs/actuators during checks.
    - Safety compliance **SHALL** be demonstrated in both documentation and implementation.

### Innovation Uplift (Applies in All Categories)

Judges may award the top of a category’s band when a documented novelty (hardware, sensing, control, HF/UX, data tooling, compression/efficiency) materially improves outcomes, safety, or clarity. This does not exceed the category maximum; it recognizes innovation anywhere, not only via bonuses. Evidence should include:

- Problem framing and design rationale
- Tests/ablations or comparative baselines showing measurable impact
- Safety compliance and operational constraints
- Reusability (artifacts, methods, or documentation)

## Scoring Summary (2025.1)

=== "Mode Virtual (V) — 100 pts (+AI)"

| Category | Points |
| --- | ---: |
| Trajectory / Test / Target Accuracy | 25 |
| Drilling Efficiency (Time to TD / ROP) | 25 |
| Well‑Control & Dysfunction Handling | 15 |
| Safety & Compliance | 10 |
| Human Factors & UI Clarity | 10 |
| Automation Quality & Innovation | 15 |
| Edge‑AI Bonus (Optional) | +10 max |

=== "Mode Physical (P) — 100 pts (+AI)"

| Category | Points |
| --- | ---: |
| Trajectory / Path Quality / Tortuosity | 20 |
| Drilling Efficiency (Time to TD / ROP) | 20 |
| Safety & Procedure Compliance (E‑Stop, Guards, Limits) | 20 |
| Data Quality (CSV Schema + LAS, Calibration, ≥1 Hz, Semantic Headers) | 10 |
| Human Factors & UI Clarity | 10 |
| Design & Automation Quality | 20 |
| Edge‑AI Bonus (Optional) | +10 max |

!!! warning "Mandatory Rule"
    Interop demo is a Pass/Fail gate before Phase II. Teams **MUST** pass interop to proceed.

## Edge‑AI Bonus (Optional)

- Scored on correctness vs ground‑truth windows, grounding to CSV, latency/footprint, clarity/safety, and innovation. AI score is scaled to a maximum of **+10** points.
- Default cap is **10%** of total; committee may raise to **≤15%**.

--8<-- "_includes/edge-ai.md"

See track rubrics for examples and clarifications:

- Mode Virtual (V) — Judging: ../tracks/group-a/judging.md
- Mode Physical (P) — Judging: ../tracks/group-b/judging.md
