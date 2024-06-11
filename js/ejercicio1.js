function calcularPromedio() {
    var numero1 = parseFloat(document.getElementById('txtNumero1').value);
    var numero2 = parseFloat(document.getElementById('txtNumero2').value);
    var numero3 = parseFloat(document.getElementById('txtNumero3').value);
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert('Ingrese valores numéricos válidos para los tres números.');
        return;
    }
    var promedio = (numero1 + numero2 + numero3) / 3;
    document.getElementById('resultado').innerHTML =
        "El promedio es de: " + promedio;
}
