import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {
}
export declare class User extends Model<UserAttributes, UserCreationAttributes> {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=user.d.ts.map