let gamesAlugados = []

function alterarStatus(idButton) {
  let buttonContent = document.getElementById('game-' + idButton)
  console.log(buttonContent)
  let alterText = buttonContent.querySelector('a')
  console.log(alterText)
  let alterImg = buttonContent.querySelector('div')
  console.log(alterImg)
  let nameGame = buttonContent.querySelector('p')
  console.log(nameGame.textContent)

  if (alterText.classList.contains('dashboard__item__button--return')) {
    alert(
      'Você está devolvendo o jogo ' +
        nameGame.textContent +
        ' ,deseja prosseguir?'
    )
    alterText.classList.remove('dashboard__item__button--return')
    alterText.innerHTML = `Alugar`
    alterImg.classList.remove('dashboard__item__img--rented')

    let index = gamesAlugados.indexOf(nameGame.textContent)
    if (index !== -1) {
      gamesAlugados.splice(index, 1)
    }
  } else {
    alterText.classList.add('dashboard__item__button--return')
    alterText.innerHTML = `Devolver`
    alterImg.classList.add('dashboard__item__img--rented')

    gamesAlugados.push(nameGame.textContent)
  }
  console.log('Jogos alugados: ' + gamesAlugados)
}
