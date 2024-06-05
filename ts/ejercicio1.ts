function calculandoPromedio() {
    const num1: number = parseFloat((document.getElementById('txt_num1') as HTMLInputElement).value);
    const num2: number = parseFloat((document.getElementById('txt_num2') as HTMLInputElement).value);
    const num3: number = parseFloat((document.getElementById('txt_num3') as HTMLInputElement).value);
    const resultDiv = document.getElementById('txt_result') as HTMLDivElement;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      alert('Ingrese valores numéricos válidos para los tres números.');
      return;
    }
  
    const promedio: number = (num1 + num2 + num3) / 3;
    
    resultDiv.textContent = `El promedio es: ${promedio.toFixed(2)}`;
}
  
  
  
  
  
  
  




