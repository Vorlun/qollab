import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { MerchCategory } from "./model/merch-category.model";
import { CreateMerchCategoryDto } from "./dto/create-merch-category.dto";
import { UpdateMerchCategoryDto } from "./dto/update-merch-category.dto";

@Injectable()
export class MerchCategoryService {
  constructor(
    @InjectModel(MerchCategory) private merchCategoryModel: typeof MerchCategory
  ) {}

  async create(createDto: CreateMerchCategoryDto) {
    const category = await this.merchCategoryModel.create(createDto);
    return category;
  }

  async findAll() {
    return await this.merchCategoryModel.findAll();
  }

  async findOne(id: number) {
    const category = await this.merchCategoryModel.findByPk(id);
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return category;
  }

  async update(id: number, updateDto: UpdateMerchCategoryDto) {
    const category = await this.findOne(id);
    return await category.update(updateDto);
  }

  async remove(id: number) {
    const category = await this.findOne(id);
    await category.destroy();
    return { message: `Category #${id} removed` };
  }
}
