class JogoDaMemoria {
  //se mandar um obj = {tela: 1, idade: 2, etc: 3}
  // vai ignorar o resto das propriedades e pegar somente a propriedade tela
  constructor({ tela }) {
    this.tela = tela
    // relativo ao index.html pois será carregado lá
    this.heroisIniciais = [

      { img: './arquivos/batman.png', nome: 'batman'},
      { img: './arquivos/ciclop.png', nome: 'ciclop'},
      { img: './arquivos/deadpool.png', nome: 'deadpool'},
      { img: './arquivos/mulhermaravilha.png', nome: 'mulhermaravilha'},
    ]
  }
  //para usar o this, não podemos usar static
  inicializar() {
    //vai pegar todas as funcoes da classe tela!
    // coloca todos os herois na tela
    this.tela.atualizarImagens(this.heroisIniciais)
    // força a tela a usar o THIS de clicou
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
  }

  embaralhar() {
    const copias = this.heroisIniciais
    // duplicar os itens
    .concat(this.heroisIniciais)
    //entrar em cada item e criar um id aleatorio

    .map(item => {
      return Object.assign({}, item, {id: Math.random() / 0.5})
    })
    //ordenar aleatoriamente
    .sort(() => Math.random() - 0.5)

    this.tela.atualizarImagens(copias)
  }

  jogar() {
    this.embaralhar()
  }
}
