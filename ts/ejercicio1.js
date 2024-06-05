var num1 = parseFloat(document.getElementById('txt_num1').value);
var num2 = parseFloat(document.getElementById('txt_num2').value);
var num3 = parseFloat(document.getElementById('txt_num3').value);
var resultDiv = parseFloat(document.getElementById('txt_result').value);
function calcularPromedio() {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var num3Input = document.getElementById('num3');
    var resultDiv = document.getElementById('result');
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultDiv.textContent = 'Por favor ingrese solo números';
        return;
    }
    var promedio = (num1 + num2 + num3) / 3;
    resultDiv.textContent = "El promedio es: ".concat(promedio.toFixed(2));
}
var submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', calcularPromedio);
