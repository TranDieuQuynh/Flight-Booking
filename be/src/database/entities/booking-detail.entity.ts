import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Booking } from './booking.entity';
import { TicketClass } from "./ticket-class.entity";
import { Flight } from './flight.entity';

@Entity()
export class BookingDetail {
  @PrimaryGeneratedColumn('uuid')
  booking_detail_id: string;

  @ManyToOne(() => Booking)
  booking: Booking;

  @ManyToOne(() => Flight)
  flight_detail: Flight;

  @Column()
  passenger_name: string;

  @Column('int')
  passenger_age: number;

  @ManyToOne(() => TicketClass)
  ticket_class: TicketClass;
}
