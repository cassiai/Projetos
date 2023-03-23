let option = ""
const imoveis = []

do{

option = prompt ("Escolha uma opção: \n [1] - Salvar imóvel \n [2] - Mostrar imóveis \n [3] - Sair" +
"\n Total de imóveis: " + imoveis.length)


switch (option){
    case "1":
        const imovel = {}
        let op = ""     
        do {
        imovel.nomeProprietario = prompt ("Nome do proprietário: ")
        imovel.qtdeQuarto = prompt ("Número de quartos: ")
        imovel.qtdeBanheiro = prompt ("Quantidade de banheiros: ")
        imovel.garagem = prompt ("Possui garagem? (sim/não)")

    const confirmacao = confirm("Salvar este imóvel? \n" +
    "\n Proprietário: " + imovel.nomeProprietario +
    "\n Quartos: " + imovel.qtdeQuarto +
    "\n Banheiros: " + imovel.qtdeBanheiro +
    "\n Garagem: " + imovel.garagem)
    
    if (confirmacao){
        imoveis.push(imovel)
        alert ("Imóvel cadastrado com sucesso!")
    } else {alert ("Imóvel não cadastrado")}

        op = prompt ("Deseja cadastrar outro imóvel? [1] -Sim [2] - Não")
    } while (op !== "2")
    break

    case "2":
        for (let i = 0; i < imoveis.length; i++) {
            alert(
              "Imóvel " + (i + 1) +
              "\nProprietário: " + imoveis[i].nomeProprietario +
              "\nQuartos: " + imoveis[i].qtdeQuarto +
              "\nBanheiros: " + imoveis[i].qtdeBanheiro +
              "\nGaragem: " + imoveis[i].garagem
            )
          }
    break

    case "3":
        break

    default:
        alert("opção inválida")
}
}while (option !== "3")