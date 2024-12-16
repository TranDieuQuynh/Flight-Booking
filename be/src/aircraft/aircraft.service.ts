import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aircraft } from '../database/entities/aircraft.entity';
import { CreateAircraftDto } from './dto/create-aircraft.dto';

@Injectable()
export class AircraftService {
  constructor(
    @InjectRepository(Aircraft)
    private readonly aircraftRepository: Repository<Aircraft>,
  ) {}

  async getAllAircrafts(): Promise<Aircraft[]> {
    return await this.aircraftRepository.find();
  }

  async createAircraft(createAircraftDto: CreateAircraftDto): Promise<Aircraft> {
    const newAircraft = this.aircraftRepository.create(createAircraftDto);
    return await this.aircraftRepository.save(newAircraft);
  }
}