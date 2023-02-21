import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { getAllTicketIds, getTicketData } from '../../lib/tickets'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Ticket as TicketType } from '../../../server/src/ticket.type'
import { AddTicket } from '../../components/addTicket'

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
  return (
    <Layout>
      <Head>
        <title>{ticket.title}</title>
      </Head>

      {isEditMode ? (
        <>
          <AddTicket
            ticket={ticket}
            onUpdateTicket={(ticket: TicketType) => {
              setIsEditMode(false)
              setTicket(ticket)
            }}
          />
        </>
      ) : (
        <>
          <div className="space-between">
          <h1>{ticket.title}</h1>
          <button className="buttonLink" onClick={() => setIsEditMode(true)}>Edit</button>
          </div>
          <article>
            <p>{ticket.description}</p>
          </article>
        </>
      )}
    </Layout>
  )
}
