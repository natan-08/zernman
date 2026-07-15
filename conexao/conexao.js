//conectar com o sevidor do node.js e o banco de dados mysql
const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // senha do mysql
  database: "zernman", 
});
conexao.connect((erro) => {

    if (erro) {
        console.log("Erro ao conectar:", erro);
        return;
    }
    console.log("banco conectado com sucesso!");
});

module.exports = conexao;