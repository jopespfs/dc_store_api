import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./config/config.js";


//postgres://admin:Z4YmrLW8tN32LHNzMBVgn0oIW6SczgBT@dpg-clp442h46foc73a6lcs0-a.oregon-postgres.render.com/dc_9g5t
const URL_RENDER = `${DB_CONFIG.dialect}://${DB_CONFIG.user}:${DB_CONFIG.pass}@${DB_CONFIG.host}/${DB_CONFIG.db}`
console.log(`[URL_RENDER]: ${URL_RENDER}`);

export const connection = new Sequelize( 
  URL_RENDER, 
    {
  
      pool: {
          max: 5, // maximo de conexoes suportados 
          min: 0, // minimo de conexoes suportados
          acquire: 30000, // tempo maximo, em ms(milisegundos) que o pool tenta conectar antes de gerar o erro
          idle: 10000, // tempo maximo, em ms(milisegundos) que o pool pode ser confirmado antes de ser estabelecido
      },
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false, // Configuração para evitar o erro "SSL/TLS required"
      },
      keepAlive: true,
  },
  ssl:true
  });

  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }