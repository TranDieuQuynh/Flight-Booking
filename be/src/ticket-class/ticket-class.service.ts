import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TicketClass } from '../database/entities/ticket-class.entity';
import { CreateTicketClassDto } from './dto/create-ticket-class.dto';

@Injectable()
export class TicketClassService {
  constructor(
    @InjectRepository(TicketClass)
    private readonly ticketClassRepository: Repository<TicketClass>,
  ) {}

  async getAllTicketClasses(): Promise<TicketClass[]> {
    return await this.ticketClassRepository.find();
  }

  async createTicketClass(createTicketClassDto: CreateTicketClassDto): Promise<TicketClass> {
    const newTicketClass = this.ticketClassRepository.create(createTicketClassDto);
    return await this.ticketClassRepository.save(newTicketClass);
  }
}
