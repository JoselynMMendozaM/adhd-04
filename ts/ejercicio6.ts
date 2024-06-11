function invertirTexto(): void {
  const texto1: string = (document.getElementById('txt1') as HTMLInputElement).value;
  
  if (texto1.trim() === '') {
    alert('Ingrese un texto válido.');
    return;
  }
  
  const textoInvertido: string = texto1.split('').reverse().join('');
  document.getElementById('resultado').innerHTML =
    `Texto invertido: ${textoInvertido}`;
}
