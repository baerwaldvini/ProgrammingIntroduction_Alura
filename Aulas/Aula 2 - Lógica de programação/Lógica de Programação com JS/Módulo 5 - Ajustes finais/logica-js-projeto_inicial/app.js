alert('Boas-vindas ao jogo do Número Secreto')

let maxNumber = 1000
let secretNumber = parseInt(Math.random() * maxNumber + 1)
console.log(`secretNumber : ${secretNumber}`)

let randomNumber
let tryNumber = 0

// enquanto - ajuste da condição que, caso o numero não seja igual ao informado, mantem o código
while (randomNumber != secretNumber) {
  tryNumber++
  console.log(`tryNumber : ${tryNumber}`)

  randomNumber = prompt(`Escolha um número de 0 a ${maxNumber}: `)
  // Compara se o número informado é igual ao secreto
  if (randomNumber == secretNumber) {
    break
  } else {
    // Caso não seja, compara se o número é maior ou menor, dentro do else do primeiro if
    // Ajuste de trava para números maiores que 100 ou menores que 0
    if (randomNumber < 0) {
      alert('Informe um número maior que 0!')
    } else if (randomNumber > maxNumber) {
      alert(`Informe um número menor que ${maxNumber}!`)
    } else if (randomNumber > secretNumber) {
      alert(`O número é menor que ${randomNumber}`)
    } else {
      alert(`O número é maior que ${randomNumber}`)
    }
  }
}

let stringTryNumber = tryNumber > 1 ? 'tentativas' : 'tentativa'

alert(
  `Você descobriu o número secreto ${secretNumber} e precisou de ${tryNumber} ${stringTryNumber}!`
)
