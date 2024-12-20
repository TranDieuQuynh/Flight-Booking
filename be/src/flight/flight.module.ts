import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from 'src/database/entities/flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])], 
  providers: [FlightService],
  controllers: [FlightController],
  exports: [FlightService]
})

export class FlightModule {}