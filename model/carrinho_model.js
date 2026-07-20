const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Carrinho
// =========================

function cadastrar(carrinho, callback) {

    const sql = `INSERT INTO carrinho
        (,quantidade_produto,preco_total )
        VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            carrinho.quantidade_produto,
            carrinho.preco_total,
            
        ],
        callback
    );

}

// =========================
// Listar Carrinhos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Carrinho
        WHERE idcarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM Carrinho
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Carrinho
// =========================

function atualizar(id, carrinho, callback) {

    const sql = `
        UPDATE Carrinho
        SET

            quantidade_produto = ?,
            preco_total = ?,
            data_nascimento = ?,
            Loja_idLoja = ?

        WHERE idcarrinho = ?
    `;

    conexao.query(
        sql,
        [
            carrinho.quantidade_produto,
            carrinho.preco_total,
        ],
        callback
    );

}

// =========================
// Excluir Carrinho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Carrinho
        WHERE idcarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorEmail,
    atualizar,
    excluir

};