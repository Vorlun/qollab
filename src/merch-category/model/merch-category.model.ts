import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IMerchCategoryCreationAtr {
  name: string;
}

@Table({ tableName: "merchCategory" })
export class MerchCategory extends Model<MerchCategory, IMerchCategoryCreationAtr> {
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
}
