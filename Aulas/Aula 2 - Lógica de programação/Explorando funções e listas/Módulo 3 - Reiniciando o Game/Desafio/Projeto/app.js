// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// O IMC é calculado dividindo o peso pelo quadrado da altura.

function calcImc(peso, altura) {
  return peso / (altura * altura)
}

console.log(calcImc(102, 1.72))

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcFatorial(number1) {
  let fatOp = 1
  while (number1 > 0) {
    fatOp = fatOp * number1
    number1--
  }
  return fatOp
}

console.log('calcFatorial(5): ' + calcFatorial(5))

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function calcDolar(value1) {
  let dolar = 4.8
  return value1 * dolar
}

console.log('calcDolar(5): ' + calcDolar(5))

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcSala(largura, altura) {
  let area = largura * altura
  let perimetro = 2 * (largura + altura)
  return 'Area: ' + area + '| Perimetro: ' + perimetro
}

console.log('calcSala(5,2): ' + calcSala(5, 2))

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcCirculo(raio) {
  let area = 3.14 * (raio * raio)
  return area
}

console.log('calcCirculo(3): ' + calcCirculo(3))

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function calcTabuada(number1) {
  let tabuada = 1
  while (tabuada <= 10) {
    console.log(number1 + ' x ' + tabuada + ' = ' + number1 * tabuada)
    tabuada++
  }
}
console.log('calcTabuada(3): ' + calcTabuada(3))
