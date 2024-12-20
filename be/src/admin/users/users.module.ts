import { Module } from '@nestjs/common';
import { AdminUserService } from './users.service';
import { AdminUserController } from './users.controller';
import { User } from '../../database/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])], 
  providers: [AdminUserService],
  controllers: [AdminUserController],
  exports: [AdminUserService]
})
export class AdminUserModule {}
