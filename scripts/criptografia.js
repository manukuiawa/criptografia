// Função de Criptografia Vigenère
function vigenereCriptografar(texto, chave) {
  let resultado = "";
  chave = chave.toUpperCase();
  let chaveIndex = 0;

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    if (char.match(/[a-zA-Z]/)) {
      const base = char === char.toUpperCase() ? 65 : 97;
      const deslocamento = chave.charCodeAt(chaveIndex % chave.length) - 65;
      const codificado = String.fromCharCode(((char.charCodeAt(0) - base + deslocamento) % 26) + base);
      resultado += codificado;
      chaveIndex++;
    } else {
      resultado += char;
    }
  }
  return resultado;
}

// Função pra exibir o texto criptografado
function exibirCriptografia() {
  const texto = document.getElementById("area_texto").value;
  const chave = document.getElementById("chave").value;
  const resultado = vigenereCriptografar(texto, chave);
  atualizarResultado(resultado);
}

// Função de Descriptografia Vigenère
function vigenereDescriptografar(texto, chave) {
  let resultado = "";
  chave = chave.toUpperCase();
  let chaveIndex = 0;

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    if (char.match(/[a-zA-Z]/)) {
      const base = char === char.toUpperCase() ? 65 : 97;
      const deslocamento = chave.charCodeAt(chaveIndex % chave.length) - 65;
      const decodificado = String.fromCharCode(((char.charCodeAt(0) - base - deslocamento + 26) % 26) + base);
      resultado += decodificado;
      chaveIndex++;
    } else {
      resultado += char;
    }
  }
  return resultado;
}

// Função pra exibir o texto descriptografado
function exibirDescriptografia() {
  const texto = document.getElementById("area_texto").value;
  const chave = document.getElementById("chave").value;
  const resultado = vigenereDescriptografar(texto, chave);
  atualizarResultado(resultado);
}

// Atualiza a tela com o resultado
function atualizarResultado(texto) {
  const resultadoTexto = document.getElementById("resultado-texto");
  const conteudo = document.querySelector(".conteudo-centralizado");
  const resultadoCriptografado = document.querySelector(".resultado-criptografado");

  if (texto) {
    resultadoTexto.textContent = texto;
    conteudo.style.display = "none";
    resultadoCriptografado.style.display = "block";
  } else {
    conteudo.style.display = "block";
    resultadoCriptografado.style.display = "none";
  }
}
  