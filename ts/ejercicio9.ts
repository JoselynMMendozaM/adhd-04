function verificarPrimo() {
  const numero1: number = parseFloat(
    (document.getElementById('txtNumero1') as HTMLInputElement).value);
  
    if (isNaN(numero1) || numero1 <= 0) {
      alert('Ingrese un número entero positivo mayor que cero.');
      return;
    }
  
    let esPrimo: boolean = true;
  
    for (let i = 2; i <= Math.sqrt(numero1); i++) {
      if (numero1 % i === 0) {
        esPrimo = false;
        break;
      }
    }
  
    const resultado: string = esPrimo ? `${numero1} es un número primo` : `${numero1} no es un número primo`;
    document.getElementById('resultado').textContent = resultado;
  }
  