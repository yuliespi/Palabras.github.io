let btn =document.getElementById("btn");
btn.onclick = CuadradoArea;

const openElsTA = document.querySelectorAll("[data-open]");
const isVisibleF = "is-visible";
 
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

const validacion={
    Text:/^[a-zA-ZÁ-ÿ\s]{1,20}$/,
    Number:/^\d{8,10}$/,
    email:/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contraseña:/^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{5,}$/
}