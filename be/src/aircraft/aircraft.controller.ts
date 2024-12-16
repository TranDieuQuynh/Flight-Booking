import { Controller, Post, Body, Get } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { Aircraft } from 'src/database/entities/aircraft.entity';

@Controller('aircrafts')
export class AircraftController {
  constructor(private readonly aircraftService: AircraftService) {}

  @Get()
  async getAllAircrafts(): Promise<Aircraft[]> {
    return this.aircraftService.getAllAircrafts();
  }

  @Post('add')
  async createAircraft(@Body() createAircraftDto: CreateAircraftDto) {
    return this.aircraftService.createAircraft(createAircraftDto);
  }
}