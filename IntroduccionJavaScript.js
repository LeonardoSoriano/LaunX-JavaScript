/* Las variables se pueden declarar con la palabra reservada "var", estas variables se pueden considerar como globales
Tambien se pueden declarar con la palabra reservada "let" y estas seran usadas dentro de un bloque de codigo
Igualmente esta la declaracion con la palabra reservada "const" y se usaran cuando el valor no cambie */

console.log("\n********** Variables ***********\n");
var numero1 = 4;
var numero2 = 6;
console.log("Numero 1:" + numero1 + " Numero 2:" + numero2);

/* Las cadenas (String) son caracteres que pueden ser una frase o palabra y estas pueden darse con comillas dobles "", simples ''
o invertidas ``, la diferencia es que con las invertidas podemos agregar variables dentro de la cadena con la sintaxis ${}*/

console.log("\n ********* Cadenas ********\n");
var frase1 = "Wjemplo comillas dobles";
var frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);

/* Las condicionales se pueden usar valores como > < = == === != y cada una tiene una funcionalidad de comparacion entre elementos */

 console.log("\n*********** Condicionales *********");

 console.log(numero1 != numero2);

 /* Los operadores logicos se utilizan cuando se necesita comprar mas de una condicional
 El operador && (AND) necesita que todos sus valores sean true para que la salida sea true
 El operador || (OR) necesita que solo uno de sus valores sea true para que la salida sea true */

 console.log("\n******** Operador logico AND *******\n");
 console.log(true && true);

 console.log("\n********* Operador logico OR ********\n");
 console.log(false || false);

 /* Los arreglos son estructuras de datos que nos permiten agrupar datos de un mismo tipo */

 console.log("\n********* Arreglos ********");
 let listaDeNumeros = [2,3,5,7,11,234];

 console.log(listaDeNumeros[5]);

 listaDeNumeros.push(16);
 listaDeNumeros.push(939);

 console.log(listaDeNumeros);
 console.log(listaDeNumeros.length);

 let listaDePalabras = ["Explorer", "MisionComander", "LaunchX", "Innovaccion"];
 console.log(listaDePalabras);
 console.log(listaDePalabras.length);

 /* Las cadenas (string) pueden ser tratadas como arreglos */

 let palabra  = "Explorer";
 console.log(palabra[2]);
 console.log(palabra.length);

 /* Los objetos son estructuras de datos que nos permiten agrupar datos de un diferente tipos */

 console.log("\n********** Objetos *********\n");

 let explorer = {
    nombre: "Nombre del Explorer",
    email: "email@innovaccion.mx",
    numReg: 12345,
    mision: "Fronted",
    proyectos: ["Abogabot", "Taqueria", "Pasteleria", "Vacunacion"],
    proPer:{
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
 };

 console.log(explorer);

 console.log(explorer.proPer.escolar);

/* Flujo Condicional */

let number1 = 2;
let number2 = 6;
console.log("\n********** if/else *********\n");
if (number1 > number2 && number2 > 5){
    console.log("El numero 1 es mayor que numero 2");
}
else if(number1 == number2 || number1 < 3){
    console.log("Los numeros son iguales");
}
else {
    console.log("El numero 2 es mayor que numero 1");
}

/* Ciclo Condicional */ 

console.log("\n******** While ********\n");
let numberWhile = 5;
while (numberWhile <= 12){
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}
console.log("Aqui ya salio del WHILE" + numberWhile);

/* Ciclo condicional de una iteracion minimo */
console.log("\n******** Do While *******\n");
let numeroDoWhile = 22;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
}
while (numeroDoWhile < 20);
console.log("Aqui sale el Do While" + numeroDoWhile);

/* Ciclo for con iteracion controlada */

console.log("\n********** For *********");
let numeroFor = 0
for (numeroFor; numeroFor <=12; numeroFor = numeroFor + 1){
    console.log(numeroFor);
}
console.log("Aqui salimos del FOR" + numeroFor);

/* Opciones para evitar anidar condicionales */

console.log("\n******** SWITCH ***********\n");
switch(prompt("¿Como esta el clima?")) {
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Ponte Bloqueador");
        break;
    case  "nublado":
        console.log("Tapate Bien");
        break;
    default:
        console.log("No sse como esta el clima");
        break;
}
console.log("Aqio salimos del SWITCH");
