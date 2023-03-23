let nome = prompt("Digite seu nome: ")
let sobrenome = prompt ("Digite seu sobrenome: ")
let campo = prompt("Digite seu campo de estudo: ")
let anoNascimento = prompt ("Digite seu ano de nascimento: ")

parseFloat(anoNascimento)
anoNascimento -= 2023
let abs = Math.abs(anoNascimento)

alert (
    "Recruta cadastrado com sucesso! \n" +
    (`\n Nome completo do recruta: ${nome}  ${sobrenome}. \n Campo de estudo: ${campo} 
\n Tem ${abs} anos de idade`)
)


