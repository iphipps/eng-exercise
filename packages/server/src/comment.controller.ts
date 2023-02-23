import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.type';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(
    @Body()
    createCommentDto: {
      name: string;
      message: string;
      ticketId: string;
    },
  ) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  getComments(): Comment[] {
    return this.commentService.getComments();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: string,
  ) {
    return this.commentService.getCommentsForTicket(id);
  }
}
