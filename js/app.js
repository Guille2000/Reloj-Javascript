let segundos = 00

let decenas = 00;

let decenasContador = document.getElementById('decenas')
let segundosContador = document.getElementById('segundos')
let botonStart = document.getElementById('start')
let botonStop = document.getElementById('stop')
let botonReset = document.getElementById('reset')

let intervalos; //para almacenar valores del tiempo

//Esta funcion va a ejecutarse cuando clickees el boton de start

function startTimer(){
    decenas++

    if(decenas < 9){
        decenasContador.innerHTML = "0" + decenas
    }
    if(decenas > 9){
        decenasContador.innerHTML = decenas
    }
    if (decenas > 99 ){
        segundos ++
        segundosContador.innerHTML = "0" + segundos
        decenas = 0
        decenasContador.innerHTML = "0" + 0
    }
    if (segundos > 9 ){
        segundosContador.innerHTML = segundos
    }
}
start.onclick = function (){
    intervalos = setInterval(startTimer)
}

detener.onclick = function(){
    clearInterval(intervalos)
}
reset.onclick = function(){
    clearInterval(intervalos)
    decenas = "00"
    segundos = "00"
    segundosContador.innerHTML = segundos
    decenasContador.innerHTML = decenas
}