//==========================================
// IMPORTA O MODEL
//==========================================

const avaliacaoProdutoModel = require("../model/avaliacao_produto_model");

//==========================================
// CADASTRAR AVALIAÇÃO DO PRODUTO
//==========================================

function cadastrar(req, res) {

    const avaliacaoProduto = req.body;

    // Validação dos campos obrigatórios

    if (
        !avaliacaoProduto.data_avaliacao ||
        !avaliacaoProduto.nota
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    // Cadastra a avaliação do produto

    avaliacaoProdutoModel.cadastrar(avaliacaoProduto, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar avaliação do produto."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Avaliação do produto cadastrada com sucesso!",
            idAvaliacaoProduto: resultado.insertId

        });

    });

}

//==========================================
// LISTAR AVALIAÇÕES DOS PRODUTOS
//==========================================

function listar(req, res) {

    avaliacaoProdutoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar avaliações dos produtos."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR AVALIAÇÃO DO PRODUTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    avaliacaoProdutoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar avaliação do produto."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Avaliação do produto não encontrada."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR AVALIAÇÃO DO PRODUTO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const avaliacaoProduto = req.body;

    avaliacaoProdutoModel.atualizar(id, avaliacaoProduto, (erro) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar avaliação do produto."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Avaliação do produto atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR AVALIAÇÃO DO PRODUTO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    avaliacaoProdutoModel.excluir(id, (erro) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir avaliação do produto."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Avaliação do produto excluída com sucesso."
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