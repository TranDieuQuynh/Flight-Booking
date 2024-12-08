import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Aircraft } from './aircraft.entity';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn('uuid')
  seat_id: string;

  @ManyToOne(() => Aircraft)
  aircraft: Aircraft;

  @Column()
  seat_number: string;

  @Column()
  class: string;
}
