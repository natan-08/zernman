const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Promocao_has_Categoria
// =========================

function cadastrar(promocaoCategoria, callback) {

    const sql = `INSERT INTO Promocao_has_Categoria
        (promocao_idpromocao, Categoria_idcategoria)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            promocaoCategoria.promocao_idpromocao,
            promocaoCategoria.Categoria_idcategoria
        ],
        callback
    );

}

// =========================
// Listar Promocao_has_Categoria
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Promocao_has_Categoria
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(promocao_idpromocao, Categoria_idcategoria, callback) {

    const sql = `
        SELECT *
        FROM Promocao_has_Categoria
        WHERE promocao_idpromocao = ?
        AND Categoria_idcategoria = ?
    `;

    conexao.query(
        sql,
        [promocao_idpromocao, Categoria_idcategoria],
        callback
    );

}

// =========================
// Atualizar Promocao_has_Categoria
// =========================

function atualizar(promocao_idpromocao, Categoria_idcategoria, promocaoCategoria, callback) {

    const sql = `
        UPDATE Promocao_has_Categoria
        SET
            promocao_idpromocao = ?,
            Categoria_idcategoria = ?
        WHERE promocao_idpromocao = ?
        AND Categoria_idcategoria = ?
    `;

    conexao.query(
        sql,
        [
            promocaoCategoria.promocao_idpromocao,
            promocaoCategoria.Categoria_idcategoria,
            promocao_idpromocao,
            Categoria_idcategoria
        ],
        callback
    );

}

// =========================
// Excluir Promocao_has_Categoria
// =========================

function excluir(promocao_idpromocao, Categoria_idcategoria, callback) {

    const sql = `
        DELETE FROM Promocao_has_Categoria
        WHERE promocao_idpromocao = ?
        AND Categoria_idcategoria = ?
    `;

    conexao.query(
        sql,
        [promocao_idpromocao, Categoria_idcategoria],
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