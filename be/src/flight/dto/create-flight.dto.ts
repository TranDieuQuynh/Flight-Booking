import { IsString, IsNotEmpty, IsUUID, IsDecimal, IsDateString, IsNumber, IsPositive } from 'class-validator';

export class CreateFlightDto {
  @IsUUID()
  aircraft_id: string;

  @IsString()
  @IsNotEmpty({ message: 'Departure city is required' })
  departure_city: string;

  @IsString()
  @IsNotEmpty({ message: 'Arrival city is required' })
  arrival_city: string;

  @IsDateString({}, { message: 'Departure time must be a valid date string' })
  departure_time: Date;

  @IsDateString({}, { message: 'Arrival time must be a valid date string' })
  arrival_time: Date;

  @IsNumber({ allowInfinity: false, allowNaN: false }, { message: 'Base price must be a valid number' })
  @IsPositive({ message: 'Base price must be greater than 0' })
  base_price: number;

  @IsString()
  @IsNotEmpty({ message: 'Status is required' })
  status: string;
}
