import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  async getAllBookings() {
    return await this.bookingService.getAllBookings();
  }

  @Post(':userId')
  async createBooking(
    @Param('userId') userId: string,
    @Body() bookingDetails: { flightId: string; ticketClassId: string; passengerName: string; passengerAge: number }[],
  ) {
    return this.bookingService.createBooking(userId, bookingDetails);
  }
}
