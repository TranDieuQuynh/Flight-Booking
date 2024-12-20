import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAirportDto {
  @IsString()
  @IsNotEmpty({ message: 'Airport name is required' })
  airport_name: string;
}