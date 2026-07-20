const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Endereco_has_Cliente
// =========================

function cadastrar(enderecoCliente, callback) {

    const sql = `INSERT INTO Endereco_has_Cliente
        (Endereco_idEndereco, Cliente_idCliente)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            enderecoCliente.Endereco_idEndereco,
            enderecoCliente.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Endereco_has_Cliente
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Endereco_has_Cliente
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(Endereco_idEndereco, Cliente_idCliente, callback) {

    const sql = `
        SELECT *
        FROM Endereco_has_Cliente
        WHERE Endereco_idEndereco = ?
        AND Cliente_idCliente = ?
    `;

    conexao.query(
        sql,
        [Endereco_idEndereco, Cliente_idCliente],
        callback
    );

}

// =========================
// Atualizar Endereco_has_Cliente
// =========================

function atualizar(Endereco_idEndereco, Cliente_idCliente, enderecoCliente, callback) {

    const sql = `
        UPDATE Endereco_has_Cliente
        SET
            Endereco_idEndereco = ?,
            Cliente_idCliente = ?
        WHERE Endereco_idEndereco = ?
        AND Cliente_idCliente = ?
    `;

    conexao.query(
        sql,
        [
            enderecoCliente.Endereco_idEndereco,
            enderecoCliente.Cliente_idCliente,
            Endereco_idEndereco,
            Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Excluir Endereco_has_Cliente
// =========================

function excluir(Endereco_idEndereco, Cliente_idCliente, callback) {

    const sql = `
        DELETE FROM Endereco_has_Cliente
        WHERE Endereco_idEndereco = ?
        AND Cliente_idCliente = ?
    `;

    conexao.query(
        sql,
        [Endereco_idEndereco, Cliente_idCliente],
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