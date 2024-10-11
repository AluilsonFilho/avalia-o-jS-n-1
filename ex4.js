const aluno = {
    nome: "pedro",
    notas: [8, 7.5, 9],
    
    media: function() {
        let soma = 0;
        
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        
        return soma / this.notas.length;
    }
};

console.log(`O aluno ${aluno.nome} tem a média: ${aluno.media().toFixed(2)}`);
