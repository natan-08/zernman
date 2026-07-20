// ================================
// Cadastro Zernman
// ================================


const formulario = document.querySelector("#formCadastro");



if(formulario){


formulario.addEventListener("submit",(e)=>{


e.preventDefault();




// Dados

const nome =
document.querySelector("#nome").value.trim();


const email =
document.querySelector("#email").value.trim();


const confirmarEmail =
document.querySelector("#confirmarEmail").value.trim();


const senha =
document.querySelector("#senha").value;


const confirmarSenha =
document.querySelector("#confirmarSenha").value;



const termos =
document.querySelector("#termos").checked;







// Validação nome

if(nome === ""){

alert("Digite seu nome completo.");

return;

}





// Validação termos

if(!termos){

alert("Aceite os termos e condições.");

return;

}






// Validação email

if(email !== confirmarEmail){

alert("Os e-mails não são iguais.");

return;

}





// Validação senha

if(senha.length < 6){

alert("A senha deve ter no mínimo 6 caracteres.");

return;

}





if(senha !== confirmarSenha){

alert("As senhas não são iguais.");

return;

}





// Sucesso

alert("Conta criada com sucesso!");



window.location.href="login.html";



});


}







// ================================
// Cadastro por código de e-mail
// ================================


const botaoEmail = document.querySelector(".email-codigo");



if(botaoEmail){


botaoEmail.addEventListener("click",()=>{


const email =
document.querySelector("#email").value.trim();



if(email === ""){


alert("Digite seu e-mail primeiro.");


return;


}



alert(
"Enviamos um código de confirmação para: "
+ email
);



});


}







// ================================
// Login Google
// ================================


const botaoGoogle = document.querySelector(".google");



if(botaoGoogle){


botaoGoogle.addEventListener("click",()=>{


alert(
"Cadastro com Google será integrado futuramente."
);


});


}