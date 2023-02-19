import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

enum TicketStatus {
  new = 'New',
  inProgress = 'In Progress',
  resolved = 'Resolved',
}

export type Ticket = {
  id: string
  ticketStatus: TicketStatus
  name: string
  email: string
  title: string
  description: string
  createdAt: Date

}

const ticketsDirectory = path.join(process.cwd(), 'tickets')

export function getSortedTickets() {
  // Get file names under /tickets
  const fileNames = fs.readdirSync(ticketsDirectory)
  const allTicketsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(ticketsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the ticket metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    }
  })
  // Sort tickets by date
  return allTicketsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllTicketIds() {
  const fileNames = fs.readdirSync(ticketsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getTicketData(id: string) {
  const fullPath = path.join(ticketsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the ticket metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  }
}
