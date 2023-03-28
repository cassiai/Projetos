function escalar(){
    const position = document.getElementById('position').value
    const namePlayer = document.getElementById('namePlayer').value
    const numberPlayer = document.getElementById('numberPlayer').value

    const confirmar = confirm(`Deseja escalar ${namePlayer} para a posição ${position} e com a camiseta
     número ${numberPlayer} ?`)


if (confirmar){
    const team = document.getElementById('team')
    const player = document.createElement('li')
    player.id = 'player-' + numberPlayer
    player.innerText = `Posição : ${position} - Nome: ${namePlayer} (${numberPlayer})`
    team.appendChild(player)

    document.getElementById('position').value = ""
    document.getElementById('namePlayer').value = ""
    document.getElementById('numberPlayer').value = ""
}
}

  function removePlayer() {
  const number = document.getElementById("numberToRemove").value
  const playerToRemove = document.getElementById('player-' + number)

  const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")

  if (confirmation) {
    document.getElementById("team").removeChild(playerToRemove) //Pode ser usado também o playerToRemove.remove()
    document.getElementById("numberToRemove").value = ""
  }
}