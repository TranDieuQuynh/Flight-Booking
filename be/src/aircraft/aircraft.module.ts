import { Module } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { AircraftController } from './aircraft.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aircraft } from 'src/database/entities/aircraft.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aircraft])], 
  providers: [AircraftService],
  controllers: [AircraftController],
  exports: [AircraftService]
})

export class AircraftModule {}