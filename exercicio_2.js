// Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.


const prompt = require("prompt-sync")();
let nome = prompt('Digite o seu nome: ');
let endereço = prompt('Digite o seu endereço: ');
let telefone = prompt('Digite o seu telefone: ');

console.log('Meu nome é',nome);
console.log('Meu endereço é',endereço);
console.log('Meu telefone é',telefone);