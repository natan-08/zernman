const mais = document.querySelector(".mais");
const menos = document.querySelector(".menos");
const quantidade = document.querySelector(".quantidade input");


if(mais){

mais.addEventListener("click",()=>{

quantidade.value++;

});

}



if(menos){

menos.addEventListener("click",()=>{


if(quantidade.value > 1){

quantidade.value--;

}


});

}




const remover = document.querySelector(".remover");


if(remover){

remover.addEventListener("click",()=>{


document.querySelector(".produto").remove();


alert("Produto removido do carrinho");


});

}




const finalizar = document.querySelector(".finalizar");


if(finalizar){

finalizar.addEventListener("click",()=>{


window.location.href="finalizar-compra.html";


});

}