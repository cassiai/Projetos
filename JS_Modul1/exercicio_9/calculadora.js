let option = "";


do {
option = prompt("O que você deseja calcular? \n " +
        "[1] - Área do triângulo \n" +
        "[2] - Área do retângulo \n" +
        "[3] - Área do quadrado \n" +
        "[4] - Área do trapézio \n" +
        "[5] - Área do círculo \n " +
        "[6] - Sair \n")

    switch (option) {
        case "1":
            triangulo();
            break;
        case "2":
            retangulo();
            break;
        case "3":
            quadrado();
            break;
        case "4":
            trapezio();
            break;
        case "5":
            circulo();
            break;
        case "6":
            break;
        default:
            alert("Opção inválida");
    }

} while (option !== "6")

function triangulo() {

    let base = prompt("Digite o valor da base: ");
    let altura = prompt("Digite o valor da altura: ");
    alert(`A área do triângulo é igual a: ${(base * altura) / 2.0}`);
    return;
    }

function retangulo(){
    let base = prompt("Digite o valor da base: ");
    let altura = prompt("Digite o valor da altura: ");
    alert(`A área do triângulo é igual a: ${base * altura}`);
    return;
}

function quadrado() {

    let lado = prompt("Digite o valor do lado: ");
    alert(`A área do quadrado é igual a: ${(lado * lado)}`);
    return;
}

function trapezio (){
    let baseMaior = parseFloat(prompt("Digite a base maior: "));
    let baseMenor = parseFloat(prompt("Digite a base menor: "));
    let altura = prompt ("Digite a altura: ");
    alert(`A área do trapézio é igual a: ${(((baseMaior + baseMenor)*altura)/2.0)}`);
    return;
}

function circulo(){
    let raio = prompt ("Digite o valor do raio: ");
    alert(`A área do círculo é igual a: ${(3.14 * raio * raio)}`);
    return;
}