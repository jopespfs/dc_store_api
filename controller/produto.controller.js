import db from "../model/index.js"

const Produto = db.produto

export const produtoController = {
    // salva um produto 
    create: (req, res) => {
        if (!req.body.nome) {
            res.status(400).send({
                message: 'O nome não pode ser vazio!'
            })
        }

        const { nome, categoria, descricao, desconto, precoAntes, precoDepois, ativo } = req.body

        const produto = { nome, categoria, descricao, desconto, precoAntes, precoDepois, ativo }

        Produto.create(produto)
            .then(data => {
                res.send(data)
            })
            .catch(e => {
                res.status(500).send({
                    message: e.message || 'Ocorreu um erro ao salvar o Produto!'
                })
            })
    },
    findAll: (req, res) => {
        Produto.findAll()
            .then(data => {
                res.send(data)
            })
            .catch(e => {
                res.status(500).send({
                    message: e.message || 'Ocorreu um erro ao buscar todos os Produtos!'
                })
            })
    },
    findById: (req, res) => {
        const id = req.params.id

        Produto.findByPk(id)
            .then(data => {
                res.send(data)
            })
            .catch(e => {
                res.status(500).send({
                    message: e.message || `Ocorreu um erro ao buscar o produtos de id: ${id}!`
                })
            })
    },
    findByStatus: (req, res) => {
        // Convertermos o parametro status para minusculo (toLowerCase()), pois o usuário pode enviar maiusculo, minusculo, mistrudado (TRUE, TruE) e depois com o ternário convertermos para booleano
        const status = req.params.status.toLowerCase() === 'true' ? true : false

        console.log('status', typeof status);

        Produto.findAll({
            where: { ativo: status }
        })
            .then(data => {
                res.send(data)
            })
            .catch(e => {
                res.status(500).send({
                    message: e.message || `Ocorreu um erro ao buscar o produto pelo status ${status}!`
                })
            })

    },
    update: async (req, res) => {
        const id = req.params.id

        const produtoBd = await Produto.findByPk(id)

        if (!produtoBd) {
            res.status(404).json(`O produto com o id ${id} não existe `)
        }

        await produtoBd.update(req.body)
        res.status(201).send()
    },
    deleteById: async (req, res) => {
        const id = req.params.id

        const produtoBd = await Produto.findByPk(id)

        if (!produtoBd) {
            res.status(404).json('O produto não existe')
        }

        await produtoBd.destroy()
        res.status(204).send()
    },
    deleteAll: async (req, res) => {
        try {
            await Produto.destroy({ where: {}, truncate: false })

            res.status(204).send()
        } catch (error) {
            res.status(500).json('Erro ao exlcuir todos os produtos')
        }
    }
}