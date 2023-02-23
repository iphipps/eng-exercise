import { useState } from 'react'
import utilStyles from '../styles/utils.module.css'
import { Ticket, TicketStatus } from '../../server/src/ticket.type'
import { useRouter } from 'next/router'

export const AddTicket = ({
  ticket,
  onUpdateTicket,
}: {
  ticket?: Ticket
  onUpdateTicket?: (ticket: Ticket) => void
}) => {
  const router = useRouter()
  const isEditMode = !!ticket && !!onUpdateTicket

  const [form, setForm] = useState<Omit<Ticket, 'id' | 'createdAt'>>({
    title: isEditMode ? ticket.title : '',
    name: isEditMode ? ticket.name : '',
    email: isEditMode ? ticket.email : '',
    description: isEditMode ? ticket.description : '',
    ticketStatus: isEditMode ? ticket.ticketStatus : 'New',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isEditMode) {
      fetch(`http://localhost:3000/tickets/${ticket.id}`, {
        method: 'put',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((r) => r.json())
        .then((t) => {
          onUpdateTicket(t)
        })
        .catch((e) => console.warn(e))
    } else {
      fetch('http://localhost:3000/tickets', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((r) => r.json())
        .then((t) => {
          router.push(`/tickets/${t.id}`)
        })
        .catch((e) => console.warn(e))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {!isEditMode && (
        <>
          <div className="mb4">
            <label htmlFor="title">Ticket title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              id="title"
            />
          </div>
          <div className="mb4">
            <label htmlFor="description">What is the issue?</label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              id="description"
            />
          </div>
          <div className="mb4">
            <label htmlFor="name">What is your name?</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              id="name"
            />
          </div>
          <div className="mb4">
            <label htmlFor="email">...and your email?</label>
            <input
              type="text"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              id="email"
            />
          </div>
        </>
      )}
      {isEditMode && (
        <div className={utilStyles.mb2}>
          <label htmlFor="status">Status</label>
          <div className="form-control">
            <input
              type="radio"
              value="New"
              id="new"
              name="status"
              checked={form.ticketStatus === 'New'}
              onChange={(e) =>
                setForm({
                  ...form,
                  // TODO error check in a function instead of casting
                  ticketStatus: e.target.value as TicketStatus,
                })
              }
            />
            <label htmlFor="new">New</label>
          </div>
          <div className="form-control">
            <input
              type="radio"
              value="In Progress"
              id="in-progress"
              name="status"
              checked={form.ticketStatus === 'In Progress'}
              onChange={(e) =>
                setForm({
                  ...form,
                  // TODO error check in a function instead of casting
                  ticketStatus: e.target.value as TicketStatus,
                })
              }
            />
            <label htmlFor="in-progress">In Progress</label>
          </div>
          <div className="form-control">
            <input
              type="radio"
              value="Resolved"
              id="resolved"
              name="status"
              checked={form.ticketStatus === 'Resolved'}
              onChange={(e) =>
                setForm({
                  ...form,
                  // TODO error check in a function instead of casting
                  ticketStatus: e.target.value as TicketStatus,
                })
              }
            />
            <label htmlFor="resolved">Resolved</label>
          </div>
        </div>
      )}
      <div className="justify-end">
        <button type="submit">{isEditMode ? 'Save' : 'Submit'}</button>
      </div>
    </form>
  )
}
