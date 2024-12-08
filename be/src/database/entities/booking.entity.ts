import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { BookingDetail } from './booking-detail.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  booking_id: string;

  @ManyToOne(() => User)
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  status: string;

  @Column()
  can_cancel_until: Date;

  @Column({ nullable: true })
  cancellation_date: Date;

  @OneToMany(() => BookingDetail, (bookingDetail) => bookingDetail.booking)
  bookingDetails: BookingDetail[];
}
