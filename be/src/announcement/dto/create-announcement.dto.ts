import { IsString, IsNotEmpty, IsIn } from 'class-validator';

export class CreateAnnouncementDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Content is required' })
  content: string;

  @IsString()
  @IsNotEmpty({ message: 'Type is required' })
  @IsIn(['info', 'alert', 'update'], { message: 'Type must be one of: info, alert, update' })
  type: string;
}
