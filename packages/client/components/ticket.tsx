import { Ticket } from '../../server/src/ticket.type'
import { Comment } from '../../server/src/comment.type'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Badge } from './badge'
import { useState, useEffect } from 'react'
import { CommentBlock } from './comment'
import { CreateComment } from './createComment'
import FormattedDate from './formattedDate'

// TODO think up a better name
export const TicketBlock = ({
  ticket,
  onSetEditMode,
  isAdmin = false,
}: {
  ticket: Ticket
  onSetEditMode: (ticketId: string) => void
  isAdmin?: boolean
}) => {
  const [comments, setComments] = useState<Comment[]>([])

  const onAddComment = (comment: Comment) => {
    const newComments = [...comments, comment]
    setComments(newComments)
  }
  const sortedComments = comments.sort((c1, c2) => {
    const createdAt1 = parseInt(c1.createdAt)
    const createdAt2 = parseInt(c2.createdAt)
    return createdAt1 > createdAt2 ? 1 : createdAt1 < createdAt2 ? -1 : 0
  })

  useEffect(() => {
    fetch(`http://localhost:3000/comments/${ticket.id}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          setComments([...comments, ...data])
        }
      })
      .catch((e) => console.warn(e))
  }, [])

  const createdAt = new Date(parseInt(ticket.createdAt)).toISOString()
  return (
    <div className="mb-4">
      <div className="space-between">
        <h4 className="justify-start">
          {ticket.title} <Badge ticketStatus={ticket.ticketStatus} />
        </h4>
        <button className="buttonLink" onClick={() => onSetEditMode(ticket.id)}>
          Edit
        </button>
      </div>
      <article>
        <p>
          <strong>Submitted by: </strong> {ticket.name} ({ticket.email})
          <small>
            <FormattedDate dateString={createdAt} />
          </small>
        </p>
        <p>
          <strong>Description: </strong> <br />
          {ticket.description}
        </p>
      </article>
      {sortedComments.map((comment) => (
        <CommentBlock comment={comment} key={comment.id} />
      ))}
      <CreateComment
        name={isAdmin ? 'admin' : ticket.name}
        ticketId={ticket.id}
        onAddComment={onAddComment}
      />
    </div>
  )
}
