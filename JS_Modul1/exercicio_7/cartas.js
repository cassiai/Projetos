const cartas = []
let option = ""


do {
    option = prompt ("\n Cartas no baralho: " + cartas.length + 
    "\n Digite uma opção: \n 1 - Adicionar cartas \n 2 - Puxar uma carta \n 3 - Sair")
    switch (option) {
        case "1": 
           const addCard = prompt("Qual o nome da carta")
           cartas.unshift (addCard)
           break
        case "2":
            const removeCard = cartas.shift()
            if (!removeCard){
                alert (`Não há cartas a serem puxadas`)
            }
            alert (`A carta ${removeCard} foi puxada`)
            break
        case "3":
            break
        default: ("Opção inválida")
    }

} while (option !== "3")