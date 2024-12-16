import { IsUUID, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateSeatCountDto {
  @IsUUID()
  @IsNotEmpty({ message: 'Flight ID is required' })
  flight_id: string;

  @IsUUID()
  @IsNotEmpty({ message: 'Ticket Class ID is required' })
  ticket_class_id: string;

  @IsInt()
  @Min(0, { message: 'Seat count must be a non-negative integer' })
  seat_count: number;
}