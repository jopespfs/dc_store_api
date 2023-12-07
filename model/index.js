import { Sequelize } from "sequelize"
import { connection } from "../db/db.js"
import { produtoModel } from "./produto.model.js"

const db = {}

db.sequelize = Sequelize
db.connection = connection

db.produto = produtoModel(connection)

export default db