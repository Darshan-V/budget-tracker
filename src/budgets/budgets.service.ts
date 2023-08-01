import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BudgetDto } from './dto/budget.dto';
import { updateDto } from './dto/update.dto';
import { Budgets } from './entities/budgets.entity';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectRepository(Budgets)
    private budgetsRepository: Repository<Budgets>,
  ) {}
  async create(budgetDto: BudgetDto): Promise<Budgets> {
    const budget = this.budgetsRepository.create(budgetDto);
    return this.budgetsRepository.save(budget);
  }

  async findAll(): Promise<Budgets[]> {
    return this.budgetsRepository.find();
  }

  async findOne(id: number): Promise<Budgets> {
    const budget = await this.budgetsRepository.findOne({
      where: { id },
    });
    if (!budget) {
      throw new NotFoundException(`budget with ID ${id} not found`);
    }
    return budget;
  }

  async update(id: number, UpdateDto: updateDto) {
    return this.budgetsRepository.update(id, UpdateDto);
  }

  async remove(id: number): Promise<void> {
    const budget = await this.findOne(id);
    await this.budgetsRepository.remove(budget);
  }
}
