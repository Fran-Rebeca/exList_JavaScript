/*Faça um script que leia o nome de uma pessoa, o ano de nascimento dessa pessoa e o ano atual, calcule e mostre a idade dessa pessoa e seu nome em
linhas separadas.
*/

let nome = prompt("Digite o seu nome: ");
let anoNas = parseInt(prompt("Digite seu ano de nascimento: "));
let anoAtual = parseInt(prompt("Digite o ano atual: "));

let idade = anoAtual - anoNas;

alert(`Sua idade é ${idade} \n e seu nome é ${nome} `);

