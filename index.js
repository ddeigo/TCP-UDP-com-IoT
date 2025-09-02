const prompt = require("prompt-sync")();

const peso = Number(prompt("Qual seu peso?"));
const alt = Number(prompt("Qual sua altura(em metros)?"));

const imc = peso / (alt * alt);

console.log(imc);
console.log("Seu IMC é:", imc);
if (imc < 18.5) {
  console.log("Você está abaixo do peso!");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Você está com o peso normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Você está sobrepeso!");
} else if (imc >= 30 && imc <= 34.9) {
  console.log("Você tem obesidade grau I, procure um médico!");
} else if (imc >= 35 && imc <= 39.9) {
  console.log("Você tem obesidade grau II, procure um médico!");
} else if (imc >= 40) {
  console.log("Você tem obesidade grau III, procure um médico!");
}