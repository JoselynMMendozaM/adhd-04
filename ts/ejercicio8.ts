function determinarNumeroPerfecto() {
  const numero1: number = parseFloat(
    (document.getElementById('txtNumero1') as HTMLInputElement).value);
  
    if (isNaN(numero1) || numero1 <= 0) {
      alert('Ingrese un número entero positivo mayor que cero.');
      return;
    }
  
    let sumaDivisores: number = 0;
    for (let i = 1; i < numero1; i++) {
      if (numero1 % i === 0) {
        sumaDivisores += i;
      }
    }
  
    const esPerfecto: boolean = numero1 === sumaDivisores;
    const resultado: string = esPerfecto ? `${numero1} es un número perfecto` : `${numero1} no es un número perfecto`;
    document.getElementById('resultado').textContent = resultado;
  }
  