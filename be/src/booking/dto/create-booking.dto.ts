import { IsString, IsNotEmpty, IsUUID, IsOptional, IsDateString } from 'class-validator';

export class CreateBookingDto {
  @IsUUID()
  @IsNotEmpty({ message: 'User ID is required' })
  user_id: string;

  @IsOptional()
  @IsDateString({}, { message: 'Cancellation date must be a valid date string' })
  can_cancel_until?: Date;

  @IsOptional()
  @IsString()
  status?: string;
}