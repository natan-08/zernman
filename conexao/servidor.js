const express = require("express");
const cors = require("cors"); 

const app = express();

app.use(cors());
app.use(express.json());

const conexao = require("./conexao.js");

const avaliacao_produto_routesRoutes = require("../routes/avaliacao_produto_routesRoutes.js");
app.use("/avaliacao_produto_routes", avaliacao_produto_routesRoutes);

const banner_has_produto_routesRoutes = require("../routes/banner_has_produto_routesRoutes.js");
app.use("/banner_has_produto_routes", banner_has_produto_routesRoutes);

const banner_routesRoutes = require("../routes/banner_routesRoutes.js");
app.use("/banner_routes", banner_routesRoutes);

const cartao_pagamento_routesRoutes = require("../routes/cartao_pagamento_routesRoutes.js");
app.use("/cartao_pagamento_routes", cartao_pagamento_routesRoutes);

const categoria_has_cupom_routesRoutes = require("../routes/categoria_has_cupom_routesRoutes.js");
app.use("/categoria_has_cupom_routes", categoria_has_cupom_routesRoutes);

const categoria_routesRoutes = require("../routes/categoria_routesRoutes.js");
app.use("/categoria_routes", categoria_routesRoutes);

const cupom_has_produtoRoutes = require("../routes/cupom_has_produtoRoutes.js");
app.use("/cupom_has_produto", cupom_has_produtoRoutes);

const cupom_routesRoutes = require("../routes/cupom_routesRoutes.js");
app.use("/cupom_routes", cupom_routesRoutes);

const endereco_has_clienteRoutes = require("../routes/endereco_has_clienteRoutes.js");
app.use("/endereco_has_cliente", endereco_has_clienteRoutes);

const endereco_routesRoutes = require("../routes/endereco_routesRoutes.js");
app.use("/endereco_routes", endereco_routesRoutes);

const formas_pagamento_routesRoutes = require("../routes/formas_pagamento_routesRoutes.js");
app.use("/formas_pagamento_routes", formas_pagamento_routesRoutes);

const frete_routesRoutes = require("../routes/frete_routesRoutes.js");
app.use("/frete_routes", frete_routesRoutes);

const imagem_produto_routesRoutes = require("../routes/imagem_produto_routesRoutes.js");
app.use("/imagem_produto_routes", imagem_produto_routesRoutes);

const pedido_has_produtoRoutes = require("../routes/pedido_has_produtoRoutes.js");
app.use("/pedido_has_produto", pedido_has_produtoRoutes);

const pedidos_routesRoutes = require("../routes/pedidos_routesRoutes.js");
app.use("/pedidos_routes", pedidos_routesRoutes);

const produto_has_carrinhoRoutes = require("../routes/produto_has_carrinhoRoutes.js");
app.use("/produto_has_carrinho", produto_has_carrinhoRoutes);

const produto_routesRoutes = require("../routes/produto_routesRoutes.js");
app.use("/produto_routes", produto_routesRoutes);

const promocao_has_categoriaRoutes = require("../routes/promocao_has_categoriaRoutes.js");
app.use("/promocao_has_categoria", promocao_has_categoriaRoutes);

const promocao_routesRoutes = require("../routes/promocao_routesRoutes.js");
app.use("/promocao_routes", promocao_routesRoutes);





app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});   