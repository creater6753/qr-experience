function check() {
  let v = document.getElementById("input").value.toLowerCase();

  if (
    v.includes("shift") ||
    v.includes("alfabeto") ||
    v.includes("cifra") ||
    v.includes("deslocamento")
  ) {
    window.location.href = "node7.html";
  } else {
    document.getElementById("msg").innerText =
      "padrão não reconhecido";
  }
}
