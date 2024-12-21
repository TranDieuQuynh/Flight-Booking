import { IsString, IsUUID, IsNumber, IsOptional, IsDate, IsDateString } from 'class-validator';

export class UpdateTicketDto {
  @IsUUID()
  @IsOptional()
  flight?: string;

  @IsString()
  @IsOptional()
  customer_id?: string;

  @IsString()
  @IsOptional()
  customer_name?: string;

  @IsNumber()
  @IsOptional()
  total_price?: number;

  @IsString()
  @IsOptional()
  status?: string;

  @IsDateString({}, { message: 'Start time must be a valid date string' })
  @IsOptional()
  booking_time?: Date;
}