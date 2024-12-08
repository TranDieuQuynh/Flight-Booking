import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Flight } from './flight.entity';

@Entity()
export class Aircraft {
  @PrimaryGeneratedColumn('uuid')
  aircraft_id: string;

  @Column()
  model: string;

  @Column()
  manufacturer: string;

  @Column('int')
  seat_capacity: number;

  @OneToMany(() => Flight, (flight) => flight.aircraft)
  flights: Flight[];
}
