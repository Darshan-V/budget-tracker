import { Injectable } from '@nestjs/common';
import { CreateCategoryGroupDto } from './dto/create-category-group.dto';
import { UpdateCategoryGroupDto } from './dto/update-category-group.dto';
import { CategoryGroups } from './entities/category-groups.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryGroupsService {
  constructor(
    @InjectRepository(CategoryGroups)
    private categoryGroupRepository: Repository<CategoryGroups>,
  ) {}

  async create(
    createCategoryGroupDto: CreateCategoryGroupDto,
  ): Promise<CategoryGroups> {
    const group = this.categoryGroupRepository.create(createCategoryGroupDto);
    return this.categoryGroupRepository.save(group);
  }

  async findAll() {
    return `This action returns all categoryGroups`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} categoryGroup`;
  }

  async update(id: number, updateCategoryGroupDto: UpdateCategoryGroupDto) {
    return `This action updates a #${id} categoryGroup`;
  }

  async remove(id: number) {
    return `This action removes a #${id} categoryGroup`;
  }
}
