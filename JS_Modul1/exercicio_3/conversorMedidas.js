let value = prompt("Digite um valor em metros: ")
let option = prompt ("Digite para qual medida deseja converter: \n 1 - mm \n 2 - cm \n 3 - dm \n 4 - dam \n 5 -hm \n6 -km")

option = parseFloat(option)
switch (option){
    case 1: 
        value *= 1000
        break
    case 2:
        value *= 100
        break
    case 3:
        value *= 10
        break
    case 4:
        value /=10
        break
    case 5:
        value /=100
        break
    case 6:
        value /=100
        break
    default: "Opção inválida."
}

alert(
    "O valor convertido é : " + value
)