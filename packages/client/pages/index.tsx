import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
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
