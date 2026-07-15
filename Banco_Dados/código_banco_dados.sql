/*comentário de varias linhas*/

-- comentário de 1 Linha

-- criando o banco de dados
 create database zernman;
 
 -- INICIALIZAR O BANCO DE DADOS
USE zernman;

-- CRIAR TABELAS QUE NÃO TEM CHAVE ESTRANGEIRA

CREATE TABLE Lojista(
idLojista int primary key auto_increment,
nome varchar(210) not null,
cpf mediumint(11) not null unique,
cnpj mediumint (14) unique,
email varchar(125) not null,
senha varchar(15) not null,
telefone mediumint(13) 
);
-- COMANDO PARA EXCLUIR UMA TABELA
DROP TABLE Lojista;

CREATE TABLE Endereco(
idEndereco int primary key auto_increment,
rua varchar(80) not null,
cep mediumint(10) not null,
bairro varchar(50) not null,
numero int,
complemento varchar(100),
tipo varchar(45)
);

CREATE TABLE Forma_Pagamento(
idForma_pagamento int primary key auto_increment,
nome varchar(45) not null,
link varchar(100),
ativo boolean
);

CREATE TABLE Categoria(
idCategoria int primary key auto_increment,
nome varchar(100) not null
);


-- CRIAR TABELAS COM CHAVE ESTRANGEIRA FK

CREATE TABLE Loja(
idLoja int primary key auto_increment,
nome varchar(120) not null,
whatsapp varchar(45),
instagram varchar(125),
facebook varchar(125),
linkedin varchar(13),
telefone mediumint(14) not null,
email varchar(125) not null,
Endereco_idEndereco int,
Lojista_idLojista int,
FOREIGN KEY (Endereco_idEndereco) REFERENCES Endereco (idEndereco),
FOREIGN KEY (Lojista_idLojista) REFERENCES Lojista (idLojista)
);

CREATE TABLE Usuario(
idCliente int primary key auto_increment,
nome varchar(100) not null,
cpf mediumint(11) not null,
telefone mediumint(13) not null,
email varchar(45) not null,
senha varchar(30) not null,
data_nascimento date not null,
Loja_idLoja int,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);

CREATE TABLE cupom(
idCupom int primary Key auto_increment,
nome varchar (45),
quantidade DATE,
desconto INT,
data_validade FLOAT,
Loja_idLoja INT,
foreign key (Loja_idLoja) references Loja (idLoja)
);

create table banner(
idBanner int primary key auto_increment,
imagem longblob,
data_inicio date,
data_final date,
status_visibilidade tinytext,
foreign key (Loja_idLoja) references Loja (idLoja)
);

create table frete(
idfrete int primary key auto_increment,
valor float,
tipo varchar(45),
bairro varchar(45),
entrega_full tinytext,
rastreio varchar(100),
foreign key (Loja_idLoja) references Loja (idLoja)
);

create table pedidos(
idpedidos int primary key auto_increment,
data_pedidos date,
nota_fiscal varchar(45),
data_entrega longblob,
status_entrega varchar(45),
codigo varchar(45),
status_pagamento varchar(45),

cliente_idcliente int,
Loja_idLoja int,
endereco_idendereco int,
forma_pagamento_idforma_pagamento int,

foreign key (cliente_idcliente) references usuario (idcliente),
foreign key (Loja_idLoja) references loja (idLoja),
foreign key (endereco_idendereco) references endereco (idendereco),
foreign key (forma_pagamento_idforma_pagamento) references forma_pagamento (idforma_pagamento)
);

create table frete(
idfrete int primary key auto_increment,
valor float,
tipo varchar,
bairro varchar,
entrega_full boolean,
codigo_rastreio varchar (100),
pedidos_idpedidos int,
pedidos_cliente_idcliente int,
pedisos_Loja_idLoja int,
foreign key (pedidos_idpedidos) references pedidos(idpedidos),
foreign key (pedidos_cliente_idcliente) references pedidos (cliente_idcliente),
foreign key (pedidos_loja_idloja) references, pedidos (loja_idloja),
foreign key (pedidos_endereco_idendereco) references pedidos (enderecos_idendereco)
);

create table promocao(
idpromocao int primary key auto-auto_increment,
data_inicio date not null,
data_final date not null,
valor_promocao float no null,
nome varchar(50),
banner_idbanner int,
foreign key (banner_idbanner) references banner(idbanner)
);

create table Carrinho(
idcarrinho int primary key auto_increment,
quantidade_produto int not null,
preco_total float not null,
cliente_idcliente int,
foreign key (cliente_idcliente) references cliente(idcliente)
);

create table avaliacao_produto(
idavalia










