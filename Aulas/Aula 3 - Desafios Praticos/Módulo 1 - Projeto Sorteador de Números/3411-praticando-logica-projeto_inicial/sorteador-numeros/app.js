let numerosSorteados = []

function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value)
  let de = parseInt(document.getElementById('de').value)
  let ate = parseInt(document.getElementById('ate').value)
  let numeroSorteado

  while (quantidade > 0) {
    // Gera um número aleatório no intervalo [de, ate]
    numeroSorteado = parseInt(Math.random() * (ate - de + 1)) + de
    numerosSorteados.push(numeroSorteado)
    quantidade--
  }
  return numerosSorteados
}

console.log(sortear())
