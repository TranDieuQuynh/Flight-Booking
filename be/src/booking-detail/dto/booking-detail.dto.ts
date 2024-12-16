import { IsUUID, IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateBookingDetailDto {
  @IsUUID()
  @IsNotEmpty({ message: 'Booking ID is required' })
  booking_id: string;

  @IsUUID()
  @IsNotEmpty({ message: 'Flight ID is required' })
  flight_id: string;

  @IsUUID()
  @IsNotEmpty({ message: 'Ticket Class ID is required' })
  ticket_class_id: string;

  @IsString()
  @IsNotEmpty({ message: 'Passenger name is required' })
  passenger_name: string;

  @IsInt()
  @Min(0, { message: 'Passenger age must be a positive number' })
  passenger_age: number;
}