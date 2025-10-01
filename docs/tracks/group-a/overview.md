---
tags:
  - group-a
  - overview
---

# Mode Virtual (V) — Overview

Design, simulate, and control a virtual drilling system using standardized interfaces. Mode Virtual (V) emphasizes closed-loop control, data semantics, and clear reporting over hardware.

## Cases (2025.1)

=== "Case 1 — Kick Sentinel"

- Connect through D‑WIS to the OpenLab Drilling Simulator and implement detection/response for a simulated influx (kick).
- Focus on reliable signal handling, thresholds/logic for detection, appropriate automated actions, and clear operator feedback.
- Validate against provided test cases; document assumptions, limits, and performance.

=== "Case 2 — Adaptive Lithology Shift"

- Build a virtual drilling system model and controller that adapts to changing lithology to maximize ROP under constraints.
- Incorporate realistic constraints (e.g., slide/rotate modes, dogleg limits), virtual measurements with uncertainty, and automatic re-planning based on as-drilled surveys.
- Produce trajectory data (Minimum Curvature) and plan-vs-actual plots; log surveys and controller decisions for review.

=== "Case 3 — Stick-Slip Sprint"

- Reach TD with low torsional oscillations; demonstrate dysfunction detection/mitigation while meeting constraints.
- Emphasize robust control design and monitoring; present time-aligned evidence from logs and plots.

!!! tip "New team? Start here"
    Most first-time teams are successful by starting with the OpenLab Drilling Simulator and focusing on the control system and data handling, rather than building a simulator from scratch.

## Tooling & Interfaces

- D‑WIS semantics: standardized names/metadata for setpoints and measurements. See the vocabulary index at https://d-wis.org/vocabulary-index/.
- OpenLab simulator: the plant used for Mode Virtual (V) scenarios. See https://openlab.app/.
- Connectivity and discovery, expected signals, and example flows are described in Technical Specs.

[:octicons-gear-24: Technical Specs](technical-specs.md){ .md-button }

!!! note "Edge‑deployable models"
    --8<-- "_includes/edge-ai.md"

!!! warning "Design for discovery"
    On competition day, endpoints and available signals may change. Your software must discover available D‑WIS signals and adapt accordingly.

## Phases & Timing

- Phase I — Design: monthly updates plus a design report and optional short video.
- Phase II — Implementation & testing: enhance the model and controllers; final test occurs at the end of the cycle.

Dates vary each year. See the living schedule for what’s open now.

[:octicons-milestone-24: Timeline & Milestones](../../competition/timeline.md){ .md-button .md-button--primary }
[:octicons-calendar-24: Upcoming Dates](../../competition/upcoming.md){ .md-button }

## What You Submit

- Monthly updates, Phase I design report (and optional video), and a Phase II package with data, plots, and a short presentation.
- Directional option: Minimum Curvature trajectory, plan-vs-actual plots, survey logs with acceptance flags, and controller rationale.
- Well control option: detection and control logic description, test results, and logs.

Full details and file naming live on the Deliverables page.

[:octicons-checklist-24: Deliverables](deliverables.md){ .md-button }

## How You’re Judged

- Directional option: drilling system model realism, control scheme quality, app robustness/UX, and performance vs. objectives.
- Well control option: performance, app robustness/UX, and control scheme quality.

Weights and rubrics are on the Judging page.

[:octicons-trophy-24: Judging](judging.md){ .md-button }

## Quick Links

<div class="btn-row" markdown>
[:octicons-rocket-24: Overview](overview.md){ .md-button .md-button--primary }
[:octicons-gear-24: Technical Specs](technical-specs.md){ .md-button }
[:octicons-checklist-24: Deliverables](deliverables.md){ .md-button }
[:octicons-trophy-24: Judging](judging.md){ .md-button }
</div>

## Getting Started Checklist

- [ ] Review the Technical Specs for D‑WIS and OpenLab expectations.
- [ ] Review the three Mode V cases and pick your initial target.
- [ ] Stand up a minimal data flow: connect, discover signals, and log data.
- [ ] Implement a basic control loop with clear state display and logging.
- [ ] Build required plots/reports incrementally as you test.

## References

- 2024 reference text (archival): 2024/group-a.md
- Original PDFs: [Resources → Downloads](../../resources/downloads.md) → “2024 – Group A (Virtual)”

*[D‑WIS]: Drilling‑Well Information System
*[OpenLab]: Drilling simulation environment used in Mode Virtual (V)
