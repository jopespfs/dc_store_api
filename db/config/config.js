import 'dotenv/config'

//console.log(process.env);

export const DB_CONFIG = {
    host: process.env.HOST,
    port: 5432,
    user: process.env.USER,
    pass: process.env.PASS,
    db: 'dc', // dripstore
    dialect: 'postgres',
}