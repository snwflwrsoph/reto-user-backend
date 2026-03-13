import { Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, AllowNull, BelongsTo} from 'sequelize-typescript';
import {Optional} from 'sequelize';
import { Company } from './company';

interface UserAttributes{
    id: number;
    name: string;
    email:string;
    password: string;
    isAdmin: boolean;
    companyId: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{}

@Table ({
    tableName: "Users"
})

export class User extends Model<UserAttributes, UserCreationAttributes>{
    
    @Column
    name!: string;

    @Column
    email!: string;

    @Column
    password!: string;

    @Column
    isAdmin!: boolean;

    @ForeignKey(() => Company)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    declare companyId: number | null;

    @BelongsTo(() => Company, { foreignKey: "companyId" })
    declare company?: Company | null;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}
