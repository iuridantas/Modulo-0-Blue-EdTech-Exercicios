/*Você está na flor da idade?
Defina uma variável para o valor do ano do nascimento;
Defina uma variável para o valor do ano atual;
Defina uma variável que calcula o valor final da idade da pessoa;
Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".*/

const prompt = require("prompt-sync")();
console.clear();

let anonasc = +prompt("Qual ano você nasceu? ")
let anoatual = new Date().getFullYear()
console.log(`Você tem ${anoatual-anonasc} anos. Você está na flor da idade!`)