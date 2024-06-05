function elevarPotencia() {
    const base: number = parseFloat(document.getElementById('base').value);
    const exponente: number = parseFloat(document.getElementById('exponente').value);
  
    if (isNaN(base) || isNaN(exponente)) {
      alert('Ingrese valores numéricos válidos para la base y el exponente.');
      return;
    }
  
    const potencia: number = Math.pow(base, exponente);
    document.getElementById('resultado').textContent = `El resultado de elevar ${base} a la potencia ${exponente} es: ${potencia}`;
  }
  