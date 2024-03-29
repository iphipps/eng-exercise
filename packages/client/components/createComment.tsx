import { useState } from 'react'
import { Comment } from '../../server/src/comment.type'

export const CreateComment = ({
  ticketId,
  name,
  onAddComment,
}: {
  ticketId: string
  name: string
  onAddComment: (comment: Comment) => void
}) => {
  const [form, setForm] = useState<Omit<Comment, 'id' | 'createdAt'>>({
    message: '',
    name,
    ticketId,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetch('http://localhost:3000/comments', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((r) => r.json())
      .then((t) => {
        onAddComment(t)
        setForm({ ...form, message: '' })
      })
      .catch((e) => console.warn(e))
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <textarea
        className="bordered-input mb2"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="Message"
        id="message"
      />
      <button type="submit" className="message-send">
        Send
      </button>
    </form>
  )
}
