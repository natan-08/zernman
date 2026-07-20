const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Pedido
// =========================

function cadastrar(pedido, callback) {

    const sql = `
        INSERT INTO pedidos
        (
            data,
            nota_fiscal,
            data_entrega,
            status_entrega,
            status_pagamento
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            pedido.data,
            pedido.nota_fiscal,
            pedido.data_entrega,
            pedido.status_entrega,
            pedido.status_pagamento
        ],
        callback
    );

}

// =========================
// Listar Pedidos
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM pedidos
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Pedido por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM pedidos
        WHERE idpedidos = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Pedido
// =========================

function atualizar(id, pedido, callback) {

    const sql = `
        UPDATE pedidos
        SET
            data = ?,
            nota_fiscal = ?,
            data_entrega = ?,
            status_entrega = ?,
            status_pagamento = ?
        WHERE idpedidos = ?
    `;

    conexao.query(
        sql,
        [
            pedido.data,
            pedido.nota_fiscal,
            pedido.data_entrega,
            pedido.status_entrega,
            pedido.status_pagamento,
            id
        ],
        callback
    );

}

// =========================
// Excluir Pedido
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM pedidos
        WHERE idpedidos = ?
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