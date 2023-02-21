import { useState } from 'react'
import { getSortedTickets } from '../lib/tickets'
import utilStyles from '../styles/utils.module.css'
import { Ticket } from '../../server/src/ticket.type'
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

  const [form, setForm] = useState<
    Omit<Ticket, 'id' | 'createdAt' | 'ticketStatus'>
  >({
    title: isEditMode ? ticket.title : '',
    name: isEditMode ? ticket.name : '',
    email: isEditMode ? ticket.email : '',
    description: isEditMode ? ticket.description : '',
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
      <div className={utilStyles.mb2}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          id="title"
        />
      </div>
      <div className={utilStyles.mb2}>
        <label htmlFor="description">Description</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Description"
          id="description"
        />
      </div>
      <div className={utilStyles.mb2}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
          id="name"
        />
      </div>
      <div className={utilStyles.mb2}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          id="email"
        />
      </div>
      <button type="submit">
        {isEditMode ? 'Save' : 'Create Support Ticket'}
      </button>
    </form>
  )
}
