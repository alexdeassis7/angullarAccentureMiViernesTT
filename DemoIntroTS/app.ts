import { Persona } from './Persona';

var miObjeto = new Persona(150);
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

let isDone: boolean = false;
console.log("isDone" + isDone);

//Number : para datos numericos 

let decimal: number ;
decimal = 6;
console.log(decimal);

let hex: number = 0xf004;
console.log(hex);

let binary: number = 0b1010;
console.log(binary);

let octal: number = 0o744;
console.log(octal);


//String : Cadenas de caracteres y/o textos
let color: string = "blue";
color = 'red';

//para concatenar podemos usar templates 
let fullName: string = `Alejandra Copy`;
let age: number = 38 ; 
let sentence: string = `Hello, my name is  ${ fullName }. I'll be ${ age + 1 } years old next month.`;

console.log(sentence);

//sintasis equivalente 
let sentence2: string = "Hello, my name is " +  fullName + ". I'll be  " + (age + 1) +" years old next month.";

console.log(sentence2);

let cualquirCosa: any = {nombre: "alex", edad: 26 };

//void

let myArray:number[];
let miOtroArray:Array<number>;

let cliente : any;

cliente.edad

export interface Client {
    nombre: string;
    edad: number;
    apellido: string;
}











