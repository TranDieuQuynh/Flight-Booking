import { IsString, IsDecimal, Min, Max, IsNotEmpty, IsDateString } from 'class-validator';

export class CreatePromotionDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsDecimal()
  @Min(0, { message: 'Discount percentage must be at least 0' })
  @Max(100, { message: 'Discount percentage must not exceed 100' })
  discount_percentage: number;

  @IsDateString({}, { message: 'Start date must be a valid ISO8601 date string' })
  start_date: Date;

  @IsDateString({}, { message: 'End date must be a valid ISO8601 date string' })
  end_date: Date;
}
