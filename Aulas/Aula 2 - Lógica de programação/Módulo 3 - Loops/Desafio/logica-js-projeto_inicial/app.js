// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contNumber = 0

while (contNumber < 10) {
  contNumber++
  alert('Numero: ' + contNumber)
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contNumber = 10

while (contNumber >= 0) {
  alert('Número: ' + contNumber)
  contNumber--
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contNumber = prompt('Informe um número: ')

while (contNumber >= 0) {
  console.log(`contNumber: ${contNumber}`)
  contNumber--
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let contNumber = prompt('Informe um número: ')
let opNumber = 0

while (contNumber >= opNumber) {
  console.log(`opNumber: ${opNumber}`)
  opNumber++
}
