const senha = document.querySelector("#senha");

const mostrar = document.querySelector("#mostrarSenha");



mostrar.addEventListener("click",()=>{


if(senha.type === "password"){


senha.type="text";


mostrar.innerHTML=
'<i class="fa-solid fa-eye-slash"></i>';


}else{


senha.type="password";


mostrar.innerHTML=
'<i class="fa-solid fa-eye"></i>';


}


});





const formulario = document.querySelector("form");



formulario.addEventListener("submit",(e)=>{


e.preventDefault();



const email =
document.querySelector("#email").value;



if(email === ""){


alert("Digite seu e-mail");


return;

}



alert("Login realizado com sucesso!");



});