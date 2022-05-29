/*Qual o valor do troco?
Defina uma variável para o valor de uma compra que custou R$100,98;
Defina uma variável para o valor que o cliente pagou R$150,00;
Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.*/

const prompt = require("prompt-sync")();
console.clear();

valor = 100.98
pgt = 150.00

troco = pgt - valor

console.log(`O valor da sua compra foi de R$ ${valor.toFixed(2)}, você pagou R$ ${pgt.toFixed(2)}. Seu troco é de R$ ${troco.toFixed(2)}`);
