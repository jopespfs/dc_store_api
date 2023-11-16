import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./config/config.js";

export const connection = new Sequelize(DB_CONFIG.db, DB_CONFIG.user, DB_CONFIG.pass, {
    host: DB_CONFIG.host ,
    dialect: DB_CONFIG.dialect,
    pool: {
        max: 5, // maximo de conexão suportadas,
        min: 0, // minimo de conexão suportada.
        acquire: 30000, // tempo maximo, em ms(milisegundos) que o pool tenta conectar antes de gerar erro.
        idle: 10000,
    }
  });

  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

