function determinarParidad() {
    const numero: number = parseFloat(document.getElementById('numero').value);
  
    if (isNaN(numero)) {
      alert('Ingrese un valor numérico válido.');
      return;
    }
  
    const esPar: boolean = numero % 2 === 0;
    const resultado: string = esPar ? 'El número es par' : 'El número es impar';
    document.getElementById('resultado').textContent = resultado;
  }
  