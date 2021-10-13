// let termoParada = true

// let contador = 0

// while(termoParada) {

// console.log(contador)

// if(contador++ < 3)

// continue

// else

// termoParada = false

// }

// let termoParada = true

// while(termoParada) {

// console.log('Olá Mundo!')

// break

// }

const listaDeTarefas = [
  { tarefa: "lavar o chão", id: 1 },

  { tarefa: "lavar a louça", id: 2 },

  { tarefa: "arrumar o quarto", id: 3 },
];

let indice = 0
while(indice < listaDeTarefas.length) {

console.log(listaDeTarefas[indice].tarefa)

indice++

}
