const heroi = {
  nome: 'Flash',
  idade: 100,
  sexo: 'Masculino'
}

// console.log('nome', heroi.nome);
// console.log('idade', heroi['idade'])
// console.log('sexo', heroi.sexo)
// console.log('naoExiste', heroi.naoExiste)
// heroi.id = 0001
// console.log(heroi);

// saber chaves
// console.log(Object.keys(heroi))
// saber valores
// console.log(Object.values(heroi))

//juntar dois objetos
const pessoa = {
  tamanho: '10 metros'
}

const novoObj = Object.assign(heroi, pessoa)
delete novoObj.nome
console.log(novoObj)