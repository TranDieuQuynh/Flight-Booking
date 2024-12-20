import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Airport } from '../database/entities/airport.entity';
import { CreateAirportDto } from './dto/create-airport.dto';

@Injectable()
export class AirportService {
  constructor(
    @InjectRepository(Airport)
    private readonly airportRepository: Repository<Airport>,
  ) {}

  async getAllAirports(): Promise<Airport[]> {
    return await this.airportRepository.find();
  }

  async createAirport(createAirportDto: CreateAirportDto): Promise<Airport> {
    const airport = this.airportRepository.create(createAirportDto);
    return await this.airportRepository.save(airport);
  }
}
