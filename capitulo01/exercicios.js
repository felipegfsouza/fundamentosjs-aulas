const animal = {
  _idade: '123',

  set idade(valor)
  {this._idade =valor}

}

animal.idade = 10

console.log(animal.idade)
