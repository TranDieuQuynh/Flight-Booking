import { IsString, IsNotEmpty, IsNumber, IsPositive, IsOptional } from 'class-validator';


export class UpdateAircraftDto {
  @IsString()
  @IsOptional()
  aircraft_name?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: 'Capacity is required' })
  @IsPositive()
  capacity?: number;
}