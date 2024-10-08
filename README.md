# Projeto de Criação de um Carrinho de Compras usando Node.js

Repositório contendo o código desenvolvido durante um bootcamp de Node.js, com foco na criação das principais funcionalidades de um carrinho de compras online. O objetivo foi implementar essas funções utilizando Node.js de forma eficiente.

## Estrutura do Projeto

src<br> 
├── img <br>
│ └── arquitetura.jpg <br>
├── services <br>
│ ├── carts.js <br>
│ └── itens.js <br>
├── index.js <br>
package.json <br> 
README.md<br>

# Funções da Estrutura do Projeto

## `src/services/carts.js`
Este arquivo contém as funções relacionadas ao gerenciamento do carrinho de compras, incluindo:

- **addItem**: Adiciona um item ao carrinho.
- **deleteItem**: Remove um item do carrinho com base no nome.
- **removeItem**: Remove um item do carrinho com base no índice.
- **calculeTotal**: Calcula o total do carrinho, somando os subtotais dos itens.

## `src/services/itens.js`
Este arquivo define a função para criação de itens, incluindo:

- **createItem**: Cria um novo item com propriedades como nome, preço, quantidade e um método para calcular o subtotal.

## `src/index.js`
Este arquivo é o ponto de entrada do aplicativo, onde:

- Inicializa o carrinho de compras.
- Exibe mensagens de boas-vindas.
- Cria itens e adiciona ao carrinho.
- Calcula e exibe o total do carrinho.
- Realiza outras chamadas para testes das funções implementadas.


## Imagem da Arquitetura do Projeto

![Arquitetura do Projeto](src/img/arquitetura.jpg)
