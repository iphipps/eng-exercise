import { Ticket, TicketStatus } from '../../server/src/ticket.type'

export const Badge = ({ ticketStatus }: { ticketStatus: TicketStatus }) => {
  const className = ticketStatus.split(" ").join("").toLowerCase()
  return (
    <div className={`ticket-${className}`} data-tooltip={`Status: ${ticketStatus}`}>
      <span>{ticketStatus}</span>
    </div>
  )
}
