# Group A — Virtual (Overview)

Design, simulate, and control a virtual drilling system using standardized interfaces. Group A emphasizes closed‑loop control, data semantics, and clear reporting over hardware.

=== "Option 1 — Directional Drilling"

- Build a virtual drilling system model and a controller to steer a 2D (or optional 3D) trajectory through three targets provided just before Phase II.
- Incorporate realistic constraints (e.g., slide/rotate modes, dogleg limits), virtual measurements with uncertainty, and automatic re‑planning to target based on as‑drilled surveys.
- Produce trajectory data (Minimum Curvature) and plan‑vs‑actual plots; log surveys and controller decisions for review.

=== "Option 2 — Well Control"

- Connect through D‑WIS to the OpenLab Drilling Simulator and implement detection/response for a kick (influx) scenario.
- Focus on reliable signal handling, thresholds/logic for detection, and appropriate automated actions with clear operator feedback.
- Validate against provided test cases; document assumptions, limits, and performance.

!!! tip "New team? Start here"
    Most first‑time teams are successful by starting with the OpenLab Drilling Simulator and focusing on the control system and data handling, rather than building a simulator from scratch.

## Tooling & Interfaces

- D‑WIS semantics: standardized names/metadata for setpoints and measurements. See the vocabulary index at https://d-wis.org/vocabulary-index/.
- OpenLab simulator: the plant used for Group A scenarios. See https://openlab.app/.
- Connectivity and discovery, expected signals, and example flows are described in Technical Specs.

[:octicons-gear-24: Technical Specs](technical-specs.md){ .md-button }

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
- Directional option: Minimum Curvature trajectory, plan‑vs‑actual plots, survey logs with acceptance flags, and controller rationale.
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
- [ ] Decide on Option 1 (Directional) or Option 2 (Well Control).
- [ ] Stand up a minimal data flow: connect, discover signals, and log data.
- [ ] Implement a basic control loop with clear state display and logging.
- [ ] Build required plots/reports incrementally as you test.

## References

- 2024 reference text (archival): 2024/group-a.md
- Original PDFs: [Resources → Downloads](../../resources/downloads.md) → “2024 – Group A (Virtual)”

*[D‑WIS]: Drilling‑Well Information System
*[OpenLab]: Drilling simulation environment used in Group A
