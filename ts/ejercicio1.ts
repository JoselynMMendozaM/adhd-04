function calcularPromedio(): void{
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

  const promedio: number = (numero1 + numero2+ numero3) / 3 ;
  
  document.getElementById('resultado').innerHTML =
   "El promedio es de: " + promedio; 
}  
  
  
  
  
  




