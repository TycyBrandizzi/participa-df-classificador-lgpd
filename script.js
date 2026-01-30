document.getElementById("analisarBtn").addEventListener("click", analisarPedido);
document.getElementById("limparBtn").addEventListener("click", limparTela);

function analisarPedido() {
  const textoOriginal = document.getElementById("pedidoTexto").value;
  const texto = textoOriginal.toLowerCase();
  const resultadoDiv = document.getElementById("resultado");

  if (!texto.trim()) {
    resultadoDiv.className = "resultado amarelo";
    resultadoDiv.innerHTML = "⚠️ Insira o texto do pedido para realizar a análise.";
    return;
  }

  const encontrados = [];

  // Regras simples de detecção (MVP)
  const regexCPF = /\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/;
  const regexEmail = /\b\S+@\S+\.\S+\b/;
  const regexTelefone = /\b\d{2}\s?\d{4,5}-?\d{4}\b/;

  const palavrasEndereco = [
    "rua",
    "avenida",
    "av.",
    "quadra",
    "lote",
    "cep",
    "bairro"
  ];

  if (regexCPF.test(texto)) encontrados.push("CPF");
  if (regexEmail.test(texto)) encontrados.push("E-mail");
  if (regexTelefone.test(texto)) encontrados.push("Telefone");

  palavrasEndereco.forEach(palavra => {
    if (texto.includes(palavra)) encontrados.push("Endereço");
  });

  const dadosDetectados = [...new Set(encontrados)];

  let classificacao = "";
  let classeCSS = "";
  let justificativa = "";

  if (dadosDetectados.includes("CPF")) {
    classificacao = "🔴 Contém dados pessoais sensíveis";
    classeCSS = "vermelho";
    justificativa =
      `Foram identificados dados sensíveis (${dadosDetectados.join(", ")}), 
      o que exige tratamento restrito antes da publicação.`;
  } else if (dadosDetectados.length > 0) {
    classificacao = "🟡 Requer revisão humana";
    classeCSS = "amarelo";
    justificativa =
      `Foram identificados dados pessoais (${dadosDetectados.join(", ")}). 
      Recomenda-se revisão antes da divulgação pública.`;
  } else {
    classificacao = "🟢 Apto para publicação";
    classeCSS = "verde";
    justificativa =
      "Nenhum dado pessoal foi identificado no texto analisado.";
  }

  resultadoDiv.className = `resultado ${classeCSS}`;
  resultadoDiv.innerHTML = `
    <strong>Classificação:</strong> ${classificacao}<br><br>
    <strong>Justificativa:</strong> ${justificativa}
  `;
}

function limparTela() {
  document.getElementById("pedidoTexto").value = "";
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.className = "resultado neutro";
  resultadoDiv.innerHTML = "Nenhuma análise realizada ainda.";
}
