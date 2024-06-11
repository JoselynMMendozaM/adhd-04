function determinarParidad(): void{
  const numero1: number = parseFloat(
      (document.getElementById('txtNumero1') as HTMLInputElement).value);
 

    if (isNaN(numero1)) {
        alert('Ingrese un valor numérico válido.');
        return;
    }

  const esPar: boolean = numero1 % 2 === 0;
  const result: string = esPar ? 'El número es par' : 'El número es impar';
  
  document.getElementById('resultado').innerHTML =
   result; 
} 