function encontrarMayorMenor() {
    var num1 = parseFloat(document.getElementById('txt_num1').value);
    var num2 = parseFloat(document.getElementById('txt_num2').value);
    var num3 = parseFloat(document.getElementById('txt_num3').value);
    var resultDiv = document.getElementById('txt_result');
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('Ingrese valores numéricos válidos para los tres números.');
        return;
    }
    var mayor = num1;
    var menor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }
    var orden = "El n\u00FAmero mayor es: ".concat(mayor, " y el menor es: ").concat(menor);
    resultDiv.textContent = "Resultado: ".concat(orden);
}
