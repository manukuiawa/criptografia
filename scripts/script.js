//Validação da Chave Secreta.
const input = document.getElementById("chave");
const erro = document.getElementById("erro-chave");
const permitido = /^[a-zA-Z0-9]*$/;

function validar(valor) {
  erro.style.display = permitido.test(valor) ? "none" : "block";
}

input.oninput = () => validar(input.value);

input.addEventListener("keydown", (e) => {
  const teclasPermitidas = [
    "Backspace",
    "Delete",
  ];

  if (!/^[a-zA-Z0-9]$/.test(e.key) && !teclasPermitidas.includes(e.key)) {
    e.preventDefault();
    erro.style.display = "block";
  }
});

input.onpaste = (e) => {
  if (!permitido.test(e.clipboardData.getData("text"))) e.preventDefault();
};

//Validação dos 138 caracteres.
document.addEventListener("DOMContentLoaded", () => {
  const areaTexto = document.getElementById("area_texto");
  const textoInstrucao = document.getElementById("texto-instrucao");

  areaTexto.addEventListener("input", () => {
    if (areaTexto.value.length > 138) {
      areaTexto.value = areaTexto.value.slice(0, 138);
      textoInstrucao.textContent = "Limite de 138 caracteres atingido!";
      textoInstrucao.style.color = "red";
    } else {
      textoInstrucao.textContent = "Até 138 caracteres";
      textoInstrucao.style.color = "";
    }
  });

  document.querySelector(".resultado-criptografado").style.display = "none";
});

//Validação Copiar Texto.
function copiarTexto() {
    const texto = document.getElementById("resultado-texto").textContent;
    const msg = document.getElementById("copiado-msg"); 

    if (texto === "") {
        msg.textContent = "Não há texto para copiar!";
    } else {
        navigator.clipboard.writeText(texto);
        msg.textContent = "Texto copiado!";
    }

    msg.classList.add("show");

    setTimeout(() => {
        msg.classList.remove("show");
    }, 3000);
}

//Validação para limpar. 
function limparCampos() {
  const areaTexto = document.getElementById("area_texto");
  const chave = document.getElementById("chave");
  const resultado = document.getElementById("resultado-texto");
  const msg = document.getElementById("limpo-msg");
  const msgCopiado = document.getElementById("copiado-msg");

  const temTexto = areaTexto.value.trim() !== "";

  if (temTexto) {
    areaTexto.value = "";
    chave.value = "";
    resultado.textContent = "";
    msg.textContent = "Texto limpo com sucesso!";
  } else {
    msg.textContent = "Não há texto para limpar!";
  }

  msg.classList.add("show");
  msgCopiado.classList.remove("show");

  setTimeout(() => msg.classList.remove("show"), 3000);
}

//Validação para informar se não foi preenchido corretamente. 
function validarCampos() {
  const areaTexto = document.getElementById("area_texto").value.trim(); 
  const chave = document.getElementById("chave").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (!areaTexto || !chave) {
    mensagem.textContent = "Preencha todos os Campos!";
    setTimeout(() => {
      mensagem.textContent = "";
    }, 3000);
  } else {
    mensagem.textContent = "";
  }
}
