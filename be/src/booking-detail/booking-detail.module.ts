import { Module } from '@nestjs/common';
import { BookingDetailController } from './booking-detail.controller';
import { BookingDetailService } from './booking-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/database/entities/booking.entity';
import { Flight } from 'src/database/entities/flight.entity';
import { TicketClass } from 'src/database/entities/ticket-class.entity';
import { BookingDetail } from 'src/database/entities/booking-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, Flight, TicketClass, BookingDetail])],
  controllers: [BookingDetailController],
  providers: [BookingDetailService]
})
export class BookingDetailModule {}
