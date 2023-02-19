import Layout from '../../components/layout'
import { getAllTicketIds, getTicketData } from '../../lib/tickets'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Ticket } from '../../lib/tickets'

export default function Ticket({ ticket }: { ticket: Ticket }) {
  return (
    <Layout>
      <Head>
        <title>{ticket.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{ticket.title}</h1>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllTicketIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ticket = await getTicketData(params?.id as string)
  return {
    props: {
      ticket,
    },
  }
}
