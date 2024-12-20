import { IsString, IsNumber, IsOptional, IsDateString, IsPositive } from 'class-validator';

export class UpdateFlightDto {
  @IsString()
  @IsOptional()
  src_airport?: string;

  @IsString()
  @IsOptional()
  dest_airport?: string;

  @IsString()
  @IsOptional()
  aircraft_name?: string;

  @IsNumber()
  @IsPositive({ message: 'Base price must be a positive number' })
  @IsOptional()
  base_price?: number;

  @IsString()
  @IsOptional()
  status?: string;

  @IsDateString({}, { message: 'Start time must be a valid date string' })
  @IsOptional()
  start_time?: Date;
}
