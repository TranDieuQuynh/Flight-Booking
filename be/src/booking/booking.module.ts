import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/database/entities/booking.entity';
import { BookingDetail } from 'src/database/entities/booking-detail.entity';
import { Flight } from 'src/database/entities/flight.entity';
import { TicketClass } from 'src/database/entities/ticket-class.entity';
import { SeatCount } from 'src/database/entities/seat-count.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, BookingDetail, Flight, TicketClass, SeatCount])],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
