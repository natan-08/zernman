const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Frete
// =========================

function cadastrar(frete, callback) {

    const sql = `
        INSERT INTO frete
        (
            valor,
            tipo,
            bairro,
            entrega_full,
            rastreio,
            Loja_idLoja
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            frete.valor,
            frete.tipo,
            frete.bairro,
            frete.entrega_full,
            frete.rastreio,
            frete.Loja_idLoja
        ],
        callback
    );

}

// =========================
// Listar Fretes
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM frete
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Frete por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM frete
        WHERE idfrete = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Frete
// =========================

function atualizar(id, frete, callback) {

    const sql = `
        UPDATE frete
        SET
            valor = ?,
            tipo = ?,
            bairro = ?,
            entrega_full = ?,
            rastreio = ?,
            Loja_idLoja = ?
        WHERE idfrete = ?
    `;

    conexao.query(
        sql,
        [
            frete.valor,
            frete.tipo,
            frete.bairro,
            frete.entrega_full,
            frete.rastreio,
            frete.Loja_idLoja,
            id
        ],
        callback
    );

}

// =========================
// Excluir Frete
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM frete
        WHERE idfrete = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};