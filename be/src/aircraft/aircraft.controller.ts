import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';

@Controller('aircraft')
export class AircraftController {
  constructor(private readonly aircraftService: AircraftService) {}

  @Get()
  async getAllAircrafts() {
    return await this.aircraftService.getAllAircrafts();
  }

  @Post()
  async createAircraft(@Body() createAircraftDto: CreateAircraftDto) {
    return await this.aircraftService.createAircraft(createAircraftDto);
  }

  @Put(':id')
  async updateAircraft(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAircraftDto: UpdateAircraftDto,
  ) {
    const aircraft = await this.aircraftService.getAircraftById(id);
    if (!aircraft) {
      throw new NotFoundException(`Aircraft with ID ${id} not found`);
    }
    return await this.aircraftService.updateAircraft(id, updateAircraftDto);
  }
}
