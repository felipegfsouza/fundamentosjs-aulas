let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('deu certo 2')
  } else {
    reject('deu ruim :(')
  }
})
