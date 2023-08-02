import { Column } from 'typeorm';

export class UpdateCategoryGroupDto {
  @Column()
  budget_id: number;

  @Column()
  type: string;

  @Column()
  name: string;
}
