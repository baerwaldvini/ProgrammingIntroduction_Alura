// Lista
let listaDeNumerosSorteados = []

// Declaração de variáveis
let maxNumber = 1000
let tryNumber = 1
let secretNumber = gerarNumero()

// Função que pede uma tag e texto e retorna o valor informado
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 })
}

// Função de geração de números aleartórios de 0 a 1000
function gerarNumero() {
  let numeroEscolhido = parseInt(Math.random() * (maxNumber + 1))
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

  if (quantidadeDeElementosNaLista == maxNumber) {
    listaDeNumerosSorteados = []
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumero()
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido
  }
}

// Função que limpa a tela
function cleanInput() {
  document.querySelector('input').value = ''
}

// Função para retornar mensagem inicial
function initialMsg() {
  exibirTextoNaTela('h1', 'Jogo do número secreto')
  exibirTextoNaTela('p', `Escolha um número de 0 a ${maxNumber}: `)
}

// Chamar mensagem incial
initialMsg()

// Determinar um numero novo
secretNumber = gerarNumero()

// Apenas para não ter que adivinhar o numero sempre que testar
console.log(secretNumber)

// Função do botão chute, valida se o valor é certo, maior ou menor
function verificarChute() {
  let chute = document.querySelector('input').value
  let stringTentativas = tryNumber > 1 ? 'tentativas' : 'tentativa'

  if (chute == secretNumber) {
    exibirTextoNaTela('h1', 'Parabéns, você acertou')
    exibirTextoNaTela(
      'p',
      `Você descubriu o número secreto com ${tryNumber} ${stringTentativas}!`
    )
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else if (chute > secretNumber) {
    tryNumber++
    chute = cleanInput()
    exibirTextoNaTela('h1', 'Você errou!')
    exibirTextoNaTela('p', `O número secreto é menor`)
  } else {
    tryNumber++
    chute = cleanInput()
    exibirTextoNaTela('h1', 'Você errou!')
    exibirTextoNaTela('p', `O número secreto é maior`)
  }
}

// Função do botão novo jogo, limpa variável, determina novo número e prossegue para tela inical
function newGame() {
  chute = cleanInput()
  tryNumber = 1
  secretNumber = gerarNumero()
  initialMsg()
  console.log(secretNumber)
}
