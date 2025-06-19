import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { Currency } from "../../enums/currency.enum";
import { Social } from "../../social/model/social.model";
import { AuthorSocial } from "./author-social.model";

interface IAuthorCreationAttr {
  userId: number;
  bio: string;
  account_number: string;
  currency: Currency;
}

@Table({ tableName: "authors" })
export class Author extends Model<Author, IAuthorCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  declare userId: number;

  @Column({ type: DataType.STRING })
  declare bio: string;

  @Column({ type: DataType.STRING })
  declare account_number: string;

  @Column({ type: DataType.ENUM(...Object.values(Currency)) })
  declare currency: Currency;

  @BelongsTo(() => User)
  declare user: User;

  @BelongsToMany(() => Social, () => AuthorSocial)
  socials: Social[];
}
