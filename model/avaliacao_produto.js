const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Avaliação
// =========================

function cadastrar(avaliacao, callback) {

    const sql = `
        INSERT INTO Avaliacao_Produto
        (
            data,
            nota,
            descricao_avaliacao,
            Produto_idProduto
        )
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            avaliacao.data,
            avaliacao.nota,
            avaliacao.descricao_avaliacao,
            avaliacao.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Avaliações
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Avaliacao_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Avaliação por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Avaliacao_Produto
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar Avaliações por Produto
// =========================

function buscarPorProduto(idProduto, callback) {

    const sql = `
        SELECT *
        FROM Avaliacao_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [idProduto], callback);

}

// =========================
// Atualizar Avaliação
// =========================

function atualizar(id, avaliacao, callback) {

    const sql = `
        UPDATE Avaliacao_Produto
        SET
            data = ?,
            nota = ?,
            descricao_avaliacao = ?,
            Produto_idProduto = ?
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(
        sql,
        [
            avaliacao.data,
            avaliacao.nota,
            avaliacao.descricao_avaliacao,
            avaliacao.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir Avaliação
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Avaliacao_Produto
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorProduto,
    atualizar,
    excluir

};