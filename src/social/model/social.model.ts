import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { Author } from "../../authors/models/author.model";
import { AuthorSocial } from "../../authors/models/author-social.model";

interface ISocialCreationAttr {
  name: string;
}

@Table({ tableName: "social" })
export class Social extends Model<Social, ISocialCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @BelongsToMany(() => Author, () => AuthorSocial)
  authors: Author[];
}
