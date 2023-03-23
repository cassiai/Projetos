const nameCharacter1 = prompt("Digite o nome do personagem 1: ")
const powerAttack = prompt ("Digite o poder de ataque: ")

const nameCharacter2 = prompt ("Digite o nome do personagem 2: ")
let lifePoint = prompt ("Digite a quantidade de pontos de vida: ")
const powerDefense = prompt ("Digite o poder de defesa: ")
const shield = prompt ("Ele possui um escudo? Sim/Não: ")

let damage = 0;

if ((powerAttack > powerDefense) && shield === "Sim"){
   damage = powerAttack-powerDefense
} else if ((powerAttack > powerDefense) && shield === "Não"){
    damage = (powerAttack-powerDefense)/2
}  

lifePoint -= damage
alert(
    `${nameCharacter1} causou ${damage} pontos de dano no ${nameCharacter2}`
)
alert (
    nameCharacter1 + `\n Poder de ataque: ${powerAttack}` +
    "\n" + nameCharacter2 + `\n Poder de defesa: ${powerDefense}` + 
    "\n Pontos de vida: " + lifePoint +
    `\n Possui escudo: ${shield}`
)