import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingDetailService } from './booking-detail.service';
import { CreateBookingDetailDto } from './dto/booking-detail.dto';

@Controller('booking-detail')
export class BookingDetailController {
  constructor(private readonly bookingDetailService: BookingDetailService) {}

  @Get()
  async getAllBookingDetails() {
    return await this.bookingDetailService.getAllBookingDetails();
  }

  @Post()
  async createBookingDetail(@Body() createBookingDetailDto: CreateBookingDetailDto) {
    return await this.bookingDetailService.createBookingDetail(createBookingDetailDto);
  }
}
