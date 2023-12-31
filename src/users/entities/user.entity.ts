import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

Entity();
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
