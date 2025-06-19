import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Author } from "./author.model";
import { Social } from "../../social/model/social.model";

interface IAuthorSocialCreationAttr {
  authorId: number;
  socialId: number;
  url: string;
}

@Table({ tableName: "author_social" })
export class AuthorSocial extends Model<
  AuthorSocial,
  IAuthorSocialCreationAttr
> {
  @ForeignKey(() => Author)
  @Column({ type: DataType.INTEGER })
  declare authorId: number;

  @ForeignKey(() => Social)
  @Column({ type: DataType.INTEGER })
  declare socialId: number;

  @Column({ type: DataType.STRING })
  declare url: string;
}
