import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Ticket } from '../../server/src/ticket.type'

export default function Home({}) {
  const [tickets, setTickets] = useState<Ticket[]>([])
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className="space-between">
          <h2 className={utilStyles.headingLg}>Help Desk</h2>
          <Link href={`/tickets/create`} className={utilStyles.buttonLink}>
            <span>+</span> Create ticket
          </Link>
        </div>
        <ul className={utilStyles.list}>
          {tickets.map(({ id, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/tickets/${id}`}>{title}</Link>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
