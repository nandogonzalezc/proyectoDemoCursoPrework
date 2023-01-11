// 1 es piedra, 2 papel, 3 tijera
let jugador = 0
let min = 1
let max = 3
let pc = 0 
let triunfos = 0
let perdidas = 0  
while (triunfos < 3 && perdidas < 3) {
    let pc = Math.floor(Math.random() * (max - min + 1) + min)
    let jugador =prompt("Elije: 1 para piedra, 2 para papel, 3 para tijera")
    alert("Tu eliges " + eleccion(jugador))    
    alert("PC elige: " + eleccion(pc))
        
        Pelea(jugador,pc)
        
  
    alert("ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces. ")

}


function eleccion (jugada){
    let resultado = ""
     if(jugada == 1) {
    resultado = "Piedra"
    } else if(jugada == 2) {
        resultado = "Papel"
     } else if(jugada == 3) {
        resultado = "Tijera"
    }    else {
        resultado = "NULO"
    }
    return resultado

}
function Pelea (jugador,pc){
    let combate = ""
if(pc == jugador){
    combate = "Empate"
    } else if(jugador == 1 && pc == 3){
        combate = "Jugador gana"
        triunfos = triunfos + 1
    }else if(jugador == 3 && pc == 2){
        combate = "Jugador gana"
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1){
        combate = "Jugador gana"
        triunfos = triunfos + 1
    }
    else {
        combate = "Jugador Pierde"
        perdidas = perdidas + 1
    }
    alert(combate)
}