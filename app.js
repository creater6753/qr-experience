let state = 0;

function gerar() {
  state++;

  const frases = [
    "NODE-7 está ativo",
    "o sistema observa",
    "há padrões escondidos",
    "não confies no acaso"
  ];

  document.getElementById("output").innerText =
    frases[Math.floor(Math.random() * frases.length)];

  if (state === 7) {
    window.location.href = "node7.html";
  }
}
alert("JS ESTÁ A FUNCIONAR");
