let maxNumber = 1000
let secretNumber

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', `Escolha um número de 0 a ${maxNumber}: `)

function verificarChute() {
  let chute = document.querySelector('input').value
  chute == secretNumber
  return chute
}

function gerarNumero() {
  let numberRandom = parseInt(Math.random() * (maxNumber + 1))
  return numberRandom
}

secretNumber = gerarNumero()
console.log(secretNumber)
console.log(verificarChute())
