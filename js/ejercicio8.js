function determinarNumeroPerfecto() {
    var numero1 = parseFloat(document.getElementById('txtNumero1').value);
    if (isNaN(numero1) || numero1 <= 0) {
        alert('Ingrese un número entero positivo mayor que cero.');
        return;
    }
    var sumaDivisores = 0;
    for (var i = 1; i < numero1; i++) {
        if (numero1 % i === 0) {
            sumaDivisores += i;
        }
    }
    var esPerfecto = numero1 === sumaDivisores;
    var resultado = esPerfecto ? "".concat(numero1, " es un n\u00FAmero perfecto") : "".concat(numero1, " no es un n\u00FAmero perfecto");
    document.getElementById('resultado').textContent = resultado;
}
