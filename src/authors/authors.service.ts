import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize"
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { Author } from "./models/author.model";
import { CreateAuthorDto } from "./dto/create-author.dto";

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(Author) private authorModel: typeof Author) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorModel.create(createAuthorDto);
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Author> {
    const author = await this.authorModel.findByPk(id, {
      include: { all: true },
    });
    if (!author) throw new NotFoundException(`Author #${id} not found`);
    return author;
  }

  async update(id: number, updateDto: UpdateAuthorDto): Promise<Author> {
    const author = await this.findOne(id);
    return await author.update(updateDto);
  }

  async remove(id: number): Promise<{ message: string }> {
    const author = await this.findOne(id);
    await author.destroy();
    return { message: `Author #${id} deleted successfully` };
  }
}
