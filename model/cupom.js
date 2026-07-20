const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cupom
// =========================

function cadastrar(cupom, callback) {

    const sql = `
        INSERT INTO cupom
        (
            nome,
            quantidade,
            desconto,
            data_validade,
            Loja_idLoja
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            cupom.nome,
            cupom.quantidade,
            cupom.desconto,
            cupom.data_validade,
            cupom.Loja_idLoja
        ],
        callback
    );

}

// =========================
// Listar Cupons
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM cupom
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Cupom por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cupom
        WHERE idCupom = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Cupom
// =========================

function atualizar(id, cupom, callback) {

    const sql = `
        UPDATE cupom
        SET
            nome = ?,
            quantidade = ?,
            desconto = ?,
            data_validade = ?,
            Loja_idLoja = ?
        WHERE idCupom = ?
    `;

    conexao.query(
        sql,
        [
            cupom.nome,
            cupom.quantidade,
            cupom.desconto,
            cupom.data_validade,
            cupom.Loja_idLoja,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cupom
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cupom
        WHERE idCupom = ?
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