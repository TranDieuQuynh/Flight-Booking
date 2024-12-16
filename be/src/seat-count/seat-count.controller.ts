import { Body, Controller, Get, Post } from '@nestjs/common';
import { SeatCountService } from './seat-count.service';
import { CreateSeatCountDto } from './dto/create-seat-count.dto';

@Controller('seat-count')
export class SeatCountController {
  constructor(private readonly seatCountService: SeatCountService) {}

  @Get()
  async getAllSeatCounts() {
    return await this.seatCountService.getAllSeatCounts();
  }

  @Post()
  async createSeatCount(@Body() createSeatCountDto: CreateSeatCountDto) {
    return await this.seatCountService.createSeatCount(createSeatCountDto);
  }
}
