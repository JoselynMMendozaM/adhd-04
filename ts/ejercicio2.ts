function calcularArea(): void{
    const numero1: number = parseFloat(
        (document.getElementById('txtNumero1') as HTMLInputElement).value);
    const numero2: number = parseFloat(
        (document.getElementById('txtNumero2') as HTMLInputElement).value);
  
      if (isNaN(numero1) || isNaN(numero2)) {
        alert('Ingrese valores numéricos válidos para los dos números.');
        return;
      }

    const area: number = (numero1 * numero2) / 2 ;
    
    document.getElementById('resultado').innerHTML =
     "El área del triangulo es de: " + area; 
} 