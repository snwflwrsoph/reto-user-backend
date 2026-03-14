import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { User } from './user';
interface CompanyAttributes {
    id: number;
    name: string;
    tier: string;
    contact: string;
    address: string;
}
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id'> {
}
export declare class Company extends Model<CompanyAttributes, CompanyCreationAttributes> {
    name: string;
    tier: string;
    contact: string;
    address: string;
    affiliationDate: Date;
    updatedAt: Date;
    users?: User[];
}
export {};
//# sourceMappingURL=company.d.ts.map