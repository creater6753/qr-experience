function check() {
  let v = document.getElementById("input").value.toLowerCase().trim();

  if (v === "going") {
    window.location.href = "node7.html";
  } else {
    document.getElementById("output").innerText =
      "erro de sincronização... tenta outra vez";
  }
}
