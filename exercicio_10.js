/*Faça um programa que peça dois números, imprima o maior deles ou imprima "Números iguais" se os números forem iguais.*/

const prompt = require("prompt-sync")();
console.clear();

let num1 = +prompt('Escreva o primeiro numero: ');
let num2 = +prompt('Escreva o segundo numero: ');

if(num1>num2){
    console.log(`O ${num1} é maior`)
}else if(num2>num1){
    console.log(`O ${num2} é maior`)
}else console.log(`Os numeros são iguais`)