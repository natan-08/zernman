// ================================
// Produtos da loja
// ================================


const produtos = [


{
nome:"Furadeira de Impacto Bosch GSB 550",
categoria:"Ferramentas",
preco:379.90,
precoAntigo:499.90,
imagem:"../imagens/produtos/furadeira.png",
avaliacao:215,
desconto:"-20%"
},


{
nome:"Parafusadeira Makita 12V",
categoria:"Ferramentas",
preco:599.90,
precoAntigo:699.90,
imagem:"../imagens/produtos/parafusadeira.png",
avaliacao:142,
desconto:"-15%"
},


{
nome:"Serra Mármore Bosch",
categoria:"Ferramentas",
preco:729.90,
precoAntigo:849.90,
imagem:"../imagens/produtos/serra.png",
avaliacao:97,
desconto:"-12%"
},


{
nome:"Esmerilhadeira Vonder",
categoria:"Ferramentas",
preco:289.90,
precoAntigo:359.90,
imagem:"../imagens/produtos/esmerilhadeira.png",
avaliacao:188,
desconto:"-18%"
}


];





// ================================
// GERAR PRODUTOS
// ================================


const grid = document.querySelector(".grid-produtos");


if(grid){


grid.innerHTML="";


produtos.forEach(produto=>{


grid.innerHTML += `


<article class="card-produto">


<div class="badge">

${produto.desconto}

</div>



<button class="favorito">


<i class="fa-regular fa-heart"></i>


</button>




<img src="${produto.imagem}" alt="${produto.nome}">



<span class="categoria">

${produto.categoria}

</span>




<h3>

${produto.nome}

</h3>




<div class="avaliacao">

★★★★★

<small>

(${produto.avaliacao})

</small>


</div>




<span class="preco-antigo">

R$ ${produto.precoAntigo.toFixed(2).replace(".",",")}

</span>



<h2>

R$ ${produto.preco.toFixed(2).replace(".","," )}


</h2>



<p>

ou 10x sem juros

</p>




<div class="acoes">


<button class="detalhes">

Ver detalhes

</button>



<button class="comprar">


<i class="fa-solid fa-cart-shopping"></i>

Carrinho


</button>


</div>



</article>


`;


});


}







// ================================
// FAVORITOS
// ================================


document.addEventListener("click",(e)=>{


const favorito=e.target.closest(".favorito");


if(favorito){


const icone=favorito.querySelector("i");


icone.classList.toggle("fa-regular");

icone.classList.toggle("fa-solid");


favorito.classList.toggle("ativo");


}


});








// ================================
// CARRINHO
// ================================


document.addEventListener("click",(e)=>{


if(e.target.closest(".comprar")){


alert("Produto adicionado ao carrinho!");

}


});








// ================================
// DETALHES
// ================================


document.addEventListener("click",(e)=>{


if(e.target.closest(".detalhes")){


window.location.href="produto.html";


}


});