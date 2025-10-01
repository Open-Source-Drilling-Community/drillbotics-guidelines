---
tags:
  - competition
  - rules
  - scoring
---

# Rules & Scoring

This section summarizes the 2025.1 rules and how teams are scored. Track‑specific examples and clarifications live on the Judging pages.

## General Rules

- Eligibility and team composition follow prior years; cite all external sources and code. Publishable artifacts are encouraged (see Resources → Downloads and OSDC references).
- Submissions must include required datasets and documentation. Use the fixed‑schema `drilling_timeseries.csv` (≥1 Hz; D‑WIS names) and a static LAS 2.0 log where suggested.
- Interoperability checks are required prior to final tests. For Mode P these are read‑only/shadow (no PLC writes). For Mode V, verify OpenLab API connectivity.
- Safety and compliance are mandatory. Judges grade both the plan and implementation.
- Outcomes‑first and algorithm‑agnostic: judges score outcomes and evidence; no preference is given to specific algorithms or model families (e.g., PID vs MPC vs RL; CNN vs rules vs LLM), provided constraints and safety are met.

### Innovation Uplift (applies in all categories)

Judges may award the top of a category’s band when a documented novelty (hardware, sensing, control, HF/UX, data tooling, compression/efficiency) materially improves outcomes, safety, or clarity. This does not exceed the category maximum; it recognizes innovation anywhere, not only via bonuses. Evidence should include:

- Problem framing and design rationale
- Tests/ablations or comparative baselines showing measurable impact
- Safety compliance and operational constraints
- Reusability (artifacts, methods, or documentation)

## Scoring Summary (2025.1)

=== "Mode Virtual (V) — 100 pts (+AI)"

- Trajectory / test / target accuracy: 25
- Drilling efficiency (time to TD / ROP): 25
- Well‑control & dysfunction handling: 15
- Safety & compliance: 10
- Human Factors & UI clarity: 10
- Automation quality & innovation: 15
- Edge‑AI Bonus (optional): up to +10 (≤10% default; ≤15% committee max)

=== "Mode Physical (P) — 100 pts (+AI)"

- Trajectory / path quality / tortuosity: 20
- Drilling efficiency (time to TD / ROP): 20
- Safety & procedure compliance (E‑Stop, guards, limits): 20
- Data quality (CSV schema + LAS completeness; calibration; 1 Hz+; semantic headers): 10
- Human Factors & UI clarity: 10
- Design & automation quality: 20
- Interop demo: Pass/Fail gate before Phase II
- Edge‑AI Bonus (optional): up to +10 (≤10% default; ≤15% committee max)

## Edge‑AI Bonus (optional)

- Inference‑only, offline, JSON outputs (e.g., Explain‑This‑Event or Rig‑State Textualizer).
- Scored on correctness vs ground truth windows, grounding to CSV, latency/footprint, clarity/safety, and innovation. AI score is scaled to a maximum of +10 points.
- Default cap is 10% of total; committee may raise to ≤15%.
- Small‑model, edge‑deployable focus: teams may prototype with larger cloud‑hosted models during development, but final deliverables and performance are evaluated using locally run or on‑rig small models under limited inference hardware. Suggested caps align with committee guidance: ≤2 vCPU or ≤20 W GPU, ≤4–8 GB RAM (Non-llm) &  ≤8 vCPU or ≤900 W GPU, ≤16–64 GB RAM (LLM) ≤15 min total inference runtime; rig compute otherwise open. All AI runs must be offline during judging; no PLC/actuator writes.
- Custom task option: teams may propose a custom offline JSON task with objective ground truth and the same interface for pre‑approval (recommended deadline: 2026‑02‑01). Approved tasks use the same AI sub‑rubric and scale to +10.

See track rubrics for examples and clarifications:

- Mode Virtual (V) — Judging: ../tracks/group-a/judging.md
- Mode Physical (P) — Judging: ../tracks/group-b/judging.md
