import { Column } from 'typeorm';

export class BudgetDto {
  @Column()
  user_id: number;

  @Column()
  category: string;
}
