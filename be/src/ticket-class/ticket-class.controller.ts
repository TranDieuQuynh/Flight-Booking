import { Controller, Post, Body } from '@nestjs/common';
import { TicketClassService } from './ticket-class.service';
import { CreateTicketClassDto } from './dto/create-ticket-class.dto';

@Controller('ticket-classes')
export class TicketClassController {
  constructor(private readonly ticketClassService: TicketClassService) {}

  @Post('add')
  async createTicketClass(@Body() createTicketClassDto: CreateTicketClassDto) {
    return this.ticketClassService.createTicketClass(createTicketClassDto);
  }
}
