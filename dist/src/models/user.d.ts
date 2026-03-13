import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Company } from './company';
interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    companyId: number;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {
}
export declare class User extends Model<UserAttributes, UserCreationAttributes> {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    userId: number | null;
    company?: Company | null;
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=user.d.ts.map