import 'dotenv/config'

//console.log(process.env);

export const DB_CONFIG = {
    host: process.env.HOST,
    port: process.env.PASS,
    user: process.env.USER,
    pass: process.env.PASS,
    db: process.env.DB, // dripstore
    dialect: process.env.DIALECT,
}