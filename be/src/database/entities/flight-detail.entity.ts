import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Flight } from './flight.entity';
import { TicketClass } from './ticket-class.entity';
import { Seat } from './seat.entity';

@Entity()
export class FlightDetail {
  @PrimaryGeneratedColumn('uuid')
  flight_detail_id: string;

  @ManyToOne(() => Flight)
  flight: Flight;

  @ManyToOne(() => Seat)
  seat: Seat;
}
