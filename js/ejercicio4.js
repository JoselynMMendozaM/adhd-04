function encontrarMayorMenor() {
    var numero1 = parseFloat(document.getElementById('txtNumero1').value);
    var numero2 = parseFloat(document.getElementById('txtNumero2').value);
    var numero3 = parseFloat(document.getElementById('txtNumero3').value);
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert('Ingrese valores numéricos válidos para los tres números.');
        return;
    }
    var mayor = numero1;
    var menor = numero1;
    if (numero2 > mayor) {
        mayor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    }
    if (numero2 < menor) {
        menor = numero2;
    }
    if (numero3 < menor) {
        menor = numero3;
    }
    var orden = "El n\u00FAmero mayor es: ".concat(mayor, " y el menor es: ").concat(menor);
    document.getElementById('resultado').innerHTML =
        orden;
}
