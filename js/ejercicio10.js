function contarVocales() {
    var texto = document.getElementById('txt1').value.toLowerCase();
    if (texto.trim() === '') {
        alert('Ingrese un texto válido.');
        return;
    }
    var contadorVocales = 0;
    var vocales = 'aeiouá';
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charAt(i);
        if (vocales.includes(caracter)) {
            contadorVocales++;
        }
    }
    document.getElementById('resultado').textContent = "El texto ingresado contiene ".concat(contadorVocales, " vocales.");
}
