function check() {
  let v = document.getElementById("input").value.toLowerCase();

  if (v.includes("movimento") || v.includes("continuo") || v === "going") {
    window.location.href = "node7.html";
  } else {
    document.getElementById("msg").innerText =
      "padrão não reconhecido pelo sistema";
  }
}
