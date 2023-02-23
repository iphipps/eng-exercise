# Introduction

This is a yarn packages mono repo with a [server directory](./server) that runs nestJS and a [client directory](./client) that runs Next.js.

# Run the app

Install all npm dependencies

```
yarn
```

Run the server

```
yarn server run start
```

Run the client

```
yarn client run dev
```

Navigate to `http://localhost:3001`.

# Screenshots

![01 Create Ticket](./images/01_Create_Ticket.png)
![02 Create Ticket filled out](02_Create_Ticket_filled_out.png)
![03 Ticket Display](03_Ticket_Display.png)
![04 Ticket Display_with_chat](04_Ticket_Display_with_chat.png)
![05 Admin](05_Admin.png)
![06_Admin with chat](06_Admin_with_chat.png)
![07 Admin_update ticket status](07_Admin_update_ticket_status.png)
![08 Admin updated ticket status](08_Admin_updated_ticket_status.png)
![09 Ticket Display with new comment and status](09_Ticket_Display_with_new_comment_and_status.png)

# Next steps

This was quick poc / discovery style development. There is a lot to do in order for this to be production ready. The code has some TODOs which could be associated with tickets. On a high level, here's what I feel would be next steps for this repository.

On the backend:

1. Adding an orm and database. [nest docs look promising](https://docs.nestjs.com/techniques/database).
2. Add auth -- [nest has some useful opinions on auth](https://docs.nestjs.com/security/authentication)
3. More tests

On the frontend:

1. Add a data/state manager for reducing duplicated code and being able to listen to events and update state. Maybe redux(?)
2. Add a design system.
3. Respect backend auth/roles. Currently, this has useful screens for public/private roles, e.g. edit and create ticket. But the experience should be more curated by role.
4. More tests

Infra stuff:

1. Environments and corresponding env variables (local, dev, staging, prod)
2. A release tagging system that the team likes and knows how to use
3. CI -- linting and testing
4. A tsconfig that better enforces congruence between back and front end.

# On process

See the document [developing code as a team](./DEVELOPING.md)
