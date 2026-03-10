import { Table, Model, Column, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript';
import {Optional} from 'sequelize';

interface UserAttributes{
    id: number;
    name: string;
    email:string;
    password: string;
    isAdmin: boolean;
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

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}
