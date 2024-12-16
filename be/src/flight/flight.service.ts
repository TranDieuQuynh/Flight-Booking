import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from '../database/entities/flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';
import { Aircraft } from '../database/entities/aircraft.entity';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
    @InjectRepository(Aircraft)
    private readonly aircraftRepository: Repository<Aircraft>,
  ) {}

  async getAllFlights(): Promise<Flight[]> {
    return await this.flightRepository.find();
  }

  async createFlight(createFlightDto: CreateFlightDto): Promise<Flight> {
    const { aircraft_id, ...flightData } = createFlightDto;

    // Validate that the aircraft exists
    const aircraft = await this.aircraftRepository.findOne({ where: { aircraft_id } });
    if (!aircraft) {
      throw new Error('Aircraft not found');
    }

    const newFlight = this.flightRepository.create({
      ...flightData,
      aircraft,
    });
    return await this.flightRepository.save(newFlight);
  }
}
