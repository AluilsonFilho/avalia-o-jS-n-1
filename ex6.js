const pessoas = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome da pessoa:");
    let idade = parseInt(prompt("Digite a idade da pessoa:"));
    pessoas.push({ nome: nome, idade: idade });
}

function verificarIdade() {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 18) {
            console.log(`${pessoas[i].nome} tem mais de 18 anos.`);
        }
    }
}

verificarIdade();
