# Drillbotics® Guidelines

<div class="hero" markdown>
### Competition rules and resources

[:octicons-arrow-right-24: 🚀 Start here](competition/overview.md){ .md-button .md-button--primary }
[💻 Group A (Virtual)](tracks/group-a/overview.md){ .md-button }
[🛠️ Group B (Physical)](tracks/group-b/overview.md){ .md-button }
</div>
 
??? tip "New to Drillbotics? (expand)"
    Skim the [Overview](competition/overview.md), then jump to the Quick Start below.


## At-a-glance flow

```mermaid
graph LR
    A[Team Registration<br/>& Kickoff] --> B[Group Selection]
    B -->|A - Virtual<br/>Modeling/Simulation| C[OpenLab/D-WIS<br/>Interface Setup]
    B -->|B - Physical<br/>Rig Construction| D[Safety Plan &<br/>Rig Development]
    C --> E[Phase I Design Report<br/>& Safety Documentation]
    D --> E
    E --> F{Judge Review<br/>& Advancement?}
    F -->|Yes| G[Phase II Testing<br/>& Competition]
    F -->|No| H[Design Feedback<br/>& Iteration]
    H --> E
    
    classDef startEnd fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef decision fill:#fff3e0,stroke:#e65100,stroke-width:2px
    classDef process fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef feedback fill:#ffebee,stroke:#c62828,stroke-width:2px
    
    class A,G startEnd
    class F decision
    class B,C,D,E process
    class H feedback
```

 
*[D‑WIS]: Drilling‑Well Information System
*[OpenLab]: Drilling simulation environment used in Group A

!!! info inline end "Submission window"
    See [Timeline & Milestones](competition/timeline.md) for current open/close dates.

=== "Group A (Virtual)"

_Requires: OpenLab + D‑WIS._

<div class="btn-row" markdown>
[:octicons-rocket-24: Overview](tracks/group-a/overview.md){ .md-button .md-button--primary }
[:octicons-gear-24: Technical specs](tracks/group-a/technical-specs.md){ .md-button }
[:octicons-checklist-24: Deliverables](tracks/group-a/deliverables.md){ .md-button }
[:octicons-trophy-24: Judging](tracks/group-a/judging.md){ .md-button }
</div>

=== "Group B (Physical)"

_Requires: Lab safety training + rig readiness._

<div class="btn-row" markdown>
[:octicons-rocket-24: Overview](tracks/group-b/overview.md){ .md-button .md-button--primary }
[:octicons-shield-24: Safety & risk](tracks/group-b/safety.md){ .md-button }
[:octicons-cpu-24: Hardware](tracks/group-b/hardware.md){ .md-button }
[:octicons-checklist-24: Deliverables & testing](tracks/group-b/deliverables.md){ .md-button }
[:octicons-trophy-24: Judging](tracks/group-b/judging.md){ .md-button }
</div>

## For Participants

<div class="grid cards" markdown>

- :material-gavel: **1) Understand the rules**  \
  Read goals, governance, scoring, and safety.  \
  [:octicons-book-24: Rules & Scoring](competition/rules-scoring.md){ .md-button }

- :material-compare: **2) Choose your track**  \
  Pick **A (Virtual)** or **B (Physical)** interfaces.  \
  [:octicons-arrow-right-24: Compare A vs B](tracks/deliverables.md){ .md-button }

- :material-calendar-check: **3) Plan deliverables & dates**  \
  Know what’s due and when.  \
  [:octicons-milestone-24: Timeline](competition/timeline.md){ .md-button }

- :material-lifebuoy: **4) Get help & resources**  \
  FAQs and original PDFs.  \
  [:octicons-question-24: FAQ](faq.md){ .md-button }

</div>

## New Team Checklist

Use this quick checklist to set up your team. See the linked pages for details.

- [ ] Confirm eligibility, advisors, and team composition — [Overview](competition/overview.md)
- [ ] Choose your track — [Group A](tracks/group-a/overview.md) or [Group B](tracks/group-b/overview.md)
- [ ] Register and note all deadlines — [Timeline](competition/timeline.md)
- [ ] Set up your repo and communication channels — [Contributor Guide](contributor-guide.md)
- [ ] Review deliverables and scoring — [Rules & Scoring](competition/rules-scoring.md)
- [ ] Prepare your environment  
      Group A: OpenLab + D‑WIS;  Group B: rig, sensors, and safety procedures — [Safety](competition/safety.md)
- [ ] Submit Phase I materials; schedule Phase II planning — Deliverables pages


## Upcoming

> High‑signal dates and checkpoints for the active year.

--8<-- "_includes/upcoming.md"

## Explore

<div class="grid cards" markdown>

- :material-rocket-launch: **Competition Overview**  \
  Summary of goals, eligibility, deliverables, and governance.  \
  [Read more »](competition/overview.md)

- :material-robot-outline: **Group A – Virtual**  \
  D‑WIS semantics, OpenLab, simulation interfaces, and requirements.  \
  [Start here »](tracks/group-a/overview.md)

- :material-cogs: **Group B – Physical**  \
  Mini‑rig hardware, safety, autonomy, and testing regimes.  \
  [Start here »](tracks/group-b/overview.md)

- :material-calendar-star: **Timeline & Milestones**  \
  Registration, checkpoints, final submissions, judging.  \
  [See dates »](competition/timeline.md)

- :material-help-circle: **FAQ**  \
  Common questions with canonical answers and links.  \
  [FAQ »](faq.md)

- :material-update: **What changed?**  \
  Human‑readable summaries and Git diffs per release.  \
  [Changelog »](changelog.md)

</div>
