import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn('uuid')
  flight_id: string;

  @Column()
  src_airport: string;

  @Column()
  dest_airport: string;

  @Column()
  aircraft_name: string;

  @Column()
  base_price: number;

  @Column()
  status: string;

  @Column()
  start_time: Date;
}