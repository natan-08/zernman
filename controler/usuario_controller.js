//==========================================
// IMPORTA O MODEL
//==========================================

const usuarioModel = require("../model/usuario_model");

//==========================================
// CADASTRAR USUÁRIO
//==========================================

function cadastrar(req, res) {

    const usuario = req.body;

    // Validação dos campos obrigatórios

    if (
        !usuario.nome ||
        !usuario.cpf ||
        !usuario.telefone ||
        !usuario.email ||
        !usuario.senha ||
        !usuario.data_nascimento
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    // Cadastra o usuário

    usuarioModel.cadastrar(usuario, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar usuário."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Usuário cadastrado com sucesso!",
            idCliente: resultado.insertId

        });

    });

}

//==========================================
// LISTAR USUÁRIOS
//==========================================

function listar(req, res) {

    usuarioModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar usuários."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR USUÁRIO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    usuarioModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar usuário."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Usuário não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR USUÁRIO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const usuario = req.body;

    usuarioModel.atualizar(id, usuario, (erro) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar usuário."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Usuário atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR USUÁRIO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    usuarioModel.excluir(id, (erro) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir usuário."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Usuário excluído com sucesso."
        });

    });

}

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};