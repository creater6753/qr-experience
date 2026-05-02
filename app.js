let code = "";

function add(part) {
  code += part;
  document.getElementById("code").innerText = code;
}

function check() {
  if (code === "going") {
    window.location.href = "node7.html";
  } else {
    document.getElementById("output").innerText =
      "sequência inválida";
  }
}
