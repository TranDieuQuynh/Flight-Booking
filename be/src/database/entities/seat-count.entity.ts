import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Flight } from './flight.entity';
import { TicketClass } from './ticket-class.entity';

@Entity()
export class SeatCount {
  @PrimaryGeneratedColumn('uuid')
  seat_count_id: string;

  @OneToOne(() => Flight)
  @JoinColumn()
  flight: Flight

  @OneToOne(() => TicketClass)
  @JoinColumn()
  ticket_class: TicketClass

  @Column('int')
  seat_count: number
}