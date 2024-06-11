function invertirTexto() {
    var texto1 = document.getElementById('txt1').value;
    if (texto1.trim() === '') {
        alert('Ingrese un texto válido.');
        return;
    }
    var textoInvertido = texto1.split('').reverse().join('');
    document.getElementById('resultado').innerHTML =
        "Texto invertido: ".concat(textoInvertido);
}
