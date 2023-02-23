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
  isLast = false,
  onSetEditMode,
  isAdmin = false,
}: {
  ticket: Ticket
  isLast?: boolean
  onSetEditMode?: (ticketId: string) => void
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
    <div className="mb8 mt4">
      <div className="space-between mb2">
        <div>
          <h4 className="justify-start font-lg">
            {ticket.title}
            {!!onSetEditMode ? (
              <button
                className="button-reset"
                onClick={() => onSetEditMode(ticket.id)}
              >
                <Badge ticketStatus={ticket.ticketStatus} />
              </button>
            ) : (
              <Badge ticketStatus={ticket.ticketStatus} />
            )}
          </h4>
        </div>
        <small className="shade5">
          <FormattedDate dateString={createdAt} />
        </small>
      </div>
      <article className="mb4">
        <p className="mb2">{ticket.description}</p>
        <small>
          Submitted by: <strong>{ticket.name}</strong> ({ticket.email})
        </small>
      </article>
      {sortedComments.map((comment, index) => (
        <CommentBlock
          comment={comment}
          key={comment.id}
          isEven={index % 2 === 0}
        />
      ))}
      <CreateComment
        name={isAdmin ? 'admin' : ticket.name}
        ticketId={ticket.id}
        onAddComment={onAddComment}
      />

      {!isLast && <hr className="mb12 mt12 shade4-b" />}
    </div>
  )
}
