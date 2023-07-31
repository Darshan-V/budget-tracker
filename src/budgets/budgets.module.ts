import { Module } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budgets } from './entities/budgets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Budgets])],
  controllers: [BudgetsController],
  providers: [BudgetsService],
})
export class BudgetsModule {}
