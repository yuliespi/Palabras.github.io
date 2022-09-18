
function temperaturas(){
  let calcular=document.getElementById("numero").value;
  
  let convertir=document.getElementById("lista1").value;
  let convertir2=document.getElementById("lista2").value;
  console.log(convertir, convertir2);


      if(convertir==1 && convertir2==2){
        let KC = parseInt(calcular-273);
        alert(`El total de kelvin a celsius ${KC}`);

      }else if(convertir==2 && convertir2==3){
        let CF = parseInt((calcular * 9/5) +32)
        alert(`Los grados celsius a fareheit son ${CF}`);
      }

      else if(convertir==3 && convertir2==1){
          alert(`Los grados fareheint convertidos a kelvin son ${5/9 (calcular-32)+273,15}`);
      }

      else if(convertir==1 && convertir2==3){
          alert(`Los grados Kelvin a Fareheit son ${(calcular-273)*9/5+32}`);
      }

      else if(convertir==2 && convertir2==1){
        alert(`Los grados Celcius a Kelvin son ${(calcular+273.15)}`);
      }

      else if(convertir==3 && convertir2==2){
        alert(`Los grados Fareheint a Celsius son ${(calcular*1.8)+32}`);
      }
      else{
        alert("Error 404")
      }
}