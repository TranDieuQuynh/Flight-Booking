import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from '../database/entities/flight.entity';
import { Aircraft } from '../database/entities/aircraft.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flight, Aircraft])],
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule {}
