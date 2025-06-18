import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Social } from "./model/social.model";
import { SocialService } from "./social.service";
import { SocialController } from "./social.controller";

@Module({
    imports: [SequelizeModule.forFeature([Social])],
    providers: [SocialService],
    controllers: [SocialController],
  })
  export class SocialModule {}
  
