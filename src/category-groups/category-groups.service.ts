import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.categoryGroupRepository.find();
  }

  async findOne(id: number) {
    const group = await this.categoryGroupRepository.findOne({
      where: { id },
    });
    if (!group) {
      throw new NotFoundException(`group with ID ${id} not found`);
    }
    return group;
  }

  async update(id: number, updateCategoryGroupDto: UpdateCategoryGroupDto) {
    return this.categoryGroupRepository.update(id, updateCategoryGroupDto);
  }

  async remove(id: number): Promise<void> {
    const group = await this.findOne(id);
    await this.categoryGroupRepository.remove(group);
  }
}
