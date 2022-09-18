  function triangulos(){
   let lado1=document.getElementById("lado1").value;
    let lado2=document.getElementById("lado2").value;
    let lado3=document.getElementById("lado3").value;

    /*const button=document.getElementById("button")
    button.addEventListener('click',()=>{
    alert("usted espicho el boton :)")*/

    if(lado1==lado2 && lado2==lado3 && lado1==lado3 && lado1==lado2){
        alert("El triangulo es Equilatero")
    }
    /*else if(lado1==lado3 && lado1==lado2){
      alert("El triangulo es Equilatero")
    }*/
  
    else if(lado1==lado2 || lado1==lado3 || lado2==lado3){
      alert("El triangulo es Isosceles");
    }

    else if(lado1!=lado2 && lado2!=lado3)
      alert("El triangulo es Escaleno");
  }
