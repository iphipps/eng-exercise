import { Ticket } from '../../server/src/ticket.type'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Badge } from './badge'

// TODO think up a better name
// export const Badge = ({ ticketStatus }: { ticketStatus: TicketStatus }) => {
export const TicketBlock = ({
  ticket,
  onSetEditMode,
  isAdmin,
}: {
  ticket: Ticket
  onSetEditMode: (ticketId: string) => void
  isAdmin: true
}) => {
  const {
    id,
    title,
    description,
    ticketStatus,
    name,
    email,
    createdAt: createdAtRaw,
  } = ticket

  const createdAt = new Date(parseInt(createdAtRaw)).toISOString()
  return (
    <>
      <div className="space-between">
        <h1 className="justify-start">
          {title} <Badge ticketStatus={ticketStatus} />
        </h1>
        <button className="buttonLink" onClick={() => onSetEditMode(id)}>
          Edit
        </button>
      </div>
      <article>
        <p>
          <strong>Submitted by: </strong> {name} ({email})
        </p>
        <p>
          <strong>Description: </strong> <br />
          {description}
        </p>
        <p>
          <strong>Created on: </strong> {createdAt}
        </p>
      </article>
    </>
  )
}
