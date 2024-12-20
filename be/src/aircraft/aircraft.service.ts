import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aircraft } from '../database/entities/aircraft.entity';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';

@Injectable()
export class AircraftService {
  constructor(
    @InjectRepository(Aircraft)
    private readonly aircraftRepository: Repository<Aircraft>,
  ) {}

  async getAllAircrafts(): Promise<Aircraft[]> {
    return await this.aircraftRepository.find();
  }

  async getAircraftById(id: string): Promise<Aircraft | null> {
    return await this.aircraftRepository.findOne({ where: { aircraft_id: id } });
  }

  async createAircraft(createAircraftDto: CreateAircraftDto): Promise<Aircraft> {
    const aircraft = this.aircraftRepository.create(createAircraftDto);
    return await this.aircraftRepository.save(aircraft);
  }

  async updateAircraft(id: string, updateAircraftDto: UpdateAircraftDto): Promise<Aircraft> {
    await this.aircraftRepository.update(id, updateAircraftDto);
    return await this.getAircraftById(id);
  }
}
