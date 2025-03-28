// Acionamento do botão comprar
function comprar() {
  // Pega ID do tipo de ingresso selecionado na tela
  let getTypeIngId = document.getElementById('tipo-ingresso')

  // Busca o nome do ingresso com base no ID
  let nameIng = getTypeIngId.options[getTypeIngId.selectedIndex].textContent

  // Pega o valor da qty de ingressos
  let getQty = document.getElementById('qtd').value

  // caso não seja informada a quantidade, alerta dizendo que precisa de uma quantidade
  if (getQty == '') {
    alert('Por favor, preencha a quantidade de ingressos!')
    getQty = 0
  } else if (getQty < 0) {
    // ou caso informar um valor não certo
    alert('Por favor, insira uma quantidade válida!')
    getQty = 0
  }

  // tipo de ajuste conforme id do ingresso
  if (nameIng == 'Cadeira inferior') {
    adjustList('qtd-inferior', getQty)
  } else if (nameIng == 'Cadeira superior') {
    adjustList('qtd-superior', getQty)
  } else if (nameIng == 'Pista') {
    adjustList('qtd-pista', getQty)
  }
}

// função de ajuste
function adjustList(idProduct, qty) {
  let qtyDispId = document.getElementById(idProduct)
  let qtyDisp = qtyDispId.textContent
  let calcNewQty = qtyDisp - qty

  if (calcNewQty < 0) {
    alert('Quantidade de ingressos insuficiente!')
  } else {
    qtyDispId.textContent = calcNewQty
  }
}
