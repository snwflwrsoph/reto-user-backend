import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import { Company } from "../models/company";

const connection = new Sequelize({ 
  database: 'user_admin_db', 
  dialect: 'postgres',
  username: 'user_panel_admin', 
  password: 'HDK#$%Ljkwerff.89', 
  host: 'localhost',
  port: 5432,
  models: [ User, Company ] 
}); 

async function connectionDB() {
  try {
    await connection.authenticate(); // authenticate verifica la conexión
    console.log("Conexión exitosa a la base de datos PostgreSQL.");
    await connection.sync();
  } catch (e) {
    console.log("Error al conectar con la base de datos:", e);
  }
}

export default connectionDB;