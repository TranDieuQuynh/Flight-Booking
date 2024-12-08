import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Aircraft } from './aircraft.entity';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn('uuid')
  flight_id: string;

  @ManyToOne(() => Aircraft)
  aircraft: Aircraft;

  @Column()
  departure_city: string;

  @Column()
  arrival_city: string;

  @Column()
  departure_time: Date;

  @Column()
  arrival_time: Date;

  @Column('decimal')
  base_price: number;

  @Column()
  status: string;
}
