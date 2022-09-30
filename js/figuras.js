/*Cuadrado perimetro*/
let button =document.getElementById("btn");
button.onclick = Cuadrado;

function Cuadrado(){
  let lado1=parseInt(document.getElementById("lado1").value);
  let lado2=parseInt(document.getElementById("lado2").value);
  let lado3=parseInt(document.getElementById("lado3").value);
  let lado4=parseInt(document.getElementById("lado4").value);

  var calcular=lado1+lado2+lado3+lado4
  alert("El perimetro de su cuadrado es:"+calcular)

}

const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeEls = document.querySelectorAll("[data-close]");
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

/*Cuadrado Area*/
let btn =document.getElementById("btnA");
btn.onclick = CuadradoArea;

function CuadradoArea(){
  let largo1=parseInt(document.getElementById("largo1").value);
  let ancho1=parseInt(document.getElementById("ancho1").value);

  var calcularA=largo1*ancho1
  alert("El area de su cuadrado es:"+calcularA)

}

const openElsa = document.querySelectorAll("[data-open]");
const isVisiblea = "is-visiblea";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeElsa = document.querySelectorAll("[data-close]");
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

/*Perimetro Rectangulo*/

let btnR =document.getElementById("btnR");
btnR.onclick = Rectangulo;

function Rectangulo(){
  let lador1=parseInt(document.getElementById("lador1").value);
  let lador2=parseInt(document.getElementById("lador2").value);
  let lador3=parseInt(document.getElementById("lador3").value);
  let lador4=parseInt(document.getElementById("lador4").value);

  var calcularR=lador1+lador2+lador3+lador4
  alert("El perimetro de su Rectangulo es:"+calcularR)

}

const openElsR = document.querySelectorAll("[data-open]");
const isVisibleR = "is-visible";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeElsR = document.querySelectorAll("[data-close]");
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

/*Area Rectangulo*/

let butAR =document.getElementById("butAR");
butAR.onclick = RectanguloArea;

function RectanguloArea(){
  let largo2=parseInt(document.getElementById("largo2").value);
  let ancho2=parseInt(document.getElementById("ancho2").value);

  var calcularAr=largo2*ancho2
  alert("El area de su Rectangulo es:"+calcularAr)

}

const openElsRA = document.querySelectorAll("[data-open]");
const isVisibleRA = "is-visible";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeElsRA = document.querySelectorAll("[data-close]");
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

/*Perimetro de Triangulo*/

let btnT =document.getElementById("btnT");
btnT.onclick = Triangulo;

function Triangulo(){
  let ladot1=parseInt(document.getElementById("ladot1").value);
  let ladot2=parseInt(document.getElementById("ladot2").value);
  let ladot3=parseInt(document.getElementById("ladot3").value);

  var calcularT=ladot1+ladot2+ladot3
  alert("El perimetro de su triangulo es:"+calcularT)

}

const openElsT = document.querySelectorAll("[data-open]");
const isVisibleT = "is-visible";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeElsT = document.querySelectorAll("[data-close]");
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

/*Area triangulo*/

let butTA =document.getElementById("butTA");
butTA.onclick = TrianguloArea;

function TrianguloArea(){
  let largo3=parseInt(document.getElementById("largo3").value);
  let ancho3=parseInt(document.getElementById("ancho3").value);

  var calcularTA=largo3*ancho3
  alert("El area de su Triangulo es:"+calcularTA)

}

const openElsTA = document.querySelectorAll("[data-open]");
const isVisibleTA = "is-visible";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeElsTA = document.querySelectorAll("[data-close]");
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

/*Perimetro circulo*/

let btnC =document.getElementById("btnC");
btnC.onclick = Circulo;

function Circulo(){
  let radio=parseInt(document.getElementById("radio").value);

  var calcularC=2*3.14*radio
  alert("El perimetro de su Circulo es:"+calcularC)

}

const openElsC = document.querySelectorAll("[data-open]");
const isVisibleC = "is-visible";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeElsC = document.querySelectorAll("[data-close]");
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

/*Area del circulo*/

let btnCir =document.getElementById("btnCir");
btnCir.onclick = CirculoArea;

function CirculoArea(){
  let radio1=parseInt(document.getElementById("radio1").value);

  var calcularCir=radio1*radio1*3.14
  alert("El area de su Circulo es:"+calcularCir)

}

const openElsCir = document.querySelectorAll("[data-open]");
const isVisibleCir = "is-visible";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeElsCir = document.querySelectorAll("[data-close]");
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}