import { Column } from 'typeorm';
export class updateDto {
  @Column()
  category: string;

  @Column()
  budget_id: number;
}
