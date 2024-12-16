import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateTicketClassDto {
  @IsString()
  @IsNotEmpty({ message: 'Class name is required' })
  class_name: string;

  @IsNumber({ allowInfinity: false, allowNaN: false }, { message: 'Multiplier must be a valid number' })
  @IsPositive({ message: 'Multiplier must be greater than 0' })
  multiplier: number;
}