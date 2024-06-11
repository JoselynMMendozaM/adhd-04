function contarVocales() {
    const texto: string = document.getElementById('txt1').toLowerCase();
  
    if (texto.trim() === '') {
      alert('Ingrese un texto válido.');
      return;
    }
  
    let contadorVocales: number = 0;
    const vocales: string = 'aeiouá';
  
    for (let i = 0; i < texto.length; i++) {
      const caracter: string = texto.charAt(i);
      if (vocales.includes(caracter)) {
        contadorVocales++;
      }
    }
  
    document.getElementById('resultado').textContent = `El texto ingresado contiene ${contadorVocales} vocales.`;
  }
  