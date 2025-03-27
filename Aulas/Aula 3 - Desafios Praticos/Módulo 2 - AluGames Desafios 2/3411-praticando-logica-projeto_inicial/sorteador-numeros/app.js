function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value)
  let de = parseFloat(document.getElementById('de').value)
  let ate = parseFloat(document.getElementById('ate').value)

  let sorteados = []
  let numero

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumberoAleartorio(de, ate)
    if (sorteados.indexOf == numero) {
      numero = obterNumberoAleartorio(de, ate)
    } else {
      sorteados.push(numero)
    }
  }
  if (de > ate) {
    alert(
      'O valor "Do Número" não pode ser maior que o valor de "Ate o numero"'
    )
    reiniciar()
  } else if (ate - de <= quantidade) {
    alert(
      'A quantidade não pode ser menor do que o intervalo entre "Do Número" até "Ate o numero"'
    )
    reiniciar()
  } else {
    let resultado = document.getElementById('resultado')
    activateButton()
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
  }
}

function activateButton() {
  let button = document.getElementById('btn-reiniciar')
  if (button.classList.contains('container__botao-desabilitado')) {
    button.classList.remove('container__botao-desabilitado')
    button.classList.add('container__botao')
  } else {
    button.classList.remove('container__botao')
    button.classList.add('container__botao-desabilitado')
  }
}

function obterNumberoAleartorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function reiniciar() {
  sorteados = []
  limpaTela()
  activateButton()
}

function limpaTela() {
  document.getElementById('quantidade').value = ''
  document.getElementById('de').value = ''
  document.getElementById('ate').value = ''
  document.getElementById('resultado').innerHTML =
    '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
}
