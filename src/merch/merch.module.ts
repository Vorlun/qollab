import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { MerchService } from "./merch.service";
import { MerchController } from "./merch.controller";
import { Merch } from "./entities/merch.entity";
import { Author } from "../authors/models/author.model";
import { MerchCategory } from "../merch-category/model/merch-category.model";

@Module({
  imports: [
    SequelizeModule.forFeature([Merch, Author, MerchCategory]),
  ],
  controllers: [MerchController],
  providers: [MerchService],
})
export class MerchModule {}
