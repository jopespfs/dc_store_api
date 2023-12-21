import 'dotenv/config'

//console.log(process.env.HOST);

export const DB_CONFIG = {
    HOST: process.env.HOST,
    PORT: 5432,
    USER: process.env.USER,
    PASS: process.env.PASS,
    DB: 'dc', // dripstore
    DIALECT: 'postgres'
}