/*Crie um programa em que peça a nota do aluno, que deve ser um real entre 0.00 e 10.0
Se a nota for menor que 6.0, deve exibir a nota F.
Se a nota for de 6.0 até 7.0, deve exibir a nota D.
Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.*/

const prompt = require("prompt-sync")();
console.clear();

let aluno = prompt(`Nome do aluno : `);
let num1 = +prompt(`Nota do aluno ${aluno} : `);

if(num1<6){
    console.log(`O aluno ${aluno} tirou a nota F`)
}else if(num1>=6 && num1<=7){
    console.log(`O aluno ${aluno} tirou a nota D`)
}else if(num1>=7 && num1<=8){
    console.log(`O aluno ${aluno} tirou a nota C`)
}else if(num1>=8 && num1<=9){
    console.log(`O aluno ${aluno} tirou a nota b`)
}else console.log(`O aluno ${aluno} tirou a nota A`)