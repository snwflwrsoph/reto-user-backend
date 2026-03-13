import { Table, Model, Column, CreatedAt, UpdatedAt, DataType } from  'sequelize-typescript';
import { Optional } from 'sequelize';

interface CompanyAttributes{
    id: number;
    name: string;
    tier: string;
    contact: string;
    address: string;
}

interface CompanyCreationAttributes extends Optional<CompanyAttributes,'id'> {}

@Table ({
    tableName : "Companies"
})

export class Company extends Model<CompanyAttributes, CompanyCreationAttributes>{
    @Column
    name!: string;

    @Column
    tier!: string;

    @Column
    contact!:string;

    @Column
    address!:string;

    @CreatedAt
    @Column
    affiliationDate! : Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}