---
tags:
  - group-a
  - technical-specs
---

# Mode Virtual (V) — Technical Specifications

This page defines the technical interface and logging requirements for Mode Virtual (V) in the 2025.1 cycle. It aligns with the three cases on the Overview page and reuses the D‑WIS + OpenLab approach from 2024 with clearer tables and file formats.

## Scope (2025.1)

- Case 1 — Kick detection: detection and appropriate automated response using OpenLab as the plant.
- Case 2 — Adaptive lithology shift: adapt controller/model to changing rock while honoring constraints; provide trajectory evidence.
- Case 3 — Stick‑slip sprint: minimize torsional oscillations while reaching TD within constraints.

See the scenarios and objectives at [Overview → Cases](overview.md#cases-20251).

## Connectivity & Discovery (D‑WIS + OpenLab)

- Use the D‑WIS semantics vocabulary for signal names/metadata: [D‑WIS Vocabulary Index](https://d-wis.org/vocabulary-index/)
- Drillbotics provides a Dockerized OPC‑UA server exposing D‑WIS‑named nodes connected to the OpenLab Drilling Simulator.
- Your control app connects to the local OPC‑UA endpoint, writes setpoints, and reads measurements through the D‑WIS interface.
- Day‑of change: endpoint parameters and available signals may change; software must browse/discover and adapt to the active case.

!!! warning "Design for discovery"
    Do not hard‑code node IDs. Browse by category, match by D‑WIS names/units, and verify access modes (read/write) at startup.

## Signals & Units

Minimum interoperable set across cases. Use D‑WIS names; document any local mapping you implement.

| Category | Signal (example) | Units | Direction | Required | Notes |
| --- | --- | --- | --- | --- | --- |
| Actuator | Rotary speed (RPM) | rev/min | write | Yes | Top‑drive setpoint |
| Actuator | Surface WOB setpoint | kN | write | Yes | Effective WOB at surface controller |
| Actuator | Flow rate (pump) | L/min | write | Yes | Case 1 relies on flow steps during connections |
| Actuator | Bit on/off | boolean | write | Yes | Drilling enable/disable |
| Measurement | Standpipe pressure (SPP) | MPa | read | Yes | Used in kick detection and dysfunction tracking |
| Measurement | Torque at surface | kN·m | read | Yes | Stick‑slip metrics |
| Measurement | Hookload | kN | read | Rec. | Useful for inferred WOB and connection logic |
| Measurement | WOB (measured) | kN | read | Rec. | If provided by simulator/case |
| Measurement | Flow in | L/min | read | Yes | Required for Case 1 comparisons |
| Measurement | Flow out | L/min | read | Yes | Required for Case 1 comparisons |
| Measurement | Bit depth | m | read | Yes | Primary depth index |
| Measurement | Hole depth | m | read | Rec. | For drilling state and ROP reference |
| Measurement | ROP (surface) | m/h | read | Rec. | May be derived; include if available |
| Downhole | Inclination, azimuth | deg | read | Case 2 | Survey model; station cadence per deliverables |
| Downhole | Toolface | deg | read | Case 2 | If applicable to your steering model |

!!! note "Additions allowed"
    You may include additional signals (e.g., pit volume totalizer, mud density in/out, temperature) if available. Keep names/units consistent and document mappings.

## Timing & Sampling

- Control loop timing: choose based on your design; document nominal loop period and jitter tolerance.
- Logging cadence: record at ≥1 Hz for deliverables; 5–10 Hz recommended for Case 3 (stick‑slip) internal analysis. You may down‑sample to 1 Hz for the submitted CSV.
- Time base: use UTC ISO‑8601 timestamps with milliseconds (e.g., `2026-05-14T13:57:00.123Z`).
- Alignment: ensure actuator writes and resulting measurements are time‑aligned within your logs; document known latencies.

## Data Outputs (2025.1)

Submit a consistent package regardless of case. Keep headers semantic and include units in parentheses for clarity.

- Time‑series: `drilling_timeseries.csv` (≥1 Hz). Suggested columns:
  - `timestamp_utc_iso`, `bit_depth_m`, `rpm`, `wob_kN`, `torque_kNm`, `flow_in_lpm`, `flow_out_lpm`, `spp_MPa`, `rop_mph`, `hookload_kN`
  - Add case‑specific columns as needed, e.g., `inc_deg`, `azi_deg`, `toolface_deg`, and any detection/decision flags.
- Static logs (optional but encouraged): LAS 2.0 `wellname_logs.las` for key curves and metadata.
- Plots: include time‑aligned figures demonstrating objectives (e.g., flow in/out vs. SPP during connections; torque/RPM spectra for stick‑slip; plan‑vs‑actual for directional).

!!! tip "Interoperability checks"
    Verify OpenLab API/OPC‑UA connectivity during Feb–Mar readiness checks. All AI components must run offline during judging. See Edge‑AI note in Overview/Deliverables.

## Case‑Specific Notes

### Case 1 — Kick detection

- Plant: OpenLab simulator accessed through the D‑WIS OPC‑UA gateway.
- Expect day‑of changes in well geometry, geo‑pressure margins, sensors available, and fluid properties. Your app must discover available nodes and adapt.
- Evidence: highlight detection logic, response timing, and before/after stability using flow in/out and SPP trends; include state/alerts timeline.

### Case 2 — Adaptive lithology shift

- Directional evidence: provide Minimum Curvature trajectory, plan‑vs‑actual plots, and survey station logs with acceptance flags.
- Constraints: document dogleg limits, slide/rotate modes, and re‑planning triggers used by your controller.

### Case 3 — Stick‑slip sprint

- Metrics: report a clear torsional dysfunction metric (e.g., time above torque oscillation threshold, RPM variance, or spectral energy in the 0.1–10 Hz band) and how mitigation reduced it while meeting objectives.
- Sampling: collect ≥5 Hz internally; you may submit a 1 Hz CSV with derived metrics.

## Formation Model (Phase II)

- Provided just before Phase II. Defined by rock type, unconfined compressive strength (UCS), and confining pressure.
- Prepare an importer that accepts the posted format. Your controller should account for changes in build rate due to geometry and rock strength.

## Reporting & Assumptions

- Survey error model: if you deviate from a standard model, include the model description, variable names, coefficients, and justification in the design report.
- Depth reference: use rotary/kelly bushing as datum unless stated otherwise; declare any alternative reference used.

## Note: Detailed Technical details and templates to be published in November-December 2025.

## Open-Source (OSDC)

- We encourage teams to publish their work to the Open-Source Drilling Community (OSDC) as structured modules (code, data, docs). Module templates and examples will be provided.

Source reference: the 2024 text remains the detailed background for interfaces and expectations — see [2024 – Group A](../../2024/group-a.md).
