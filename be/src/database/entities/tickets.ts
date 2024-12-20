import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Flight } from './flight.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  ticket_id: string;

  @ManyToOne(() => Flight)
  flight: Flight;

  @Column()
  customer_id: string;

  @Column()
  customer_name: string;

  @Column()
  total_price: number;

  @Column()
  status: string;

  @Column()
  start_time: Date;
}