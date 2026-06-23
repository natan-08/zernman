/*
    Futuramente os dados virão da API:

    fetch('/api/produtos')
    .then(res => res.json())
    .then(produtos => renderizarProdutos(produtos));
*/

const produtos = [
    {
        id: 1,
        nome: "Furadeira de Impacto Profissional",
        categoria: "Ferramentas",
        preco: 466.65,
         imagem: "/assets/cimento.png"
    },

    {
        id: 2,
        nome: "Cimento CP-II 50kg",
        categoria: "Materiais Básicos",
        preco: 34.50,
        imagem: "/assets/cimento.png"
    },

    {
        id: 3,
        nome: "Torneira Monocomando",
        categoria: "Acabamento",
        preco: 289.90,
         imagem: "/assets/cimento.png"
    }
];

const categorias = [
    "Materiais Básicos",
    "Acabamento",
    "Madeireira",
    "Hidráulica",
    "Elétrica",
    "Ferramentas"
];

const marcas = [
    "Zernman",
    "Votoran",
    "Amanco",
    "Bosch"
];

function renderizarCategorias() {

    const container =
        document.getElementById("listaCategorias");

    categorias.forEach(categoria => {

        container.innerHTML += `
            <label>
                <input type="checkbox">
                ${categoria}
            </label>
        `;
    });
}

function renderizarMarcas() {

    const container =
        document.getElementById("listaMarcas");

    marcas.forEach(marca => {

        container.innerHTML += `
            <label>
                <input type="checkbox">
                ${marca}
            </label>
        `;
    });
}

function renderizarProdutos(lista) {

    const grid =
        document.getElementById("productsGrid");

    grid.innerHTML = "";

    lista.forEach(produto => {

        grid.innerHTML += `
            <article class="product-card">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    class="product-image"
                >

                <div class="product-info">

                    <div class="product-category">
                        ${produto.categoria}
                    </div>

                    <h3 class="product-name">
                        ${produto.nome}
                    </h3>

                    <div class="product-price">
                        R$ ${produto.preco.toFixed(2)}
                    </div>

                    <button
                        class="add-cart"
                        data-id="${produto.id}"
                    >
                        Adicionar
                    </button>

                </div>

            </article>
        `;
    });

    document.getElementById("totalProdutos")
        .textContent =
        `${lista.length} produtos`;
}

renderizarCategorias();
renderizarMarcas();
renderizarProdutos(produtos);