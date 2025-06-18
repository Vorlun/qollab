import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MerchCategoryService } from './merch-category.service';
import { CreateMerchCategoryDto } from './dto/create-merch-category.dto';
import { UpdateMerchCategoryDto } from './dto/update-merch-category.dto';

@Controller('merch-category')
export class MerchCategoryController {
  constructor(private readonly merchCategoryService: MerchCategoryService) {}

  @Post()
  create(@Body() createMerchCategoryDto: CreateMerchCategoryDto) {
    return this.merchCategoryService.create(createMerchCategoryDto);
  }

  @Get()
  findAll() {
    return this.merchCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMerchCategoryDto: UpdateMerchCategoryDto) {
    return this.merchCategoryService.update(+id, updateMerchCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.merchCategoryService.remove(+id);
  }
}
