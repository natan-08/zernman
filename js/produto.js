// CRIANDO VÁRIAVEIS
/* nome das váriaveis não pode ter:
-acentos
-espaço
-simbolos
-não pode começar com números
-não deve ser escrito com a primeira letra em maiusculo
 */

// variaveis que alteram de valor
let preco_promocional = 85.43;
let preco_antigo = 120.50;
let desconto = "-15%";
let quantidade = 10;
let favorito = false;
//variaveis que são constantes/ não alteram de valor
const nomeProduto = "kit 3 conjuntos top + short leggin";
const tamanho = ["P", "M", "G", "GG"];
const cores = ["ROSA", "VERDE", "PRETO"];
const avaliacoes = 4.5;
const img_miniaturas =
    [
        "/assets/conjunto-3-pecas-1.png",
        "/assets/conjunto-3-pecas-2.png",
        "/assets/conjunto-3-pecas-3.png",
        "/assets/conjunto-3-pecas.png"
    ];
const img_principal = "/assets/conjunto-3-pecas.png";
const descricao = "Confeccionado em tecido macio, com excelente elasticidade e toque suave, o conjunto proporciona ajuste perfeito ao corpo, valorizando a silhueta e oferecendo segurança durante atividades físicas de diferentes intensidades. O top possui alças finas e cós reforçado, garantindo sustentação e conforto, enquanto o short de cintura alta oferece melhor modelagem e firmeza";
let frete;
// botoes e arquivos
let btn_add_carrinho;
let btn_comprar;
let btn_add_quantidade;
let btn_remover_quantidade;
let btn_calcular_frete;


// CÓDIGO PARA PREENCHER AS IMAGENS NO HTML

//CRIANDO UMA VÁRIAVEL PARA RECONHER O ID DA IMAGEM LATERAL
const lateral = document.getElementById("img-lateral");



//LENDO A QUANTIDADE DE IMAGENS CADASTRADAS E CRIANDO AS TAGS IMG

/* ForEach: percorre uma lista de itens até o final
- ele percorre o primeiro, se ver que tem outro, ele lê o outro
- quando chega no ultimo ele para de ler e finaliza a execução
- img_miniatura é chamado pq é ele que contém a lista de imagens
- depois o ForEach é chamado para ler a lista
- e dentro do ForEach passamos o tipo de documento lido (imagem)
 */
img_miniaturas.forEach(imagem => {
    // CRIANDO UMA VÁRIAVEL QUE CRIE A TAG IMG NA DIV DO HTML
    const img = document.createElement("img");

    // criando o código que mostra as imagens no site
    img.src = imagem;//ele joga o caminho da imagem na tag img
    img.classList.add("img-lateral");//jogar a tag criada na div

    /*criando o código que substitui a imagem 
     principal pela miniatura clicada*/
    img.addEventListener("click", () => {
        document.getElementById("imagem-maior").src =
            imagem;
    });//ver se a pessoa clicou na imagem
    lateral.appendChild(img);//mostra a imagem adicionada

});//fechar o ForEach

// preencher a imagem principal
document.getElementById("imagem-maior").src = img_principal;


//--------------------preencher dados do produto------------------

document.getElementById(nome-produro).textcontent = nomeProduto;