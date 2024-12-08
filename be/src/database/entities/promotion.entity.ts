import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
  promotion_id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('decimal')
  discount_percentage: number;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;
}
