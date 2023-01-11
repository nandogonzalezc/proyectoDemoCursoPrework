let ataquePoderEnemigo
let ataqueJugador
let combate
let VidasJugador = 3
let Vidasenemigo = 3
let jugadorGano = "jugador Gano"




function iniciarJuego(){


    let SeccionSelecionarAtaque = document.getElementById("Seleccionar-ataque")
    SeccionSelecionarAtaque.style.display = "none"
    let SeccionSelecionarReiniciar = document.getElementById("reiniciar")
    SeccionSelecionarReiniciar.style.display = "none"



    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", ReiniciarJuego)

}


function seleccionarMascotaJugador(){
    
    let SeccionSelecionarMascota = document.getElementById("Seleccionar-mascota")
    SeccionSelecionarMascota.style.display = "none"

    let SeccionSelecionarAtaque = document.getElementById("Seleccionar-ataque")
    SeccionSelecionarAtaque.style.display = "flex"

    let spanMascotaJugador = document.getElementById("mascota-juador")
    if (document.getElementById("hipodoge").checked){
    spanMascotaJugador.innerHTML = "hipodoge"
    }
    else if (document.getElementById("Capipepo").checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if (document.getElementById("Ratigueya").checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
        }
    else if (document.getElementById("Langostelvis").checked){
        spanMascotaJugador.innerHTML = "Langostelvis"
        }
    else if (document.getElementById("Tucapalma").checked){
        spanMascotaJugador.innerHTML = "Tucapalma"
        }
    else if (document.getElementById("Pydos").checked){
        spanMascotaJugador.innerHTML = "Pydos"
        }
    else  {
            alert("Seleciona a una mascota")
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1,6) 
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1){
    spanMascotaEnemigo.innerHTML = "hipodoge"
    }
    else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }
    else if (ataqueAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
    else if (ataqueAleatorio == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    }
    else if (ataqueAleatorio == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    }
    else  {
        spanMascotaEnemigo.innerHTML = "Pydos"
    }

}

function ataqueEnemigo() {
let ataqueEnemigoAleatorio = aleatorio(1,3)
    if (ataqueEnemigoAleatorio == 1){
    ataquePoderEnemigo = "FUEGO"
    }
    else if (ataqueEnemigoAleatorio == 2){
        ataquePoderEnemigo = "AGUA"
    }
    else {
        ataquePoderEnemigo = "TIERRA"
    }
    pelea()
    crearMensaje()
    
}



function ataqueFuego(){
    ataqueJugador='FUEGO'
    ataqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueEnemigo()
}

function pelea(){
        let spanVidasEnemigo = document.getElementById("Vidas-enemigo")
        let spanVidasJugador = document.getElementById("Vidas-jugador")


        if (ataqueJugador == ataquePoderEnemigo){
            combate = "EMPATE"
        }
        else if (ataqueJugador == "AGUA" && ataquePoderEnemigo == "FUEGO" ){
            combate = "GANO JUGADOR"
            Vidasenemigo = Vidasenemigo - 1
            spanVidasEnemigo.innerHTML = Vidasenemigo

        }
        else if (ataqueJugador == "FUEGO" && ataquePoderEnemigo == "TIERRA" ){
            combate = "GANO JUGADOR"
            Vidasenemigo = Vidasenemigo - 1
            spanVidasEnemigo.innerHTML = Vidasenemigo
        }
        else if (ataqueJugador == "TIERRA" && ataquePoderEnemigo == "AGUA" ){
            combate = "GANO JUGADOR"
            Vidasenemigo = Vidasenemigo - 1
            spanVidasEnemigo.innerHTML = Vidasenemigo
        }
        else{
            combate = "GANA ENEMIGO"
            VidasJugador = VidasJugador - 1 
            spanVidasJugador.innerHTML = VidasJugador
        }
        ganador()
    
 }
function ganador() {
    let resultadoPelea = document.getElementById("resultado-pelea")

    if( Vidasenemigo == 0){

    resultadoPelea.innerHTML = "Felicitaciones ganaste!!!👍"

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    let SeccionSelecionarReiniciar = document.getElementById("reiniciar")
    SeccionSelecionarReiniciar.style.display = "flex"
    
    }
    else if (VidasJugador == 0){

        resultadoPelea.innerHTML = "Lastima perdiste😢"

        let botonFuego = document.getElementById('boton-fuego')
        botonFuego.disabled = true
        let botonAgua = document.getElementById("boton-agua")
        botonAgua.disabled = true
        let botonTierra = document.getElementById("boton-tierra")
        botonTierra.disabled = true
        let SeccionSelecionarReiniciar = document.getElementById("reiniciar")
        SeccionSelecionarReiniciar.style.display = ""
    }
}

function crearMensaje(){

        let Disputa = document.getElementById("resultado")
        let ataqueDelJugador = document.getElementById("ataque-del-jugador")
        let ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")

        let nuevoAtaqueJugador =document.createElement('p')
        let nuevoAtaqueEnemigo =document.createElement('p')
        

        Disputa.innerHTML = combate
        nuevoAtaqueJugador.innerHTML = ataqueJugador
        nuevoAtaqueEnemigo.innerHTML = ataquePoderEnemigo

        ataqueDelJugador.appendChild(nuevoAtaqueJugador)
        ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
        
        
        
}


function aleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min)
}

function ReiniciarJuego(){
    location.reload()
}

window.addEventListener("load", iniciarJuego)