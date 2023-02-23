import Layout from '../components/layout'
import Head from 'next/head'
import { AddTicket } from '../components/addTicket'

export default function Ticket() {
  return (
    <Layout page="create">
      <Head>
        <title>Create a help desk ticket</title>
      </Head>
      <article>
        <AddTicket />
      </article>
    </Layout>
  )
}
