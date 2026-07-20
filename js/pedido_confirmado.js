// =================================
// PEDIDO CONFIRMADO - ZERNMAN
// =================================



const pedido = JSON.parse(

localStorage.getItem("pedidoZernman")

);





const numeroPedido =
document.querySelector("#numeroPedido");


const produto =
document.querySelector("#produto");


const total =
document.querySelector("#total");


const pagamento =
document.querySelector("#pagamento");


const data =
document.querySelector("#data");






if(pedido){



numeroPedido.textContent =

"#" +

Math.floor(Math.random()*900000+100000);




produto.textContent =

pedido.produto;




total.textContent =

pedido.total;




pagamento.textContent =

pedido.pagamento;




data.textContent =

pedido.data;



}

else{



numeroPedido.textContent="#000000";

produto.textContent="Nenhum pedido encontrado";

total.textContent="R$ 0,00";

pagamento.textContent="-";

data.textContent="-";


}