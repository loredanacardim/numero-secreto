function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute

  if (chuteForInvalido(numero)) {
    document.body.innerHTML = `
    <h2>GAME OVER!!</h2>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button> `

    return
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>O valor tem que ser entre ${menorValor} e ${maiorValor}</div>`
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>
    O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
  } else {
    elementoChute.innerHTML += `<div>
    O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})

function gameOver(numero) {
  if (numero === 'game over') {
<<<<<<< HEAD
    document.body.innerHTML = `<div><h1>O jogo acabou</h1></div>
    <h3>O número secreto era: ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`
=======
    return (document.body.innerHTML = `<div><h1>O jogo acabou</h1></div>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`)
>>>>>>> f7cfe927c6775ab9c83c61686f864df353cb4532
  }
}
