const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (i = 0; i < listaDeTeclas.length; i++) {

  const tecla = listaDeTeclas[i];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  
  }
  
  tecla.onkeydown = function () {
    if(evento.code === "Enter" || evento.code ==="Space") {
      tecla.classList.add('ativa');
    }
}
  
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
      
}