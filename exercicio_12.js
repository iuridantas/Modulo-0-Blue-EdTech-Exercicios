/*Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.*/

const prompt = require("prompt-sync")();
console.clear();

let salario = +prompt('Digite o salário do colaborador: ')
console.log()


if(salario <=280){
    console.log(`O salário antes do reajuste era: R$ ${salario}`)
    console.log(`O percentual de aumento aplicado foi: R$ 20%`)
    console.log(`O valor do aumento foi R$ ${(salario * 0.20)}`)
    console.log(`O novo salário após o aumento foi R$ ${((salario * 0.20)+salario)}`)
}else if(salario >=280 && salario <=700){
    console.log(`O salário antes do reajuste era: R$ ${salario}`)
    console.log(`O percentual de aumento aplicado foi: R$ 15%`)
    console.log(`O valor do aumento foi R$ ${(salario * 0.15)}`)
    console.log(`O novo salário após o aumento foi R$ ${((salario * 0.15)+salario)}`)
}else if(salario >=700 && salario <=1500){
    console.log(`O salário antes do reajuste era: R$ ${salario}`)
    console.log(`O percentual de aumento aplicado foi: R$ 10%`)
    console.log(`O valor do aumento foi R$ ${(salario * 0.10)}`)
    console.log(`O novo salário após o aumento foi R$ ${((salario * 0.10)+salario)}`)
}else {
    console.log(`O salário antes do reajuste era: R$ ${salario}`)
    console.log(`O percentual de aumento aplicado foi: R$ 5%`)
    console.log(`O valor do aumento foi R$ ${(salario * 0.05)}`)
    console.log(`O novo salário após o aumento foi R$ ${((salario * 0.05)+salario)}`)
}
