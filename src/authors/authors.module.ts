import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Author } from "./models/author.model";
import { User } from "../users/models/user.model";
import { AuthorsController } from "./authors.controller";
import { AuthorsService } from "./authors.service";
import { AuthorSocial } from "./models/author-social.model";
import { Social } from "../social/model/social.model";


@Module({
  imports: [SequelizeModule.forFeature([Author, User, AuthorSocial, Social])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
