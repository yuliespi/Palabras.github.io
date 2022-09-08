var C,K,F;
  function reset()
  {
  C=0;K=0;F=0;
  }
  function Calcular()
{      
  var opcion = document.getElementById("accion").value;
  if(opcion != ''){
    
    //Kelvin a Celsius C=K-273

 
        switch (opcion)
           {     //Fahrenheit a Celsius   C =(F-32)*5/9
                  case 'Fahrenheit a Celsius':
                    F = document.getElementById("num").value
       C =(F-32)*5/9;
       alert(" C: " + C +"");
       reset();
       break;
  }

  }
}


/*function temperatura(fareheit){
    var fareheit=prompt('Digite los grados que desea convertir')
    res=fareheit
    alert(`los grados fareheit convertidos a celsius es  ${(res - 32) * 5/9 }.`);
  }*/

/*let f = 90;
let c = 10;
alert(`90 grados fareheit convertidos a celsius es  ${(f - 32) * 5/9 }.`);

let F =80;
let C=90;
alert(`90 grados celsius convertidos a fareheit es  ${F * 1.8 + 32 }.`);
*/
