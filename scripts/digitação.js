const frases = [
    "Guarda Costeira Brasileira",
    "Sistema de Criptografia Avançada",
    "Decodificação em Progresso"
  ];
  
  let fraseIndex = 0;
  // Pegando o ID certo agora (o que tá lá no HTML lindo que a gente arrumou)
  const elementoFrase = document.getElementById("texto-digitado");
  
  function digitarFrase(frase, callback) {
    let i = 0;
    elementoFrase.textContent = "";
    
    // Dando espaço pra frase bonitona
    elementoFrase.style.width = frase.length + "ch";
  
    const intervalo = setInterval(() => {
      if (i < frase.length) {
        elementoFrase.textContent += frase.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
        setTimeout(callback, 2000); // Espera 2 seg antes de digitar a próxima
      }
    }, 130); // Velocidade gostosinha
  }
  
  function loopFrases() {
    digitarFrase(frases[fraseIndex], () => {
      fraseIndex = (fraseIndex + 1) % frases.length;
      loopFrases();
    });
  }
  
  loopFrases();
  