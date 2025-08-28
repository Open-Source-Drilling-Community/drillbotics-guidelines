> **Source PDF:** [2024-Group-A.pdf](../_assets/2024-Group-A.pdf)

# Group A — Virtual Track (2024)

The following content is an automated text extraction of the original 2024 PDF.
Minor formatting differences may exist compared to the PDF layout.

Society of Petroleum Engineers
Drilling Systems Automation
Technical Section (DSATS)
International University Competition
2023-2024

Drillbotics® Guidelines
Group A
Revised 11 October 2023

Version

2024.01

Date

11 October 2023

Section

All

initial release

Description

1. Introduction

This year marks the tenth competition for the title of
Drillbotics® champion and a chance for students to learn
about the drilling process from industry experts and for
winning team(s) to travel and present a paper at the next
SPE/IADC Drilling Conference and at an event organized by
DSATS.  The past years involved undergraduates, masters and
doctoral students from a variety of disciplines who built
innovative drilling machines and downhole tools while
developing a deeper understanding of automating the drilling
process.  Recently, this was extended to include teams who
created models of the rig, the drilling process, and various
downhole interactions.  Teams freely shared lessons learned,
which more rapidly advances the science of drilling
automation. Everyone involved claims to have had a lot of fun
while learning things that are not in the textbooks or
published papers.  Students also participated in related
events at conferences, workshop meetings and networking
with industry leaders in drilling automation.  This year’s
contest promises to be just as challenging and hopefully as
much fun.  For more information, see <https://drillbotics.com/>

This year’s Group A competition again allows teams two
options.  They may compete like previous years, virtually
drilling a directional well.  Optionally, they may choose to
focus on virtually detecting and controlling a well control
event (e.g., kick).  Group B will drill a 2-dimensional
directional well under similar guidelines to last year, but may
opt to drill a 3-dimensional well.

New for 2024

Continue with two groups
A – Virtual
B – Physical

Separate guidelines for each group
to reduce confusion

Group A:

- Create model (or option to use
publicly available models) to
simulate a virtual rig, or
- Use their rig model to interface

with a well control model provided
by Norce using their OpenLab
simulator.

Group B:

- Build and operate a physical rig
to drill a 2D directional well or an
optional 3D well.

For A & B: Additional credit for
teams that develop a D-WIS
compatible API for data
interoperability.

Okay for two schools to join
together for their entry.

New Group A teams are highly encouraged to use the OpenLab Drilling Simulator (<https://openlab.app/>)
and focus on designing the controls system.  The D-WIS interface and connectivity will be used to send set-
points to the simulator and receive surface and downhole sensor data.  Webinar training on how to use
the D-WIS interface and the simulator will be provided in October.  Group B teams could use the simulator
to validate and verify the interoperability of their API.

Previously, teams reviewing the contest rules had to jump between the main body of the guidelines to
various appendices depending on which group they chose.  This year we have created separate guidelines
for Groups A and B.  The general information items that are common to both groups are identical.  Rules

    2023-2024 Guidelines Group A

     2 | Page

specific to each group are listed in an appendix.  Teams must also monitor the website
(<www.Drillbotics.com>) to check any Frequently Asked Questions (FAQs) since they become part of these
guidelines.

How did the competition first come about?  The origins began in 2008 when several SPE members
established the Drilling Systems Automation Technical Section (DSATS) to help accelerate the uptake of
automation in the drilling industry. DSATS’ goal was to link the surface machines with downhole machines,
tools, and measurements in drilling systems automation (DSA), thereby improving drilling safety and
efficiency.  Later, at an SPE Forum in Paris, the idea of a student competition began to take shape; a DSATS
sub-committee was formed to develop the competition format and guidelines further.  Several universities
were polled to find out the ability of academic institutions to create and manage multi-disciplinary teams.
The Drillbotics committee began small in 2014-2015 to see if the format could succeed.  With fine tuning,
we continue along those lines as we start the 2024 process.

Competition Overview:
Group A

●  Option 1: The teams will design a control system that will virtually control their full-scale

drilling system model to test and demonstrate their automated system’s capability to drill a
directional well.  The teams should incorporate virtual downhole and surface sensors in their
automation and controls scheme.  The well path will be defined by three targets provided by
the Drillbotics Committee immediately before the final Phase II test.  Teams can drill a 2D or an
optional 3D trajectory.

●  Option 2:  Teams may use the D-WIS interface standard to connect to an OpenLab simulator

offered by Norce to detect and control an influx (kick).

Group B

●  The challenge requires teams to develop a small-scale drilling rig and control system to

autonomously drill a directional well following a given trajectory.

●  Downhole sensors are mandatory, and their data must be included in the control algorithms.
●  The well path will be defined by three targets provided by the Drillbotics Committee

immediately before the final Phase II test.  Teams can drill a 2D or an optional 3D trajectory.

Phase I

●  Both groups must submit a Phase I Design Report not later than 31 December.
●  A Phase I Design Video is optional, due not later than 15 January.
●

Judges will review the reports and select finalists to be announced in early February.

Phase II

●  Teams will submit a pre-recorded team presentation approximately one week before the

Phase II test.  Judges will review the presentation and prepare a list of questions that will be
asked of each team prior to the physical test.

    2023-2024 Guidelines Group A

     3 | Page

Tests
●  Group A and B Phase II tests will be held on separate dates, to be advised in April.  If possible,

we will hold face-to-face tests in Germany and the USA, with an option for a virtual meeting on
the same dates.

The DSATS technical section believes that this challenge benefits students in several ways.  Petroleum,
mechanical, electrical, and control engineers gain hands-on experience in each person’s area of expertise
that forms a solid foundation for post-graduate careers.  Those involved with system modeling gain insight
into how models can gain sufficient fidelity to be applied to industry specific problems. They also learn
where poor models or poor data can lead to incorrect outcomes.  Students also develop experience
working in multi-disciplinary teams, which is essential in today’s technology-driven industries.  Winning
teams must possess a variety of skills.  The mechanical and electrical engineers need to build a stable,
reliable, and functional drilling rig.  Control engineers need to architect a system for real-time control,
including a selection of sensors, data handling, and fast-acting control algorithms.  The petroleum
engineers need an understanding of drilling dysfunctions and mitigation techniques.  Modeling engineers
must understand all of these basics and how to organize numerous modules into a complex model.
Everyone must work collectively to establish functional system requirements, often fully understood by
each team member to accurately portray the drilling issues and create an integrated package working
seamlessly together.

The oil and gas industry today seeks lower costs and reduced risk through efficiency and innovation.  Many
student competitors may discover innovative tools and control processes that will assist drillers in
speeding the time to drill and complete a well.  This includes more than a faster ROP, such as problem
avoidance for dysfunctions like excessive vibrations, stuck pipe, and wellbore stability issues.  Student
teams built new downhole tools using 3D printing techniques of designs that would be difficult, if not
impossible to machine.  They used creative hoisting and lowering systems.  Teams modeled drilling
performance in particular formations and adjusted the drilling parameters accordingly for changing
downhole conditions.  While they have a lot to learn about our business, we have a lot to learn about their
fresh approach to today’s problems. Good Luck!

The Drillbotics® Committee

    2023-2024 Guidelines Group A

     4 | Page

Contents
1.

Introduction .......................................................................................................................... 2

2. Objectives for the 2022 Competition ..................................................................................... 7

3. Background ........................................................................................................................... 7

4. General  Competition Guidelines ........................................................................................... 9

5.

6.

7.

Team Members ................................................................................................................... 10

Safety ................................................................................................................................... 10

Expenditures ........................................................................................................................ 11

8. Other Considerations ........................................................................................................... 11

9. Project Timeline ................................................................................................................... 12

10. Project reports ..................................................................................................................... 12

10.1.

Report File Names

10.2.

Monthly Report Contents

10.3.

Other items of interest

10.4.

Phase I Design Report

10.5.

Final report, presentation and paper

12

13

13

13

13

11. Group A and Group B Prizes ................................................................................................ 14

12. Terms and Conditions .......................................................................................................... 15

13. Marketing ............................................................................................................................ 16

Appendix A:  Group A Project Definition ............................................................................. 17

A>  Phase I – Design Competition ............................................................................................. 17

B>  3D Steering Challenge Design Criteria ................................................................................ 20

a.  Overview

b.  Objectives

c.  Automation Requirements

d.

e.

Steering

Surveys

f.  Deliverables Requirements (Magnetic surveying)

g.

Plots

h.  Data Logs

i.

j.

Formation Characteristics

Targets

20

21

22

22

22

22

23

23

23

24

    2023-2024 Guidelines Group A

     5 | Page

k.

l.

Trajectory

Bit Model

m.  Drillstring

24

24

26

C>  Well Control Criteria............................................................................................................ 27

a.  Overview

D>  General guidelines for both challenges (Well Control and 3D Steering)

a.  Automated Drilling

b.  Coding

c.  Data visualization

d.  Phase I design Report

27

28

28

29

29

29

E>  Phase II – Drilling Competition ............................................................................................ 30

F>  Final Report and Paper ........................................................................................................ 32

Appendix B: Automation & Interface Design from a Human Factors Perspective ................ 34

Appendix C: Additional References ........................................................................................ 37

    2023-2024 Guidelines Group A

     6 | Page

2.  Objectives for the 2022 Competition

2.1.  During the school year, beginning in the fall of 2023, a team of students will organize themselves

to solve a drilling-related problem outlined in Appendix A below.  The team should preferably be a
multi-disciplinary team that will bring unique skills to the group to allow them to design and
construct hardware, software and models to demonstrate that they understand the underlying
physics, the drilling issues and the usual means to mitigate the issues.  We cannot stress enough
the need to involve students with different technical training and backgrounds.  They will need to
develop skills to understand drilling dysfunctions and mitigation strategies, but they must also
have the mechanical engineering and controls capabilities to model, design the rig/drilling
package and develop the controls system.  Even when the project involves only software, an
understanding of the physical limits of a rig’s machinery and tubulars is critical.  In past years,
some entrants have not adequately considered the control network and algorithms needed for
autonomous drilling.  They have often misunderstood the need for calibrated sensors and fast,
accurate data handling.  Some teams did not consider measurement errors.  Teams from both
Group A and B ignored uncertainty principles.  All of this and more is needed to build and operate
a complete automated drilling system.  We encourage all teams to start out with a simple concept
done well, and then build on it from year to year adding complexity when warranted.  Planning
for this evolution will make it easier on future team members.

2.2.  The students should produce novel ideas leading to new drilling models, improved drilling
machines and sensors, and the ability to integrate the data, models and machines that will
hopefully create new, more efficient ways to drill wells in the future.  Any such innovation will
belong to the students and their university in accordance with the university’s written policies.
DSATS and SPE waive any claims to students’ intellectual property.

2.3.  The students, working as a multi-disciplinary team, will gain hands-on experience that will be

directly applicable to a career in the upstream drilling industry.

3. Background

3.1.  What is DSATS?

DSATS is a technical section of the Society of Petroleum Engineers (SPE) organized to promote the
adoption of automation techniques using surface and downhole machines and instrumentation to
improve the safety and efficiency of the drilling process.  More information is available about DSATS at
the DSATS homepage (<https://www.spe-dsats.org/>) .

3.2.  Why an international competition?

DSATS and the other technical sections, as part of the SPE, are a group of volunteers from many
nations, connected by their belief that drilling automation will have a long-term, positive influence on
the drilling industry.  This diversity helped to shape the direction of the organization.  The group feels
that the industry needs to attract young professionals from all cultures and disciplines to advance
drilling practices in all areas of the world. The winners of the competition will receive a grant for
economy class transportation and accommodations to attend the next SPE/IADC Drilling Conference

    2023-2024 Guidelines Group A

     7 | Page

and will present an SPE paper that will be added to the SPE archives of One Petro1.  Note that this year,
the Drillbotics Committee will submit both Group A and Group B winning abstracts to the conference
program committee.  They will choose which of the two abstracts best fit their program.  The
Drillbotics committee will help the winning team from the other Group receive recognition of their
achievement and have the opportunity via a different conference2 to publish an SPE paper that will be
added to the SPE archives of One Petro.  DSATS believes recognition at one of the industry’s leading
technical conferences will demonstrate to industry leaders the extent of research and understanding
the student teams have gained during the contest.  Also, the practical experience with drilling
automation systems increases the students’ visibility to the companies that are leading automation
activities.
3.3.  Why include a safety case
Safety of personnel, equipment and the environment are always critical for any drilling operation.  The

industry begins any project or operation with safety in mind, and a safety case is a proven method of

identifying and mitigating risks.  This is no different on a small scale or for a virual operation.  Safety

goes far beyond personal protective equipment.  Where can someone be hurt – in a lab with heavy

rock samples and rotating machinery?  Electrocution?  High pressure leaks?  Traveling to and from

locations? Judges want to see how teams plan ahead in their first few meetings to identify threats and

develop processes or devices to reduce the risk and severity of any incidents.

3.4.  Why include Human Factors?

Any complex engineered system that is wholly reliant upon human operators to achieve its goal is
likely to experience issues. Humans are inconsistent when performing monitoring tasks, they tend to
not make wholly rational decisions, are impacted by external factors and are prone to error. As
technology advances and complexity increases (such as the control regimes proposed in remote
drilling operations for example) such issues become more prevalent. However, many of the issues
associated with such complexity can be countered by reallocating certain tasks to automation.
Maintaining appropriate levels of automation and ensuring that your ‘projected’ drilling operator
remains ‘in the loop’ through good interface design will be one of the key challenges you will face in
the Drillbotics competition.  It is imperative that teams show how they implemented human factors in
their processes and interfaces, both in the creation of their rig or model and how the operators/judges
will use their designs.

Students working with automated systems should learn about the risks and proper strategies to allow humans
and machines to work together safely and efficiently.  Reference documents are listed in Appendix B.
Requirements for human factors provisions are shown in Appendix A.

1 Publication is subject to the SPE program committee’s acceptance of the abstract/paper.  If the abstract is not
accepted, DSATS will solicit other SPE events to try to get the paper into OnePetro.  Travel authorization will
depend on any international or local travel restrictions in place at the time of certain events.
2 DSATS will submit an abstract to SPE, and if need be, to other organizations, in an effort to help teams publish
the results of their work.  The acceptance of any abstract depends solely on the program committees of such
venues.

    2023-2024 Guidelines Group A

     8 | Page

3.5.  Items posted on the website are part of these Guidelines

The Drillbotics website at <www.Drillbotics.com>  includes official updates to the competition guidelines
and schedule, as well as FAQs, photos, and previous entrants’ submittals and reports and numerous
reference documents.  Any updates to the guidelines posted on the Drillbotics website via FAQs or
blog entries from the Committee are considered to be an official revision to these Guidelines.

3.6.  Questions should be directed to the competition email at <competition@drillbotics.com>.  Teams
must provide the reference number of the section of the guideless when you ask questions.
Questions and answers will be incorporated into the FAQs periodically.

4. General  Competition Guidelines

4.1.  Entrants to Group A challenge have the option to sign up to do a well control challenge.  They will

need to use OpenLab Drilling simulator (<https://openlab.app/> ) with the D-WIS interface.

4.2.  Teams also have the option to work on a 2D or optional 3D steering challenge.  They will develop
a drilling system model that represents a full-scale system and corresponding control scheme to
virtually drill a directional well to a given trajectory as efficiently as possible within constraints of
safety and economics.

4.3.  The Group A challenge does not involve building a rig or drilling system. The teams will design
automation and control modules to develop a virtual drilling system (i.e., computer models) to
test and demonstrate the controls.  Teams that develop modules that can updated in future years
find that their code is stronger than a complete re-write.

4.4.  The Group B challenge requires the design, construction, and operation of a physical mini-rig to

physically drill a directional well to a given trajectory as efficiently as possible within constraints of
safety and economics.  Teams may work on a 2D or optional 3D steering challenge. The guidelines
for Group B are published separately.

4.5.  The contest covers only the drilling of one hole section.  There is no need to run casing.  There is

no need for automated pipe handling at the surface.  There is no logging or cementing.  This is just
a drilling problem.  However, teams should consider sampling and surveying and dealing with
uncertainty.

4.6.  Judges want to see evidence that teams know about drilling and modeling aspects of well

construction.  Because teams will either build or model a physical rig and downhole conditions,
they must specify the assumptions made about their project.  Allowing judges to understand
“why” you made certain choices affecting the evaluation of your project.

4.7.  While the teams will have to meet minimum competition requirements, any exceptional

contributions “above and beyond” the main theme will be rewarded with additional points to
encourage creativity and innovation.

4.8.  Teams are free to choose the hardware and software most suited to their design except where

explicitly specified.  Teams are free to choose any software language.  Judges would like to see an
explanation of the reason certain hardware or software was selected.

    2023-2024 Guidelines Group A

     9 | Page

4.9.  Teams are encouraged to review the design reports, presentations, and test recordings available
on the website, since these include designs that worked or didn’t work and students thoughts
about their earlier choices.

5. Team Members

5.1.  DSATS envisions that the students would be at least at the senior undergraduate or Masters level,
well versed in the disciplines needed for such a project.  The core team shall consist of at least
three (3) team members and no more than five (5).  Contributions from other team members is
allowed, and all contributors should be recognized in the Phase I Design Report.  The travel grant
for the winning team will be limited to five (5) team members and one (1) supervisor due to
budget constraints.

5.2.  Any team that loses team members during the project can recruit a replacement. Note any

changes to the team membership or the faculty advisor in the monthly reports.  Include the email
address of the new member(s).  At least one member of the core team must be a Petroleum
Engineering candidate with sufficient coursework completed to understand the physics relating to
the drilling problems and the normal industry practices used to mitigate the problem.  For
universities that do not have a petroleum engineering program, two schools may join efforts to
compete as a single entity (see 5.6)

5.3.  Students with a background in mining, applied mathematics, mechanical and electrical

engineering, as well as controls, mechatronics and automation or software development, are the
most likely candidates, but students with any applicable background is encouraged.

5.4.  A multi-disciplinary team simulates the working environment in the drilling industry today, as

most products and services are produced with the cooperation of technical personnel from
differing backgrounds and cultures.

5.5.  A university may enter more than one team in a group and may enter teams in one or both

groups.

5.6.  A collaboration between not more than two universities is allowed, especially where one school

may not offer a curriculum in a specific technical area needed to successfully conduct the project.
The resulting team may only submit one Phase I design report.  Also, the travel grant will still be
limited to five (5) students and one (1) supervisor.  Note: Any differences with intellectual
property ownership between the two schools must be settled by the teams and shall not involve
DSATS.

5.7.  Students shall register their team not later than 15 October using the registration form on the
Drillbotics website <https://drillbotics.com/guidelines/>.  Please indicate the challenge (Well
Control or 2D or 3D Steering) that the team will be participating in.

6. Safety

6.1.  The team’s safety plan should consider all foreseeable hazards and methods to mitigate them.
Personal protective equipment is part of a safety plan but is far from sufficient.  Teams must
consider risks due to handling the rock, rotating machinery, electrical shock and others.  What
health considerations are in place?  How the team communicates with each other before and
during operations is also important.  Judges will grade each team on its comprehensive safety
plan.  This applies to both Group A and Group B.

    2023-2024 Guidelines Group A

     10 | Page

6.2.  Because most of the Group B rigs have equipment spinning at high RPMs, some form of protective

cover must be included in the team’s rig design.  A broken coupling, a loose screw or similar item
becomes a projectile that can lead to serious injury to the team members, judges or visitors.
Judges may decide to deny a team from competing if their design is unsafe.  Similarly, Group A
teams may be excluded if they have not met proper health and safety considerations.

6.3.  The following links are a good starting point, but is by no means a comprehensive list of links:

6.3.1. OSHA Pocket Guide, Worker Safety Series:

<https://www.osha.gov/Publications/OSHA3252/3252.html>

6.3.2. OSHA Checklist for General Industry: <http://www.scosha.llronline.com/pdfs/genind.pdf>

7. Expenditures

7.1.  Teams selected to advance to the second phase must limit the cost of the physical or virtual rig

and materials to US$ 10,000 per year or its equivalent in other currencies.  Students may use
previous work and make changes within the US$10,000 annual limit.  The cost of transporting the
rig to any local test sites is excluded.  Student and supervisor travel is excluded.  The students
shall find a source of funding and report the source in the Phase I proposal.  All funding and
procurement should comply with university policy.  These funds are intended to cover the
majority of expenses for hardware, software and labor to construct and operate the team’s
equipment.  Teams will not be reimbursed for travel to any local competitions.  DSATS shall not be
liable for any expenditure other than DSATS provided material and specified travel expenses.
7.2.  DSATS will assist, when possible, to obtain free PLCs or similar control devices and software tools
from suppliers affiliated with the DSATS organization.   Such “in-kind” donations shall not be
included in the team’s project costs.

7.3.  Students and universities may use other “in-kind” contributions which will not be included in the
team’s project costs.  Such contributions may include modeling software, laboratory equipment
and supplies, and similar paraphernalia usually associated with university laboratory projects.
7.4.  Any team spending more than US$ 10,000, or its equivalent in other currencies, may be penalized

for running over budget.

7.5.  DSATS reserves the right to audit the team’s and university’s expenditures on this project.
7.6.  Any devices built for the project will become the property of the university and can be used in
future research and competitions.  Any maintenance or operating costs incurred after the
competition will not be paid by DSATS.

8. Other Considerations

8.1.  University coursework and credit: Each university will decide whether or not this project qualifies

as a credit(s) towards any degree program.

8.2.  The design concepts shall be developed by the student team under the supervision of the faculty.

Faculty and lab assistants should review the designs to ensure student safety.

8.3.  Construction of any equipment shall be supervised by the student team but may use skilled labor
such as welders and lab technicians.  The use of outside assistance shall be discussed in the

    2023-2024 Guidelines Group A

     11 | Page

reports and the final paper.  DSATS encourages the students to gain hands-on experience with the
construction of the rig since this experience will be helpful to the career of individuals in the
drilling industry.

8.4.  Teams building a virtual rig may create new models or improve models from other teams at the
same university or elsewhere.  Be aware of open source models from groups such as the Open
Source Drilling Community (<https://opensourcedrilling.org/>).  Teams must cite the original work
done by others.  Teams are also encouraged to share their models with the OSDC.

9. Project Timeline
Phase I - Design:

Fall 2023

Submit monthly reports

On or before the final day of each month starting in October

Submit final design to DSATS   31 Dec 2023, midnight UTC

Submit an abstract to DSATS*  31 Dec 2023, midnight UTC

Finalists to advance to Phase II

Announced in mid-February 2024

*DSATS will submit an abstract to the SPE that will include excerpts from the student abstracts by the conference paper-submittal

deadline, typically in mid-summer, for consideration of a paper by the conference program committee.

Phase II

Group A: Model enhancement/testing and controls development

Group B: Model & controls development/Construction

Group A and B Phase II Test

10. Project reports

Spring 2024

Spring 2024

May/June 2024

10.1.  Report File Names
To avoid extra work by the committee to rename all files, teams must use this convention for all
reports:

Monthly Reports

Year-Month# University Name (abbreviated) Note: this is the competition year (spring term.
Example: for the October 2023 entry from the University of Drillbotics Competition (UDC)

Use: 2024-10 UDC

Design reports
Year University Name (abbreviated) Note: this is the competition spring term.
Example: for the 2023- 2024 entry from the University of Drillbotics Competition (UDC)

Use: 2024 UDC Phase I Design Report

    2023-2024 Guidelines Group A

     12 | Page

 Monthly Report Contents

10.2.
Starting in October for the fall term, the student team shall submit to DSATS a short monthly project
report that is no more than one page in length (additional pages will be ignored) due on or before the
last day of each month.  Send all reports via email to  <competition@drillbotics.com> .  The monthly
report should include:

Phase I Monthly Report Contents
●  Key project activities over the past month.
●  Literature survey, rig modeling considerations, trade-offs, critical decision points etc.
●  New or replacement team members or faculty supervisors (include their email address)
●  Cost updates
●  Significant new learning, if any

Phase II Monthly Report Contents
●  Key project activities over the past month.
●  Model enhancements, controls development updates.
●  Preliminary results of exercising the drilling model and controls
●  Cost updates
●  Significant new learning, if any

10.3.  Other items of interest
To teach students that their work involves economic trade-offs, the monthly report should include the
economic basis of decisions for hardware or software.  It should also include at a minimum a summary
estimate of team member labor hours for each step in the project: modeling, controls, testing etc. and
a cost summary for hardware and software related expenditures.  Also include labor for non-students
that affect the cost of the project.  Labor rates are not considered, as to eliminate international
currency effects.  Labor is not considered in the cost limits of section 7.1 but should be discussed in the
reports.

10.4.  Phase I Design Report
Detailed requirements for each group are listed in their respective Appendix A.

10.5.  Final report, presentation and paper

10.5.1.

10.5.2.

The finalists shall prepare a project report that addresses items specific to each Group.
We suggest you use the format of most SPE papers.  For reference, please see
<http://spe.org/authors/resources/>.  This report may be submitted up to four weeks
after the final test.
Finalists shall prepare a pre-recorded presentation two weeks prior to the Phase II

test.  Judges will review the recording and prepare a list of questions for the Q&A

session that precedes the final test.  Numerous examples are available online at

    2023-2024 Guidelines Group A

     13 | Page

<https://drillbotics.com/archives/> and our YouTube channel

<https://www.youtube.com/channel/UCRTpKWHRiphNo6KeSqTcNyg>

10.5.3.

The reports, presentations, paper and all communications with DSATS shall be in the
English language.  The presentation must be made by at least one member of the
student team, not the team supervisor.

11. Group A and Group B Prizes

11.1.  The program committee of the Drilling Conference awarded the Drillbotics subcommittee a
permanent slot3 in one of the drilling sessions at the conference.  As per SPE’s customary
procedures, the paper will be archived in OnePetro.  In addition, SPE has agreed to furnish a
booth4 in the exhibition area during the conference where the team can erect their rig and
describe its operation to the conference attendees.  Alternately, Group A teams will have an
opportunity to showcase their simulation model at the booth.

11.2.  This is an excellent opportunity for students to network with the industry.
11.3.  The winning team, as determined by the conference program committee, will be asked to

submit a paper to present at the next SPE/IADC Drilling Conference.

11.4.  The Drilling Conference program committee will choose either a Group A or Group B winner to

present at the conference.  Only at their discretion will the second group receive an invitation to
present.  The Drillbotics Committee may fund both teams travel if it holds sufficient funds, which
will be determined a month before the Phase II test.

11.5.  The winning team will receive a travel grant5 to attend the Drilling Conference.  Note that this
is for a limited number of team members, not to exceed five (5) plus one (1) supervisor.  Pre-
approval of expenses is required.
11.5.1.

Upon submittal to DSATS of a valid expense statement of covered expenses (typically a
spreadsheet supported by written receipts) individuals will be reimbursed by the treasurer of
DSATS for the following:

11.5.2.

Round trip economy airfare for the team and one university sponsor/supervisor to the
gateway city of the next SPE/IADC Drilling Conference.  Entrants should use the SPE approved
carrier where possible to minimize cost.  Airfares that exceed the SPE rate must be pre-
approved by the committee, or the reimbursement will be limited to the SPE rate.
Information of reduced fare flights is available on the conference website. Please note that
reservations must be made before the SPE published deadline.  The departure point will be a
city near the university, the student’s home, or current place of work, subject to review by
the Committee.  Alternately, a mileage reimbursement will be made in lieu of airfare should

3 Subject to continued approval by the conference program committee.
4 Subject to continued approval by the SPE conference staff.
5 Travel authorization will depend on any international or local travel restrictions in place at the time of certain
events.

    2023-2024 Guidelines Group A

     14 | Page

the entrants decide to drive rather than fly to the conference.  The reimbursement is based
on current allowable mileage rates authorized by the US Internal Revenue Service.

11.5.3.
11.5.4.

One rental car/van at the gateway city for those teams that fly to the conference.
Lodging related to one hotel room or housing unit6 per team member will be

reimbursed at a rate not to exceed the SPE rate.  Note that the room reservations are
limited, so entrants must book their rooms early.  Room and taxes for the night before the
DSATS symposium, the night of the symposium and for the nights of the conference are
covered.  Charges for the room on the last day of the conference need to be pre-approved by
the Committee as most conference attendees depart on the last day of the conference
unless there are unusual circumstances.

11.5.5.

A per diem will be pre-approved by the Committee each year, which will vary with the

cost of living in the gateway city.  The per diem is intended to cover average meals
(breakfast, lunch and dinner) and incidentals.

11.5.6.

Conference registration will be reimbursed.  Students should register for the

conference at the student rate.  Early registration is appreciated.

11.6.

Individual award certificates will be presented to all participants upon request, with special
certificates given to all finalists.  Team members wanting a certificate should send an email to
<competition@Drillbotics.com> with the spelling of their name as they wish it to appear on the
certificate.

11.7.  DSATS may provide additional awards, at its sole discretion.
11.8.  The evaluation and all decisions on any matter in the competition by the Drillbotics judges and

DSATS board are final.

12. Terms and Conditions

12.1.

In no event will SPE, including its directors, officers, employees and agents, as well as DSATS
members and officers, and sponsors of the competition, be liable for any damages whatsoever,
including without limitation, direct, indirect, special, incidental, consequential, lost profits, or
punitive, whether based on contract, tort or any other legal theory, even if SPE or DSATS has been
advised of the possibility of such damages.

12.2.  By entering this competition,

12.2.1.

Participants and Universities agree to indemnify and hold harmless SPE, its directors,
officers, employees and agents, as well as DSATS members and officers, and sponsors of the
competition, from all liability, injuries, loss damages, costs or expenses (including attorneys’
fees) which are sustained, incurred or required arising out of participation by any parties
involved in the competition.

12.2.2.

Participants and Universities agree and acknowledge that participation in the
competition is an agreement to all of the rules, regulations, terms and conditions in this

6 A housing unit could be a shared property from such sources as Expedia, Air B&B or similar entities.

    2023-2024 Guidelines Group A

     15 | Page

document, including revisions and FAQs posted to the DSATS and Drillbotics websites (see
section 3.1).

12.2.3.

Winning teams and finalists must agree to the publication of their names, photographs

and final paper on the DSATS web site.

12.3.  All entries will be distributed to the Drillbotics Committee for the purpose of judging the

competition.  Personal information, such as email addresses will not be published, but could be
divulged to other teams being copied on competition emails.  Design features will not be
published until all teams have been judged and a winner is announced.  Previous years’
submittals, reports, photos and similar documentation will be publicly available to foster an open
exchange of information that will hopefully lead to faster learning for all participants, both new
and experienced.

12.4.  DSATS and the SPE cannot provide funding to sanctioned individuals and organizations per

current US law or the laws of nations that may host local contests.
12.5.  Participants must comply with all local laws applicable to this contest.

13. Marketing

13.1.  Upon request, DSATS will provide a link on its website to all participating universities.
13.2.

If university policy allows, various industry journals may send a reporter to witness the tests

and interview students to publicize the project.

13.3.  Drillbotics is now a registered trademark.  According to international law, the proper reference
is to use Drillbotics® instead of Drillbotics™.  The trademark reference is only needed the first
time Drillbotics is referenced.

13.4.  Any team that wishes to use the trademark on signs, tee shirts, technical papers or for other

purposes may receive a no-cost license upon request.  Send the request by email to the
committee at <competition@Drillbotics.com>.  Upon completion of the license agreement, access to
the files with the logo will be made available.  Unfortunately, trademark law requires us to
enforce this for everyone to maintain our trademark, so please ask for license before you use our
mark.

    2023-2024 Guidelines Group A

     16 | Page

Appendix A:  Group A Project Definition

A>  Phase I – Design Competition

a.  Prepare a safety plan at the beginning of the project and update it continually as needed.
b.  Consider how you will use Human Factors within your project to improve your team
processes and interactions with your model.  You should include such items as:

i.  Who are the operators of your drilling rig and how do their characteristics impact

the design?

ii.  Which functions of your drilling rig will be automated, and which will be manual

(refer to Ref. 2)?

iii.  How are you going to ensure that the operator remains 'in the loop' at all times?
iv.  The workflow that your drilling rig will follow (very important as this will guide

your interface design).

v.  The control and feedback needs for your defined operators.
vi.  The 'concept' of your interface design. This can be as simple as a 'wireframe'

drawing with pen and paper, but it should show an appreciation of Human Factors
Relevant Good Practice (refer to the resources provided below).

c.  Design Criteria

Teams must show the formulae used in their alrorithms.  Provide a table of the design
calculations used.
a)  Design submittal by the students shall include:

i.  Engineering drawings of the rig concept, simulated mechanical and electrical and

auxiliary systems, if any

b)  Design notes and calculations

i.  All engineering calculations shall be included in the Phase I report, even if the rig is
built using previous years’ designs.  This ensures that the 2022 team reviewed and
understood the previous design assumptions and calculations.

ii.  Calculations should include each formula considered in the design, a reference
that shows the origins of the formula, why is was chosen, what engineering
assumptions were made, a definition of all variables and the values used in the
calculation.

Example:

Buckling limit        Euler’s Equatio(1)

The critical buckling load, b𝑐𝑟, is calculated:

cite a reference here or in the reference
section of your design report

𝑃𝑏𝑐𝑟 = 𝜋2 ∗ 𝐸 ∗𝐼 /(𝐾∗ 𝐿)2

𝑃𝑏𝑐𝑟:     Critical buckling load
𝐸:          Modulus elasticity of the aluminum drill pipe
𝐼:          Area moment of inertia
𝐿:          Length of the column

    2023-2024 Guidelines Group A

     17 | Page

𝐾:          Column effective length factor (explain how you chose the appropriate k or n factor)

c)  The report should include a table that summarizes ALL calculations.

Example

Parameter

Symbol

Calculated Results
Metric
Field
Units
Units

Safety
Factor

Max Allowable
Metric
Field
Units
Units

Reference

(Other as
needed)

Critical buckling
load
Burst limit
Torque limit
… Other

d.  3D Steering Challenge:

i.  Determine the level of complexity you want for your model.  Previous teams

started with a plan to incorporate many complex features within their model but
were unable to deliver a working system in time for the Phase II test.  The
committee suggests you start out with an overall plan that allows you to first
create a working model and later add modules to increase its functionality and
fidelity.  Explain your choices.

ii.  Develop a model of the rig’s equipment, drillstring, BHA and bit and model a
directional well drilled through multiple targets.  Teams may choose a two-
dimensional well path or opt for a three-dimensional trajectory.  Three targets will
be provided just before the Phase II test with the third target in a different plane
that requires a turn as well as a drop.  There could even be a build to reach a
shallower depth.

iii.  The interface should use the vocabulary of the D-WIS semantics standard.  Please

refer to <https://d-wis.org/vocabulary-index/>.
iv.  See Section B below for additional information.

e.  Well Control Challenge:

i.  Review the OpenLab Drilling simulator (<https://openlab.app/>) application.  This

will be the simulator we will use for the well control challenge.

ii.  The interface should use the vocabulary of the D-WIS semantics standard.  Please

refer to <https://d-wis.org/vocabulary-index/>.

iii.  Teams will develop appropriate controls to detect and react to a well control issue

(e.g. a kick).

iv.  Test cases will be provided to the teams to test their control algorithm prior to the

Phase II test.

    2023-2024 Guidelines Group A

     18 | Page

v.  Teams will have to develop a user interface allowing the judges to monitor the

drilling state.

vi.  See Section C below for additional information.

f.  Phase I Design Report

The design submittal by the students shall include:

Student Biographies

i.
ii.  Name
iii.  Previous degree attained – major
iv.  Current degree and expected graduation date (month/year)
v.  Main area of contribution to the project
vi.  Other information as deemed appropriate by the team
vii.  A description of your safety plan that is appropriate for the project
viii.  Your process for including human factors in the design and implementation of the

ix.

model.
Simplified engineering sketches or drawings of the rig concept, mechanical and
electrical and auxiliary systems, if any, that explain your design assumptions.  Teams
should recognize that they should model the rig capabilities with realistic limits for
surface equipment and downhole tools.  Consideration of time delays and
measurement errors that mimic realistic rig systems increase the fidelity of your
model.

x.  Where applicable, include any design notes and calculations regarding the rig,

drillstring and other limitations for the particular modules used in your models.  For
example, if the model has a module to adjust drilling parameters to avoid buckling of
the drillstring, show how you calculated the weight on bit limits.

xi.  A block diagram/flowchart of the modeled control system architecture is required.
Describe the key features.  The response time of measurements, data aggregation
and control algorithms should be estimated. Explain how individual measurements
are used in the control code.  Are they all given equal weight, and if not, what criteria
is used to assign importance?

xii.  Proposed user interface/data display that shows the progress of the model in real

time.

xiii.  Cost estimate and funding plan
xiv.  A design summary video used to outline the design submittal not to exceed five (5)

minutes in length.  Videos shall be the property of the university, but DSATS shall
have the right to use the videos on its websites and in its meetings or events.
xv.  Key features for any models and control software.  What drilling dysfunctions are

xvi.

modeled and how are they mitigated?
If you are modeling sensors, explain how specific sensors and sensor data is modeled.
What did you learn from modeling sensors?

xvii.  Proposed model for data handling, i.e., inherent time delays and uncertainty.

    2023-2024 Guidelines Group A

     19 | Page

1. The speed or rate of time of the model versus the simulated drilling time.  Is this

continuous or can certain intervals be slowed as needed?

2. The Phase I design report should include a discussion regarding the major design

concept as modeled (mechanical and otherwise) with respect to the feasibility for use on
today’s working rigs?  If not, what would be needed to allow implementation?

g.  Phase I Evaluation

i.  The judges will review the design reports and rank teams using the same criteria as the

Phase II evaluation information below.

ii.  The results will be announced in mid-February with comments that teams may want to

incorporate into their Phase II efforts.

iii.  The committee will advance as many teams as is economically possible as finalists for

Phase II.

B> 3D Steering Challenge Design Criteria

a.  Overview

Teams will create a digital twin of a full-scale rig of their choice to drill a directional well virtually.  The
Drillbotics committee will provide certain information in advance but will not provide the actual well
targets until the day of the Phase II test.  The following attached pages describe the directional
objectives as well as the data/deliverables requirements. Scoring for the directional competition
objective will be primarily based on how accurately the directional targets are intersected by the
calculated well trajectory.  An example of the criteria for scoring is included below.

The end goal is for teams to develop a virtual drilling model and a control model to drill a well
virtually. The details in the sections below are some recommendations on what you will have to
consider when building the virtual drilling model. You and your team will have to determine what
physics of the drilling process you want to model. But keep in mind that the competition challenge is
to drill a directional well virtually to specified targets.

1. Teams should list key rig equipment used in their model and describe any specific equipment
limitations.  For example, if the team uses a top drive for torque and rotation, indicate what
model top drive is modeled.  Consider items such as maximum torque at a specific RPM.
Teams should understand if their model requests torque or speed in excess of the equipment
limits it negatively affects the fidelity of their model.

2. The rig model will typically consist of a hoist, usually a drawworks with drill line on a drum, a
top drive providing the torque and RPM.  The RPM, Torque, and Hookload are measurements
taken at the rig model and will be inputs into the Control System.

3. The downhole drilling system model should predict bit trajectory for given WOB, RPM, drive
mechanism parameters (e.g. steering force, AKO angle), and rock strength – as a function of
measured depth. While the teams are empowered to decide on the complexity of the
simulation model, the minimum requirements are stated below.

    2023-2024 Guidelines Group A

     20 | Page

4. Another consideration is the delays inherent in taking surveys.  If your model assumes

continuous surveys only available with high-speed telemetry systems, that should be stated in
your list of assumptions.  If you assume that the survey is coming from a MWD or RSS tool, use
frequencies and intervals that are more realistic to those systems.

5. Consider the impact of survey errors and cumulative errors for your model to make it more

realistic.

6. Determine the appropriate update rates for each cycle within your model.  Depending on how

b.

simple or complex your design your system, this may be one rate for the entire model or you
may have some modules running at a different rate.  If so, explain how you manage the
synchronization of time across various modules.
a.  Teams may choose to iterate based on time or depth, but they must ensure that survey
course lengths are appropriate for the dogleg severities being surveyed. It’s typically
recommended to not have survey intervals exceed 10m-13m (30ft – 50ft) in length for
accurate wellbore placement. This should be considered in the control scheme if time-
based survey intervals are being used.
If you include modules to introduce drilling dysfunction and mitigation techniques, you
may increase the functionality of your overall model but risk not meeting the project
timeline or ending up with stability issues with you model.  Explain how you chose which
items to include or exclude.
If you do choose to simulate full-scale rig effects, explain what frequencies you selected
appropriate for the dynamics of the drilling system both at surface and downhole.  Or you
may have chosen a simpler design just for lab use.  Discussion of such choices should be
included in the design report.
If you choose to include alerts for equipment or drilling dysfunctions, consider a plan for
managing alerts that inform the observer without overwhelming them with too many
alerts.  Consider some of the references in Appendix C.
e.  Additional optional items for the directional drilling option:

d.

c.

i.  If you choose a course that does not intersect with a target, but lies within an

acceptable proximity to the target, explain your choice.

ii.  Since this is a directional drilling problem, be sure to include how simulated downhole

data is used for steering and other drilling aspects?  Judges are looking for a
description of the principles being applied to directionally steer the wellbore and hit
the required targets.

b.  Objectives

1. Hit one or more targets at one or more vertical depth(s) and X/Y coordinates.
2. For the Group B competition, the starting directional plan to hit the targets will not

require wellbore inclinations in excess of 30° from vertical, 15° change in azimuth, or
10” displacement (departure from the vertical axis at well center) The max
displacement/inclination/azimuth are total/accumulated from the start to the end of
the well path.

    2023-2024 Guidelines Group A

     21 | Page

3.  Please note: Teams should be prepared to drill any given trajectory within the

specified parameters, so the coordinates will not be provided in advance of the test.

c.  Automation Requirements

Drilling mode/survey mode switching must be automated (i.e. built-in survey interval and drill
string movement for on/off-bottom, slide/rotation mode switching).  Teams may select how
many surveys, survey frequency, and whether surveys will be made on or off bottom.  Displays
should show when surveys are being taken.

d.  Steering

a.  Steering requirements (e.g. toolface direction, slide length) must be calculated

autonomously

b.  The steering model takes inputs from the Bit Model and BHA Model to predict trajectory.
A control system will also interface with the Steering Model and update parameters (such
as pad force, AKO orientation, WOB, RPM, etc) accordingly.

c.  Orientation of steering mechanism must be calculated by the system and shown on the rig

floor display.

d.  An RSS or AKO motor BHA will be specified on the day of the Phase II test. Thus, the model

should be capable of simulating both steering systems.

e.  Surveys

a.  Directional surveying process must be entirely autonomous
b.  Survey qualification must be done autonomously, however secondary

qualification/verification/override can be made by a human

c.  Dogleg severity required to hit target(s), distance/direction to plan must be autonomously

calculated at each survey station and shown on the rig floor display

f.  Deliverables Requirements (Magnetic surveying)

a.  All teams are required to provide a definitive directional survey (TXT, LAS, or CSV format)

meeting the following minimum requirements:

b.  Header info to include:
i.  Team/school name
ii.  Directional Survey Date
iii.  Well Center Coordinates (WGS84 Latitude & Longitude)
iv.  True Vertical Depth Reference (in depth units above block level)
v.  Grid Convergence
vi.  Geomagnetic model used (if applicable)
vii.  Magnetic declination applied (Geomagnetic model or in-field referenced)
viii.  Total Azimuth Correction
ix.  Magnetic field dip reference (Geomagnetic model or in-field referenced)
x.  Total magnetic field strength reference (Geomagnetic model or in-field referenced)
xi.  Error model associated with well trajectory (ISCWSA/OWSG error model or otherwise)

    2023-2024 Guidelines Group A

     22 | Page

1.

If non-standard error model is being used (i.e., formulas being modified and/or
coefficients being changed), error model description (using standard
variable/coefficient naming conventions) and justification must be included in
project design

c.  Minimum Curvature calculated trajectory (using appropriate survey station interval to

accurately represent the drilled wellbore position)
i.  Each survey station is to include the following data:

2. Measured Depth
3.

Inclination
4.  Azimuth (referenced to “block north”)
5.  True Vertical Depth
6.  Northing (from well center)
7.  Easting (from well center)
8.  Dogleg Severity

ii.  Final survey station is to be an extrapolation to total depth at the bit

g.  Plots

a.  All teams are required to provide plan vs. actual plots containing the following minimum

requirements:

b.  As-drilled trajectory and original planned trajectory shown on same TVD vs.
c.  Vertical Section plot

i.  Vertical section direction to be determined by well center-to-target bearing
ii.  As-drilled trajectory and original planned trajectory shown on same X/Y plot
iii.  Grid north reference to “block north”
iv.  [0,0] at well center

h.  Data Logs

a.  All teams are required to provide directional survey raw data logs containing the following

minimum requirements:

b.  Each log entry is to include the following data:

i.  Time stamp (containing year, month, date, hour, minute, second)
ii.  Sensor measured depth
iii.  Downhole sensor value(s) recorded

o  Sensor axes values
o  Calculated survey qualifier values

iv.  Accepted survey indicator (if log entry is an intended survey station)

o

If secondary (i.e., human) qualification is also used, both acceptance indicators
must be shown

i.  Formation Characteristics

i.  DSATS will furnish a formation model immediately prior to the Phase II test.
ii.  Teams should prepare in advance to import or manually enter the data, as they prefer.

    2023-2024 Guidelines Group A

     23 | Page

iii.  The formation model should be defined by rock type, UCS, and confining pressure. At

each simulation step increment, the bit drills and extends the wellbore. While
calculation of explicit contact forces with the wellbore are not mandatory, the build
rate will still change due to newly formed wellbore geometry and changing rock
strength.  This phenomenon must be taken into effect accurately.  Teams can assume
a 2D wellbore and thus develop a 2D drilling propagation model. The format for the
formation data will be provided in late November.

j.  Targets

The targets will not be available until immediately prior to the Phase II test.  However, the
starting directional plan to hit the targets will not require wellbore inclinations in excess of 30°
from vertical, 15° change in azimuth.  Note: This is a maximum.  Be prepared for much smaller
build rates.

k.  Trajectory

Teams shall choose their own trajectory to optimize the drilling, the well path and closeness to
the given targets.  This should be computed autonomously after the targets are manually
entered.  Limit the scope to 2-D for both the steering model as well as the formation model
for BHA/bit deflection behavior.

l.  Bit Model

i.  The bit model can be as simple as the equivalent model of Pessier et al. (1992) with
appropriate framework for steerability such as bit anisotropy and bit tilt such as
Menand et al. (2012). Effect of key parameters such as gauge length, drilling efficiency
(MSE-DOC relationship) should be included. Inclusion of bit wear effects is not
mandatory.  For the purposes of this challenge, the bit model provided is sufficient.  If
teams wish to use a different bit, the directional bit behavior modeling assumptions
should be clearly stated. The implementation (or sub-models) should be verified
against published data such as Menand et al. (2012).

ii.  DSATS has provided the following bit model for the Phase II test.

1.

Input:

a.  Formation Aggressiveness (provided by Contest),
b.  Bit Aggressiveness Factor between 0.7 and 1.3 (Contestants will select

a bit with this value, which remains constant through the run.),

c.  Weight-on-Bit,
d.  Bit RPM,
e.  Drilling Efficiency (provided by contest, “Eff” = 0.35),
f.  Bit Diameter (“D”) (provided by Contest),
g.  Formation confined compressive strength (“CCS”) (provided by

Contest according to a formation model/prognosis),

    2023-2024 Guidelines Group A

     24 | Page

h.  Side cutting factor (provided by Contest, a constant value associated
with a particular bit. Different bits are more laterally aggressive than
others. Teams will either be assigned a bit with a particular Side
cutting factor, or be forced to choose among bits with different side
cutting factors.), Side force (provided by the Team’s drillstring model)

2. Output:

a.  Axial Rate of Penetration
b.  Lateral Rate of Penetration
c.  Bit Torque
d.  mu = formation_aggressivenss*bit_aggressiveness_factor;

e.  ROP = (13.33*RPM.*mu.*WOB)*(Eff)/(D*CCS); % [ft/hr]; Derived from

Teale MSE concept (1965).

f.  TOB = D*(mu.*WOB)./36; % [ft-lbs]; Derived from Pessier and Fear,

SPE 24584 (1992)

g.  ROP lateral = side_cutting_factor*side_force*RPM/(D*CCS); % [ft/hr]

iii.  The bit model currently provided is:

function [ROP, ROPlateral, TOB] =
rop_tob_drillbotics(formation_aggressivenss,
bit_aggressiveness_factor, WOB,RPM,Eff, D, CCS,
side_force, side_cutting_factor)

%% This function predicts ROP, Lateral ROP of the bit,
and Bit Torque
% Output Variables, Units:
% ROP, [ft/hr] (axial ROP)
% ROPlateral, [ft/hr] (lateral ROP)
% TOB, [ft-lbs] (bit torque)

% Input Variables, Units:
% formation_aggressivenss, [ ] (drilling agressiveness,
Torque/WOB ratio
% which is heavily influenced by formation type. based
on paper by
% Pessier and Fear in SPE 24584 (1992)) Contest will
provide this.
% bit_aggressiveness_factor, [ ] (range from 0.7 for
unaggressive bits to
% 1.3 for aggressive bits) Contestants or contest will
choose a bit

    2023-2024 Guidelines Group A

     25 | Page

% which will have an associated
bit_aggressiveness_factor.
% WOB, [lbs] (axial force on the bit)
% RPM, [RPM} (revolutions per minute of the bit)
% Eff, [ ] (drilling efficiency, usually 0.3 to 0.4)
% D, [inches] (bit diameter)
% CCS, [psi] (confined compressive strength of the rock)
% side_cutting_factor, [ ] (scaling factor for side
cutting aggressiveness
% of the bit)

mu = formation_aggressivenss*bit_aggressiveness_factor;

ROP = (13.33*RPM.*mu.*WOB)*(Eff)/(D*CCS); % [ft/hr];
Derived from Teale MSE
concept (1965).

TOB = D*(mu.*WOB)./36; % [ft-lbs]; Derived from Pessier
and Fear, SPE 24584
(1992)

ROPlateral = side_cutting_factor*side_force*RPM/(D*CCS);
% [ft/hr]

End

iv.  If teams wish to provide their own bit model, please explain why they want a separate
bit model and please provide the code at least three (3) weeks prior to the Phase II
test.

m.  Drillstring

i.  Teams should specify the physical characteristics of the drillstring used in their

analysis.

ii.  The Drillstring may be represented by one or more models.  These models will have to

do the following:

iii.  Calculate torque and drag for a 2D or 3D survey, with hook load, mud weight, drill

string/BHA dimensions, sheave friction and variable friction factors along the wellbore
as inputs.  Using this data, the model will be able to predict downhole WOB and
available torque at the bit, which will be used as input to the Bit Models.

    2023-2024 Guidelines Group A

     26 | Page

iv.  The Drillstring Model(s) must also calculate buckling conditions.  Drilling ahead in

simulation will not be allowed if the Drillstring is buckling at any point along the
Drillstring.

v.  The Drillstring Model(s) must be able to simulate torsional oscillations (slow ones, like
stick slip).  It must be made up of multiple torsional spring elements and have friction
damping from wellbore contact.  Bit behavior in different rocks and at different
WOB/RPM settings will cause stick slip, and the Control System for the top drive must
be able to counteract stick slip automatically when it appears.

vi.  Please do not attempt to model lateral vibrations of the Drillstring or BHA.
vii.  The BHA must be modeled so that contact force at the bit and bit tilt are computed to
be used in the steering model.  Generally speaking, 100 ft. of the BHA within the
wellbore needs to be modeled in order for correct bit side force and bit tilt
computations. The resulting behavior of drive mechanism should be modeled.  The
BHA should also (virtually) measure certain parameters (such as inclination, RPM,
vibration etc.) and return to the surface or the control system. The bit-to-sensor
distance as well as measurement frequency (i.e., intermittent vs continuous survey)
should be configurable parameters in the design.

viii.  Teams are not required, but may consider whether their model assumes that the pipe

will be subject to the same radius of curvature as the well trajectory. Consideration
should include drill pipe, connections and BHA (versus one continuous section of drill
pipe). What are the external bending moments and forces? How will this affect
stress/strain? The pipe clearance from the wellbore wall may allow it to have a less
severe bend and the connection points would also influence the stress/strain of the
pipe body. Another question is whether plastic deformation should be allowed?

4.

C>  Well Control Criteria
a.  Overview

Teams will use the OpenLab Drilling simulator (<https://openlab.app/>) as the model for the drilling
process and develop appropriate controls to detect and control a well control issue.

i.  We will package in a Docker container an OPC UA server with the D-WIS connectivity

from which the students can connect to the OpenLab Drilling simulator.

ii.  Each team will run the Docker image on their computer.
iii.  Their program can access the local OPC-UA following the D-WIS interface and they can
send set-points to the simulator and receive measurements from the virtual sensors
on the simulator.

iv.  The Docker image will make it possible to access a few different test cases.
v.  The day of the competition, we will change the access to the simulator on one of the
accessible test cases where we will have prepared a different drilling configuration.

    2023-2024 Guidelines Group A

     27 | Page

vi.  The trajectory, wellbore geometry, geo-pressure margins, drilling fluid characteristics,
drill-string, available sensors at the rig will all be different for each of the available
training cases and will be again different during the day of the competition. So the
controls software shall rely on the D-WIS interface to discover which signals are
available for each of the cases.

vii.  The cases are centered around experiencing a kick during connection in water-based
mud, i.e., analysis of the flow-back pattern when the mud pumps are turned off (and
on). This is a typical scenario for a well control event for which the simulator will
provide realistic responses. However, the responses are very different depending on
the rig configuration, the length of the well, the compressibility and temperature of
the mud, etc.

So, to summarize, the team’s  work will be to control the drilling machines (top-drive, hoisting, mud-
pumps) to start drilling a stand, drill the stand and then start the connection procedure. The internal
geopressured margins will be different from what the case describes and depending on how they have
drilled the stand, they will get (or not) a kick with relatively variable appearance.

D>  General guidelines for both challenges (Well Control and 3D Steering)

a.  Automated Drilling

i.  After initiating the model it should run until completion without human involvement.

Remote operation and/or intervention is not allowed.

ii.  Teams may choose the level of complexity for their model.  The following is only one

example of a typical control system that may include the following elements:

1. Drilling Optimization: Optimize set point commands for drilling parameters
such as WOB, RPM, etc. such that drilling performance and steering are
optimized (according to each team’s definition of “optimized performance”).
Such real-time optimization should be done automatically.

2. Trajectory Control: For the 3D Steering Challenge, steer the well according to
the given well plan. The objective is both to minimize trajectory error and
wellbore tortuosity. Virtual surveys should be acquired and be used as
feedback for the steering control logic.   Be prepared to model a push-the-bit
RSS and a bent motor AKO. The steering model should include considerations
for how often the survey is taken and how far from the bit the sensors are
placed (e.g., projecting from the survey depth to the bit, and the control
system using survey information to decide steering parameters).
3. Rig Display: Real-time display of the drilling parameters and wellbore
positioning during the final testing is mandatory. End of well report
immediately after the competition is mandatory.

4. Set Point Control: Although set point control, i.e., automatic control of drilling
parameters as per optimal set points, is an integral element of the drilling
systems, this competition does not make it mandatory to reduce complexity. It

    2023-2024 Guidelines Group A

     28 | Page

can be assumed that the surface parameters such as WOB and RPM reach the
BHA, making quasi-static modeling sufficient. However, the teams are
encouraged to go “above and beyond” and demonstrate set point control
independent of trajectory drilling. For example, the WOB and RPM control
could be implemented for the virtual drill rig with a suitable mechanism for
applying WOB (e.g., dead weight and drawworks), RPM (e.g., top drive), etc.
Characteristics for each sub-system could be assumed realistically (e.g., top
drive motor characteristics with RPM-torque relationship). Other examples
include slide/rotate mode control.

b.  Coding

i.  The entire code should be written with a modular design with functions/subroutines
for each sub-system. The drilling system model should be a separate application that
interacts with the control system. Appropriate interfaces (APIs) should be developed
for interoperability and deployment.

ii.  Note that code for some modules is available on the website of the Open Source

Drilling Community.  Go to their GitHub page for the models.  If teams use any of these
models, please be sure to cite the source and give a brief explanation of how the
model works and why you chose it.  Also consider joining the community and
eventually sharing your contributions.

iii.  Teams are encouraged to share their code to promote the learning spirit. Such sharing
can occur during or after the final presentations, or after securing any IP protection, at
the discretion of the teams. However, release of codes is not mandatory and will not
count towards the final score.

c.  Data visualization

i.  Teams must provide a display  to observe the status of the model.
ii.  Novel ways of presenting the data and progress of drilling in real time will receive

particular attention from the judges.

iii.  Visualization of any processes (automation, optimization, drilling state, etc.) should be
intuitive and easily understood by the judges, who will view this from the perspective
of the driller operating a rig equipped with automated controls.

iv.  All depths shall use the industry-standard datum of rotary/kelly bushing interface

(RKB), which should be the top of the rig’s “drill floor.”

d.  Phase I design Report

i.  Teams will submit a detailed report containing detailed literature review, model

assumptions, overall plan of the virtual system, including the system architecture,
different layers (such as data layer, control layer etc.), mathematical framework for
modeling and control schemes, a plan for implementation, and relevant details. It is
preferable to include a special section for the API, if other systems need to interact

    2023-2024 Guidelines Group A

     29 | Page

with your system.  Preliminary results from the virtual drilling rig model should be
included, along with a discussion on the results.

ii.  There are numerous examples of previous reports on the Drillbotics website.  Feel free

to use this as a resource.  Should a team choose to use the concepts in previous
reports in their design, be sure to cite the source of the information to avoid
plagiarism concerns.

E> Phase II – Drilling Competition

a.  Phase II Activities

i.  Teams will continue to develop and tune their models.
ii.  Monthly progress reports are due at the end of each month.
iii.  Teams will deliver a pre-recorded presentation for the Phase II test two weeks prior to

the test:

1. The students will present a BRIEF summary of their final design, highlighting
changes from their Phase I design, if any. Include an explanation of why any
changes were necessary, as this indicates to the judges how much students
learned during the design and construction process.  Explain what key features
have been deployed.  Describe novel developments or things learned that
were worthwhile.  Also include how actual expenses compared with the initial
estimate.    At some time during your talk, let us know who the team members
are and what background they have that pertains to the project.  Try to
include all your team members as presenters, not just one spokesperson.  The
committee wants to see if all team members have a good understanding of
key issues.

2. Previous teams used a short PowerPoint presentation of about ten slides or

so.  Use any format you like.

b.  Phase II Testing

i.  In the spring term of 2022-2023, qualifying teams will present their model to

efficiently drill a deviated well to hit the required targets while controlling drilling
dysfunctions as the primary technical objective of the competition.

ii.  The contest will begin with streaming of a pre-recorded presentation by each team.
This will be followed by a period of questions and answers (Q&A) via on-line or in-
person or a hybrid of both.  Teams will draw lots to determine the order of
presentation.  All teams may sit in for the presentations and Q&A of the other teams.

iii.  Depending on the time available, the actual test will start shortly after the last

presentation of the day.  It is possible that the presentations and tests could take two
days to complete.

    2023-2024 Guidelines Group A

     30 | Page

iv.  While sharing of code is not mandatory, the presentations should include the details of

the control schemes. Organizers can be contacted in case of any confidentiality
requirements.

v.  The drilling plan will be presented to the teams on the day of competition.
vi.  The rock properties will be provided as a function of true vertical depth or measured

depth at that time.

vii.  An RSS or AKO motor BHA will be specified on the day of the competition. Thus, the

model should be capable of simulating both steering systems.

viii.  Drillbotics may provide data to calibrate sub-models such as the bit model. Additional

details will be released during Phase II.

ix.  The teams are given a maximum of three hours to virtually drill the well. Students
are allowed to debug/modify the code and use multiple attempts within the allotted
time.

c.  Evaluation

i.  Teams will be evaluated on a per model basis.  Points will be given for having each
model or control system present and functioning in a realistic manner.  A team that
predicts the trajectory the best but is missing a model of the rig will earn fewer points
than a team that has all the models and control systems from bit to rig.  The purpose is
to model the entire system and have the sub-models behave realistically.

ii.  The set point control is not a mandatory item for the competition. Any demonstration

of such capability will attract extra points in “above and beyond” category.

Scoring of the 3D steering challenge will be primarily based on the following criteria, with the
weighting of individual items as indicated:

Criteria

Metrics

Weight

Drilling system model

Does steering model consider steering method, geometry (e.g., projection-to-bit
algorithm), bit side force/tilt, new wellbore, etc.? Are string elasticity, wellbore
friction modeled?

Control scheme

Does trajectory control algorithm use realistic constraints? Does it use realistic
virtual measurements? Does it consider surveying uncertainties and noise? Does the
model utilize a re-planning to target process based on as-drilled surveys?  Is basic
drilling optimization algorithm implemented? Are rig controls simulated? (e.g., slide
vs rotate)

The Virtual Drilling App

Features, modularity, and robustness of the app, real-time display, end of well
report

Performance

Demonstration of the app and the degree to which drilling objectives are met

30

30

20

20

    2023-2024 Guidelines Group A

     31 | Page

Bonus

Considerations above and beyond the minimum requirements that demonstrate
thoroughness and creativity

Maximum achievable score out of 100

10

110

Scoring of the well control challenge will be primarily based on the following criteria, with the weighting of
individual items as indicated:

Criteria

Metrics

Weight

Control scheme

Does control algorithm use realistic constraints? Does it use realistic virtual
measurements? Does it consider uncertainties and noise?

The Virtual Drilling App

Features, modularity, and robustness of the app, real-time display, end of well
report

Performance

Demonstration of the app and the degree to which drilling objectives are met

Bonus

Considerations above and beyond the minimum requirements that demonstrate
thoroughness and creativity

Maximum achievable score out of 100

50

30

20

10

110

Drilling performance will be observed and measured by Drillbotics judges invited to attend and witness the
test. This could be an in-person or virtual event depending on travel restrictions.  The details will be announced
in April 2022.

F>  Final Report and Paper

The finalists shall prepare a project report that addresses the items below.  We suggest you use the format of
most SPE papers.  For reference, please see <http://spe.org/authors/resources/>

a.  The final report is simply an update following the Phase II test to explain what worked and

what did not and to discuss future plans that would improve your design.

b.  The winning team in Group A will need to start work on an abstract for their paper shortly

c.

after the Phase II test results are announced.
If the abstract is accepted, in August or September, the team needs to start writing their SPE
paper.  The abstract must generate sufficient interest with the SPE review committees to
warrant publication, although DSATS will help promote acceptance elsewhere if necessary.

    2023-2024 Guidelines Group A

     32 | Page

d.  The timing for submission of the abstract and paper will be the published deadlines per the call

for papers and conference guidelines as posted on the SPE’s website (<www.spe.org>).

e.  The paper should address at a minimum:

1. The technical considerations for the model of the rig, its control system,

drillstring including BHA and why certain features were chosen and why others
were rejected.

2. The setup of the experimental test, the results and shortcomings.
3. Recommendations for improvements to the design and testing procedures.
4. Recommendations for improvements by DSATS of the competition guidelines,

scheduling and provided material.

5. Areas of learning gained through the competition not covered in the university

6.

course material
 Note that the SPE audience already knows a lot of the background
information that you presented the judges to demonstrate your capabilities,
so adjust the paper content accordingly.

    2023-2024 Guidelines Group A

     33 | Page

Appendix B: Automation & Interface Design from a Human Factors

Perspective

Background on Automation

Any complex, engineered system that is wholly reliant upon human operators to achieve its goal is
likely to experience issues. Humans are inconsistent when performing monitoring tasks, they tend to
not make wholly rational decisions, are impacted by external factors and are prone to error. As
technology advances and complexity increases (such as the control regimes proposed in remote
drilling operations for example) such issues become more prevalent. However, many of the issues
associated with such complexity can be countered by reallocating certain tasks to automation.

The concept that 'machines' (read automation) are better at some tasks than humans and vice versa
has been prevalent for decades. The original incarnation of this notion was presented in 'Fitts List' [Ref.
1]. 'Fitts List' is 11 statements designed to provide guidance on 'what humans are best at' compared to
'what machines are best at' for example:

Humans surpass machines in respect to
-

'Their ability to improvise and use flexible procedures'

Machines surpass humans in respect to
-

'Their ability to handle highly complex operations i.e., to do many different things at once'.

Although Fitts List was originally published in 1951, the vast majority of the statements still ring true
today (after all humans have changed very little in the last 70 years) but with advances in research and
technology, automation is now viewed on a sliding scale (from wholly manual to wholly autonomous)
This has recently been subject to consideration by the Drilling Systems Automation Roadmap who
have chosen to adopt a 10-point level of automation taxonomy as follows [Ref. 2]:

1. The computer offers no assistance, and the human must do it all
2. The computer suggests alternative ways to do the task and the human selects from those
suggestions and executes the task
3. The computer selects one way to do the task, which triggers five possible scenarios
including:

-
-
-
-
-

the human executes that selection
the computer executes that suggestion if the human approves
the computer allows the human a restricted time to veto before automatic execution
the computer executes the suggestion automatically necessarily informs the human
the computer executes the suggestion automatically and informs the human only if asked

4. The computer selects the method, executes the task, and ignores the human.

Superficially, for highly complex systems, it may appear that there are very few downsides to providing
very high levels of automation with little to no required user input. However, as is often stated, there

    2023-2024 Guidelines Group A

     34 | Page

is no such thing as a 'free lunch' and there are often overlooked downsides to providing high levels of
automation usually termed the ‘Ironies of Automation’ [Ref. 3] which must be suitably managed. Two
examples of this are:

Any autonomous system is ultimately conceived and designed by humans – Attempts

1.

to design out the human merely shift the responsibility further up the chain. Operators
involuntarily inherit the biases and Performance Shaping Factors that influenced the design
team.
2.
The autonomous system cannot account for unforeseeable scenarios – This is one of
the predominant reasons humans remain part of complex systems, to address the ‘unknown
unknowns’. However, expecting human operators to flip between a passive ‘monitoring’ role
and an active ‘doing’ role is difficult to achieve, they may be ‘out of the loop’ and their
Situation Awareness may be compromised.

Maintaining appropriate levels of automation and ensuring that your ‘projected’ drilling operator
remains ‘in the loop’ through good interface design will be one of the key challenges you will face in
the Drillbotics competition.

Resources

The following resources have been selected to assist you in the design of your drilling interface and the
levels of autonomy you decide upon. Where possible free resources have been chosen (either
available through OnePetro or elsewhere on the Internet) but two textbooks have also been selected
as they offer an excellent primer on usability heuristics and the importance of good design.

1. de Winter JCF, Hancock PA. Reflections on the 1951 Fitts List: Do Humans Believe Now that
Machines Surpass them? Procedia Manufacturing. 2015;3:5334–41.

Useful for reference, refer to Table 1 in particular for the original Fitts list.

2. Parasuraman R, Sheridan TB, Wickens CD. A model for types and levels of human interaction with
automation. IEEE Trans Syst, Man, Cybern A. 2000 May;30(3):286–97.

Automation taxonomy chosen by the DSA.

3. HUMANFACTORS101. The Ironies of Automation [Internet]. Human Factors 101. 2020 [cited 2021
Sep 9]. Available from: <https://humanfactors101.com/2020/05/24/the-ironies-of-automation/>

A condensed version of the so called 'ironies of automation' as originally written by Lisanne

Bainbridge.

4. Norman DA. The design of everyday things. Revised and expanded edition. New York, New York:
Basic Books; 2013. 347 p.

A seminal text, a little dated in terms of examples but provides great insight into the impact of

poor design.

    2023-2024 Guidelines Group A

     35 | Page

5. Lidwell W, Holden K, Butler J. Universal principles of design: 125 ways to enhance usability, influence
perception, increase appeal, make better design decisions, and teach through design ; [25 additional
design principles ]. rev. and updated. Beverly, Mass: Rockport Publ; 2010. 272 p.

An excellent 'style guide' to assist in designing your drilling interface.

6. Lauche K, Sawaryn SJ, Thorogood JL. Human-Factors Implications of Remote Drilling Operations: A
Case Study From the North Sea. SPE Drilling & Completion. 2009 Mar 15;24(01):7–14.

Consideration of the implications of remote drilling operations from an impact on current work

practices perspective.

7. Experience WL in R-BU. 10 Usability Heuristics for User Interface Design [Internet]. Nielsen Norman
Group. [cited 2021 Sep 9]. Available from: <https://www.nngroup.com/articles/ten-usability-heuristics/>

A condensed take on a number of key usability heuristics.

8. Human factors/ergonomics – Alarm management [Internet]. [cited 2021 Sep 29]. Available from:
<https://www.hse.gov.uk/humanfactors/topics/alarm-management.htm>

HSE background information on alarm management and prioritisation.

9. EEMUA Publication 191 Alarm systems - a guide to design, management and procurement. Available
from: <https://www.eemua.org/Products/Publications/Digital/EEMUA-Publication-191.aspx>

This is a lengthy publication dedicated to alarm system design, will be useful for additional,

wider reading. EEMUA membership is required otherwise the document requires payment.

10. Henderson J, Wright K, Brazier A, Great Britain, Health and Safety Executive. Human factors aspects
of remote operation in process plants. Great Britain, Health and Safety Executive; 2002.

Useful background for wider reading.

11. Johnsen SO, Holen S, Aalberg AL, Bjørkevoll KS, Evjemo TE, Johansen G, et al. Automation and
autonomous systems: Human-centred design in drilling and well. :150.

Report commissioned by the Petroleum Safety Authority Norway. Very comprehensive with

some good case study examples included.

    2023-2024 Guidelines Group A

     36 | Page

Appendix C: Additional References

a.  Florence, F., Losoya, E., Drillbotics with Fred Florence and Enrique Losoya (2020, August 18),

SPE Podcast, Link.

b.  Pessier, R. C., & Fear, M. J. (1992, January 1). Quantifying Common Drilling Problems With
Mechanical Specific Energy and a Bit-Specific Coefficient of Sliding Friction. Society of
Petroleum Engineers. doi:10.2118/24584-MS

c.  Menand, S., Simon, C., Gerbaud, L., Ben Hamida, M., Denoix, H. J., Cuillier, B., Sinardet, H.

(2012, January 1). PDC Bit Steerability Modeling and Testing for Push-the-bit and Point-the-bit
RSS. Society of Petroleum Engineers. doi:10.2118/151283-MS

d.  Pehlivantürk, C., D’Angelo, J., Cao, D., Chen, D., Ashok, P., & Van Oort, E. (2019, March 4). Slide
Drilling Guidance System for Directional Drilling Path Optimization. Society of Petroleum
Engineers. doi:10.2118/194096-MS

e.  Marck, J., Detournay, E., Perturbation to Borehole Trajectory across an Interface, ARMA-2014-
7479, 48th US Rock Mechanics/Geomechanics Symposium, Minneapolis, Minnesota, June 1-4,
2014.

f.  Zalluhoglu, U., Marck, J., Gharib, H., & Zhao Y. (2019) Borehole Propagation with Undergaged
Stabilizers: Theory and Validation. ASME Journal of Dynamic Systems, Measurement and
Control, vol.  141, no. 5: 051013. doi: 10.1115/1.4042380

g.  Perneder, L., Marck, J. and Detournay, E., 2017. A model of planar borehole propagation. SIAM

Journal on Applied Mathematics, 77(4), pp.1089-1114. doi: 10.1137/16M1094518

h.  Zalluhoglu, U., Demirer, N., Marck, J., Gharib, H., & Darbe, R. (2019) Steering advisory system
for rotary steerable systems. SPE/IADC Drilling Conference and Exhibition, 5-7 March, The
Hague, The Netherlands. SPE-194090-MS, doi: 10.2118/194090-MS

i.  Zalluhoglu, U., Gharib, H., Marck, J., Demirer, N., & Darbe, R. (2019) Steering advisory system
for mud motors. SPE/IADC Drilling Conference and Exhibition, 5-7 March, The Hague, The
Netherlands. SPE-194077-MS. doi: 10.2118/194077-MS

j.  Franklin, G. F., Powell, J. D., Emami-Naeini, A., & Powell, J. D. (1994). Feedback control of

dynamic systems, 3rd Edition, Reading, MA: Addison-Wesley.

k.  Ogata, K. (2003). System dynamics, 4th Edition, Upper Saddle River, NJ: Prentice Hall.
l.  Ogata, K. (2009). Modern control engineering, 5th Edition, Upper Saddle River, NJ: Prentice

Hall.

m.  Li, Y., Ang, K. H., & Chong, G. C. (2006). PID control system analysis and design. IEEE Control

Systems Magazine, 26(1), 32-41.

n.  Rawlings, J. B. (2000). Tutorial overview of model predictive control. IEEE control systems

magazine, 20(3), 38-52.

o.  Webinar: Machine Learning and Physics-based Solutions for Drilling Automation by SPE

Distinguished Lecturer Prof. John Hedengren, Brigham Young University, YouTube Video.
p.  Webinar:  Drilling Automation and Downhole Monitoring with Physics-based Models.  Link.
q.  Video and Webinar Series: Understanding Control Systems by Mathworks. Link.

    2023-2024 Guidelines Group A

     37 | Page
