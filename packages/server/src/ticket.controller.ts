import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket } from './ticket.type';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  // TODO add auth / security
  // @Roles('admin')
  create(@Body() createTicketDto: Ticket) {
    return this.ticketService.create(createTicketDto);
  }

  @Get()
  getTickets(): Ticket[] {
    return this.ticketService.getTickets();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: string,
  ) {
    return this.ticketService.getTicket(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: Ticket): Ticket {
    return this.ticketService.update(id, updateTicketDto);
  }
}
