import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminUserModule } from './admin/users/users.module'; 
import { AdminAuthModule } from './admin/auth/auth.module';
import { AircraftModule } from './aircraft/aircraft.module';
import { AirportModule } from './airport/airport.module';
import { FlightModule } from './flight/flight.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    DatabaseModule, 
    UserModule, 
    AuthModule, 
    AdminUserModule, 
    AdminAuthModule,
    AircraftModule,
    AirportModule,
    FlightModule,
    TicketModule
  ]
})

export class AppModule {}
