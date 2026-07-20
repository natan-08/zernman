const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Imagem do Produto
// =========================

function cadastrar(imagemProduto, callback) {

    const sql = `
        INSERT INTO imagem_produto
        (
            arquivo,
            produto_idproduto
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            imagemProduto.arquivo,
            imagemProduto.produto_idproduto
        ],
        callback
    );

}

// =========================
// Listar Imagens
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM imagem_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Imagem por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM imagem_produto
        WHERE idimagem_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar Imagens por Produto
// =========================

function buscarPorProduto(idProduto, callback) {

    const sql = `
        SELECT *
        FROM imagem_produto
        WHERE produto_idproduto = ?
    `;

    conexao.query(sql, [idProduto], callback);

}

// =========================
// Atualizar Imagem do Produto
// =========================

function atualizar(id, imagemProduto, callback) {

    const sql = `
        UPDATE imagem_produto
        SET
            arquivo = ?,
            produto_idproduto = ?
        WHERE idimagem_produto = ?
    `;

    conexao.query(
        sql,
        [
            imagemProduto.arquivo,
            imagemProduto.produto_idproduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir Imagem
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM imagem_produto
        WHERE idimagem_produto = ?
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