import { Column } from 'typeorm';

export class BudgetDto {
  @Column()
  budet_id: number;

  @Column()
  category: string;
}
