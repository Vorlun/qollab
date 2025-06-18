import { Module } from '@nestjs/common';
import { MerchCategoryService } from './merch-category.service';
import { MerchCategoryController } from './merch-category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MerchCategory } from './model/merch-category.model';

@Module({
  imports:[SequelizeModule.forFeature([MerchCategory])],
  controllers: [MerchCategoryController],
  providers: [MerchCategoryService],
})
export class MerchCategoryModule {}
