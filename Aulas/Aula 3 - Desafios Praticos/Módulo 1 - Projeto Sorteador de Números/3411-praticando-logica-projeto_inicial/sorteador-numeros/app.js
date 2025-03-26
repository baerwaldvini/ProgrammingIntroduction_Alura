//sozinho consegui desenvolver a lógica, só não consegui ajustar a fonte do HTML após sobreescrever o texto, será ajustado com os videos
let numerosSorteados = []

// Função que pede uma tag e texto e retorna o valor informado
function exibirTextoNaTela(tag, texto) {
  let campo = document.getElementById(tag)
  campo.innerHTML = texto
}

function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value)
  let de = parseInt(document.getElementById('de').value)
  let ate = parseInt(document.getElementById('ate').value)

  while (quantidade > 0) {
    let aleartorioNumber = renderNumber(de, ate)
    if (numerosSorteados.includes == aleartorioNumber) {
      aleartorioNumber = renderNumber(de, ate)
    } else {
      numerosSorteados.push(aleartorioNumber)
    }
    quantidade--
    console.log(numerosSorteados)
  }
  return exibirTextoNaTela(
    'resultado',
    'Números sorteados: ' + numerosSorteados
  )
}

function renderNumber(min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min
}
