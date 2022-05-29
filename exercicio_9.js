/*Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0.*/

const prompt = require("prompt-sync")();
console.clear();

let num1 = +prompt('Escreva um numero: ');

if (num1 ==0){
    console.log(`insira um numero diferente de 0`);
}else if(num1 >0){
    console.log(`${num1} é um numero positivo.`);
}else console.log(`${num1} é um numero negativo.`);