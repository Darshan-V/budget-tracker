import { Column } from 'typeorm';
export class updateDto {
  @Column()
  category: string;

  @Column()
  user_id: number;
}
