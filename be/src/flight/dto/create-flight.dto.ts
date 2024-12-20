import { IsString, IsNumber, IsNotEmpty, IsDateString, IsPositive } from 'class-validator';

export class CreateFlightDto {
  @IsString()
  @IsNotEmpty({ message: 'Source airport is required' })
  src_airport: string;

  @IsString()
  @IsNotEmpty({ message: 'Destination airport is required' })
  dest_airport: string;

  @IsString()
  @IsNotEmpty({ message: 'Aircraft name is required' })
  aircraft_name: string;

  @IsNumber()
  @IsPositive({ message: 'Base price must be a positive number' })
  base_price: number;

  @IsString()
  @IsNotEmpty({ message: 'Status is required' })
  status: string;

  @IsDateString({}, { message: 'Start time must be a valid date string' })
  start_time: Date;
}
