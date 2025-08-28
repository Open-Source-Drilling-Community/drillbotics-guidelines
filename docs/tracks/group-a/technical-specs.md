---
tags:
  - group-a
  - technical-specs
---

# Group A — Technical Specifications

Connectivity and interfaces (D‑WIS + OpenLab):

- Use the D‑WIS semantics standard vocabulary for signal names and metadata: https://d-wis.org/vocabulary-index/
- Drillbotics provides a Dockerized OPC UA server with D‑WIS connectivity from which teams connect to the OpenLab Drilling Simulator.
- Teams connect to the local OPC UA endpoint, send setpoints, and receive surface and downhole measurements via the D‑WIS interface (per 2024 guidelines).
- On competition day, simulator access parameters may change; control software must rely on D‑WIS discovery to enumerate available signals and adapt accordingly.

Model scope and controls (Directional challenge):

- Model the rig equipment, drillstring, BHA, bit, and directional behavior (2D or 3D). Include realistic constraints, re‑planning based on as‑drilled surveys, and basic drilling optimization where applicable.
- Incorporate realistic virtual measurements (incl. noise/uncertainty) and simulate rig control modes (e.g., slide vs. rotate) as used by your controller.

Model scope and controls (Well control challenge):

- Use OpenLab as the well‑control plant; implement detection and response logic using D‑WIS signals. Test cases are provided to validate control algorithms prior to Phase II.

Surveying and trajectory data (Directional challenge):

- Provide a Minimum Curvature trajectory using an appropriate survey interval and include for each station: Measured Depth, Inclination, Azimuth (referenced to block north), TVD, Northing/Easting (from well center), and Dogleg Severity. Final station should extrapolate to bit TD.
- Plots: plan vs. actual TVD vs. VS, vertical section (direction by well‑center‑to‑target bearing), and X/Y plan view with grid north = block north and origin at well center.
- Data logs must include timestamp (Y‑M‑D h:m:s), sensor measured depth, downhole sensor value(s) (axes + qualifier values), and accepted‑survey indicator; show both auto and secondary (human) acceptance where used.

Formation model (provided for Phase II):

- Defined by rock type, UCS, and confining pressure; teams must account for changes in build rate due to new wellbore geometry and changing rock strength. Format is provided in late November (per 2024 guidelines).

Notes

- Where a non‑standard survey error model is used, include the model description with standard variable/coefficient naming and justification in the design report.
- All depths should reference the rotary/kelly bushing datum as per industry practice.

Source: see the full 2024 text at 2024/group-a.md.
