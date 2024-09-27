// Nome e idade

const nome = "Diogo";
console.log("Meu nome é " + nome);
const idade = "31";
console.log("Tenho " + idade +" anos");

// Cidade

const nome = "Diogo";
const cidade = "Recife";

console.log(`Meu nome é ${nome} e sou de ${cidade}`);

// Operações básicas

const numero1 = 30;
const numero2 = 20;
const soma = numero1 + numero2;
console.log(`O resultado da soma é: ${soma}`);
const sub = numero1 - numero2;
console.log(`O resultado da subtração é: ${sub}`);
const mult = numero1 * numero2;
console.log(`O resultado da multiplicação é: ${mult}`);
const div = numero1 / numero2;
console.log(`O resultado da divisão é: ${div}`);

// Calcudo da área do triângulo

const base = 8;
const altura = 15;
const area = base * altura / 2
console.log (`A área do triângulo é: ${area} cm²`);

// Média

const nota1 = 9;
const nota2 = 7;
const nota3 = 5;
const media = (nota1 + nota2+ nota3)/3;
console.log(`O resultado da média é ${media}`);

// Desconto

const valororiginal = 100;
const percentualdesconto = 20;
const desconto = (valororiginal * percentualdesconto / 100);
const preco = (valororiginal - desconto);
console.log(`O valor do produto com desconto é: ${preco}`);

// Imposto de renda

const salario = 3000;
const aliquota = 0.15;
const imposto = salario * aliquota 
console.log(`O imposto a ser pago é de R$ ${imposto}`);

// Conversor de moedas (dolar = 5,44 reais)

const real = 100;
const dolar = 5.44;
const conv = real * dolar
console.log(`Na cotação atual, seus 100 reais valem ${conv} dólares americanos`);

// Conversor de Celsius para Fahrenheit

const cel = 28;
const far = (cel * 9 / 5) + 32;
console.log(`28° Celsius são ${far} Fahrenheit`);

// Calculadora de IMC

const peso = 80;
const altura = 1.80;
const imc = peso / (altura * altura);
console.log(`O IMC é ${imc.toFixed(2)}. Seu peso está normal`);


