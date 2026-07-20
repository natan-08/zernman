const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Banner_has_Produto
// =========================

function cadastrar(bannerProduto, callback) {

    const sql = `INSERT INTO Banner_has_Produto
        (Banner_idBanner, Produto_idProduto)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            bannerProduto.Banner_idBanner,
            bannerProduto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Banner_has_Produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Banner_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(Banner_idBanner, Produto_idProduto, callback) {

    const sql = `
        SELECT *
        FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [Banner_idBanner, Produto_idProduto],
        callback
    );

}

// =========================
// Atualizar Banner_has_Produto
// =========================

function atualizar(Banner_idBanner, Produto_idProduto, bannerProduto, callback) {

    const sql = `
        UPDATE Banner_has_Produto
        SET
            Banner_idBanner = ?,
            Produto_idProduto = ?
        WHERE Banner_idBanner = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            bannerProduto.Banner_idBanner,
            bannerProduto.Produto_idProduto,
            Banner_idBanner,
            Produto_idProduto
        ],
        callback
    );

}

// =========================
// Excluir Banner_has_Produto
// =========================

function excluir(Banner_idBanner, Produto_idProduto, callback) {

    const sql = `
        DELETE FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [Banner_idBanner, Produto_idProduto],
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