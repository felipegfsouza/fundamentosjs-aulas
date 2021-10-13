const minhaLista = []
const minhaListaDeTarefas = [
  'mandar email',
  'colocar comida para o dog',
  'limpar o quarto'
]

// console.log(minhaListaDeTarefas[0]);
// console.log(minhaListaDeTarefas[1]);
// console.log(minhaListaDeTarefas[4]);

//quantidade de itens no array
// console.log(minhaListaDeTarefas.length)

//adicionar item
// console.log(minhaListaDeTarefas.push('formatar pc'));
// console.log(minhaListaDeTarefas);

// remover ultimo da listas
// const ultimo = minhaListaDeTarefas.pop()
// console.log(ultimo, minhaListaDeTarefas)

//remover o primeiro da lista
// const primeiro = minhaListaDeTarefas.shift()
// console.log(primeiro, minhaListaDeTarefas)

//remover um  item especifico a partir de um indice
// console.log(minhaListaDeTarefas[2]);
// qual item de inicio
// quantos remover
// minhaListaDeTarefas.splice(2, 1)
// console.log(minhaListaDeTarefas)

const itens = [
  1, 'computador', 0.22
]

// verificar o tipo do array
// console.log(typeof(itens))

//verificar se é array da forma correta
// console.log(Array.isArray(itens))

//ordenar
const numeros = [3,2,1,0]
// console.log(numeros.sort())

const letras = ['z','f','a','b']
// console.log(letras.sort())

// juntar dois arrays
const novo = itens.concat([1,2,3])
// console.log(novo)

// juntar dois arrays em uma string

// console.log(itens.join(','))

//verificar indice do item 
const index =itens.indexOf('computador')
console.log(itens[index])