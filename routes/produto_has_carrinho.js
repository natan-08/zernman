// nesse arquivo, definimos as rotas relacionadas aos produtos_has_carrinho e associamos cada rota a uma função do ProdutoHasCarrinhoController. As rotas são:
// POST /produto_has_carrinho: para cadastrar um novo registro.
// GET /produto_has_carrinho: para listar todos os registros.
// GET /produto_has_carrinho/:id: para buscar um registro específico pelo ID.
// PUT /produto_has_carrinho/:id: para atualizar um registro específico pelo ID.
// DELETE /produto_has_carrinho/:id: para excluir um registro específico pelo ID.

const express = require("express");
const router = express.Router();

const ProdutoHasCarrinhoController = require("../controller/produto_has_carrinho_controller.js");

router.post("/", ProdutoHasCarrinhoController.cadastrar);

router.get("/", ProdutoHasCarrinhoController.listar);

router.get("/:id", ProdutoHasCarrinhoController.buscarPorId);

router.put("/:id", ProdutoHasCarrinhoController.atualizar);

router.delete("/:id", ProdutoHasCarrinhoController.excluir);

module.exports = router;