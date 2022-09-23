let cantidad,resultado1,resultado2,juego;
cantidad = +prompt("Cuantas veces quieres jugar");
let contacpu=0
let contauser=0
for (let i=1; i<=cantidad;i++){
juego=+prompt(" Elije la opcion \n  1.Piedra \n 2.Papel \n 3.Tijera");

let cpu=""
let maquina=Math.floor(Math.random()*3+1);
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

    alert (` ${pepito} vs ${cpu}`)
if (juego==maquina){
    alert('empate' +`  \n jugador: ${contauser} \n  cpu: ${contacpu}`) 
    
}else if (juego==1  && maquina==2){ 
    contacpu=contacpu+1
   alert('gana cpu' +`  \n jugador: ${contauser} \n  cpu: ${contacpu}`)

}else if(juego==1 && maquina==3){
    contauser=contauser+1
    alert('gana user' +`  \n jugador: ${contauser} \n  cpu: ${contacpu}`)
}else if(juego==2 && maquina==1){
    contauser=contauser+1
    alert('gana user' +`  \n jugador: ${contauser} \n  cpu: ${contacpu}`)
}else if (juego==2 && maquina==3){
    contacpu=contacpu+1
    alert('gana cpu' +`  \n jugador: ${contauser} \n  cpu: ${contacpu}`)
}else if(juego==3 && maquina==2){
    contauser=contauser+1
    alert('gana user' +`  \n jugador: ${contauser} \n  cpu: ${contacpu}`)
}else if(juego==3 && maquina==1){
    contacpu=contacpu+1
    alert('gana cpu' +`  \n jugador: ${contauser} \n  cpu: ${contacpu}`)
}
}

if(contacpu>contauser){
    alert('gano la cpu ' +contacpu)
}else if(contauser>contacpu){
    alert(`gano usuario ${contauser}`)
}



