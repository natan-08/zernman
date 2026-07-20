const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Forma de Pagamento
// =========================

function cadastrar(formaPagamento, callback) {

    const sql = `
        INSERT INTO formas_pagamento
        (nome, link, cartao_empresa, ativo)
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            formaPagamento.nome,
            formaPagamento.link,
            formaPagamento.cartao_empresa,
            formaPagamento.ativo
        ],
        callback
    );

}

// =========================
// Listar Formas de Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM formas_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM formas_pagamento
        WHERE idformas_pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Forma de Pagamento
// =========================

function atualizar(id, formaPagamento, callback) {

    const sql = `
        UPDATE formas_pagamento
        SET
            nome = ?,
            link = ?,
            cartao_empresa = ?,
            ativo = ?
        WHERE idformas_pagamento = ?
    `;

    conexao.query(
        sql,
        [
            formaPagamento.nome,
            formaPagamento.link,
            formaPagamento.cartao_empresa,
            formaPagamento.ativo,
            id
        ],
        callback
    );

}

// =========================
// Excluir Forma de Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM formas_pagamento
        WHERE idformas_pagamento = ?
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