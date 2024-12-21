import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from '../database/entities/tickets.entity';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async create(@Body() createTicketDto: CreateTicketDto): Promise<Ticket> {
    return await this.ticketService.createTicket(createTicketDto);
  }

  @Get()
  async findAll(): Promise<Ticket[]> {
    return await this.ticketService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Ticket> {
    return await this.ticketService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketDto,
  ): Promise<Ticket> {
    return await this.ticketService.updateTicket(id, updateTicketDto);
  }
}
