import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./models/user.model";

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (!user) throw new NotFoundException("user not found");
    return user;
  }

  async update(id: number, updateDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    return user.update(updateDto);
  }

  async remove(id: number): Promise<{ message: string }> {
    const user = await this.findOne(id);
    await user.destroy();
    return { message: "Deleted successfully" };
  }
}
