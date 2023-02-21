import { Ticket, TicketStatus } from '../../server/src/ticket.type'

export const Badge = ({ ticketStatus }: { ticketStatus: TicketStatus }) => {
  return (
    <div className={`ticket-${ticketStatus}`}>
      <span>{ticketStatus}</span>
    </div>
  )
}
