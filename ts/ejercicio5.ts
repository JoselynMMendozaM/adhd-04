function elevarPotencia() {
  const base: number = parseFloat((document.getElementById('txt_base') as HTMLInputElement).value);
  const exp: number = parseFloat((document.getElementById('txt_exp') as HTMLInputElement).value);
  const resultDiv = document.getElementById('txt_result') as HTMLDivElement;

    
    if (isNaN(base) || isNaN(exp)) {
      alert('Ingrese valores numéricos válidos para la base y el exponente.');
      return;
    }
  
    const potencia: number = Math.pow(base, exp);
    resultDiv.textContent = `El resultado de elevar ${base} a la potencia ${exp} es: ${potencia}`;

  }
  