// nesse arquivo, definimos as rotas relacionadas aos enderecos_has_cliente e associamos cada rota a uma função do EnderecoHasClienteController. As rotas são:
// POST /endereco_has_cliente: para cadastrar um novo registro.
// GET /endereco_has_cliente: para listar todos os registros.
// GET /endereco_has_cliente/:id: para buscar um registro específico pelo ID.
// PUT /endereco_has_cliente/:id: para atualizar um registro específico pelo ID.
// DELETE /endereco_has_cliente/:id: para excluir um registro específico pelo ID.

const express = require("express");
const router = express.Router();

const EnderecoHasClienteController = require("../controller/endereco_has_cliente_controller.js");

router.post("/", EnderecoHasClienteController.cadastrar);

router.get("/", EnderecoHasClienteController.listar);

router.get("/:id", EnderecoHasClienteController.buscarPorId);

router.put("/:id", EnderecoHasClienteController.atualizar);

router.delete("/:id", EnderecoHasClienteController.excluir);

module.exports = router;