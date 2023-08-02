import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Budgets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  user_id: number;
}
