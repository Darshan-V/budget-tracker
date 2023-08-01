import { Module } from '@nestjs/common';
import { CategoryGroupsService } from './category-groups.service';
import { CategoryGroupsController } from './category-groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryGroups } from './entities/category-groups.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryGroups])],
  controllers: [CategoryGroupsController],
  providers: [CategoryGroupsService],
})
export class CategoryGroupsModule {}
