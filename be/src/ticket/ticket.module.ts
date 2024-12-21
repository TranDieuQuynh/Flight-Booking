import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from '../database/entities/tickets.entity';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { Flight } from 'src/database/entities/flight.entity';
import { FlightModule } from 'src/flight/flight.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ticket, Flight])
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
