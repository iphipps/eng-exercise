# On developing software products as teams

Most of the words in this document are redundant superfluity to the [agile manifesto](http://agilemanifesto.org/).

# Development Methologies

Both agile, it's various forms, and kanban are useful methodologies for developing digital products. I would argue that the selection of either depends on team and especially product stage. The goal for any software development methodology is to develop and release software as efficiently as possible, and to grow in efficiency. Both agile and kanban are capable of this.

## Proposal: agile for early stage 0-6 months.

When working with an early stage product, with a goal of a quick mvp to generate user feedback that can guide the next iterations of the product, I prefer to work agile with two week cycles. In two week cycles, week 1 and week 2 are different, with different meetings, tasks and cadences.

### An example agenda

Wednesday 2/22 -- Sprint starts
Wednesday 3/1 -- Developers aim to have tasks in testing (which gives a week to fix defects and plan for the next sprint)
Thursday 3/2 -- Grooming the tasks for the next sprint
Tuesday 3/7 -- Demo, Retro and Planning, in that order (i.e. the big meeting day).

This schedule gives the team lots of flexibility. It allows for large blocks of uninterrupted time, or for ad hoc chats / pair programming sessions. In my experience, it is the schedule that allows for a team's most enjoyment vs most accomplishment. 

### Ceremonies

#### Roadmap planning

Product and some of the development team(s) should meet to discuss roadmap periodically and more frequently early stage. Developers should know the product vision, the value the product intends to provide its users and the map on how to get there. Roadmap planning is a team activity. Product develops the plan, the team at large interprets and provides feedback. The roadmap is a living document.

#### Grooming and Planning

Product, development and design should groom large bodies of work into smaller tasks. The required granularity depends on the team's preference, but at a minimum, each task should be achievable by one person. Teams should communicate the level of effort or complexity to product, and that metric should be agreed upon and memorialized for reference from sprint to sprint. e.g. t-shirt sizes, or story points, or even hard vs easy. Some level of analysis is helpful at this stage. Grooming is slower than planning, and in a sense, it never ends. Grooming tasks can be accomplished asyn, ad hoc between interested parties, or in a scheduled meeting, It depends on the task, and whether everyone feels as if it has enough definition to be worked on.

At sprint planning, all of the tasks that product intends to prioritize are accepted by design and engineering teams as part of the body of work for the upcoming sprint. Because the team at large groomed tasks, everyone has a good idea on how complicated each task is, its goal and value to the end user. The sprint begins as soon as planning ends.

#### Code reviews

All code should be reviewed by colleagues. This has the benefit of catching mistakes, enforcing code quality, addressing nits, code smells, logic problems, and making sure that the team knows what code is in it's repository. As soon as one engineer accepts the pull request, it becomes the team's code. Code reviews should be conducted in a reasonable amount of time, a business day or less seems reasonable. [google has a great document describing code review standards](https://google.github.io/eng-practices/review/reviewer/standard.html)

#### Daily Standups

Depends on what the team wants. 
Everyone on the team should have a good sense of what everyone else is working on. In a good standup, each team member answers the following questions: 
1. What did I do yesterday? 
2. What am I doing today? 
3. Are there any blockers or further conversatinon needed about my tasks? If so, who should I talk to about it, and when can we talk.  

In principle, #s 1 and 2 should be answered by the ticket tracker. #1 are the tasks in review or qa. #2 are the tasks in progress.  Really, #3 is the conversation that we the team should have daily. This doesn't necessarily need to be formal. We as a team, can agree to say "hello" to each other when we start working for the day.  Part of that "hello" can very well be an invitation to talk about some task over coffee. Because the team is familiar with the tasks for this sprint from grooming and planning, I believe that the team will naturally communicate and talk about work. That said, if it's not working, see the section on retro.

#### Testing

Code should be tested. Engineers should write unit tests, end to end tests and those tests should run in ci at every commit. The team should also test manually. The product should have user testing and event analytics to determine user behavior and improve. 

Big bugs and outages should have post mortems and document the incident, why it happened, and we ought to work to prevent it from happening again in the future.



#### Demo

Each engineer should present their work to stakeholders. This is a positive experience as developers get to present and show off what they accomplished
