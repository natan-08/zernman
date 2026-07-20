// nesse arquivo, definimos as rotas relacionadas aos cupons_has_produto e associamos cada rota a uma função do CupomHasProdutoController. As rotas são:
// POST /cupom_has_produto: para cadastrar um novo registro.
// GET /cupom_has_produto: para listar todos os registros.
// GET /cupom_has_produto/:id: para buscar um registro específico pelo ID.
// PUT /cupom_has_produto/:id: para atualizar um registro específico pelo ID.
// DELETE /cupom_has_produto/:id: para excluir um registro específico pelo ID.

const express = require("express");
const router = express.Router();

const CupomHasProdutoController = require("../controller/cupom_has_produto_controller.js");

router.post("/", CupomHasProdutoController.cadastrar);

router.get("/", CupomHasProdutoController.listar);

router.get("/:id", CupomHasProdutoController.buscarPorId);

router.put("/:id", CupomHasProdutoController.atualizar);

router.delete("/:id", CupomHasProdutoController.excluir);

module.exports = router;