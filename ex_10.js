/*Faça um script que receba a altura de um degrau de uma escada e a altura que um pedreiro deseja alcançar utilizando essa escada, calcule e mostre
quantos degraus ele deverá subir para atingir seu objetivo, os valores fornecidos devem ser em metros.*/

let metrosSubida = parseInt(prompt("Metros para subir degrau: "));
let alturaDegraus = parseInt(prompt("Altura do degrau: "));

let quantDegraus = ((metrosSubida * 100) / alturaDegraus);

alert (`O pedreiro irá subir ${quantDegraus} metros para atingir o objetivo`);
