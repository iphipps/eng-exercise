import { Comment } from '../../server/src/comment.type'
import FormattedDate from './formattedDate'
export const CommentBlock = ({
  comment,
  isEven,
}: {
  comment: Comment
  isEven: boolean
}) => {
  const commentreatedAt = new Date(parseInt(comment.createdAt)).toISOString()
  return (
    <article
      className={`comment mb4 mt2 ${isEven ? 'comment-even' : 'comment-odd'}`}
    >
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
