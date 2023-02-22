export type TicketStatus = 'New' | 'In Progress' | 'Resolved';

export type Ticket = {
  id: string;
  ticketStatus: TicketStatus;
  name: string;
  email: string;
  title: string;
  description: string;
  createdAt: string;
};
