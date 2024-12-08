import { IsString, IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateAircraftDto {
  @IsString()
  @IsNotEmpty({ message: 'Model is required' })
  model: string;

  @IsString()
  @IsNotEmpty({ message: 'Manufacturer is required' })
  manufacturer: string;

  @IsInt()
  @Min(1, { message: 'Seat capacity must be at least 1' })
  seat_capacity: number;
}
