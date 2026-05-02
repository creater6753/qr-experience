const conteudo = [
  "Desafio: fica 30 segundos sem mexer no telemóvel 📵",
  "Piada: Porque é que o programador foi ao médico? Porque tinha bugs 😂",
  "Desafio: inventa uma história absurda em 1 minuto 🧠",
  "Mini-jogo: escolhe um número de 1 a 10 e tenta adivinhar o que estou a pensar 🎲",
  "Missão: manda uma mensagem a alguém que não falas há muito tempo 💬",
  "Foco: olha para um ponto fixo durante 20 segundos 👀",
  "Desafio: escreve uma frase sem usar a letra 'a' ✍️",
  "Random: vai beber água agora 💧"
];

function gerar() {
  const random = Math.floor(Math.random() * conteudo.length);
  document.getElementById("output").innerText = conteudo[random];
}
