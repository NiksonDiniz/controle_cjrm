// Booleans e comparações - Aula 04-02
console.log(true, false, "true", "false");

// métodos podem retornar booleans
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

// Comparações com igualdade estrita - Aula 04-03
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
