function determinarParidad() {
  const num: number = parseFloat((document.getElementById('txt_num') as HTMLInputElement).value);
  const resultDiv = document.getElementById('txt_result') as HTMLDivElement;

  
    if (isNaN(num)) {
      alert('Ingrese un valor numérico válido.');
      return;
    }
  
    const esPar: boolean = num % 2 === 0;
    const resultado: string = esPar ? 'El número es par' : 'El número es impar';
    resultDiv.textContent = `Resultado: ${resultado}`;

    
}
  