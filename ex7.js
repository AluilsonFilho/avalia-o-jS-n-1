let produtos = [
  { nome: "Produto 1", preco: 10, quantidade: 5 },
  { nome: "Produto 2", preco: 20, quantidade: 3 },
  { nome: "Produto 3", preco: 15, quantidade: 4 },
];

function calcularValorEstoque(produtos) {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco * produtos[i].quantidade;
  }
  return total;
}

console.log("Valor total do estoque: R$" + calcularValorEstoque(produtos));
