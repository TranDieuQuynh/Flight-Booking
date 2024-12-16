import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from 'src/database/entities/booking.entity';
import { BookingDetail } from 'src/database/entities/booking-detail.entity';
import { Flight } from 'src/database/entities/flight.entity';
import { TicketClass } from 'src/database/entities/ticket-class.entity';
import { SeatCount } from 'src/database/entities/seat-count.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    @InjectRepository(BookingDetail)
    private readonly bookingDetailRepository: Repository<BookingDetail>,
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
    @InjectRepository(TicketClass)
    private readonly ticketClassRepository: Repository<TicketClass>,
    @InjectRepository(SeatCount)
    private readonly seatCountRepository: Repository<SeatCount>,
  ) {}

  async getAllBookings() {
    return await this.bookingRepository.find({
      relations: ['user', 'bookingDetails'],
    });
  }

  async createBooking(userId: string, bookingDetails: { flightId: string; ticketClassId: string; passengerName: string; passengerAge: number }[]) {
    const booking = this.bookingRepository.create({
      user: { user_id: userId },
      status: 'Confirmed',
      can_cancel_until: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Cancellation window: 24 hours
    });

    await this.bookingRepository.save(booking);

    for (const detail of bookingDetails) {
      const { flightId, ticketClassId, passengerName, passengerAge } = detail;

      // Validate flight and ticket class existence
      const flight = await this.flightRepository.findOne({ where: { flight_id: flightId } });
      if (!flight) {
        throw new NotFoundException(`Flight with ID ${flightId} not found`);
      }

      const ticketClass = await this.ticketClassRepository.findOne({ where: { ticket_class_id: ticketClassId } });
      if (!ticketClass) {
        throw new NotFoundException(`Ticket class with ID ${ticketClassId} not found`);
      }

      // Validate seat availability
      const seatCount = await this.seatCountRepository.findOne({
        where: { flight: { flight_id: flightId }, ticket_class: { ticket_class_id: ticketClassId } },
      });

      if (!seatCount || seatCount.seat_count <= 0) {
        throw new BadRequestException(`No seats available for flight ${flightId} and ticket class ${ticketClassId}`);
      }

      // Reduce available seat count
      seatCount.seat_count -= 1;
      await this.seatCountRepository.save(seatCount);

      // Save booking detail
      const bookingDetail = this.bookingDetailRepository.create({
        booking,
        flight_detail: flight,
        ticket_class: ticketClass,
        passenger_name: passengerName,
        passenger_age: passengerAge,
      });

      await this.bookingDetailRepository.save(bookingDetail);
    }

    return booking;
  }
}
