import { Comment } from '../../server/src/comment.type'
import FormattedDate from './formattedDate'
export const CommentBlock = ({ comment }: { comment: Comment }) => {
  const commentreatedAt = new Date(parseInt(comment.createdAt)).toISOString()
  return (
    <article className="comment">
      <p>
        <strong className="mr2">{comment.name}</strong>
        <small>
          <FormattedDate dateString={commentreatedAt} />
        </small>
        <br />
        {comment.message}
      </p>
    </article>
  )
}
