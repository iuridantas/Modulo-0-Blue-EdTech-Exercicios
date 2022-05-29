/*Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
Crie uma variável para receber o valor, com conversão para inteiro
Para um número ser par, a divisão dele por 2 tem que dar resto 0*/

const prompt = require("prompt-sync")();
console.clear();

let num1 = +prompt('Escreva um numero: ');

if(num1 % 2 ==0){
    console.log(`${num1} é um numero par.`);
}else console.log(`${num1} é um numero impar.`);

