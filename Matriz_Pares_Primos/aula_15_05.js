function isPrimo(num) {
  let isPrimo = true;

  if (num < 2) {
    isPrimo = false;
  } else if (num === 2 || num === 3) {
    isPrimo = true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    isPrimo = false;
  } else {
    for (let i = 5; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        isPrimo = false;
        break;
      }
    }
  } return isPrimo;
}

function verifica(numero) {
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (mat1[x][y] == numero) {
        return true;
      }
    }
  } return false;
}

let mat1 = new Array();
let vetPares = [];
let vetPrimos = [];
let vetIntersecao = [];

for (let i = 0; i < 10; i++) {
  { mat1[i] = new Array(); }
  for (let j = 0; j < 10; j++)
    mat1[i][j] = 0;
}

const matrizInteiraFormatada = document.getElementById('matrizInteiraFormatada');

for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    const column = document.createElement('td');
    let numero;
    do {
      numero = Math.floor(Math.random() * 1000) + 1;
    } while (verifica(numero) == true);
    mat1[i][j] = numero;
    column.textContent = mat1[i][j];
    row.appendChild(column);

    if (mat1[i][j] % 2 === 0) {
      vetPares.push(mat1[i][j]);
      column.classList.add('matrizInteiraPar');
    }

    if (isPrimo(mat1[i][j])) {
      vetPrimos.push(mat1[i][j]);
      column.classList.add('matrizInteiraPrimo');
    }
  } matrizInteiraFormatada.appendChild(row);
}

vetPares.sort((a, b) => a - b);

const matrizParContainer = document.getElementById('matriz-par');
for (let i = 0; i < vetPares.length; i++) {
  const elemento = document.createElement('span');
  elemento.textContent = vetPares[i];
  elemento.classList.add('matriz-par-item');
  matrizParContainer.appendChild(elemento);
}

vetPrimos.sort((a, b) => b - a);

const matrizPrimoContainer = document.getElementById('matriz-primo');
for (let i = 0; i < vetPrimos.length; i++) {
  const elemento = document.createElement('span');
  elemento.textContent = vetPrimos[i];
  elemento.classList.add('matriz-primo-item');
  matrizPrimoContainer.appendChild(elemento);
}

for (let i = 0; i < vetPrimos.length; i++) {
  let verificar = vetPrimos[i]
  if (vetPares.includes(verificar)) {
    vetIntersecao.push(verificar)
  }
}
if (vetIntersecao.length === 0) {
  document.getElementById('matriz-intersecao').innerHTML += `Não há valores`;
} else {
  document.getElementById('matriz-intersecao').innerHTML += `${vetIntersecao} `
}