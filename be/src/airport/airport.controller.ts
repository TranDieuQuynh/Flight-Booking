import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';

import { AirportService } from './airport.service';
import { CreateAirportDto } from './dto/create-airport.dto';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Get()
  async getAllAirports() {
    return await this.airportService.getAllAirports();
  }

  @Post()
  async createAirport(@Body() createAirportDto: CreateAirportDto) {
    return await this.airportService.createAirport(createAirportDto);
  }
}
