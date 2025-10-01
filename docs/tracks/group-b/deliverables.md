---
tags:
  - deliverables
---

# Mode Physical (P) — Deliverables & Testing

Phase I — Design (2025–2026):

- Monthly reports: due on or before the final day of each month starting in October.
- Phase I Design Report: due 31 Dec 2025, 23:59 (Local Time); use the naming convention “2025 <School Abbrev> Phase I Design Report”.
- Optional Design Video: ≤ 5 minutes, due by 23 Jan 2026.
- Finalists announced: early February 2026.

Phase II — Implementation and testing:

- Mode Physical (P): model & controls development and rig construction; Phase II test occurs May/June 2026.
- Pre-recorded team presentation: submitted ~1 week before the test; judges prepare Q&A from it.

!!! note "Edge-deployable models"
    You may prototype with larger cloud models during development, but final deliverables and performance are evaluated using small, locally run models under limited inference hardware. AI runs must be offline during judging; interop checks are read-only/shadow (no PLC writes). See Competition → [Rules & Scoring](../../competition/rules-scoring.md).

Required artifacts (Magnetic surveying excerpts):

- Definitive directional survey (TXT/LAS/CSV) including header info such as school name, survey date, well center (WGS-84), TVD reference (above block), grid convergence, geomagnetic model, magnetic declination, total azimuth correction, field dip/strength references, and the error model used.
- Autonomous survey process and qualification; provide raw survey data logs with timestamps, measured depth, downhole sensor values (axes + qualifier values), and survey acceptance indicators.
- Telemetry dataset: fixed-schema `drilling_timeseries.csv` (≥1 Hz; D-WIS names) with semantic headers and units for apples-to-apples scoring.
- Static logs (suggested): LAS 2.0 `wellname_logs.las` with required curves and metadata.

Testing notes:

- Closed-loop control using downhole data is mandatory; failure to integrate downhole measurements into the controller is considered failing for 2024.
- Prepare a test matrix, data handling and visualization plans, and calibration/verification procedures for sensors and instrumentation.
 - Interop demo is separate and read-only/shadow; no PLC/actuator writes during checks.

Source: see the full 2024 text at 2024/group-b.md.
