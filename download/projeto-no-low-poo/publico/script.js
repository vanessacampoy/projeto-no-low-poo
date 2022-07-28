// Perguntas frequentes
let clicar = document.getElementsByClassName("pergunta");
let y =0
for (y = 0; y < clicar.length; y++) {
  clicar[y].addEventListener("click", function () {
    this.classList.toggle("active");
    let resposta = this.nextElementSibling;
    if (resposta.style.display === "block") {
      resposta.style.display = "none";
    } else {
      resposta.style.display = "block";
    }
  });
}


//Botão subir
let btntop = document.getElementById("myBtn");
onscroll = function () {
  botaoSubir()
}

function botaoSubir() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    btntop.style.display = "block";
  } else {
    btntop.style.display = "none";
  }
}

function topo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//leia mais
//cada letiável recebe o id
function leiaMais() {
  let pontinhos = document.getElementById("pontinhos");
  let maisTexto = document.getElementById("mais");
  let btnText = document.getElementById("btn");

  //leia mais
  if (pontinhos.style.display === "none") {
    pontinhos.style.display = "inline";
    btnText.innerHTML = "leia mais";
    maisTexto.style.display = "none";
  } else {
    pontinhos.style.display = "none";
    btnText.innerHTML = "leia menos";
    maisTexto.style.display = "inline";
  }
}

//leia mais
function leiaMais1() {
  let pontinhos1 = document.getElementById("pontinhos1");
  let maisTexto1 = document.getElementById("mais1");
  let btnText1 = document.getElementById("btn1");

  if (pontinhos1.style.display === "none") {
    pontinhos1.style.display = "inline";
    btnText1.innerHTML = "leia mais";
    maisTexto1.style.display = "none";
  } else {
    pontinhos1.style.display = "none";
    btnText1.innerHTML = "leia menos";
    maisTexto1.style.display = "inline";
  }
}

//Carrossel
let slideIndex = 0;
showSlides();

function showSlides() {
  let i = 0
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}

//modal
function modal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function fechar() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}
