import { Module } from '@nestjs/common';
import { SeatCountController } from './seat-count.controller';
import { SeatCountService } from './seat-count.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from 'src/database/entities/flight.entity';
import { TicketClass } from 'src/database/entities/ticket-class.entity';
import { SeatCount } from 'src/database/entities/seat-count.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flight, TicketClass, SeatCount])],
  controllers: [SeatCountController],
  providers: [SeatCountService]
})
export class SeatCountModule {}
