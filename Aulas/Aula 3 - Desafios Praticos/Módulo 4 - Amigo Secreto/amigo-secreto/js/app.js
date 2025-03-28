// Lista antes do sorteio e sorteadas
let listNamesSort = []
let listNamesSorted = []

// Função botão adicionar
function adicionar() {
  let nameFriendId = document.getElementById('nome-amigo')

  if (nameFriendId.value == '') {
    alert('Preencha o campo com o nome do amigo')
  } else if (listNamesSort.includes(nameFriendId.value)) {
    alert('Amigo já adicionado!')
  } else {
    listNamesSort.push(nameFriendId.value)
  }

  showNames()
  // limpeza de tela
  nameFriendId.value = ''
}

// Função que escreve os nome na tela
function showNames() {
  let namesIncludedId = document.getElementById('lista-amigos')
  let namesIncluded = namesIncludedId.textContent
  namesIncluded = listNamesSort

  namesIncludedId.textContent = namesIncluded
}

// função de sortear
function sortear() {
  if (listNamesSort.length % 2 != 0) {
    alert('Você precisa adicionar uma quantidade par de amigos para sortear!')
  } else {
    embaralha(listNamesSort)

    // Ler o atual texto na tela
    let finalSorterId = document.getElementById('lista-sorteio')
    let finalSorterText = finalSorterId.textContent

    // Variavem que vai receber o conteudo HTML para colocar no inner
    let contentHTML = ''

    finalSorterText = listNamesSorted
    finalSorterId.textContent = finalSorterText

    // Determinando o meio da lista
    let halfSize = Math.floor(listNamesSort.length / 2)

    // Para cada elemento antes da metade da lista será concatenado com um elemento depois da metade da lista
    for (let i = 0; i < halfSize; i++) {
      // j vai ser o último elemento da lista -i
      let j = listNamesSort.length - 1 - i

      listNamesSorted.push(listNamesSort[i] + ' - ' + listNamesSort[j])

      contentHTML += `<p id="lista-amigos">${
        listNamesSort[i] + ' -> ' + listNamesSort[j]
      }</p>`
    }
    finalSorterId.innerHTML = contentHTML
  }
}

// Função de embaralhar listar pronta da internet não fui eu quem fiz
function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    let indiceAleatorio = Math.floor(Math.random() * indice)
    let elemento = lista[indice - 1]

    lista[indice - 1] = lista[indiceAleatorio]

    lista[indiceAleatorio] = elemento
  }
}

function reiniciar() {
  listNamesSort = []
  listNamesSorted = []
  let finalSorterId = document.getElementById('lista-sorteio')
  finalSorterId.textContent = ''
  let namesIncludedId = document.getElementById('lista-amigos')
  namesIncludedId.innerHTML = ''
}
