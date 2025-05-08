const frases = [
    "Guarda Costeira Brasileira",
    "Sistema de Criptografia Avançada",
    "Decodificação em Progresso"
  ];
  
  let fraseIndex = 0;
  const elementoFrase = document.getElementById("texto-digitado");
  
  function digitarFrase(frase, callback) {
    let i = 0;
    elementoFrase.textContent = "";
    
    elementoFrase.style.width = frase.length + "ch";
  
    const intervalo = setInterval(() => {
      if (i < frase.length) {
        elementoFrase.textContent += frase.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
        setTimeout(callback, 2000); 
      }
    }, 130); 
  }
  
  function loopFrases() {
    digitarFrase(frases[fraseIndex], () => {
      fraseIndex = (fraseIndex + 1) % frases.length;
      loopFrases();
    });
  }
  
  loopFrases();
  