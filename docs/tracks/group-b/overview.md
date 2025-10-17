---
tags:
  - group-b
  - overview
---

# Mode Physical (P) — Overview

Build and operate a small-scale drilling rig that autonomously drills a directional well. Mode Physical (P) emphasizes safety, robust hardware, closed-loop control using downhole data, and clear reporting.

=== "Safety & Risk"

- Create and maintain a comprehensive safety case that covers personnel, equipment, and environment. Go beyond PPE: identify hazards, mitigations, guards/interlocks, emergency stops, and operating procedures.
- Expect judges to grade both your plan and its implementation during demos and tests.

[:octicons-shield-24: Safety & Risk](safety.md){ .md-button }

=== "Hardware"

- Define rig architecture, dimensions, power requirements, and shipping constraints. Provide diagrams and power tables for conference/booth planning.
- Select and calibrate surface/downhole sensors; document DAQ rates, synchronization, and data handling.

[:octicons-cpu-24: Hardware](hardware.md){ .md-button }

=== "Autonomy & Control"

- Implement autonomous mode switching (drilling/survey), steering calculations (toolface, slide length), survey qualification, and real-time metrics (DLS, plan deltas) on the rig display.
- Closed-loop control must use downhole data; log decisions and rationale for review.

[:octicons-gear-24: Autonomy & Control](autonomy.md){ .md-button }

!!! warning "Safety first"
    Rotating machinery, high torque, and energized systems present real hazards. Guards, interlocks, and an auditable safety plan are mandatory and graded.

!!! tip "New team? Start here"
    Start with a simple, sturdy rig; instrument it well; implement safe operations and basic closed-loop control using downhole data before adding complexity.

!!! note "Edge‑deployable models"
    --8<-- "_includes/edge-ai.md"

!!! note "Competition sample variability"
    A surprise rock layer may be included in the rock sample shipped to teams for the day of the competition. Design your sensing, procedures, and controllers to handle unexpected lithology transitions and sensor responses without manual retuning.

## Phases & Timing

- Phase I — Design: monthly updates plus a design report and optional short video.
- Phase II — Build, implementation & testing: rig construction/readiness, controls development, and final test at the end of the cycle.

Dates vary each year. See the living schedule for current windows.

[:octicons-milestone-24: Timeline & Milestones](../../competition/timeline.md){ .md-button .md-button--primary }
[:octicons-calendar-24: Upcoming Dates](../../competition/upcoming.md){ .md-button }

## What You Submit

- Monthly updates, a Phase I design report (optional short video), and a Phase II test package (presentation, datasets, logs).
- Directional survey data with required metadata and error model; logs that show autonomous survey processing and acceptance/override flags.
- Evidence of closed-loop control using downhole measurements, and test/calibration documentation for sensors.

Full details and file naming live on the Deliverables & Testing page.

[:octicons-checklist-24: Deliverables & Testing](deliverables.md){ .md-button }

## How You’re Judged

- Phase I (design): safety, rig mobility, design process/analysis, mechanical design/versatility, simulation/model/algorithm, and control scheme.
- Phase II (build/test): engineering skills, construction quality, cost control, performance vs. objectives, data handling/visualization, and use of downhole data in control.

Weights and examples are on the Judging page.

[:octicons-trophy-24: Judging](judging.md){ .md-button }

## Quick Links

<div class="btn-row" markdown>
[:octicons-rocket-24: Overview](overview.md){ .md-button .md-button--primary }
[:octicons-shield-24: Safety & Risk](safety.md){ .md-button }
[:octicons-cpu-24: Hardware](hardware.md){ .md-button }
[:octicons-gear-24: Autonomy & Control](autonomy.md){ .md-button }
[:octicons-checklist-24: Deliverables & Testing](deliverables.md){ .md-button }
[:octicons-trophy-24: Judging](judging.md){ .md-button }
</div>

## Getting Started Checklist

- [ ] **Register your team at [https://drillbotics.com/2026-team-registration/](https://drillbotics.com/2026-team-registration/)** (Closes 2025-11-30)
- [ ] Confirm lab safety training, advisor oversight, and facility access; draft and socialize your safety plan.
- [ ] Design a minimal, stable rig structure with proper guarding and emergency stops; verify power and footprint.
- [ ] Select surface/downhole sensors; calibrate and specify DAQ rates/sync; implement reliable logging.
- [ ] Implement basic autonomous mode switching (drill/survey) and display key KPIs (DLS, plan deltas).
- [ ] Close the loop using downhole data; validate with a simple test matrix before increasing complexity.
- [ ] Prepare deliverables and a pre-recorded presentation ahead of the Phase II test.

## Open-Source (OSDC)

- We encourage teams to publish their work to the Open-Source Drilling Community (OSDC) as structured modules (code, data, docs). Module templates and examples will be provided.

## References

- 2024 reference text (archival): [2024 – Group B](../../2024/group-b.md)
- Original PDFs: [Resources → Downloads](../../resources/downloads.md) → “2024 – Group B (Physical)”
