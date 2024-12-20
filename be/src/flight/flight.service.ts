import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from '../database/entities/flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  async getAllFlights(): Promise<Flight[]> {
    return await this.flightRepository.find();
  }

  async getFlightById(id: string): Promise<Flight | null> {
    return await this.flightRepository.findOne({ where: { flight_id: id } });
  }

  async createFlight(createFlightDto: CreateFlightDto): Promise<Flight> {
    const flight = this.flightRepository.create(createFlightDto);
    return await this.flightRepository.save(flight);
  }

  async updateFlight(id: string, updateFlightDto: UpdateFlightDto): Promise<Flight> {
    const flight = await this.flightRepository.findOne({ where: { flight_id: id } });
    if (!flight) {
      throw new NotFoundException(`Flight with ID ${id} not found.`);
    }

    // Update fields
    Object.assign(flight, updateFlightDto);
  
    // Save the updated entity
    return await this.flightRepository.save(flight);
  }
}
