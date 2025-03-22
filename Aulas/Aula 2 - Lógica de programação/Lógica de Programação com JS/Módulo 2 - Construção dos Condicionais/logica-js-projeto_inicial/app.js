alert('Boas-vindas ao jogo do Número Secreto')
let secretNumber = 29
console.log(`secretNumber : ${secretNumber}`)
let randomNumber = prompt('Escolha um número de 0 a 100')

// Compara se o número informado é igual ao secreto
if (randomNumber == secretNumber) {
  alert(`Você descobriu o número secreto ${secretNumber}`)
} else {
  alert('Você não descobriu o número secreto =)')
}
