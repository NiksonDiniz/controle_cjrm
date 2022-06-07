[TOC]

------

## Etapa 01

### *Constantes, variáveis e comentários - Aula 01-06*

Usamos *var*, let e const para inicializar uma várialvel:

```javascript
let age = 31;
let currentYear = 2019;

console.log(age, currentYear); // 31 2019
```

Podemos reatribir valor para uma *let*, var;

```javascript
age = 32;
console.log(age); // 32
```

Não podemos reatribuir valor para uma *const*;

***const* é um valor constante**

```javascript
const points = 100;
console.log(points); // 100

points = 200; // Uncaught TypeError: Assignment to constant variable.
```

### *Strings - Aula 02-03*

**Strings:**

```javascript
// são utilizados "" e ''.
console.log("Hello, world");
const email = "leon@gamil.com";
console.log(email); // leon@gamil.com
```

**concatenação de strings**

```javascript
// é feito com a utilização do +
const firstName = "Nathan";
const lastName = "Drake";
const fullName = firstName + " " + lastName;

console.log(fullName); // Nathan Drake
```

**acessando caracteres**

- js é zero base...sua contagem começa do 0
- onde [0] é o index 0 da *const* fullName

```javascript
console.log(fullName[0]); // N
```

**comprimento de string**

- utilizamos o método .lenght()
- nesse caso o espaço em branco é contado também

```javascript
console.log(fullName.length); // 12
console.log(" ".length); // 1
```

**métodos de string**

- métodos são invocados com .(ponto);
- toUpperCase() - método que deixa tudo maiúsculo;
- toLowerCase() - método que deixa tudo minúsculo;
- indexOf() - busca o index solicitado no argumento.

**não modificam valor original**

```javascript
console.log(fullName.toUpperCase());//NATHAN DRAKE

console.log(fullName.toLowerCase());//nathan drake

const index = email.indexOf("@");
console.log(index); // 4 - o '@' está na posição 4
```

### *Métodos comuns de strings - Aula 02-04*

**método lastIndexOf() -  obtém o último caracter passado por argumento**

```javascript
const email = "laracrofth@gmail.com";

const lastIndexOfA = email.lastIndexOf("a"); // 13
```

**método slice() - obtém uma parte da string**

*primeiro arg: de onde, segundo arg: até onde*

```javascript
const emailSlice = email.slice(0, 9); // laracroft
const emailSlice = email.slice(0, 4); // lara
const emailSlice = email.slice(4, 9); // croft
```

**replace() - subtitui um char(s) por outro char(s)**

```javascript
// neste caso, está substituindo o l por y na primeira ocorrência
const emailReplace = email.replace("l", "y"); // yaracrofth@gmail.com

const emailReplace = email.replace("lara", "chun"); // chuncrofth@gmail.com
```

### *Numbers - Aula 02-05*

**inteiros e decimais**

```javascript
const radius = 10;
const pi = 3.14;
```

**operadores aritméticos**

```javascript
const area = pi * radius ** 2;
```

**ordem de operações**

- 1º parênteses
- 2º expoentes ou raízes
- 3º multiplicações e divisão
- 4º adição e subtração

```javascript
const crazyOperation = 5 * (10 - 3) ** 2; // 245
```

**operadores de incremento e decremento**

```javascript
//incremento
postLikes = postLikes + 1; // 11
postLikes++; // 12

// decremento
postLikes = postLikes - 1; // 11
postLikes--; // 10
```

**operadores addition, subtraction, multiplication e division**

```javascript
// serve para todas as operações (+ - * /)
postLikes = postLikes + 10; // 20
postLikes += 10; // 30
postLikes -= 10; // 20
```

**NaN - not a number**

```javascript
console.log(7 / "oi"); // NaN - quando a operação n faz sentido
```

**concatenação de string com número**

```javascript
// resultado de concatenação entre número e string resulta em string
const likesMessage = "O post tem " + postLikes + " likes";
console.log(likesMessage); // O post tem 20 likes
```

**Template strings - Aula 02-06**

```javascript
const postTitle = "É bolacha ou biscoito?";
const postAuthor = "Matheus Saad";
const postComments = 15;
```

*usando concatenação*

```javascript
const postMessage1 =
  'O post "' +
  postTitle +
  '" do ' +
  postAuthor +
  ", tem " +
  postComments +
  " comentários.";
console.log(postMessage1); // O post "É bolacha ou biscoito?" do Matheus Saad, tem 15 comentários.
```

*usando template strings*

```javascript
const postMessage2 = `O post "${postTitle} "do ${postAuthor}, tem ${postComments} comentários.`; // O post "É bolacha ou biscoito?" do Matheus Saad, tem 15 comentários.
```

*criando templates HTML*

```javascript
const html = `
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
`;

document.querySelector(".content").innerHTML = html;
```

### *Arrays - Aula 03-02*

*Serve para guardar um conjunto de dados*

```javascript
let heroes = ["Batman", "Catwoman", "Iron Man"];
const ages = [31, 25, 39, 40];
```

*para acessar um item e modificar*

```javascript
heroes[2] = "Spider-Man"; // Array(3)
```

**Métodos de arrays**

```javascript
// join() - separa e concatena de acordo com argumento opicional
const joinHeroes1 = heroes.join(); // Batman,Catwoman,Spider-Man
const joinHeroes2 = heroes.join("*"); // Batman*Catwoman*Spider-Man

// indexOf() - mostra o index do elemento passado por argumento
// se encontrar retorna 1 se não encontrar retorna -1
const indexOf25 = ages.indexOf("25"); // -1

// concat() - junta dois arrays
// não modifica os originais
const moreHeroes = heroes.concat(["SuperMan", "Wolverine"]); // (5) ['Batman', 'Catwoman', 'Spider-Man', 'SuperMan', 'Wolverine']

// push() -  add itens no array e retorna a quantidade de itens
// altera o valor original do array - mutação de valores
const pushHeroes = heroes.push("Hulk");
console.log(pushHeroes); // 4

// pop() - remove o último item e o retorna
// modifica o original
const popHeroes = heroes.pop();
console.log(popHeroes); // hulk
```

### *Null e undefined - Aula 03-03*

**Undefined**

- Quando n se atribui um valor pra variável e tenta usa-la o js atribui undefined pra ela
- Quando tentamos uma operação matetemática com undefined resulta em NaN
- Quando usamos undefined dentro de um string, ela imprime undefined

```javascript
let emptiness;
console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`);
//undefined NaN 'o valor é undefined'
```

**Null**

- Para operação matemática com null, ele será interpretado como Zero

```javascript
let emptiness = null;
console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`);
//null 3 'o valor é null'
```

### *Booleans e comparações - Aula 04-02*

```javascript
/ métodos podem retornar booleans
const email = "brucewayne@rogermelo.com.br";
const includes = email.includes("wayne");
console.log(includes); // true
const names = ["dio", "roger", "robert"];
const arrayIncludes = names.includes("rob");
console.log(arrayIncludes); // false

// Operadores de comparação

const age = 31;
console.log(age == 31); // true
console.log(age == 35); // false
console.log(age != 31); // false
console.log(age != 35); // true
console.log(age > 35); // false

// comparando letras: as últimas são maiores que as primeiras r > b
// uma letra minúscula é maior que uma maiúscula
const name = "roger";

console.log(name == "roger"); // true
console.log(name == "Roger"); // false
console.log(name > "belinha"); // true
console.log(name > "Roger"); // true
console.log(name > "Belinha"); // true
```

### *Comparações com igualdade estrita - Aula 04-03*

```javascript
const idade = 31;

// igual a e diferente de
console.log(idade == 31); // true
console.log(idade == "31"); // true
console.log(idade != 31); // false
console.log(idade != "31"); // false

// igual a, e do mesmo tipo e diferente de , e do mesmo tipo
console.log(idade === 31); // true
console.log(idade === "31"); // false
console.log(idade !== 31); // false
console.log(idade !== "31"); // true

// Conversão de tipos e 3 avisos - Aula 04-04
let score = "100";

score = Number(score); // converte string em numero
score = String(score); // converte para string
console.log(score + 1); // 101
console.log(typeof score); // number - verifica o tipo

/* 
  Valores falsy:
  - false
  - 0
  - "", '', ``
  - null
  - undefined
  - NaN

  valores truthy:
  - Qualquer valor que não é falsy
*/
```
