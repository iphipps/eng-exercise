import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { getAllTicketIds, getTicketData } from '../../lib/tickets'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { AddTicket } from '../../components/addTicket'
import { Ticket as TicketType } from '../../../server/src/ticket.type'

export default function Ticket() {
  return (
    <Layout>
      <Head>
        <title>Create a help desk ticket</title>
      </Head>
      <article>
        <AddTicket />
      </article>
    </Layout>
  )
}
