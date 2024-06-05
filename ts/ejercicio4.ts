function encontrarMayorMenor() {
    const num1: number = parseFloat(document.getElementById('num1').value);
    const num2: number = parseFloat(document.getElementById('num2').value);
    const num3: number = parseFloat(document.getElementById('num3').value);
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      alert('Ingrese valores numéricos válidos para los tres números.');
      return;
    }
  
    let mayor: number = num1;
    let menor: number = num1;
  
    if (num2 > mayor) {
      mayor = num2;
    }
  
    if (num3 > mayor) {
      mayor = num3;
    }
  
    if (num2 < menor) {
      menor = num2;
    }
  
    if (num3 < menor) {
      menor = num3;
    }
  
    const resultado: string = `El número mayor es: ${mayor} y el menor es: ${menor}`;
    document.getElementById('resultado').textContent = resultado;
  }
  