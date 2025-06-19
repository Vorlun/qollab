import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Social } from "./model/social.model";
import { SocialService } from "./social.service";
import { SocialController } from "./social.controller";
import { AuthorSocial } from "../authors/models/author-social.model";
import { Author } from "../authors/models/author.model";

@Module({
    imports: [SequelizeModule.forFeature([Social, AuthorSocial, Author])],
    providers: [SocialService],
    controllers: [SocialController],
  })
  export class SocialModule {}
  
