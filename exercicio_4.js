/*E os 10% do garçom?
Defina uma variável para o valor de uma refeição que custou R$ 42,54;
Defina uma variável para o valor da taxa de serviço que é de 10%;
Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.*/

const prompt = require("prompt-sync")();
console.clear();

refeição = 42.54

taxa = (refeição * 0.1)+refeição

console.log(`O valor da sua refeição foi de R$ ${refeição}. Com a taxa de serviço o valor total foi de R$ ${taxa.toFixed(2)}.`);

