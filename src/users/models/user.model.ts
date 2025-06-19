import { Author } from "../../authors/models/author.model";
import { Role } from "../../enums/role.enum";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";

interface IUserCreationAtr{
    username:string
    email:string
    password:string
    immage_url:string
    is_verifed:boolean
    role: Role
}

@Table({ tableName: "user" })
export class User extends Model<User, IUserCreationAtr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING })
  declare username: string;

  @Column({ type: DataType.STRING, unique: true })
  declare email: string;

  @Column({ type: DataType.STRING })
  declare password: string;

  @Column({ type: DataType.STRING })
  declare immage_url: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare is_verifed: boolean;

  @Column({
    type: DataType.ENUM(...Object.values(Role)), 
    defaultValue: Role.USER,
  })
  declare role: Role;

  @HasMany(()=>Author)
  declare authors:Author
}
