const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Categoria_has_Cupom
// =========================

function cadastrar(categoriaCupom, callback) {

    const sql = `INSERT INTO Categoria_has_Cupom
        (Categoria_idCategoria, Cupom_idCupom)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            categoriaCupom.Categoria_idCategoria,
            categoriaCupom.Cupom_idCupom
        ],
        callback
    );

}

// =========================
// Listar Categoria_has_Cupom
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Categoria_has_Cupom
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(Categoria_idCategoria, Cupom_idCupom, callback) {

    const sql = `
        SELECT *
        FROM Categoria_has_Cupom
        WHERE Categoria_idCategoria = ?
        AND Cupom_idCupom = ?
    `;

    conexao.query(
        sql,
        [Categoria_idCategoria, Cupom_idCupom],
        callback
    );

}

// =========================
// Atualizar Categoria_has_Cupom
// =========================

function atualizar(Categoria_idCategoria, Cupom_idCupom, categoriaCupom, callback) {

    const sql = `
        UPDATE Categoria_has_Cupom
        SET
            Categoria_idCategoria = ?,
            Cupom_idCupom = ?
        WHERE Categoria_idCategoria = ?
        AND Cupom_idCupom = ?
    `;

    conexao.query(
        sql,
        [
            categoriaCupom.Categoria_idCategoria,
            categoriaCupom.Cupom_idCupom,
            Categoria_idCategoria,
            Cupom_idCupom
        ],
        callback
    );

}

// =========================
// Excluir Categoria_has_Cupom
// =========================

function excluir(Categoria_idCategoria, Cupom_idCupom, callback) {

    const sql = `
        DELETE FROM Categoria_has_Cupom
        WHERE Categoria_idCategoria = ?
        AND Cupom_idCupom = ?
    `;

    conexao.query(
        sql,
        [Categoria_idCategoria, Cupom_idCupom],
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