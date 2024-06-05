function determinarParidad() {
    var num = parseFloat(document.getElementById('txt_num').value);
    var resultDiv = document.getElementById('txt_result');
    if (isNaN(num)) {
        alert('Ingrese un valor numérico válido.');
        return;
    }
    var esPar = num % 2 === 0;
    var resultado = esPar ? 'El número es par' : 'El número es impar';
    resultDiv.textContent = "Resultado: ".concat(resultado);
}
