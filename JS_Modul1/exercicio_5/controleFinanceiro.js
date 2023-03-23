let qtdeInicialDinheiro = prompt ("Qual a quantidade inicial de dinheiro disponível?")
qtdeInicialDinheiro = parseFloat(qtdeInicialDinheiro)

do{
let option = prompt (`Você possui ${qtdeInicialDinheiro} disponível.` + 
"Você deseja \n 1 - [adicionar dinheiro]" + "\n 2 - [remover dinheiro] " + "\n 3 - [sair]")
option = parseFloat(option)
switch(option){
    case 1:
        let add = prompt ("Quanto dinheiro você deseja adicionar? ")
        qtdeInicialDinheiro += parseFloat(add)  
        alert (`Seu novo saldo é de : ${qtdeInicialDinheiro}`)
        break
    case 2:
        let minus = prompt ("Quanto dinheiro você deseja retirar? ")
        qtdeInicialDinheiro -= parseFloat(minus)
        alert (`Seu novo saldo é de : ${qtdeInicialDinheiro}`)
        break
    case 3:
        break
}
} while (option !== 3)