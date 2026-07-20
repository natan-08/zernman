// nesse arquivo, definimos as rotas relacionadas às promocoes_has_categoria e associamos cada rota a uma função do PromocaoHasCategoriaController. As rotas são:
// POST /promocao_has_categoria: para cadastrar um novo registro.
// GET /promocao_has_categoria: para listar todos os registros.
// GET /promocao_has_categoria/:id: para buscar um registro específico pelo ID.
// PUT /promocao_has_categoria/:id: para atualizar um registro específico pelo ID.
// DELETE /promocao_has_categoria/:id: para excluir um registro específico pelo ID.

const express = require("express");
const router = express.Router();

const PromocaoHasCategoriaController = require("../controller/promocao_has_categoria_controller.js");

router.post("/", PromocaoHasCategoriaController.cadastrar);

router.get("/", PromocaoHasCategoriaController.listar);

router.get("/:id", PromocaoHasCategoriaController.buscarPorId);

router.put("/:id", PromocaoHasCategoriaController.atualizar);

router.delete("/:id", PromocaoHasCategoriaController.excluir);

module.exports = router;