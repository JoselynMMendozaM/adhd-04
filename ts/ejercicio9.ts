function verificarPrimo() {
    const numero: number = parseFloat(document.getElementById('numero').value);
  
    if (isNaN(numero) || numero <= 0) {
      alert('Ingrese un número entero positivo mayor que cero.');
      return;
    }
  
    let esPrimo: boolean = true;
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
  
    const resultado: string = esPrimo ? `${numero} es un número primo` : `${numero} no es un número primo`;
    document.getElementById('resultado').textContent = resultado;
  }
  