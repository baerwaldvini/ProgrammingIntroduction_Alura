alert('Boas vindas ao nosso site!')

let nome = 'Lua'
let idade = 25
let numeroDeVendas = 50
let saldoDisponivel = 1000

alert('Erro! Preencha todos os campos')

let mensagemDeErro = 'Erro! Preencha todos os campos'

nome = prompt('Qual o seu nome?')
idade = prompt('Qual o sua idade?')

if (idade >= 18) {
  alert('Pode tirar a habilitação!')
} else {
  alert('Não pode tirar a habilitação!')
}
