// =====================================
// FINALIZAR COMPRA - ZERNMAN
// =====================================



const botaoFinalizar = document.querySelector("#finalizar");




// =====================================
// BOTÃO FINALIZAR
// =====================================


if(botaoFinalizar){


botaoFinalizar.addEventListener("click",()=>{



const campos = document.querySelectorAll(
".campo input"
);



let preenchido = true;



campos.forEach(campo=>{


if(campo.value.trim()===""){


preenchido=false;


}


});






if(!preenchido){


alert(
"Preencha todos os dados antes de finalizar o pedido."
);


return;


}







// pagamento selecionado


const pagamento = document.querySelector(
'input[name="pagamento"]:checked'
);



let formaPagamento = pagamento
? pagamento.value
: "Não informado";







// =====================================
// SALVAR PEDIDO
// =====================================


const pedido = {


cliente:{

nome:
document.querySelector("#nome").value,


cpf:
document.querySelector("#cpf").value,


email:
document.querySelector("#email").value,


telefone:
document.querySelector("#telefone").value


},



endereco:{


cep:
document.querySelector("#cep").value,


rua:
document.querySelector("#rua").value,


numero:
document.querySelector("#numero").value,


bairro:
document.querySelector("#bairro").value,


cidade:
document.querySelector("#cidade").value,


estado:
document.querySelector("#estado").value


},



pagamento:
formaPagamento,



produto:

"Furadeira de Impacto Bosch GSB 550",



total:

"R$ 404,90",



data:

new Date().toLocaleDateString("pt-BR")



};





localStorage.setItem(

"pedidoZernman",

JSON.stringify(pedido)

);








alert(

"Pedido realizado com sucesso!"

);





window.location.href=

"pedido_confirmado.html";



});



}








// =====================================
// MÁSCARA CEP
// =====================================


const cep = document.querySelector("#cep");



if(cep){


cep.addEventListener("input",()=>{


let valor = cep.value.replace(/\D/g,"");



if(valor.length > 5){


valor =

valor.substring(0,5)

+

"-"

+

valor.substring(5,8);


}



cep.value = valor;



});


}








// =====================================
// MÁSCARA CPF
// =====================================


const cpf = document.querySelector("#cpf");



if(cpf){


cpf.addEventListener("input",()=>{


let valor = cpf.value
.replace(/\D/g,"")
.substring(0,11);



valor = valor.replace(
/(\d{3})(\d)/,
"$1.$2"
);



valor = valor.replace(
/(\d{3})(\d)/,
"$1.$2"
);



valor = valor.replace(
/(\d{3})(\d{1,2})$/,
"$1-$2"
);



cpf.value = valor;



});


}








// =====================================
// MÁSCARA TELEFONE
// =====================================


const telefone = document.querySelector("#telefone");



if(telefone){


telefone.addEventListener("input",()=>{


let valor = telefone.value
.replace(/\D/g,"")
.substring(0,11);



valor = valor.replace(
/(\d{2})(\d)/,
"($1) $2"
);



valor = valor.replace(
/(\d{5})(\d)/,
"$1-$2"
);



telefone.value = valor;



});


}