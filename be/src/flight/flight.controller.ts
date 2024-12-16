import { Controller, Get, Post, Body } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { Flight } from 'src/database/entities/flight.entity';

@Controller('flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  async getAllTicketClass(): Promise<Flight[]> {
    return this.flightService.getAllFlights();
  }

  @Post('add')
  async createFlight(@Body() createFlightDto: CreateFlightDto) {
    return this.flightService.createFlight(createFlightDto);
  }
}
