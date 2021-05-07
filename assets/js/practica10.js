// ciclo for
// index = index + 1;
let btnPrueba = document.getElementById("btnPrueba");

const spamLink = () => {
  for (let i = 0; i < 5; i++) {
    window.open("https://es.wikipedia.org/wiki/Wikipedia:Portada");
  }
};

btnPrueba.addEventListener("click", () => {
  spamLink();
});
