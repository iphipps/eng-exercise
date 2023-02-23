import { Injectable } from '@nestjs/common';
import { Comment } from './comment.type';

@Injectable()
export class CommentService {
  // TODO add a database rather than storing everything in memory
  // This is a seed so we have at least one to start with
  private readonly comments: Comment[] = [
    {
      id: '456',
      ticketId: '123',
      createdAt: new Date().getTime().toString(),
      message: 'I tested this and it looks good now.',
      name: 'admin',
    },
  ];

  create(createCommentDto: {
    name: string;
    message: string;
    ticketId: string;
  }): Comment | 'Comment not created' {
    const { message, name, ticketId } = createCommentDto;
    const id = Math.floor(Math.random() * 1000000000000).toString();

    this.comments.push({
      message,
      name,
      ticketId,
      id,
      createdAt: new Date().getTime().toString(),
    });
    const createdComment = this.comments.filter((t) => t.id === id)[0];
    if (createdComment) return createdComment;

    return 'Comment not created';
  }

  getComments(): Comment[] {
    return this.comments;
  }

  getCommentsForTicket(ticketId: string): Comment[] | 'not found' {
    const comments = this.comments.filter((t) => t.ticketId === ticketId);
    return comments.length > 0 ? comments : 'not found';
  }
}
