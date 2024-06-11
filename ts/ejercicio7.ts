function calcularFactorial() {
  const numero1: number = parseFloat(
    (document.getElementById('txtNumero1') as HTMLInputElement).value);

    if (isNaN(numero1)) {
      alert('Ingrese un número entero no negativo.');
      return;
    }
  
    let factorial: number = 1;
    for (let i = 1; i <= numero1; i++) {
      factorial *= i;
    }
  
    document.getElementById('resultado').textContent = `El factorial de ${numero1} es: ${factorial}`;
  }
  