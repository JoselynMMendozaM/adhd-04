function calcularFactorial() {
    var numero1 = parseFloat(document.getElementById('txtNumero1').value);
    if (isNaN(numero1)) {
        alert('Ingrese un número entero no negativo.');
        return;
    }
    var factorial = 1;
    for (var i = 1; i <= numero1; i++) {
        factorial *= i;
    }
    document.getElementById('resultado').textContent = "El factorial de ".concat(numero1, " es: ").concat(factorial);
}
