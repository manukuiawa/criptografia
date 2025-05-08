//base toda da criptografia de cezar
  function cifraDeCesar(texto, chave) {
    let resultado = "";
  
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];
  
      if (char.match(/[a-z]/i)) {
        const base = char === char.toUpperCase() ? 65 : 97;
        const codigo = ((char.charCodeAt(0) - base + chave) % 26) + base;
        resultado += String.fromCharCode(codigo);
      } else {
        resultado += char;
      }
    }
  
    return resultado;
  }
  
  function exibirCriptografia() {
    const texto = document.getElementById("area_texto").value;
    const chave = parseInt(document.getElementById("chave").value);
    const resultado = cifraDeCesar(texto, chave);
  
    document.getElementById("resultado-texto").textContent = resultado;
    mostrarResultado();
  }
  
  //ver a descriptografia
  function exibirDescriptografia() {
    const texto = document.getElementById("area_texto").value;
    const chave = parseInt(document.getElementById("chave").value);
    const resultado = cifraDeCesar(texto, 26 - chave); //aqui ele inverte a criptografia
  
    document.getElementById("resultado-texto").textContent = resultado;
    mostrarResultado();
  }
  
  //ver o resultado da criptografia
  function mostrarResultado() {
    document.querySelector(".conteudo-centralizado").style.display = "none";
    document.querySelector(".resultado-criptografado").style.display = "block";
  }
  
  //função para cópia de texto
  function copiarTexto() {
    const textoResultado = document.getElementById("resultado-texto").textContent;
  
    navigator.clipboard.writeText(textoResultado)
  }
  
  //não deixa escrever quando coloca mais de 138 caracteres
  document.addEventListener("DOMContentLoaded", () => {
    const areaTexto = document.getElementById("area_texto");
  
    areaTexto.addEventListener("input", () => {
      if (areaTexto.value.length > 138) {
        areaTexto.value = areaTexto.value.slice(0, 138);
      }
      validarCorrecao();
    });
  
    document.querySelector(".resultado-criptografado").style.display = "none";
  });
  
  //
function validarCorrecao() {
    const areaTexto = document.getElementById("area_texto");
    const textoInstrucao = document.getElementById("texto-instrucao");
  
    if (areaTexto.value.length >= 138) {
      areaTexto.value = areaTexto.value.slice(0, 138);
      textoInstrucao.textContent = "Limite de 138 caracteres atingido!";
      textoInstrucao.style.color = "red";
    } else {
      textoInstrucao.textContent = "Até 138 caracteres";
      textoInstrucao.style.color = "";
    }
  }
  