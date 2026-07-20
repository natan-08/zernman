// ================================
// MINHA CONTA - ZERNMAN
// ================================


const salvar = document.querySelector(".salvar");


salvar.addEventListener("click",()=>{


alert("Dados atualizados com sucesso!");



});





const sair = document.querySelector("#sair");


sair.addEventListener("click",()=>{


if(confirm("Deseja sair da sua conta?")){


window.location.href="login.html";


}


});