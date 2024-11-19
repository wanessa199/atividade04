
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }
  
  function classificarIMC(imc) {
    if (imc < 16.9) {
      return "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.4) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      return "Acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
      return "Obesidade grau I";
    } else if (imc >= 35 && imc <= 40) {
      return "Obesidade grau II";
    } else {
      return "Obesidade grau III";
    }
  }
  
  document.getElementById('imcForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    const imc = calcularIMC(peso, altura).toFixed(1);
  
    const classificacao = classificarIMC(imc);
  
    document.getElementById('resultado').textContent = `Seu IMC é ${imc} (${classificacao})`;
  });
  