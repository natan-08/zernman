// nesse arquivo, definimos as rotas relacionadas aos pedidos_has_produto e associamos cada rota a uma função do PedidoHasProdutoController. As rotas são:
// POST /pedido_has_produto: para cadastrar um novo registro.
// GET /pedido_has_produto: para listar todos os registros.
// GET /pedido_has_produto/:id: para buscar um registro específico pelo ID.
// PUT /pedido_has_produto/:id: para atualizar um registro específico pelo ID.
// DELETE /pedido_has_produto/:id: para excluir um registro específico pelo ID.

const express = require("express");
const router = express.Router();

const PedidoHasProdutoController = require("../controller/pedido_has_produto_controller.js");

router.post("/", PedidoHasProdutoController.cadastrar);

router.get("/", PedidoHasProdutoController.listar);

router.get("/:id", PedidoHasProdutoController.buscarPorId);

router.put("/:id", PedidoHasProdutoController.atualizar);

router.delete("/:id", PedidoHasProdutoController.excluir);

module.exports = router;