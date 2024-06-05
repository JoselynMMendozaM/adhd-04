function invertirTexto() {
  const txt1: string = document.getElementById('txt_1')?.textContent || '';
  const resultDiv = document.getElementById('txt_result') as HTMLDivElement;

  // const txt1: HTMLInputElement = document.getElementById('txt_1') as HTMLInputElement;


    
  
    if (txt1.trim() === '') {
      alert('Ingrese un texto válido.');
      return;
    }
  
    const textoInvertido: string = txt1.split('').reverse().join('');
    resultDiv.textContent = `Texto invertido: ${textoInvertido}`;
  }
  