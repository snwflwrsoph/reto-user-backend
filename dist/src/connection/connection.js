"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("../models/user");
const company_1 = require("../models/company");
const connection = new sequelize_typescript_1.Sequelize({
    database: 'user_admin_db',
    dialect: 'postgres',
    username: 'user_panel_admin',
    password: 'HDK#$%Ljkwerff.89',
    host: 'localhost',
    port: 5432,
    models: [user_1.User, company_1.Company]
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.authenticate(); // authenticate verifica la conexión
            console.log("Conexión exitosa a la base de datos PostgreSQL.");
            yield connection.sync();
        }
        catch (e) {
            console.log("Error al conectar con la base de datos:", e);
        }
    });
}
exports.default = connectionDB;
//# sourceMappingURL=connection.js.map