function calcularFactorial() {
    const numero: number = parseFloat(document.getElementById('numero').value);
  
    if (isNaN(numero) || numero < 0) {
      alert('Ingrese un número entero no negativo.');
      return;
    }
  
    let factorial: number = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    document.getElementById('resultado').textContent = `El factorial de ${numero} es: ${factorial}`;
  }
  