function elevarPotencia() {
    var base = parseFloat(document.getElementById('txtBase').value);
    var exp = parseFloat(document.getElementById('txtExponente').value);
    if (isNaN(base) || isNaN(exp)) {
        alert('Ingrese valores numéricos válidos para los tres números.');
        return;
    }
    var potencia = Math.pow(base, exp);
    document.getElementById('resultado').innerHTML =
        "El resultado de elevar ".concat(base, " a la potencia ").concat(exp, " es: ").concat(potencia);
}
