import { IsString, IsUUID, IsNotEmpty, IsNumber, IsOptional, IsDate, IsDateString } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty({ message: 'Flight ID is required' })
  flight_id: string;

  @IsString()
  @IsNotEmpty({ message: 'Customer ID is required' })
  customer_id: string;

  @IsString()
  @IsNotEmpty({ message: 'Customer name is required' })
  customer_name: string;

  @IsNumber()
  @IsOptional()
  total_price?: number;

  @IsString()
  @IsNotEmpty({ message: 'Status is required' })
  status: string;

  @IsDateString({}, { message: 'Start time must be a valid date string' })
  booking_time: Date;
}
