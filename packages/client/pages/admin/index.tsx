import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { Ticket } from '../../../server/src/ticket.type'
import { TicketBlock } from '../../components/ticket'
import { AddTicket } from '../../components/addTicket'

const updateLocalTickets = (tickets: Ticket[], ticket: Ticket): Ticket[] => {
  // TODO eww ok now it feels like we need state management
  // Also this is the same as update in server / maybe an opportunity to dry it up
  const existingTicketIndex = tickets.findIndex((t) => t.id === ticket.id)
  const existingTicket = tickets[existingTicketIndex]
  tickets[existingTicketIndex] = {
    ...tickets[existingTicketIndex],
    ...ticket,
  }
  return tickets
}

export default function Home({}) {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [filter, setFilter] = useState('')

  // Todo, make this a memoized function and maybe fuzzy search
  const filteredTickets = tickets.filter(
    ({ description, title, ticketStatus, email, name }) =>
      description.toLowerCase().includes(filter.toLowerCase()) ||
      title.toLowerCase().includes(filter.toLowerCase()) ||
      ticketStatus.toLowerCase().includes(filter.toLowerCase()) ||
      email.toLowerCase().includes(filter.toLowerCase()) ||
      name.toLowerCase().includes(filter.toLowerCase())
  )

  const [editingTicket, setEditingTicket] = useState<Ticket | undefined>(
    undefined
  )

  useEffect(() => {
    fetch('http://localhost:3000/tickets', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => setTickets([...tickets, ...data]))
      .catch((e) => console.warn(e))
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.padding1px}`}>
        <div className="space-between">
          <h2 className={utilStyles.headingLg}>Help Desk</h2>
          <Link href={`/`} className={utilStyles.buttonLink}>
            <span>+</span> Create ticket
          </Link>
        </div>
        {!!editingTicket ? (
          <AddTicket
            ticket={editingTicket}
            onUpdateTicket={(ticket: Ticket) => {
              setEditingTicket(undefined)
              const newTickets = updateLocalTickets(tickets, ticket)
              setTickets(newTickets)
            }}
          />
        ) : (
          <>
            <input
              className="bordered-input"
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter"
            />
            <ul className={utilStyles.list}>
              {filteredTickets.map((ticket) => (
                <TicketBlock
                  isAdmin={true}
                  key={ticket.id}
                  ticket={ticket}
                  onSetEditMode={(id) => {
                    const existingTicketIndex = tickets.findIndex(
                      (t) => t.id === id
                    )
                    const existingTicket = tickets[existingTicketIndex]
                    setEditingTicket(existingTicket)
                  }}
                />
              ))}
            </ul>
          </>
        )}
      </section>
    </Layout>
  )
}
