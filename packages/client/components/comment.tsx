import { Comment } from '../../server/src/comment.type'
export const CommentBlock = ({ comment }: { comment: Comment }) => {
  const commentreatedAt = new Date(parseInt(comment.createdAt)).toISOString()
  return (
    <article>
      <p>
        <strong>{comment.name}:</strong>
        <strong>Created on: {commentreatedAt}</strong>
        {comment.message}
      </p>
    </article>
  )
}
