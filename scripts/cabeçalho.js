//Digitando
const frases = ["Guarda Costeira Brasileira", 
"Sistema de Criptografia Avançada", "Decodificação em Progresso"];
let i = 0, j = 0;
const texto = document.getElementById("texto-digitado");

function digitar() {
  texto.textContent += frases[i][j++];
  
  if (j < frases[i].length) {
    setTimeout(digitar, 100);
  } else {
    setTimeout(() => {
      texto.textContent = "";
      i = (i + 1) % frases.length;
      j = 0;
      digitar();
    }, 2000);
  }
}

digitar();

// Relógio 
function atualizarRelogio() {
    const agora = new Date();
    const horario = agora.toLocaleTimeString("pt-BR", { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
    const data = agora.toLocaleDateString("pt-BR");
    document.getElementById("clock").textContent = `${data} - ${horario}`;
  }
  setInterval(atualizarRelogio, 1000);
  atualizarRelogio();

