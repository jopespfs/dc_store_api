import express from "express"
import { produtoController } from "../controller/produto.controller.js"

export const routeProduto =  (app) => {
    
    const router = express.Router()

    // Salva um novo produto no BD
    router.post('/', produtoController.create)

    // Buscar todos os produtos
    router.get('/', produtoController.findAll)

    // Buscar por id
    router.get('/:id', produtoController.findById)

    // Buscar os produtos pelo status
    router.get('/status/:status', produtoController.findByStatus)

    // Atualizar um produto
    router.patch('/:id', produtoController.update)

    // Deletar um produto 
    router.delete('/:id', produtoController.deleteById)

    // Deletar todos os produtos
    router.delete('/', produtoController.deleteAll)

    app.use('/api/produto', router)
}