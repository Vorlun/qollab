import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Module({
  imports:[SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
