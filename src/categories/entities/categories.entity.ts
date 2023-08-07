import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  assigned: number;

  @Column()
  status: boolean;

  @Column()
  activity: number;

  @Column()
  available: number;

  @Column()
  group_id: number;
}
