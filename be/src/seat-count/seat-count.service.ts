import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeatCount } from 'src/database/entities/seat-count.entity';
import { Repository } from 'typeorm';
import { CreateSeatCountDto } from './dto/create-seat-count.dto';
import { Flight } from 'src/database/entities/flight.entity';
import { TicketClass } from 'src/database/entities/ticket-class.entity';

@Injectable()
export class SeatCountService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
    @InjectRepository(TicketClass)
    private readonly ticketClassRepository: Repository<TicketClass>,
    @InjectRepository(SeatCount)
    private readonly seatCountRepository: Repository<SeatCount>,
  ) {}

  async getAllSeatCounts() {
    return await this.seatCountRepository.find({
      relations: ['flight', 'ticket_class'],
    });
  }
  
  async createSeatCount(createSeatCountDto: CreateSeatCountDto) {
    const { flight_id, ticket_class_id, seat_count } = createSeatCountDto;
  
    const flight = await this.flightRepository.findOne({ where: { flight_id } });
    if (!flight) throw new NotFoundException(`Flight with ID ${flight_id} not found`);
  
    const ticketClass = await this.ticketClassRepository.findOne({ where: { ticket_class_id } });
    if (!ticketClass) throw new NotFoundException(`Ticket Class with ID ${ticket_class_id} not found`);
  
    const seatCount = this.seatCountRepository.create({
      flight,
      ticket_class: ticketClass,
      seat_count,
    });
  
    return await this.seatCountRepository.save(seatCount);
  }
}
