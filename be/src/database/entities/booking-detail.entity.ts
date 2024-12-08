import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Booking } from './booking.entity';
import { FlightDetail } from './flight-detail.entity';

@Entity()
export class BookingDetail {
  @PrimaryGeneratedColumn('uuid')
  booking_detail_id: string;

  @ManyToOne(() => Booking)
  booking: Booking;

  @ManyToOne(() => FlightDetail)
  flight_detail: FlightDetail;

  @Column()
  passenger_name: string;

  @Column('int')
  passenger_age: number;

  @Column()
  seat_number: string;
}
