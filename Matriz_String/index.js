window.addEventListener('DOMContentLoaded', () => {
    const btnProcessar = document.getElementById('processar');
    btnProcessar.addEventListener('click', processarFrase);

    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.getElementById('close-modal');
    const modal = document.getElementById('modal');
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    function processarFrase() {
        let v1 = [];
        let v2 = [];
        let v3 = [];
        let vetorAux = [];
        let palindromo = 0;
        let vogal = 0;
        let consoante = 0;
        let caracterEspecial = 0;
        let espaco = 0;
        let vogais = ['A', 'E', 'I', 'O', 'U'];
        let caracteresEspeciais = ['-', ';', ',', '.'];
        let fraseInput = document.getElementById('frase').value;

        if (fraseInput.length > 50) {
            let frase = fraseInput.trim();
            v1 = frase.split(" ");
            console.log(v1);

            espaco = v1.length - 1;

            for (let i = 0; i < v1.length; i++) {
                let palavra = v1[i].toUpperCase();
                palavra = removeAcento(palavra);
                v2.push(palavra);
                vetorAux.push(v2[i].split(""));
                v3.push(v2[i].split("").reverse().join(""));

                if (v2[i] === v3[i] && v2[i].length > 1) {
                    palindromo++;

                }
            }

            function removeAcento(text) {
                return text.replace(/[ÁÀÂÃ]/gi, 'A')
                    .replace(/[ÉÈÊ]/gi, 'E')
                    .replace(/[ÍÌÎ]/gi, 'I')
                    .replace(/[ÓÒÔÕ]/gi, 'O')
                    .replace(/[ÚÙÛ]/gi, 'U')
                    .replace(/[-]/gi, '')
                    .replace(/[,]/gi, '');
            }

            function contarVogaisConsoantes(caracter) {
                if (vogais.includes(caracter)) {
                    vogal++;
                } else if(caracteresEspeciais.includes(caracter)){
                    caracterEspecial++
                }
                else {
                    consoante++;
                }
            }

            for (let i = 0; i < vetorAux.length; i++) {
                console.log('VetAux: ' + vetorAux[i]);
                vetorAux[i].forEach(contarVogaisConsoantes);
            }

            mostrarVetores(v1, v2, v3);
            preencheMatrizMM(fraseInput);

            const palindromosLabel = document.getElementById('palindromos');
            palindromosLabel.textContent = `Quantidade de Palíndromos:  ${palindromo}`;

            const vogaisLabel = document.getElementById('vogais');
            vogaisLabel.textContent = `Quantidade de Vogais:  ${vogal}`;

            const consoantesLabel = document.getElementById('consoantes');
            consoantesLabel.textContent = `Quantidade de Consoantes:   ${consoante}`;

            const espacosLabel = document.getElementById('espacos');
            espacosLabel.textContent = `Quantidade de Espaços:  ${espaco}`;
        } else {
            modalMessage.textContent = 'A frase deve ter no mínimo 50 caracteres';
            modal.style.display = 'block';
            modal.addEventListener('click', () => {
                modal.style.display = 'none';
                window.location.href = "index.html";

            });

        }
    }
});



function mostrarVetores(vetor1, vetor2, vetor3) {
    const tabela1 = document.getElementById('tabela1');
    const tabela2 = document.getElementById('tabela2');
    const tabela3 = document.getElementById('tabela3');
    tabela1.innerHTML = '';
    tabela2.innerHTML = '';
    tabela3.innerHTML = '';
    const tamanho = Math.max(vetor1.length, vetor2.length, vetor3.length);

    for (let i = 0; i < tamanho; i++) {
        if (i < vetor1.length) {
            const mostraV1 = document.createElement('tr');
            mostraV1.textContent = vetor1[i];
            mostraV1.classList.add('tabela1');
            tabela1.appendChild(mostraV1);
        }

        if (i < vetor2.length) {
            const mostraV2 = document.createElement('tr');
            mostraV2.textContent = vetor2[i];
            mostraV2.classList.add('tabela2');
            tabela2.appendChild(mostraV2);
        }

        if (i < vetor3.length) {
            const mostraV3 = document.createElement('tr');
            mostraV3.textContent = vetor3[i];
            mostraV3.classList.add('tabela3');
            tabela3.appendChild(mostraV3);
        }
    }
}



function preencheMatrizMM(fraseMatriz) {
    let matrizVazia = [];
    let caracter50 = [];

    for (let i = 0; i < 10; i++) {
        matrizVazia[i] = new Array();
        for (let j = 0; j < 5; j++)
            matrizVazia[i][j] = 0;
    }

    const caracteresMatriz = fraseMatriz.split("");
    for (let i = 0; i < 50; i++) {

        caracter50.push(caracteresMatriz[i])
    }

    let linha = 0, coluna = 0;

    for (let i = 0; i < caracter50.length; i++) {
        matrizVazia[linha][coluna] = caracteresMatriz[i];
        coluna++;
        if (coluna === 5) {
            linha++;
            coluna = 0;
        }
    }

    const matrizTable = document.getElementById('matrizTable');
    matrizTable.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('td');
            if ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0))
                cell.textContent = matrizVazia[i][j].toUpperCase();
            else
                cell.textContent = matrizVazia[i][j].toLowerCase();

            row.appendChild(cell);
        }
        matrizTable.appendChild(row);
    }
}




