import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from '../database/entities/tickets.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Flight } from 'src/database/entities/flight.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,

    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const { flight_id, ...rest } = createTicketDto;
  
    // Find the flight entity by ID
    const flight = await this.flightRepository.findOneBy({ flight_id });
    if (!flight) {
      throw new NotFoundException(`Flight with ID ${flight_id} not found`);
    }
  
    // Create and save the ticket with the resolved flight relation
    const ticket = this.ticketRepository.create({ ...rest, flight });
    return await this.ticketRepository.save(ticket);
  }

  async findAll(): Promise<Ticket[]> {
    return await this.ticketRepository.find({ relations: ['flight'] });
  }

  async findOne(id: string): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne({
      where: { ticket_id: id },
      relations: ['flight'],
    });

    if (!ticket) {
      throw new NotFoundException(`Ticket with ID "${id}" not found.`);
    }

    return ticket;
  }

  async updateTicket(id: string, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    const ticket = await this.findOne(id);

    Object.assign(ticket, updateTicketDto);
    return await this.ticketRepository.save(ticket);
  }
}
