import { Module } from '@nestjs/common';
import { BudgetsModule } from './budgets/budgets.module';
import { CategoryGroupsModule } from './category-groups/category-groups.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budgets } from './budgets/entities/budgets.entity';
import { CategoryGroups } from './category-groups/entities/category-groups.entity';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { Categories } from './categories/entities/categories.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'budget_tracker',
      entities: [Budgets, CategoryGroups, Categories],
      // synchronize: true,
    }),
    BudgetsModule,
    CategoryGroupsModule,
    UsersModule,
    CategoriesModule,
    AccountsModule,
    TransactionsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
