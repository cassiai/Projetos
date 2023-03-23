let option = 5

do {
    option = prompt("Digite uma opção: 1, 2, 3, 4 ou 5 ")
    option = parseFloat(option)

    switch (option) {

        case 1:
            alert("Você escolheu a opção 1.");
            break
        case 2:
            alert("Você escolheu a opção 2.");
            break
        case 3:
            alert("Você escolheu a opção 3.");
            break
        case 4:
            alert("Você escolheu a opção 4.");
            break
        case 5:
            alert("Você escolheu a opção Encerrar.");
            break;
        default: alert("Opção inválida")
    }
} while (option !== 5)