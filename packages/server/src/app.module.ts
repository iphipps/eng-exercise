import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [],
  controllers: [AppController, TicketController, CommentController],
  providers: [AppService, TicketService, CommentService],
})
export class AppModule {}
