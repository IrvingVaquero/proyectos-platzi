// querySelector selecciona la primer etiqueta encontrada con el selector seleccionado
let titulo = document.querySelector('h1')
let psolo = document.querySelector('p')
let pclase = document.querySelector('.primero')
let pid = document.querySelector('#segundo')
let inputselect = document.querySelector('input')
console.log({
    titulo,psolo,pclase,pid,inputselect

})

//* querySelectorAll en un array guarda todas la etiquetas con ese selecctor
let todo = document.querySelectorAll('p')
console.log(todo)
//* innerHTML Agrega codigo html dentro de la etiqueta seleccionada 
titulo.innerHTML = 'hola <br>'
//* innerText agrega solo texto dentro de la etiqueta seleccionada 
titulo.innerText = 'hol sin html'
//* getAttribute obbtiene el valor del atributo que mandamos
titulo.getAttribute('class')
//* setAttribute agregaamos valores a alos atributos que seleccionamos
titulo.setAttribute('class', 'rojo')
//* .classList.add agrega clases
titulo.classList.add('otro')
//* .classList.remove remueve clases
titulo.classList.remove('rojo')

inputselect.setAttribute('value', 'otro')
inputselect.placeholder = 'porque lo cambio'

//! createElement crea una etiqueta 
const img = document.createElement('img')
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);
//! append agrega en la etiqueta lo que ke pasamos
pid.append(img);
