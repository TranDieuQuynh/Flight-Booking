import { Controller, Post, Body } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { CreateAircraftDto } from './dto/create-aircraft.dto';

@Controller('aircrafts')
export class AircraftController {
  constructor(private readonly aircraftService: AircraftService) {}

  @Post('add')
  async createAircraft(@Body() createAircraftDto: CreateAircraftDto) {
    return this.aircraftService.createAircraft(createAircraftDto);
  }
}