import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateMerchDto } from "./dto/create-merch.dto";
import { Merch } from "./entities/merch.entity";

@Injectable()
export class MerchService {
  constructor(@InjectModel(Merch) private merchRepo: typeof Merch) {}

  async create(dto: CreateMerchDto, file?: Express.Multer.File) {
    const image_url = file?.path;
    return this.merchRepo.create({ ...dto, image_url });
  }

  async findAll() {
    return this.merchRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const merch = await this.merchRepo.findByPk(id, { include: { all: true } });
    if (!merch) throw new NotFoundException("Merch not found");
    return merch;
  }

  async update(id: number, dto: Partial<CreateMerchDto>) {
    const merch = await this.findOne(id);
    return merch.update(dto);
  }

  async remove(id: number) {
    const merch = await this.findOne(id);
    await merch.destroy();
    return { message: "Merch deleted" };
  }
}
