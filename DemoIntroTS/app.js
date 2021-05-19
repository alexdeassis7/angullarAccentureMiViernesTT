"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var miObjeto = new Persona_1.Persona(150);
miObjeto.caminar();
console.log("Hola Mundo TS");
var miVaribleJS = "hola";
console.log(miVaribleJS);
//alert("hola");
//comentario linea
/** comentario bloque */
//Let Var Const
//VAR: es para varibles globales  , no tiene un ambito de bloque 
/*
var foo = 123 ;

if(true){
    var foo = 456;
}

console.log("var : " + foo); // 456
*/
//LET :  variables locales al bloque 
/*et foo = 123 ;

if(true){
    let foo = 456;
}

console.log("var : " + foo);*/ // 123
// en el ES6 CONST 
//las contantes deben ser declaradas y asignadas SIEMPRE!
// const foo = 123;
//foo = 456 ; // no permitido !
//const foo = { bar : 123 };
//foo = { bar: 456 } ; //error no se permite la modificacion del objeto 
//pero si se puede modificar el contenido de las variables que contiene el literal Object 
//foo.bar = 456; //PERMITIDO
//console.dir(foo);
//tipos de datos primitivos en TS
//boolean 
var isDone = false;
console.log("isDone" + isDone);
//Number : para datos numericos 
var decimal;
decimal = 6;
console.log(decimal);
var hex = 0xf004;
console.log(hex);
var binary = 10;
console.log(binary);
var octal = 484;
console.log(octal);
//String : Cadenas de caracteres y/o textos
var color = "blue";
color = 'red';
//para concatenar podemos usar templates 
var fullName = "Alejandra Copy";
var age = 38;
var sentence = "Hello, my name is  " + fullName + ". I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//sintasis equivalente 
var sentence2 = "Hello, my name is " + fullName + ". I'll be  " + (age + 1) + " years old next month.";
console.log(sentence2);
var cualquirCosa = { nombre: "alex", edad: 26 };
//void
var myArray;
var miOtroArray;
var cliente;
cliente.edad;
