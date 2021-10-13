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

  inicializar() {
    this.tela.atualizarImagens(this.heroisIniciais)
  }
}
