function verificarPrimo() {
    var numero1 = parseFloat(document.getElementById('txtNumero1').value);
    if (isNaN(numero1) || numero1 <= 0) {
        alert('Ingrese un número entero positivo mayor que cero.');
        return;
    }
    var esPrimo = true;
    for (var i = 2; i <= Math.sqrt(numero1); i++) {
        if (numero1 % i === 0) {
            esPrimo = false;
            break;
        }
    }
    var resultado = esPrimo ? "".concat(numero1, " es un n\u00FAmero primo") : "".concat(numero1, " no es un n\u00FAmero primo");
    document.getElementById('resultado').textContent = resultado;
}
