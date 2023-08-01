import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class CategoryGroups {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  budget_id: number;

  @Column()
  type: string;

  @Column()
  name: string;
}
