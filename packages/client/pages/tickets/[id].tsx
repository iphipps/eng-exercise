import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Head from 'next/head'
import { Ticket as TicketType } from '../../../server/src/ticket.type'
import { AddTicket } from '../../components/addTicket'
import { TicketBlock } from '../../components/ticket'

export default function Ticket() {
  const [ticket, setTicket] = useState<TicketType>()
  const [isEditMode, setIsEditMode] = useState(false)
  const router = useRouter()
  const id = router.query.id
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/tickets/${id}`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => setTicket(data))
        .catch((e) => console.warn(e))
    }
  }, [id])

  if (!ticket) {
    // TODO make a loading state
    return <div>loading</div>
  }
  // TODO remove explicit any
  const createdAt = new Date(parseInt(ticket.createdAt)).toISOString()

  return (
    <Layout page="detail">
      <Head>
        <title>Ticket chat for ticket id: {ticket.id}</title>
      </Head>

      <TicketBlock key={ticket.id} ticket={ticket} isLast={true} />
    </Layout>
  )
}
