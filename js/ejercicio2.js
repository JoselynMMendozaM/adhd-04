function calcularArea() {
    var numero1 = parseFloat(document.getElementById('txtNumero1').value);
    var numero2 = parseFloat(document.getElementById('txtNumero2').value);
    var area = (numero1 * numero2) / 2;
    document.getElementById('resultado').innerHTML =
        "El área del triangulo es de: " + area;
}
