const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Promoção
// =========================

function cadastrar(promocao, callback) {

    const sql = `
        INSERT INTO promocao
        (
            data_inicio,
            data_final,
            valor_promocao,
            nome,
            banner_idbanner
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocao,
            promocao.nome,
            promocao.banner_idbanner
        ],
        callback
    );

}

// =========================
// Listar Promoções
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Promoção por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM promocao
        WHERE idpromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Promoção
// =========================

function atualizar(id, promocao, callback) {

    const sql = `
        UPDATE promocao
        SET
            data_inicio = ?,
            data_final = ?,
            valor_promocao = ?,
            nome = ?,
            banner_idbanner = ?
        WHERE idpromocao = ?
    `;

    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocao,
            promocao.nome,
            promocao.banner_idbanner,
            id
        ],
        callback
    );

}

// =========================
// Excluir Promoção
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM promocao
        WHERE idpromocao = ?
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