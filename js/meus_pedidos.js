// =================================
// MEUS PEDIDOS - ZERNMAN
// =================================


const listaPedidos = document.querySelector("#listaPedidos");



const pedido = {

produto:"Furadeira de Impacto Bosch GSB 550",

imagem:"../assets/produtos/furadeira.png",

numero:"#458921",

data:"20/07/2026",

status:"Pedido confirmado",

total:"R$ 404,90"

};




listaPedidos.innerHTML = `


<div class="pedido-card">


<img src="${pedido.imagem}" alt="${pedido.produto}">



<div class="info">


<h3>

${pedido.produto}

</h3>



<p>

Número do pedido: ${pedido.numero}

</p>



<p>

Data da compra: ${pedido.data}

</p>



<span class="status">

${pedido.status}

</span>


</div>





<div class="valor">


<strong>

${pedido.total}

</strong>



<a href="detalhes_pedido.html" class="btn-detalhes">

Ver detalhes

</a>



</div>



</div>


`;