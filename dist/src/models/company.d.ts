import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
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
}
export {};
//# sourceMappingURL=company.d.ts.map