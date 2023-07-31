import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetDto } from './dto/budget.dto';

@Controller('budgets')
export class BudgetsController {
  constructor(private budgetsService: BudgetsService) {}

  @Post()
  create(@Body() createBudgetDto: BudgetDto) {
    return this.budgetsService.create(createBudgetDto);
  }

  @Get()
  findAll() {
    return this.budgetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.budgetsService.findOne(id);
  }

  // @Put(':id')
  // update(@Param('id') id: number, @Body('category') category: string) {
  //   return this.budgetsService.update(id, category);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.budgetsService.remove(id);
  }
}
