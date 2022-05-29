/*Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
DOLAR
EURO
LIBRA ESTERLINA
DÓLAR CANADENSE
PESO ARGENTINO
PESO CHILENO
Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real. Mostrar o resultado no formato U$9999.99*/

const prompt = require("prompt-sync")();
console.clear();

let real = +prompt('Valor em real que deseja converter R$: ')
console.log()

Dolar = real * 0.21 
Euro = real * 0.20
LibraEsterina = real * 0.17
DolarCanadense  = real * 0.27
PesoArgentino = real * 25.26
PesoChileno = real * 174.69

console.log(`R$ ${real.toFixed(2)} equivale a US$ ${Dolar.toFixed(2)} Dolar`)
console.log(`R$ ${real.toFixed(2)} equivale a EUR ${Euro.toFixed(2)} Euro`)
console.log(`R$ ${real.toFixed(2)} equivale a £ ${LibraEsterina.toFixed(2)} Libra Esterina`)
console.log(`R$ ${real.toFixed(2)} equivale a C$ ${DolarCanadense.toFixed(2)} Dolar Canadense`)
console.log(`R$ ${real.toFixed(2)} equivale a $ ${PesoArgentino.toFixed(2)} Peso Argentino`)
console.log(`R$ ${real.toFixed(2)} equivale a $ ${PesoChileno.toFixed(2)} Peso Chileno`)