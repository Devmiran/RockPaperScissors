let contauser=0
let contacpu=0

let cantidad = +prompt("Cuantas veces quieres jugar");
let maquina=Math.floor(Math.random()*3+1);
function play(cantidad){
    for (let i=1; i<=cantidad;i++){
       let juego=+prompt(" Elije la opcion \n 1.Piedra \n 2.Papel \n 3.Tijera");
       let cpu=""
      if (maquina==1){
     cpu='piedra'
     } else if(maquina==2){
     cpu='Papel'
     }else if (maquina==3){
     cpu='Tijera'
     }
     let pepito=""
     if (juego==1){
     pepito='piedra'
     } else if(juego==2){
     pepito='Papel'
     }else if (juego==3){
        pepito='Tijera'
     }
    }
}
play(cantidad)

let cpu
let player = 0
let countCPU = 0
let countPlayer = 0
let salio = true

function textVersus(jugador) {
    if (jugador == 1)  return "Rock"
    else if (jugador == 2) return "Paper"
    else if (jugador == 3) return "Scissors"
}

function Versus(jugador, cpu) {
    if (jugador == cpu) return "Draw"
    else if (jugador == 1 && cpu == 2) return "CPU win!" + countCPU++
    else if (jugador == 1 && cpu == 3) return "Player win!" + countPlayer++
    else if (jugador == 2 && cpu == 1) return "Player win!" + countPlayer++
    else if (jugador == 2 && cpu == 3) return "CPU win!" + countCPU++
    else if (jugador == 3 && cpu == 1) return "CPU win!" + countCPU++
    else if (jugador == 3 && cpu == 2) return "Player win!" + countPlayer++
}
function salir(jugador,numero) {
    if (numero == 3) {
        salio = false
        alert(jugador+" wins the game!")
    }
}


while (salio) {
    cpu = Math.floor(Math.random() * 3) + 1

    player = parseInt(prompt("1. Rock\n2. Paper\n3. Scissors"))

    let result = (textVersus(player) + " vs " + textVersus(cpu))
    alert(result)
    alert(Versus(player, cpu))
    alert("Player: " + countPlayer + " CPU: " + countCPU)

    salir("Player",countPlayer)
    salir('CPU',countCPU)
}



