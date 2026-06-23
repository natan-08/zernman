// Futuramente virá da API

const categorias = [
    {
        nome: "Materiais",
        imagem: "assets/categorias/material.png"
    },
    {
        nome: "Acabamento",
        imagem: "assets/categorias/acabamento.png"
    },
    {
        nome: "Madeireira",
        imagem: "assets/categorias/madeira.png"
    },
    {
        nome: "Hidráulica",
        imagem: "assets/categorias/hidraulica.png"
    },
    {
        nome: "Elétrica",
        imagem: "assets/categorias/eletrica.png"
    },
    {
        nome: "Ferramentas",
        imagem: "assets/categorias/ferramentas.png"
    },
    {
        nome: "Tintas",
        imagem: "assets/categorias/tintas.png"
    }
];

const destaques = [
    {
        badge: "Mais vendido",
        titulo: "Materiais básicos",
        descricao: "Vedação e assentamento",
    },
    {
        badge: "Novidade",
        titulo: "Acabamento",
        descricao: "Revestimentos e pisos",
    },
    {
        badge: "Premium",
        titulo: "Madeireira",
        descricao: "Tábuas e compensados",
    },
    {
        badge: "Oferta",
        titulo: "Hidráulica",
        descricao: "Tubos e conexões",
    },
    {
        badge: "Alto",
        titulo: "Elétrica",
        descricao: "Segurança e eficiência",
    },
    {
        badge: "Top",
        titulo: "Ferramentas",
        descricao: "Corte e medição",
    },
    {
        badge: "Tendência",
        titulo: "Tintas",
        descricao: "Pintura e acabamento",
    },
    {
        badge: "Economia",
        titulo: "Kits",
        descricao: "Montagens inteligentes",
    }
];

renderCategorias();
renderDestaques();

function renderCategorias() {

    const container =
        document.getElementById("quickCategories");

    categorias.forEach(item => {

        container.innerHTML += `
            <div class="category-card">

                <img
                    src="${item.imagem}"
                    alt="${item.nome}"
                >

                <h4>${item.nome}</h4>

            </div>
        `;
    });
}

function renderDestaques() {

    const container =
        document.getElementById("featuredGrid");

    destaques.forEach(item => {

        container.innerHTML += `
            <div class="product-card">

                <div class="product-image"></div>

                <div class="product-content">

                    <span class="badge">
                        ${item.badge}
                    </span>

                    <div class="product-title">
                        ${item.titulo}
                    </div>

                    <div class="product-description">
                        ${item.descricao}
                    </div>

                </div>

            </div>
        `;
    });
}