document.getElementById('calculorMedia')
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Captura os valores do formulário
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    // Calcula a média
    const media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);

    // Cria uma nova linha na tabela
    const table = document
      .getElementById('notasTable')
      .getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Adiciona as células com os dados
    const cellNome = newRow.insertCell(0);
    const cellNota1 = newRow.insertCell(1);
    const cellNota2 = newRow.insertCell(2);
    const cellNota3 = newRow.insertCell(3);
    const cellNota4 = newRow.insertCell(4);
    const cellMedia = newRow.insertCell(5);

    cellNome.textContent = nome;
    cellNota1.textContent = nota1;
    cellNota2.textContent = nota2;
    cellNota3.textContent = nota3;
    cellNota4.textContent = nota4;
    cellMedia.textContent = media;

    // Limpa os campos do formulário
    document.getElementById('calculorMedia').reset();
  });
