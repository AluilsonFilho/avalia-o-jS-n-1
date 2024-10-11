const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas = [];
let contador = 0;

function pedirTarefa() {
    if (contador < 5) {
        rl.question('Insira uma tarefa: ', (tarefa) => {
            tarefas.push(tarefa);
            contador++;
            pedirTarefa();
        });
    } else {
        console.log("\nTarefas:");
        for (let i = 0; i < tarefas.length; i++) {
            console.log((i + 1) + ". " + tarefas[i]);
        }

        rl.question('\nQual tarefa você deseja marcar como concluída? ', (numero) => {
            const concluida = parseInt(numero) - 1;
            tarefas.splice(concluida, 1);

            console.log("\nTarefas restantes:");
            for (let i = 0; i < tarefas.length; i++) {
                console.log((i + 1) + ". " + tarefas[i]);
            }

            rl.close();
        });
    }
}

pedirTarefa();
