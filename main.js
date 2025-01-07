/* Abra aqui a Documentação desse código Javascript

listaDeTeclas: é uma constante que recebe todos os elementos do tipo input que são do tipo button do documento HTML. a propriedade querySelectorAll é utilizada para selecionar todos os elementos que atendem ao critério passado como argumento. Neste caso, todos os elementos do tipo input que são do tipo button.

inputTel: é uma constante que recebe o elemento do tipo input que é do tipo tel do documento HTML. A propriedade querySelector é utilizada para selecionar o primeiro elemento que atende ao critério passado como argumento. Neste caso, o primeiro elemento do tipo input que é do tipo tel.

no loop for, a variável -i- é inicializada com o valor 0. A condição de parada é que i seja menor que o tamanho da listaDeTeclas. A cada iteração, i é incrementado em 1.

a constante tecla recebe o elemento da listaDeTeclas na posição i.

o evento onclick é atribuído ao elemento tecla. Quando o elemento tecla é clicado, a função anônima é executada. A função anônima concatena o valor do atributo value do elemento tecla ao valor do atributo value do elemento inputTel.

o evento onkeydown é atribuído ao elemento tecla. Quando uma tecla é pressionada, a função anônima é executada. Se o código da tecla pressionada for "Enter" ou "Space", a classe ativa é adicionada ao elemento tecla.

o evento onkeyup é atribuído ao elemento tecla. Quando uma tecla é solta, a função anônima é executada. A classe ativa é removida do elemento tecla.
*/

const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (i = 0; i < listaDeTeclas.length; i++) {

  const tecla = listaDeTeclas[i];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  
  }
  
  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
      
}