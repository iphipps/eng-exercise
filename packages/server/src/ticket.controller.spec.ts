import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

describe('TicketController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController, TicketController],
      providers: [AppService, TicketService],
    }).compile();
  });

  describe('getTicket', () => {
    it('should return "Hello World!"', () => {
      const ticketController = app.get(TicketController);
      expect(ticketController.getTickets()).toBe('Hello World!');
    });
  });
});
