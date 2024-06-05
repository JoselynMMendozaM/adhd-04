function elevarPotencia() {
    var base = parseFloat(document.getElementById('txt_base').value);
    var exp = parseFloat(document.getElementById('txt_exp').value);
    var resultDiv = document.getElementById('txt_result');
    if (isNaN(base) || isNaN(exp)) {
        alert('Ingrese valores numéricos válidos para la base y el exponente.');
        return;
    }
    var potencia = Math.pow(base, exp);
    resultDiv.textContent = "El resultado de elevar ".concat(base, " a la potencia ").concat(exp, " es: ").concat(potencia);
}
