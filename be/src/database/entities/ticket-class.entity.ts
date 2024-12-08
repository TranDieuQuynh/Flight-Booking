import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TicketClass {
  @PrimaryGeneratedColumn('uuid')
  ticket_class_id: string;

  @Column()
  class_name: string;

  @Column('decimal')
  multiplier: number;
}
