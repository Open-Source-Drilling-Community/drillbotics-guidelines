---
tags:
  - group-a
  - technical-specs
---

# Mode Virtual (V) — Technical Specifications

Connectivity and interfaces (D‑WIS + OpenLab):

- Use the D‑WIS semantics standard vocabulary for signal names and metadata: https://d-wis.org/vocabulary-index/
- Drillbotics provides a Dockerized OPC UA server with D‑WIS connectivity from which teams connect to the OpenLab Drilling Simulator.
- Teams connect to the local OPC UA endpoint, send setpoints, and receive surface and downhole measurements via the D‑WIS interface (per 2024 guidelines).
- On competition day, simulator access parameters may change; control software must rely on D‑WIS discovery to enumerate available signals and adapt accordingly.

## Data outputs (2025.1)

- Time‑series: fixed‑schema `drilling_timeseries.csv` (≥1 Hz; D‑WIS names). Include semantic headers and units.
- Static logs: a LAS 2.0 `wellname_logs.las` is suggested for key curves and metadata.
- Interop checks: verify OpenLab API connectivity during Feb–Mar (readiness) and ensure any AI components run offline for judging.
 
Model scope and controls (Well control challenge):

- Use OpenLab as the well‑control plant; implement detection and response logic using D‑WIS signals. Test cases are provided to validate control algorithms prior to Phase II.
- Key measurements: surface torque, weight on bit (WOB), rate of penetration (ROP), standpipe pressure (SPP), downhole inclination/azimuth, and downhole toolface.
- Key actuators: rotary speed (RPM), surface WOB, mud flow rate, and bit on/off.
- Drilling mechanics: ROP is a function of WOB, RPM,

Formation model (provided for Phase II):

- Defined by rock type, UCS, and confining pressure; teams must account for changes in build rate due to new wellbore geometry and changing rock strength. Format is provided in late November (per 2024 guidelines).

Notes

- Where a non-standard survey error model is used, include the model description with standard variable/coefficient naming and justification in the design report.
- All depths should reference the rotary/kelly bushing datum as per industry practice.

Source: see the full 2024 text at 2024/group-a.md.
