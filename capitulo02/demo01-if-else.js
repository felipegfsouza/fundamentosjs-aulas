let frutaExistenteNoMercado = false
let temCPUSuficiente = true

// obter valores do terminal
const args = process.argv
const saldo = args[args.length -1]
if(isNaN(saldo)){
  console.log('valor invalido')
  return;
}

let tipoCliente = "premium"
if(saldo < 9) {
  tipoCliente = 'basic'
}
else if (saldo >= 10 && saldo < 20 ) {
  tipoCliente = 'Gold'
}
else {
  tipoCliente = null
}

//null, undefined, vazio, 0 ===false!
if(!tipoCliente) {
  tipoCliente = 'indefinido'
}

console.log('tipoCliente', tipoCliente)

const operadorOU = 1 > 2 || 2 > 1
const operadorE = 1 === 1 && 2 !== 2
const operadorNot = !(1==1)

const idade = 18
const resultado = idade >= 18 ? 'pode dirigir' : 'não pode dirigir!'
console.log('resultado', resultado)

