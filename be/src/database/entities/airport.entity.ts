import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Airport {
  @PrimaryGeneratedColumn('uuid')
  airport_id: string;

  @Column({ unique: true })
  airport_name: string;
}