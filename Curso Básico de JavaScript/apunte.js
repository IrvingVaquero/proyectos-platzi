/*
*********** (Clase Uno) ****************
Orientado a paginas dinamicas
Es un leguaje interpretado orientado a objebtos, debil
Orientado a objebtos: un ejemplo serian los usuarios
debilmente tipado: 
dinamico: asume tipo de datos
lenguaje dinamico osea que no es necesario compilarlo
lenguaje interpretado o que se va por linea o runntipe

    1 toma archivo
    2 crea un arbol
    3 empiesa a interpretar el codigo
    4 traduce el codigo a codigo binario

Forwards: Si sale una nueva versio no rompe otros codigo
backwards: las funcione nuevas no se pueden utilizar es el que utniliza js

Compilador js
Para utlizar nuevas funciones en el proyecto

*********** (Clase #2) ****************

Tiene una comunidad enorme
--Varias librerias

*********** (Clase #3) ****************
Componentes:
    Variables o datos
        primitivos
            Numero
            string
            boolean
            null undefine
        No primitivos
            Array
            Objeto
    tareas o funciones

*********** (Clase #4) ****************
var: de forma global
const: no se puede modifjicar
let: limitada al bloque

*********** (Clase #4) ****************
Las funciones son un conjunto de sentencias
*/
//Declarativas
function miFuncion(){
    return 3;
}
//Expresion
var miFuncion = function(a,b){
    return a + b;
}
miFuncion(2,5)
/* 
*********** (Clase #5) ****************
Scopee: alcanse de las variables a nivel de bloque(local ) o a nivel global

*********** (Clase #6) ****************
Hoisting: Es la elevavion en la declaracion de variables con var y function

*********** (Clase #7) ****************
Coercion implicita: cuando la consola cambia de un tipo de valor por otro string ==> numero
Coercion explicita: cuando obligamos este cambio
*/

// Coercion implicita:
var a = 4 + "7"

// Coercion explicita:
var c= String(a)

/* 
*********** (Clase #8) ****************
Truthy y Falsy: Que valores son verdaderos y cuales son falsos

*********** (Clase #8) ****************
Operadores: 
    Asignación: =, +=, -=, ++
    Comparación: !, !=, ==, >=, <=, ===
    Aritméticos: + - * /

*********** (Clase #8) ****************
IF, IF-ELSE, ELSE: Condicionamiento es esto o lo otro

!Ternario
    * condicion ? True : False


*********** (Clase #9) ****************

!Objetos automaticos


*/

function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio; 
}

let autoNuevo = [];
autoNuevo.push(new auto("tesla", "model 3", 2020))

/* 
*********** (Clase #10) ****************
Metodo objetos
    * .lenght devuelve la longitud del array.
    * .push() agrega elementos al final de array.
    * .pop() elimina un elemento del array.
    * .unshift() agrega un elemento al array, pero lo agrega en primer lugar.
    * .shift() **elimina el elemento que está en el inicio del array.
    * .indexOf ** devuelve la posición de un elemento del array.

*********** (Clase #10) ****************

Recorridos de arrays
    !Filter
        *Crea una nueva variable con lo que se requiere filtrar
*/
var articulos = [
    {
        nombre: "cafe",
        precio: 500
    },
    {
        nombre: "coca",
        precio: 100
    },
    {
        nombre: "agus",
        precio: 700
    }
]

var filtrados =  articulos.filter(function(articulo){
    return articulo.precio !=500; // *Filtro que se requiere 

})

console.log(filtrados);

/*
    !Map nos crea un nuevo array con procesos que se le agan a los elementos

*/
var filtrados =  articulos.map(function(articulo){
    return articulo.precio +=500;

})

/* 
    ! fInd crea un nuevo array con lo que queremos buscar
    ? ¿Cual es la diferencia entre find y filter ?
    * filter retorna todas las coincidencias y find retorna solo la primer coincidencia


    ! Foreach  () hace un recorrido por cada uno de los objetos
*/

articulos.forEach(function(articulo){
    console.log(articulo.precio);

});

/*
    ! some() regresa una validacion sobre si se encuentra algo  True o False


*/