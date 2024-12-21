import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  NotFoundException,
  ParseUUIDPipe,
  Query
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  async getAllFlights() {
    return await this.flightService.getAllFlights();
  }

  @Post()
  async createFlight(@Body() createFlightDto: CreateFlightDto) {
    return await this.flightService.createFlight(createFlightDto);
  }

  @Put(':id')
  async updateFlight(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateFlightDto: UpdateFlightDto,
  ) {
    const flight = await this.flightService.getFlightById(id);
    if (!flight) {
      throw new NotFoundException(`Flight with ID ${id} not found`);
    }
    return await this.flightService.updateFlight(id, updateFlightDto);
  }

  @Get('search')
  async searchFlights(
    @Query('src_airport') srcAirport?: string,
    @Query('dest_airport') destAirport?: string,
    @Query('start_time') startTime?: string,
  ) {
    const results = await this.flightService.searchFlights({
      srcAirport,
      destAirport,
      startTime,
    });
    if (!results.length) {
      throw new NotFoundException('No flights match the search criteria');
    }
    return results;
  }
}
