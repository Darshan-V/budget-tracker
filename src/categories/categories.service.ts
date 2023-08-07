import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './entities/categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoryRepository: Repository<Categories>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto): Promise<Categories> {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    const category = this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`category with ${id} not found`);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: number): Promise<Categories> {
    const category = await this.findOne(id);
    return this.categoryRepository.remove(category);
  }
}
