import { useState } from 'react'
import { getSortedTickets, Ticket } from '../lib/tickets'
import utilStyles from '../styles/utils.module.css'

export const AddTicket = () => {
  const [form, setForm] = useState<
    Omit<Ticket, 'id' | 'createdAt' | 'ticketStatus'>
  >({
    title: '1',
    name: '1',
    email: '1',
    description: '1',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetch('http://localhost:3000/ticket/addTicket', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((r) => console.log(r))
      .catch((e) => console.warn(e))
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
      <button type="submit">Create Support Ticket</button>
    </form>
  )
}
