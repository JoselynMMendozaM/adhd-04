function calcularArea() {
  const base: number = parseFloat((document.getElementById('txt_base') as HTMLInputElement).value);
  const altura: number = parseFloat((document.getElementById('txt_atura') as HTMLInputElement).value);
  const resultDiv = document.getElementById('txt_result') as HTMLDivElement;

  
    if (isNaN(base) || isNaN(altura)) {
      alert('Ingrese valores numéricos válidos para la base y la altura.');
      return;
    }
  
    const area: number = (base * altura) / 2;
    resultDiv.textContent = `El área es de: ${area.toFixed(2)}`;
  }
  