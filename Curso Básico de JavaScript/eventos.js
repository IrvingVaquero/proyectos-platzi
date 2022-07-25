let input1 = document.getElementById('numeroUno');
let input2 = document.getElementById('numeroDos');
let btn = document.querySelector('#btnresultado');
let resultado = document.querySelector('#result')

function btnOnClick(){
    console.log(Number(input1.value)  + Number(input2.value))
    resultado.innerText = Number(input1.value)  + Number(input2.value)
}