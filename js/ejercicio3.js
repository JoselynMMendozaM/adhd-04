function determinarParidad() {
    var numero1 = parseFloat(document.getElementById('txtNumero1').value);
    if (isNaN(numero1)) {
        alert('Ingrese un valor numérico válido.');
        return;
    }
    var esPar = numero1 % 2 === 0;
    var result = esPar ? 'El número es par' : 'El número es impar';
    document.getElementById('resultado').innerHTML =
        result;
}
