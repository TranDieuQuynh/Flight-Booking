import { Controller, Get, Post, Body } from '@nestjs/common';
import { TicketClassService } from './ticket-class.service';
import { CreateTicketClassDto } from './dto/create-ticket-class.dto';
import { TicketClass } from 'src/database/entities/ticket-class.entity';

@Controller('ticket-classes')
export class TicketClassController {
  constructor(private readonly ticketClassService: TicketClassService) {}

  @Get()
  async getAllTicketClass(): Promise<TicketClass[]> {
    return this.ticketClassService.getAllTicketClasses();
  }

  @Post('add')
  async createTicketClass(@Body() createTicketClassDto: CreateTicketClassDto) {
    return this.ticketClassService.createTicketClass(createTicketClassDto);
  }
}
