function calculate() {
    const name = document.getElementById("nome").value;
    const height = parseFloat(document.getElementById("altura").value);
    const weight = parseFloat(document.getElementById("peso").value);
  
    if (isNaN(height) || isNaN(weight)) {
      document.getElementById("resultado").innerText = "Por favor, insira valores válidos para altura e peso.";
      return;
    }
  
    const imc = weight / (height * height);
    document.getElementById("resultado").innerText = `${name}, o seu IMC é ${imc.toFixed(2)}`;
  }
  
  document.getElementById('calcular').addEventListener('click', calculate);
  