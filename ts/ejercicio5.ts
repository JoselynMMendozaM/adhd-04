function elevarPotencia(): void{
    const base: number = parseFloat(
        (document.getElementById('txtBase') as HTMLInputElement).value);
    const exp: number = parseFloat(
        (document.getElementById('txtExponente') as HTMLInputElement).value);
   
  
    if (isNaN(base) || isNaN(exp)) {
        alert('Ingrese valores numéricos válidos para los tres números.');
        return;
    }
  
    const potencia: number = Math.pow(base, exp);
    
    document.getElementById('resultado').innerHTML =
     `El resultado de elevar ${base} a la potencia ${exp} es: ${potencia}`; 
}  
    