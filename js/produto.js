// ================================
// DADOS DO PRODUTO ZERNMAN
// ================================


const produto = {

nome: "Furadeira de Impacto Bosch GSB 550",

preco: 379.90,

precoAntigo: 499.90,

desconto: "-20%",

avaliacao: 4.8,

estoque: 10,

imagens:[

"../assets/produtos/furadeira.png",

"../assets/produtos/furadeira2.png"

],

descricao:

"Ferramenta profissional de alta qualidade para serviços de construção, reformas e manutenção."

};





// ================================
// ELEMENTOS
// ================================


const imagemPrincipal =
document.querySelector("#imagem-maior");


const lateral =
document.querySelector("#img-lateral");





// ================================
// GALERIA DE IMAGENS
// ================================


produto.imagens.forEach((imagem)=>{


const img = document.createElement("img");


img.src = imagem;


img.alt = produto.nome;



img.addEventListener("click",()=>{


imagemPrincipal.src = imagem;


});



lateral.appendChild(img);



});



imagemPrincipal.src = produto.imagens[0];






// ================================
// INFORMAÇÕES DO PRODUTO
// ================================


document.querySelector("#nome-produto")
.textContent = produto.nome;




document.querySelector("#valor-avaliacao")
.textContent = produto.avaliacao;




document.querySelector("#preco-antigo")
.textContent =

"R$ " + produto.precoAntigo
.toFixed(2)
.replace(".",",");





document.querySelector("#preco-promocional")
.textContent =

"R$ " + produto.preco
.toFixed(2)
.replace(".",",");





document.querySelector("#desconto")
.textContent = produto.desconto;








// ================================
// QUANTIDADE
// ================================


let quantidade = 1;



const numeroQuantidade =

document.querySelector("#numero-quantidade");



document.querySelector("#aumentar")
.addEventListener("click",()=>{


if(quantidade < produto.estoque){


quantidade++;


numeroQuantidade.textContent = quantidade;


}else{


alert("Limite de estoque atingido");


}


});






document.querySelector("#diminuir")
.addEventListener("click",()=>{


if(quantidade > 1){


quantidade--;


numeroQuantidade.textContent = quantidade;


}


});







// ================================
// CARRINHO
// ================================


document.querySelector("#btn-add-carrinho")
.addEventListener("click",()=>{


alert(

produto.nome +

" foi adicionado ao carrinho!"

);


});







// ================================
// COMPRAR AGORA
// ================================


document.querySelector("#btn-comprar")
.addEventListener("click",()=>{


window.location.href="finalizar-compra.html";


});







// ================================
// FRETE
// ================================


document.querySelector("#btn-calcular-frete")
.addEventListener("click",()=>{


const cep =

document.querySelector("#frete").value;



const resultado =

document.querySelector("#resultado-frete");




if(cep.length < 8){


resultado.textContent =
"Digite um CEP válido.";


return;


}




resultado.textContent =

"Frete calculado: R$ 25,00 - Entrega em até 5 dias úteis.";




});
