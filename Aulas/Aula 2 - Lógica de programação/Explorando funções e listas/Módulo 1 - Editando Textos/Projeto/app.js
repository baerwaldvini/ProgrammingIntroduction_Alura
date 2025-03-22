let maxNumber = 1000

let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do número secreto'

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = `Escolha um número de 0 a ${maxNumber}: `

verificarChute() {
  let chute = document.querySelector('input').value
}