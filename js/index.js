// Futuramente virá da API

const categorias = [
    {
        nome: "Materiais",
        imagem: "../assets/materiais basicos.png"
    },
    {
        nome: "Acabamento",
        imagem: "../assets/acabamento.png"
    },
    {
        nome: "Madeireira",
        imagem: "../assets/Madeireira.png"
    },
    {
        nome: "Hidráulica",
        imagem: "../assets/hidraulica.png"
    },
    {
        nome: "Elétrica",
        imagem: "../assets/eletrica.png"
    },
    {
        nome: "Ferramentas",
        imagem: "../assets/ferramentas.png"
    },
    {
        nome: "Tintas",
        imagem: "../assets/tintas.png"
    }
];

const destaques = [
    {
        badge: "Mais vendido",
        titulo: "Materiais básicos",
        descricao: "Vedação e assentamento",
        imagem: "../assets/materiais basicos.png"
    },
    {
        badge: "Novidade",
        titulo: "Acabamento",
        descricao: "Revestimentos e pisos",
        imagem: "../assets/acabamento.png"
    },
    {
        badge: "Premium",
        titulo: "Madeireira",
        descricao: "Tábuas e compensados",
        imagem: "../assets/Madeireira.png"
    },
    {
        badge: "Oferta",
        titulo: "Hidráulica",
        descricao: "Tubos e conexões",
        imagem: "../assets/hidraulica.png"
    },
    {
        badge: "Alto",
        titulo: "Elétrica",
        descricao: "Segurança e eficiência",
        imagem: "../assets/eletrica.png"
    },
    {
        badge: "Top",
        titulo: "Ferramentas",
        descricao: "Corte e medição",
        imagem: "../assets/ferramentas.png"
    },
    {
        badge: "Tendência",
        titulo: "Tintas",
        descricao: "Pintura e acabamento",
        imagem: "../assets/tintas.png"
    },
    {
        badge: "Economia",
        titulo: "Kits",
        descricao: "Montagens inteligentes",
        imagem: "../assets/kits.png"
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

                <img
                    src="${item.imagem}"
                    alt="${item.titulo}"
                    class="product-image"
                >

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