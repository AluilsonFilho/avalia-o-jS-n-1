function calculadora(num1, num2, operacao) {
  let resultado;

  if (operacao === "soma") {
    resultado = num1 + num2;
  } else if (operacao === "subtracao") {
    resultado = num1 - num2;
  } else if (operacao === "multiplicacao") {
    resultado = num1 * num2;
  } else if (operacao === "divisao") {
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      return "Erro: divisão por zero!";
    }
  } else {
    return "Operação inválida!";
  }

  return resultado;
}

console.log(calculadora(10, 5, "soma")); 
