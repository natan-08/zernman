// CRIANDO VARIÁVEIS

let preco_promocional = 85.43;
let preco_antigo = 120.50;
let desconto = "-15%";
let quantidade = 6;
let favorito = false;

const nomeProduto = "Cimento";
const tamanho = ["P", "M", "G", "GG"];
const cores = ["ROSA", "VERDE", "PRETO"];
const avaliacoes = 4.5;

const img_miniaturas = [
    "../assets/cimento.png",
    "../assets/parede.png"
];

const img_principal = "/assets/parede.png";

const descricao = "Confeccionado em tecido macio, com excelente elasticidade e toque suave, o conjunto proporciona ajuste perfeito ao corpo.";

let frete;

// BOTÕES E ARQUIVOS

let btn_add_carrinho;
let btn_comprar;
let btn_add_quantidade;
let btn_remover_quantidade;
let btn_calcular_frete;

// ========================================
// PREENCHER IMAGENS
// ========================================

const lateral = document.getElementById("img-lateral");

img_miniaturas.forEach(imagem => {

    const img = document.createElement("img");

    img.src = imagem;

    img.addEventListener("click", () => {
        document.getElementById("imagem-maior").src = imagem;
    });

    lateral.appendChild(img);

});

document.getElementById("imagem-maior").src = img_principal;

// ========================================
// PREENCHER DADOS DO PRODUTO
// ========================================

document.getElementById("nome-produto").textContent = nomeProduto;

// NO HTML O ID ESTÁ ASSIM:
document.getElementById("valor-avaliacão").textContent = avaliacoes;

// NO HTML O ID ESTÁ ASSIM:
document.getElementById("preço-antigo").textContent = preco_antigo;

document.getElementById("preco-promocional").textContent = preco_promocional;

document.getElementById("desconto").textContent = desconto;

// ========================================
// QUANTIDADE DE PRODUTOS
// ========================================

let quantidade_inicial = 1;

btn_add_quantidade = document.getElementById("aumentar");
btn_remover_quantidade = document.getElementById("diminuir");

const numero = document.getElementById("numero-quantidade");

numero.textContent = quantidade_inicial;

// AUMENTAR

btn_add_quantidade.addEventListener("click", () => {

    if (quantidade_inicial < quantidade) {
        quantidade_inicial++;//aumentar de 1 em 1
        numero.textContent = quantidade_inicial;
    }else {
        alert("voce atingiu o limite de estoque");
    }

});

// DIMINUIR

btn_remover_quantidade.addEventListener("click", () => {

    if (quantidade_inicial > 0) {

        quantidade_inicial--;//diminuir de 1 em 1

        numero.textContent = quantidade_inicial;

    }

    });

