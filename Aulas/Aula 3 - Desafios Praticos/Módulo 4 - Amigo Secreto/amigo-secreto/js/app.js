let listNames = []
let listNamesSort = []
function adicionar() {
  let nameFriendId = document.getElementById('nome-amigo')

  if (nameFriendId.value == '') {
    alert('Preencha o campo com o nome do amigo')
  } else {
    listNames.push(nameFriendId.value)
    listNamesSort.push(nameFriendId.value)
  }

  showNames()
  nameFriendId.value = ''
}

function showNames() {
  let namesIncludedId = document.getElementById('lista-amigos')
  let namesIncluded = namesIncludedId.textContent
  namesIncluded = listNames

  namesIncludedId.textContent = namesIncluded
}

function sortear() {
  for(i > listNamesSort.length / 2, i = listNamesSort.length, i++){

  }
}
