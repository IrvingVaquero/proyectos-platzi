let input1 = document.getElementById('numeroUno');
let input2 = document.getElementById('numeroDos');
let btn = document.querySelector('#btnresultado');
let resultado = document.querySelector('#result')

// * Funcionlidad de los event listener
// ! addEventListener('evento,  metodo a ejecutar )

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    console.log(Number(input1.value)  + Number(input2.value))
    resultado.innerText = Number(input1.value)  + Number(input2.value)
}