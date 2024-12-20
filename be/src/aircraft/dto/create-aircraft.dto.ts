import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateAircraftDto {
  @IsString()
  @IsNotEmpty({ message: 'Aircraft name is required' })
  aircraft_name: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Capacity is required' })
  @IsPositive()
  capacity: number;
}
