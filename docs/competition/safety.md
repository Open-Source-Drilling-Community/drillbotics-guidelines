---
tags:
  - safety
status: updated
---

# Safety (General)

Baseline expectations that apply to all teams, venues, and modes.

- Lab conduct and supervision: follow institutional policies; ensure adequate oversight for any powered testing.
- Electrical and mechanical safety: enclose rotating parts; provide guards/shields; use appropriate fusing, grounding, and LOTO where applicable.
- Emergency stops and interlocks: clearly labeled, tested E‑Stops are **REQUIRED** for physical equipment; verify interlock behavior before demos.
- Procedures and training: maintain a written **Safety** plan; brief the team before each test; log incidents and near‑misses.
- Data privacy and OpSec: keep credentials and control endpoints private; **DO NOT** expose unsafe remote control pathways. **DO NOT** commit secrets to public repos.
- AI and automation: any AI components **MUST** run offline for judging; **MUST NOT** write to PLCs/actuators during read‑only/shadow interop checks.

Track‑specific details are on the respective pages:

- [Mode Physical (P) — Safety & Risk](../tracks/group-b/safety.md)
- Mode Virtual (V) — general safety is minimal; still follow lab policies for any hardware‑in‑the‑loop setups.

!!! warning "Mandatory Rule"
    - Teams **MUST** maintain a written Safety plan and review it before tests.
    - Rigs **MUST** have clearly labeled, tested E‑Stops and appropriate interlocks.
    - Interop checks are read‑only/shadow; teams **MUST NOT** write to PLCs/actuators.

!!! danger "Prohibited"
    - **DO NOT** expose remote control pathways on public networks.
    - **DO NOT** commit credentials, tokens, or secrets to public repositories.

!!! tip "Recommended"
    - Log incidents and near‑misses and include lessons learned in reports.
    - Keep AI components small and edge‑deployable; run offline during judging.
