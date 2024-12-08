import { IsString, IsDecimal, IsNotEmpty, Min } from 'class-validator';

export class CreateTicketClassDto {
  @IsString()
  @IsNotEmpty({ message: 'Class name is required' })
  class_name: string;

  @IsDecimal()
  @Min(0.1, { message: 'Multiplier must be greater than 0' })
  multiplier: number;
}
