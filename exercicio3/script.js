//------------------Exercicio 3
//Perguntas
const p1 = "Qual seu nome Completo";
const p2 = "Data de nascimento";
const p3 = "Endereço";
const p4 = "CPF";
const p5 = "Escolaridade";
const p6 = "Possui CHN?";
const p7 = "Quantos filhes possui?";
const p8 = "Cargo atual";
const p9 = "Qual seu salário";
const p10 = "Recebe comissão?";
const p11 = "Informe o ano de admissão";
//Respostas
let r1 = prompt(p1);
let r2 = prompt(p2);
let r3 = prompt(p3);
let r4 = Number(prompt(p4));
let r5 = prompt(p5);
let r6 = confirm(p6);
let r7 = Number(prompt(p7));
let r8 = prompt(p8);
let r9 = Number(prompt(p9));
let r10 = confirm(p10);
let r11 = prompt(p11);
//Imprime tipos das variáveis
console.log(
  typeof r1,
  typeof r2,
  typeof r3,
  typeof r4,
  typeof r5,
  typeof r6,
  typeof r7,
  typeof r8,
  typeof r9,
  typeof r10,
  typeof r11
);
console.log(
  p1,
  r1,
  "\b",
  p2,
  r2,
  "\b",
  p3,
  r3,
  "\b",
  p4,
  r4,
  "\b",
  p5,
  r5,
  "\b",
  p6,
  r6,
  "\b",
  p7,
  r7,
  "\b",
  p8,
  r8,
  "\b",
  p9,
  r9,
  "\b",
  p10,
  r10,
  "\b",
  p11,
  r11,
  "\b"
);
