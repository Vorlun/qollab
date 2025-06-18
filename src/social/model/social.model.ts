import { Column, DataType, Model, Table } from "sequelize-typescript";


interface ISocialCreationAtr {
    name:string
}

@Table({tableName:"social"})
export class Social extends Model<Social, ISocialCreationAtr> {

    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id: number

    @Column({
        type:DataType.STRING,
    })
    declare name: string
}