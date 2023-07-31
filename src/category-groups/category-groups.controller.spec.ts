import { Test, TestingModule } from '@nestjs/testing';
import { CategoryGroupsController } from './category-groups.controller';
import { CategoryGroupsService } from './category-groups.service';

describe('CategoryGroupsController', () => {
  let controller: CategoryGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryGroupsController],
      providers: [CategoryGroupsService],
    }).compile();

    controller = module.get<CategoryGroupsController>(CategoryGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
