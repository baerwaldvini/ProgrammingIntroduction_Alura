let listaProdutos = []
let totalValue = 0

// ajuste para adição de valor ao total
let totalId = document.getElementById('valor-total')
console.log(totalId)

totalId.innerHTML = ''

let totalListaProdutos = document.getElementById('lista-produtos')
console.log(totalListaProdutos)

totalListaProdutos.innerHTML = ''

function adicionar() {
  // leitura por ID
  let idName = document.getElementById('produto')

  // leitura de cada componente da lista de opções
  let selectedOption = idName.options[idName.selectedIndex]

  // texto dos componentes
  let idProduct = selectedOption.text
  console.log(idProduct)

  // replace para trazer apenas o valor do produto
  let valueProduct = idProduct.replace(/[^0-9]/g, '')
  console.log(parseInt(valueProduct))

  // replace para trazer apenas o nome do produto + R$
  let nameProduct = idProduct.replace(/(\d+)/g, '')
  console.log(nameProduct)

  // leitura do input no campo qty
  let qtyBuy = document.getElementById('quantidade').value
  console.log(qtyBuy)

  if (qtyBuy == '') {
    qtyBuy = 1
  }

  // calculo do preço final
  let productPriceFinal = valueProduct * qtyBuy
  console.log(productPriceFinal)

  // Adição do produto e valor na lista
  let contentAddList = qtyBuy + 'x - ' + nameProduct + productPriceFinal
  listaProdutos.push(contentAddList)
  console.log(listaProdutos)

  // tratativa para incrementar o saldo final
  totalValue = totalValue + productPriceFinal
  console.log(totalValue)

  // ajuste para o texto agora trazer o saldo final
  totalId.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalValue}</span>`
  console.log(totalId)

  totalListaProdutos.innerHTML = `<span class="texto-azul">${listaProdutos.join(
    '<br>'
  )}</span>`
}

function limpar() {
  listaProdutos = []
  totalValue = 0
  totalListaProdutos.innerHTML = ''
  totalId.innerHTML = ''
}
