<!-- Centralized Edge‑AI constraints for reuse across pages -->

- Expectation: focus your effort on generating/fine-tuning data and optimizing compact multimodal models.
- Inference‑only, offline, JSON outputs (e.g., Explain‑This‑Event or Rig‑State Textualizer).
- Small‑model, edge‑deployable focus: teams may prototype with larger cloud‑hosted models during development, but final deliverables and performance are evaluated using locally run or on‑rig small models under limited inference hardware.
- Suggested caps: ≤2 vCPU or ≤20 W GPU, ≤4–8 GB RAM (non‑LLM) and ≤8 vCPU or ≤1,150 W GPU, ≤16–64 GB RAM (LLM); ≤15 min total inference runtime. Rig compute otherwise open. All AI runs must be offline during judging; no PLC/actuator writes.
- Custom task option: teams may propose a custom offline JSON task with objective ground truth and the same interface for pre‑approval (recommended deadline: 2026‑02‑01). Approved tasks use the same AI sub‑rubric and scale to +10.
