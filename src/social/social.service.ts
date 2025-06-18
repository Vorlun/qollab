import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Social } from "./model/social.model";
import { CreateSocialDto } from "./dto/create-social.dto";
import { UpdateSocialDto } from "./dto/update-social.dto";

@Injectable()
export class SocialService {
  constructor(@InjectModel(Social) private socialModel: typeof Social) {}

  async create(createSocialDto: CreateSocialDto): Promise<Social> {
    return this.socialModel.create(createSocialDto);
  }

  async findAll(): Promise<Social[]> {
    return this.socialModel.findAll();
  }

  async findOne(id: number): Promise<Social> {
    const social = await this.socialModel.findByPk(id);
    if (!social) throw new NotFoundException("Social not found");
    return social;
  }

  async update(id: number, updateDto: UpdateSocialDto): Promise<Social> {
    const social = await this.findOne(id);
    return social.update(updateDto);
  }

  async remove(id: number): Promise<{ message: string }> {
    const social = await this.findOne(id);
    await social.destroy();
    return { message: "Deleted successfully" };
  }
}
