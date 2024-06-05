const num1: number = parseFloat((document.getElementById('txt_num1') as HTMLInputElement).value);
const num2: number = parseFloat((document.getElementById('txt_num2') as HTMLInputElement).value);
const num3: number = parseFloat((document.getElementById('txt_num3') as HTMLInputElement).value);
const resultDiv: number = parseFloat((document.getElementById('txt_result') as HTMLInputElement).value);



function calcularPromedio() {
    const num1Input = document.getElementById('num1') as HTMLInputElement;
    const num2Input = document.getElementById('num2') as HTMLInputElement;
    const num3Input = document.getElementById('num3') as HTMLInputElement;
  const resultDiv = document.getElementById('result') as HTMLDivElement;
  
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      resultDiv.textContent = 'Por favor ingrese solo números';
      return;
    }
  
    const promedio = (num1 + num2 + num3) / 3;
  
    resultDiv.textContent = `El promedio es: ${promedio.toFixed(2)}`;
  
  
  }

  function calcularPromedio() {
    const num1: number = parseFloat(document.getElementById('num1').value);
    const num2: number = parseFloat(document.getElementById('num2').value);
    const num3: number = parseFloat(document.getElementById('num3').value);
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      alert('Ingrese valores numéricos válidos para los tres números.');
      return;
    }
  
    const promedio: number = (num1 + num2 + num3) / 3;
    document.getElementById('resultado').textContent = `El promedio es: ${promedio}`;
  }
  
  
  
  
  
  
  




