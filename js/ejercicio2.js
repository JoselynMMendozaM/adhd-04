function calcularArea() {
    var base = parseFloat(document.getElementById('txt_base').value);
    var altura = parseFloat(document.getElementById('txt_atura').value);
    var resultDiv = document.getElementById('txt_result');
    if (isNaN(base) || isNaN(altura)) {
        alert('Ingrese valores numéricos válidos para la base y la altura.');
        return;
    }
    var area = (base * altura) / 2;
    resultDiv.textContent = "El \u00E1rea es de: ".concat(area.toFixed(2));
}
