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