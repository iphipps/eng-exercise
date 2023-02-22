import { Injectable } from '@nestjs/common';
import { title } from 'process';
import { Ticket, TicketStatus } from './ticket.type';

@Injectable()
export class TicketService {
  // TODO add a database rather than storing everything in memory
  // This is a seed so we have at least one to start with
  private readonly tickets: Ticket[] = [
    {
      id: '123',
      createdAt: new Date().getTime().toString(),
      description:
        'This is a support ticket. It has a status of resolved and was created when the server first ran.',
      title: 'Ticket title',
      name: 'Ian Phipps',
      email: 'phippsian@gmail.com',
      ticketStatus: 'Resolved',
    },
  ];
  create(ticket: Ticket): Ticket | 'Ticket not created' {
    // TODO use a real unique id
    const id = Math.floor(Math.random() * 1000000000000).toString();

    //TODO check that the email is an email
    this.tickets.push({
      ...ticket,
      id,
      createdAt: new Date().getTime().toString(),
      ticketStatus: 'New'
    });
    const createdTicket = this.tickets.filter((t) => t.id === id)[0];
    if (createdTicket) return createdTicket;

    // TODO This should result in a 400 with a reason instead of this
    return 'Ticket not created';
  }
  getTickets(): Ticket[] {
    return this.tickets;
  }

  getTicket(id: string): Ticket | 'not found' {
    const ticket = this.tickets.filter((t) => t.id === id);
    return ticket.length > 0 ? ticket[0] : 'not found';
  }

  update(id: string, ticket: Ticket): Ticket {
    const existingTicketIndex = this.tickets.findIndex((t) => t.id === id);
    const existingTicket = this.tickets[existingTicketIndex];
    // TODO improve this.  Or wait until we add a DB
    this.tickets[existingTicketIndex] = {
      ...this.tickets[existingTicketIndex],
      ...ticket,
    };
    return this.tickets[existingTicketIndex];
  }
}
