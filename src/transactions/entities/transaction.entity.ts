import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

Entity();
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  payee: string;

  @Column()
  memo: string;

  @Column()
  inflow: number;

  @Column()
  outflow: number;

  @Column()
  transaction_ref: number;

  @Column()
  transaction_id: number;
}
