# Development Methodologies

Both agile, its various forms, and kanban are useful methodologies for developing digital products. I would argue that the selection of either depends on team and especially product stage. The goal for any software development methodology is to develop and release software as efficiently as possible, and to grow in efficiency. Both agile and kanban are capable of this.

## Proposal: agile for early stage 0-6 months.

When working with an early stage product, with a goal of a quick mvp to generate user feedback that can guide the next iterations of the product, I prefer to work agile with two week cycles. In two week cycles, week 1 and week 2 are different, with different meetings, tasks and cadences.

### An example agenda

- Wednesday 2/22 -- Sprint starts
- Wednesday 3/1 -- Developers aim to have tasks in testing (which gives a week to fix defects and plan for the next sprint)
- Thursday 3/2 -- Grooming the tasks for the next sprint
- Tuesday 3/7 -- Demo, Retro and Planning, in that order (i.e. the big meeting day).

This schedule gives the team lots of flexibility. It allows for large blocks of uninterrupted time, or for ad hoc chats / pair programming sessions. In my experience, it is this schedule that allows for a team's most enjoyment and greatest sense of accomplishment.

### Ceremonies

#### Roadmap planning

Product and some of the development team(s) should meet to discuss roadmap periodically and more frequently early stage. Developers should know the product vision, the value that the product intends to provide its users and the map on how to get there. Roadmap planning is a team activity. Product develops the plan, the team at large interprets and provides feedback. The roadmap is a living document.

#### Grooming and Planning

Product, development and design should groom large bodies of work into smaller tasks. The required granularity depends on the team's preference, but at a minimum, each task should be achievable by one person. Teams should communicate the level of effort or complexity to product, and that metric should be agreed upon and memorialized for reference from sprint to sprint. e.g. t-shirt sizes, or story points, or even hard vs easy. High level analysis of tasks is helpful at this stage. Grooming is slower than planning, and in a sense, it never ends. Grooming tasks can be accomplished async, ad hoc between interested parties, or in a scheduled meeting, It depends on the task, and whether everyone feels as if it has enough definition to be worked on.

At sprint planning, all of the tasks that product intends to prioritize are accepted by design and engineering teams as part of the body of work for the upcoming sprint. Because the team at large already groomed these tasks, everyone has a good idea on how complicated each task is, its goal and value to the end user. The sprint begins as soon as planning ends.

#### Code reviews

All code should be reviewed by colleagues. This has the benefit of catching mistakes, enforcing code quality, addressing nits, code smells, logic problems, and making sure that the team knows what code is in its repository. As soon as one engineer accepts the pull request, it becomes the team's code. Code reviews should be conducted in a reasonable amount of time, a business day or less seems reasonable. [google has a great document describing code review standards](https://google.github.io/eng-practices/review/reviewer/standard.html)

#### Daily Standups

Depends on what the team wants.
Everyone on the team should have a good sense of what everyone else is working on. In a good standup, each team member answers the following questions:

1. What did I do yesterday?
2. What am I doing today?
3. Are there any blockers or further conversation needed about my tasks? If so, who should I talk to about it, and when can we talk.

Yes, let's start with daily standups timeboxed to 15 minutes. But let's be open to that changing.

In principle, #s 1 and 2, above should be answered by the ticket tracker. #1 are the tasks in review or qa. #2 are the tasks in progress. Really, #3 is the conversation that we the team should have daily. This doesn't necessarily need to be formal. We as a team, can agree to say "hello" to each other when we start working for the day. Part of that "hello" can very well be an invitation to talk about some task over coffee. Because the team is familiar with the tasks for this sprint from grooming and planning, I believe that the team will naturally communicate and talk about work. That said, if it's not working, see the section on retro.

#### Testing

Code should be tested. Engineers should write unit tests and end to end tests. Those tests should run in ci frequently (at every commit). The team should also test manually. The product should have user testing and event analytics to determine user behavior. This provides a metric for improvement.

Big bugs and outages should result in post mortems and a document of the incident, why it happened, and we ought to work to prevent it from happening again in the future.

#### Demo

Each engineer should present their work to stakeholders. This is a positive experience as developers get to present and show off what they have accomplished.

#### Retrospective

What were next steps from our last sprint's retro?
Did we accomplish those or are some items still outstanding?
What did the team do well this sprint?
What could the team have improved?
What are next steps for the next sprint?

All of the above ceremonies, processes and decisions are negotiable. Retrospective is the time to put anything up to negotiation, acknowledging that the team needs to agree.

## 6-12 Months

Because the above workflow is designed to change, what the team started with at sprint 0 might look very different at sprint 12. Often, it becomes more kanban as time moves on. We'll see as we get there.

# Working with humans

One of the first tenets of the [agile manifesto](https://agilemanifesto.org/) is "Individuals and Interactions over processes and tools". We should keep that in mind. Working with computers is easier than working with people. Computers are at least predictable. Yet, we work together. We want the work to improve our skills, our wealth and our enjoyment of our working lives. Yes, we want to build a product and work toward a common product vision, a true good for the world. But mostly, we want work that is energizing and fun, day-to-day. That most depends on our colleagues. This is the hardest part and the true measure of a successful team. What's the secret sauce? Many companies have adopted a "no assholes" policy in response to this question. Yes, but that's not exactly it. How do we improve how we receive feedback? How do we improve how we give feedback? How to we grow as individuals and professionals? I'm not sure of the exact answers. But I'm wholly in pursuit of it; and I hope that the teams I work with are too.

# Additional questions I missed in this doc

#### Team structure -- all full stack vs front end vs back end ?

For engineers, it is helpful to have overlap. For an early stage product, a full stack engineer is best. For when there are at least 2 full stack engineers, I think a team with specialized roles is good practice. People choose front vs back for a reason, and they're going to enjoy their work most and do better work if they're working where they want to.

#### Collaboration with product and design ?

Yes, this is something that can be determined when grooming tasks for a body of work. Design systems are helpful for not requiring design assets for every bit of minutia (e.g. form errors on a specific screen). But generally, design, product and engineering should be grooming, working, demo-ing, providing feedback on each others' work and iterating together.

#### Delivery of feedback (especially for underperformers)

Underperformers know that they are underperforming. When they look around, they see colleagues completing more than they are. They do not need to be told. Instead, a good manager should strive to determine why they are underperforming. Assuming the reason is lack of expertise in the field, there is a real opportunity to train up. This might involve more pair programming, or more joint analysis of tasks that includes proposed solutions or approaches to a problem. If a poor performer is not interested in the work, perhaps there's an opportunity to find work that are more energizing. If the reason for poor performance is personal, a good manager should navigate the situation with care. We are not machines, and sometimes people have bouts of poor performance because their attention is elsewhere. No matter the reason, a manger should reserve care, accountability, loyalty and obedience for both their direct reports and the company. This can be a balancing act if the priorities of direct reports and the company are misaligned. When that is the case, a real conversation about common goals and alignment on expectations is in order.
