const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto_has_Carrinho
// =========================

function cadastrar(produtoCarrinho, callback) {

    const sql = `INSERT INTO Produto_has_Carrinho
        (Carrinho_idCarrinho, Produto_idProduto)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produtoCarrinho.Carrinho_idCarrinho,
            produtoCarrinho.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Produto_has_Carrinho
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Produto_has_Carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(Carrinho_idCarrinho, Produto_idProduto, callback) {

    const sql = `
        SELECT *
        FROM Produto_has_Carrinho
        WHERE Carrinho_idCarrinho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [Carrinho_idCarrinho, Produto_idProduto],
        callback
    );

}

// =========================
// Atualizar Produto_has_Carrinho
// =========================

function atualizar(Carrinho_idCarrinho, Produto_idProduto, produtoCarrinho, callback) {

    const sql = `
        UPDATE Produto_has_Carrinho
        SET
            Carrinho_idCarrinho = ?,
            Produto_idProduto = ?
        WHERE Carrinho_idCarrinho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            produtoCarrinho.Carrinho_idCarrinho,
            produtoCarrinho.Produto_idProduto,
            Carrinho_idCarrinho,
            Produto_idProduto
        ],
        callback
    );

}

// =========================
// Excluir Produto_has_Carrinho
// =========================

function excluir(Carrinho_idCarrinho, Produto_idProduto, callback) {

    const sql = `
        DELETE FROM Produto_has_Carrinho
        WHERE Carrinho_idCarrinho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [Carrinho_idCarrinho, Produto_idProduto],
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