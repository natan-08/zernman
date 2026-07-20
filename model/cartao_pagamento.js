const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cartão
// =========================

function cadastrar(cartao, callback) {

    const sql = `
        INSERT INTO Cartao_pagamento
        (
            numero,
            data_vencimento,
            cvc,
            nome_proprietario,
            nome_identificacao
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            cartao.numero,
            cartao.data_vencimento,
            cartao.cvc,
            cartao.nome_proprietario,
            cartao.nome_identificacao
        ],
        callback
    );

}

// =========================
// Listar Cartões
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cartao_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cartao_pagamento
        WHERE idcartao_pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Cartão
// =========================

function atualizar(id, cartao, callback) {

    const sql = `
        UPDATE Cartao_pagamento
        SET
            numero = ?,
            data_vencimento = ?,
            cvc = ?,
            nome_proprietario = ?,
            nome_identificacao = ?
        WHERE idcartao_pagamento = ?
    `;

    conexao.query(
        sql,
        [
            cartao.numero,
            cartao.data_vencimento,
            cartao.cvc,
            cartao.nome_proprietario,
            cartao.nome_identificacao,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cartão
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cartao_pagamento
        WHERE idcartao_pagamento = ?
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