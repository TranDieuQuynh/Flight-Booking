import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Aircraft {
  @PrimaryGeneratedColumn('uuid')
  aircraft_id: string;

  @Column({ unique: true })
  aircraft_name: string;

  @Column()
  capacity: number;
}