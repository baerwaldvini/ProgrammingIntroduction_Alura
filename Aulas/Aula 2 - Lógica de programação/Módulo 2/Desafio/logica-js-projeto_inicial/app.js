// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let dayWeek = prompt('Informe o dia da semana: ')

if (dayWeek == 'Sábado') {
  alert('Bom fim de semana!')
} else if (dayWeek == 'Domingo') {
  alert('Bom fim de semana!')
} else {
  alert('Boa semana!')
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numberInformed = prompt('Informe um número: ')

if (numberInformed > 0) {
  alert('O número é positivo')
} else if (numberInformed < 0) {
  alert('O número é negativo')
} else {
  alert('O número é zero')
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pointsNumber = 100

if (pointsNumber >= 100) {
  alert('Parabéns, você venceu!')
} else {
  alert('Tente novamente para ganhar')
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldoNumber = 200.5

alert(`Seu saldo é de ${saldoNumber}`)

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nameUser = prompt('Informe seu nome: ')

alert(`Bem vindo ${nameUser}`)
