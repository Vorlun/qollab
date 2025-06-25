import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SocialModule } from './social/social.module';
import { Social } from './social/model/social.model';
import { MerchCategoryModule } from './merch-category/merch-category.module';
import { MerchCategory } from './merch-category/model/merch-category.model';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { Author } from './authors/models/author.model';
import { AuthorSocial } from './authors/models/author-social.model';
import { MerchModule } from './merch/merch.module';
import { Merch } from './merch/entities/merch.entity';

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
      models: [Social, MerchCategory, User, Author, AuthorSocial, Merch],
      autoLoadModels: true,
      logging: true,
      sync: { alter: true },
    }),
    SocialModule,
    MerchCategoryModule,
    UsersModule,
    MerchModule,
    Merch,
  ],
})
export class AppModule {}
