import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Author } from "../../authors/models/author.model";
import { Currency } from "../../enums/currency.enum";
import { MerchCategory } from "../../merch-category/model/merch-category.model";

interface MerchCreationAttrs {
  name: string;
  description?: string;
  price: number;
  currency: Currency;
  available_stock: number;
  image_url?: string;
  author_id: number;
  category_id: number;
}

@Table({ tableName: "merch" })
export class Merch extends Model<Merch, MerchCreationAttrs> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @Column({ type: DataType.DECIMAL })
  price: number;

  @Column({ type: DataType.ENUM(...Object.values(Currency)) })
  currency: Currency;

  @Column({ type: DataType.INTEGER })
  available_stock: number;

  @Column({ type: DataType.STRING })
  image_url: string;

  @ForeignKey(() => Author)
  @Column({ type: DataType.INTEGER })
  author_id: number;

  @ForeignKey(() => MerchCategory)
  @Column({ type: DataType.INTEGER })
  category_id: number;

  @BelongsTo(() => Author)
  author: Author;

  @BelongsTo(() => MerchCategory)
  category: MerchCategory;
}
