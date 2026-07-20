const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cupom_has_Produto
// =========================

function cadastrar(cupomProduto, callback) {

    const sql = `INSERT INTO Cupom_has_Produto
        (Cupom_idCupom, Produto_idProduto)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            cupomProduto.Cupom_idCupom,
            cupomProduto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Cupom_has_Produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cupom_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(Cupom_idCupom, Produto_idProduto, callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_Produto
        WHERE Cupom_idCupom = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [Cupom_idCupom, Produto_idProduto],
        callback
    );

}

// =========================
// Atualizar Cupom_has_Produto
// =========================

function atualizar(Cupom_idCupom, Produto_idProduto, cupomProduto, callback) {

    const sql = `
        UPDATE Cupom_has_Produto
        SET
            Cupom_idCupom = ?,
            Produto_idProduto = ?
        WHERE Cupom_idCupom = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            cupomProduto.Cupom_idCupom,
            cupomProduto.Produto_idProduto,
            Cupom_idCupom,
            Produto_idProduto
        ],
        callback
    );

}

// =========================
// Excluir Cupom_has_Produto
// =========================

function excluir(Cupom_idCupom, Produto_idProduto, callback) {

    const sql = `
        DELETE FROM Cupom_has_Produto
        WHERE Cupom_idCupom = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [Cupom_idCupom, Produto_idProduto],
        callback
    );

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};