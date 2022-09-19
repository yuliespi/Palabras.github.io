function concatenar(){

    let nombre=document.getElementById("nombre").value;
    nombre=parseInt(nombre)

    let apellido=document.getElementById("apellido").value;
    apellido=parseInt(apellido)

    let actividad=document.getElementById("actividad").value;
    actividad=parseInt(actividad)

    if(nombre==1 && apellido==8 && actividad==15){
        alert("Tu seleccion es correcta")
    }

    else if(nombre==2 && apellido==9 && actividad==16){
        alert("Tu seleccion es Correcta")
    }
    
    else if(nombre==3 && apellido==10 && actividad==17){
        alert("Tu seleccion es Correcta")
    }
    
    else if(nombre==4 && apellido==11 && actividad==18){
        alert("Tu seleccion es Correcta")
    }

    else if(nombre==5 && apellido==12 && actividad==19){
        alert("Tu seleccion es Correcta")
    }
    
    else if(nombre==6 && apellido==13 && actividad==20){
        alert("Tu seleccion es Correcta")
    }

    else if(nombre==7 && apellido==14 && actividad==21){
        alert("Tu seleccion es Correcta")
    }
    else{
        alert("La Eleccion es incorrecta :(")
    }
}