const nome = prompt("Qual o seu nome? ")

let cidades = ""
let city = 0

   
let continuar = prompt ("Você já visitou alguma cidade? (Sim/Não)")
while (continuar === 'Sim' || continuar === 'sim'){
    let visitada = prompt ("Digite o nome da cidade visitada: ")
    cidades += " - " + visitada +"\n"
    city += 1
    continuar = prompt ("Você visitou alguma outra cidade?")
}

alert (`O turista ${nome} visitou ${city} cidades: \n ${cidades}`)