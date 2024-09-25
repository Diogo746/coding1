# Resumo - aula 04/09

Criação de um READ ME

Anexar gif: copiar endereço de imagem

<img src="endereço do link" width="(tamanho dos pixels)px">

Exemplo:
<img src="https://i.gifer.com/origin/d5/d5b88b45655b89b33ff6d1dc2df982ff_w200.gif" width="100px">

Modelos: https://github.com/duduxs



Bibliotecas - lib

Dependências (dentro da biblioteca)

Frameworks (moldura do código, não pode apagar)

Gerenciador: npm
Instalar: npm init -y (gerenciador de pacotes)
Desintalar: npm uninstall node

Servidor: linguagem Node.JS

Instalar o node: npm install node 
node --version

➔ node (nome do arquivo) = executar
ex. node aula.js

console.log("Hello World");

console.log(10+10);

# Resumo - aula 11/09

Rótulo:
rotulo = "Natalya";
console.log(rotulo);
rotulo = 12345;
console.log(rotulo);

➔ Comitar o codigo (desativar as linhas) ➔ /*      */

Variavel:
VAR - Antiga forma de definir variáveis no javascript. Pode ser reatribuida e redeclarada. 
var nome_da_variavel = "nome";

LET - Também pode ter seu valor reatribuido mas não pode ser redeclarado.
let nome = "nome";

CONST - Não pode ter seu valor reatribuido nem redeclarado.
const nome = "nome";

STRING: 
Dados idos na forma literal de texto. Aplicação reconhecida apenas em texto. Podemos utilizar números, utilizando sinal de aspas, crase ou apóstrofo no inicio e final.

Soma:

const numero1 = 10;

const numero2 = 20;

const soma = numero1 + numero2;

console.log(soma);

Operações:

const numero1 = 20;

const numero2 = 10;

const soma = numero1 + numero2;

console.log(soma);

const sub = numero1 - numero2;

console.log(sub);

const mult = numero1 * numero2;

console.log(mult);

const div = numero1 / numero2;

console.log(div);


Constante + String(texto): 

Tipo 1:

const numero1 = 20;

const numero2 = 10;

const soma = numero1 + numero2;

/*console.log(`O resultado da soma é: ${soma}`);*/

console.log("A some é: " + soma);

const sub = numero1 - numero2;

console.log("A subtração é: " + sub);

const mult = numero1 * numero2;

console.log("A multiplicação é: " + mult);

const div = numero1 / numero2;

console.log("A divisão é: " + div);



Tipo 2:

const numero1 = 20;

const numero2 = 10;

const soma = numero1 + numero2;

console.log(`O resultado da soma é: ${soma}`);

const sub = numero1 - numero2;

console.log(`O resultado da subtração é: #{sub}`);

const mult = numero1 * numero2;

console.log(`O resultado da multiplicação é: ${mult}`);

const div = numero1 / numero2;

console.log(`O resultado da divisão é: ${div}`);


#Resumo aula 18/09


Comandos do Git:

ls  (listar arquivos)
git status
git add .   ou git nomedoarquivo.js
git restore --stage node_modules
git commit -m "escrever um comentario"

git pull --no-rebase origin main
git push origin main  (primeira push)
git push

Em caso de problema:
git push -f origin main

# Resumo aula 25/09


VS CODE

git config --global user.name "nome de usuario do github"
git config --global user.email "email usado no github"

git clone "https://github.com/Diogo746/coding1.git"











