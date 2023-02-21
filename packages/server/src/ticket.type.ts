
export enum TicketStatus {
  new = 'New',
  inProgress = 'In Progress',
  resolved = 'Resolved',
}




export type Ticket = {
  id: string
  ticketStatus: TicketStatus
  name: string
  email: string
  title: string
  description: string
  createdAt: string

}

