function calculandoPromedio() {
    var num1 = parseFloat(document.getElementById('txt_num1').value);
    var num2 = parseFloat(document.getElementById('txt_num2').value);
    var num3 = parseFloat(document.getElementById('txt_num3').value);
    var resultDiv = document.getElementById('txt_result');
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('Ingrese valores numéricos válidos para los tres números.');
        return;
    }
    var promedio = (num1 + num2 + num3) / 3;
    resultDiv.textContent = "El promedio es: ".concat(promedio.toFixed(2));
}
