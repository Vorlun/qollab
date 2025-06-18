import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SocialController } from './social/social.controller';
import { SocialService } from './social/social.service';
import { SocialModule } from './social/social.module';
import { Social } from './social/model/social.model';
import { MerchCategoryModule } from './merch-category/merch-category.module';
import { MerchCategory } from './merch-category/model/merch-category.model';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [Social, MerchCategory, User],
      autoLoadModels: true,
      logging: true,
      sync: { alter: true },
    }),
    SocialModule,
    MerchCategoryModule,
    UsersModule,
  ],
})
export class AppModule {}
