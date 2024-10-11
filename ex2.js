const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarPalindromo(palavra) {
  palavra = palavra.toLowerCase();

  for (let i = 0; i < palavra.length / 2; i++) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
      return `A palavra "${palavra}" não é um palíndromo.`;
    }
  }
  return `A palavra "${palavra}" é um palíndromo!`;
}

rl.question(
  "Digite uma palavra para verificar se é um palíndromo: ",
  (palavra) => {
    console.log(verificarPalindromo(palavra));
    rl.close();
  }
);
