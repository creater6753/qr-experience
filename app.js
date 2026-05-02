let fase = 1;

const title = document.getElementById("title");
const text = document.getElementById("text");
const input = document.getElementById("input");

function load() {

  if (fase === 1) {
    title.innerText = "SINAL DETETADO";
    text.innerText = "NODE-7 encontrou-te.

Dica: a primeira chave não é uma palavra.
É uma intenção.";
  }

  if (fase === 2) {
    title.innerText = "PORTA 1 ABERTA";
    text.innerText = "Decifra: 7-9-14-7-1\n(O alfabeto é a chave)";
  }

  if (fase === 3) {
    title.innerText = "INTERFERÊNCIA";
    text.innerText = "Uma palavra está escondida aqui: \n'G A L X I A'\nMas algo está errado...";
  }

  if (fase === 4) {
    title.innerText = "ESCOLHA";
    text.innerText = "Verdade ou ilusão?\nResponde: VERDADE ou ILUSÃO";
  }

  if (fase === 5) {
    title.innerText = "FINAL";
    text.innerText = "NODE-7 FOI ESTABILIZADO

Mas ele ainda está ativo.

Obrigado por completares o teste.

Isto não era um jogo.
Era um reconhecimento.";
  }

  input.value = "";
}

function check() {
  const val = input.value.toLowerCase().trim();

  if (fase === 1 && val === "key") {
    fase = 2;
    load();
  }

  else if (fase === 2 && val === "going") {
    fase = 3;
    load();
  }

  else if (fase === 3 && val === "galaxia") {
    fase = 4;
    load();
  }

  else if (fase === 4 && val === "verdade") {
    fase = 5;
    load();
  }

  else {
    text.innerText = "Errado... o sinal distorceu.";
  }
}

load();
