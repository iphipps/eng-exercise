import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.type';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: { comment: Comment; ticketId: string }) {
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
