import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AircraftModule } from './aircraft/aircraft.module';
import { FlightModule } from './flight/flight.module';
import { TicketClassModule } from './ticket-class/ticket-class.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { PromotionModule } from './promotion/promotion.module';
import { BookingModule } from './booking/booking.module';
import { BookingDetailModule } from './booking-detail/booking-detail.module';
import { SeatCountModule } from './seat-count/seat-count.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, AircraftModule, FlightModule, TicketClassModule, AnnouncementModule, PromotionModule, BookingModule, BookingDetailModule, SeatCountModule]
})
export class AppModule {}
