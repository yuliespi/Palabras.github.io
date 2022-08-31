//obtener la longitud de una palabra:

function longitud(palabra){
  var palabra=prompt('Digite la palabra')
   length= palabra.length;
   alert("La longitud de la palabra que usted ingreso es " +length);
}

//Pasando a mayusculas la palabra:

function mayuscula(digita){
    var digita=prompt('Digite la palabra en minusculas que desea cambiar a mayusculas');
    may= digita.toUpperCase();
    alert("Su palabra en mayusculas es:" +may);
}


//Pasando la palabra a minusculas:

    function minuscula(){
    var minu=prompt('Digite la palabra en mayusculas que desea convertir a minusculas')
    alert("Su palabra en minusculas es:" +minu.toString().toLowerCase());
}



//Mostrando el primer caracter de la palabra

function caracter(carac){
    var carac=prompt('Escriba la palabra:')
    retornar= carac.charAt(0);
    alert("El primer carcter de su palabra es:" +retornar);
}
