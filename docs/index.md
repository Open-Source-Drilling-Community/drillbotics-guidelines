# Drillbotics® Guidelines

<div class="hero" markdown>
### Competition Rules and Resources

[:material-rocket-launch: Start here](competition/overview.md){ .md-button .md-button--primary }
[:material-laptop: Mode Virtual (V)](tracks/group-a/overview.md){ .md-button .md-button--secondary }
[:material-cog: Mode Physical (P)](tracks/group-b/overview.md){ .md-button .md-button--secondary }
</div>
  
!!! success "2026 Drillbotics competition results"
    The 2026 Drillbotics competition cycle is complete. Final results have been published for **Mode Physical (P)** and **Mode Virtual (V)**.

    - **Mode Physical (P)**: ITBA placed 1st; TU Clausthal and NTNU share joint 2nd place.
    - **Mode Virtual (V)**: the Palawan State University / Sunway University collaboration placed 1st; UMaT Well Control is runner-up.

    ITBA has been invited to prepare the 2026 Drillbotics conference paper for the SPE Drilling Conference, March 9-11, 2027, in Stavanger, Norway. The 2027 Drillbotics rules will be published later in 2026.

    [:material-trophy-outline: 2026 results](competition/results-2026.md){ .md-button .md-button--primary }
    [:material-open-in-new: Public announcement](https://drillbotics.com/drillbotics-2026-competition-results/){ .md-button }

!!! info "Official Site and Archives"
    - For news and additional context, visit the official site: <https://drillbotics.com/>
    - To review previous years' reports and winners, see the Archives: <https://drillbotics.com/archives/>

<div class="btn-row" markdown>
[:material-calendar-check: Timeline & milestones](competition/timeline.md){ .md-button .md-button--primary }
[:material-clipboard-text-outline: Deliverables](tracks/deliverables.md){ .md-button .md-button--secondary }
[:material-open-in-new: Official Site](https://drillbotics.com/){ .md-button .md-button--secondary }
[:material-archive-outline: Archives (Previous Reports)](https://drillbotics.com/archives/){ .md-button .md-button--secondary }
</div>

## At-a-Glance Flow

```mermaid
graph LR
    A[Team Registration<br/>& Kickoff] --> B[Mode Selection]
    B -->|Mode V<br/>Modeling/Simulation| C[OpenLab/D‑WIS<br/>Interface Setup]
    B -->|Mode P<br/>Rig Construction| D[Safety Plan &<br/>Rig Development]
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

!!! info inline end "Submission window"
    See [Timeline & Milestones](competition/timeline.md) for current open/close dates.

=== "Mode Virtual (V)"

_Requires: OpenLab + D‑WIS._

<div class="btn-row" markdown>
[:material-rocket-launch: Overview](tracks/group-a/overview.md){ .md-button .md-button--primary }
[:material-chip: Specs](tracks/group-a/technical-specs.md){ .md-button .md-button--secondary }
[:material-clipboard-text-outline: Deliverables](tracks/group-a/deliverables.md){ .md-button }
[:material-trophy-outline: Judging](tracks/group-a/judging.md){ .md-button }
</div>

=== "Mode Physical (P)"

_Requires: Lab safety training + rig readiness._

<div class="btn-row" markdown>
[:material-rocket-launch: Overview](tracks/group-b/overview.md){ .md-button .md-button--primary }
[:material-shield-check: Safety & Risk](tracks/group-b/safety.md){ .md-button .md-button--secondary }
[:material-cog: Hardware](tracks/group-b/hardware.md){ .md-button }
[:material-clipboard-text-outline: Deliverables](tracks/group-b/deliverables.md){ .md-button }
[:material-trophy-outline: Judging](tracks/group-b/judging.md){ .md-button }
</div>

## For Participants

<div class="grid cards" markdown>

- :material-gavel: **1) Understand the rules**  
  Read goals, governance, scoring, and safety.  
  [:octicons-book-24: Rules & Scoring](competition/rules-scoring.md){ .md-button }

- :material-compare: **2) Choose your track**  
  Pick **Mode Virtual (V)** or **Mode Physical (P)** interfaces.  
  [:octicons-arrow-right-24: Compare V vs P](tracks/deliverables.md){ .md-button }

- :material-calendar-check: **3) Plan deliverables & dates**  
  Know what’s due and when.  
  [:octicons-milestone-24: Timeline](competition/timeline.md){ .md-button }

- :material-lifebuoy: **4) Get help & resources**  
  FAQs and original PDFs.  
  [:octicons-question-24: FAQ](faq.md){ .md-button }

</div>

## New Team Checklist

Use this quick checklist to set up your team. See the linked pages for details.

- [ ] Confirm eligibility, advisors, and team composition — [Overview](competition/overview.md)
- [ ] Choose your track — [Mode Virtual (V)](tracks/group-a/overview.md) or [Mode Physical (P)](tracks/group-b/overview.md)
- [ ] Watch for 2027 rules and registration updates, expected later in 2026
- [ ] Review the completed 2026 cycle — [2026 Results](competition/results-2026.md)
- [ ] Note all important deadlines once the next schedule is published — [Timeline](competition/timeline.md)
- [ ] Set up your repo and communication channels — [Contributor Guide](contributor-guide.md)
- [ ] Review deliverables and scoring — [Rules & Scoring](competition/rules-scoring.md)
- [ ] Prepare your environment  
      Mode Virtual (V): OpenLab + D‑WIS;  Mode Physical (P): rig, sensors, and safety procedures — [Safety](competition/safety.md)
- [ ] Prepare deliverables and schedule planning once the 2027 rules are published — Deliverables pages

## Upcoming

> High-signal dates and checkpoints for the active year.

--8<-- "_includes/upcoming.md"

## Explore

<div class="grid cards" markdown>

- :material-rocket-launch: **Competition Overview**  
  Summary of goals, eligibility, deliverables, and governance.  
  [Read more »](competition/overview.md)

- :material-robot-outline: **Mode Virtual (V)**  
  D‑WIS semantics, OpenLab, simulation interfaces, and requirements.  
  [Start here »](tracks/group-a/overview.md)

- :material-cogs: **Mode Physical (P)**  
  Mini-rig hardware, safety, autonomy, and testing regimes.  
  [Start here »](tracks/group-b/overview.md)

- :material-calendar-star: **Timeline & Milestones**  
  Registration, checkpoints, final submissions, judging.  
  [See dates »](competition/timeline.md)

- :material-help-circle: **FAQ**  
  Common questions with canonical answers and links.  
  [FAQ »](faq.md)

- :material-update: **What changed?**  
  Human-readable summaries and Git diffs per release.  
  [Changelog »](changelog.md)

</div>

--8<-- "_includes/abbr.md"
