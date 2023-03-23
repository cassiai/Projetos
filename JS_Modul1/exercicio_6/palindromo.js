const word = prompt("digite uma palavra: ")
let inverseWord = ""

for (let i = word.length; i>=0; i--) {
    inverseWord += word[i]
}

if (word === inverseWord) {
    alert (`A palavra ${word} é um palíndromo`)
}
else {
    alert (`A palavra ${word} não é um palíndromo. \n`
    `${word} é diferente de ${inverseWord}`)
}