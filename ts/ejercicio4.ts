  function encontrarMayorMenor(): void{
    const numero1: number = parseFloat(
        (document.getElementById('txtNumero1') as HTMLInputElement).value);
    const numero2: number = parseFloat(
        (document.getElementById('txtNumero2') as HTMLInputElement).value);
    const numero3: number = parseFloat(
        (document.getElementById('txtNumero3') as HTMLInputElement).value);
  
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert('Ingrese valores numéricos válidos para los tres números.');
        return;
    }
  
    let mayor: number = numero1;
    let menor: number = numero1;
  
    if (numero2 > mayor) {
      mayor = numero2;
    }
  
    if (numero3 > mayor) {
      mayor = numero3;
    }
  
    if (numero2 < menor) {
      menor = numero2;
    }
  
    if (numero3 < menor) {
      menor = numero3;
    }
    
    const orden: string = `El número mayor es: ${mayor} y el menor es: ${menor}`;

    document.getElementById('resultado').innerHTML =
     orden; 
  }  
    