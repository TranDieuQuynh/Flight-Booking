import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from 'src/database/entities/booking.entity';
import { Flight } from 'src/database/entities/flight.entity';
import { TicketClass } from 'src/database/entities/ticket-class.entity';
import { BookingDetail } from 'src/database/entities/booking-detail.entity';
import { CreateBookingDetailDto } from './dto/booking-detail.dto';

@Injectable()
export class BookingDetailService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
    @InjectRepository(TicketClass)
    private readonly ticketClassRepository: Repository<TicketClass>,
    @InjectRepository(BookingDetail)
    private readonly bookingDetailRepository: Repository<BookingDetail>,
  ) {}

  async getAllBookingDetails() {
    return await this.bookingDetailRepository.find({
      relations: ['booking', 'flight_detail', 'ticket_class'],
    });
  }
  
  async createBookingDetail(createBookingDetailDto: CreateBookingDetailDto) {
    const { booking_id, flight_id, ticket_class_id, passenger_name, passenger_age } = createBookingDetailDto;
  
    const booking = await this.bookingRepository.findOne({ where: { booking_id } });
    if (!booking) throw new NotFoundException(`Booking with ID ${booking_id} not found`);
  
    const flight = await this.flightRepository.findOne({ where: { flight_id } });
    if (!flight) throw new NotFoundException(`Flight with ID ${flight_id} not found`);
  
    const ticketClass = await this.ticketClassRepository.findOne({ where: { ticket_class_id } });
    if (!ticketClass) throw new NotFoundException(`Ticket Class with ID ${ticket_class_id} not found`);
  
    const bookingDetail = this.bookingDetailRepository.create({
      booking,
      flight_detail: flight,
      ticket_class: ticketClass,
      passenger_name,
      passenger_age,
    });
  
    return await this.bookingDetailRepository.save(bookingDetail);
  }
  
}
