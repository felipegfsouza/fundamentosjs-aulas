const textoPar = "Par";
const textoImpar = "Impar";
// for(let index = 0; index <= 10; index++){
//   const decisao  = index % 2 === 0 ? textoPar : textoImpar
//   console.log(`O número ${index} é ${decisao}`)
// }
const minha_lista_de_tarefas = [
  {
    id: parseInt(Math.random() * 10),
    nome: "Zezinho",
    super_poder: "Veloz",
  },
  {
    id: Math.random(),
    nome: "mariazinha",
    super_poder: "Super força",
  },
];
console.log(minha_lista_de_tarefas);

for(let index = 0; index < minha_lista_de_tarefas.length; index++ ){
  const item = minha_lista_de_tarefas[index]
  console.log(
    `
    id: ${item.id}
    nome: ${item.nome}

    `
  );
}

// não precisa de contador
for(const index in  minha_lista_de_tarefas){
  const item = minha_lista_de_tarefas[index]
  console.log('nome: ', item.nome);

}

//não precisa usar index
for(const item of minha_lista_de_tarefas) {
  console.log('nome:', item.nome)
}
