function gerarTabelaMultiplicacao(numero) {
    if (numero <= 0) {
        console.log("Por favor, insira um número positivo.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

gerarTabelaMultiplicacao(5);
