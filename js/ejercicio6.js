function invertirTexto() {
    var _a;
    var txt1 = ((_a = document.getElementById('txt_1')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    var resultDiv = document.getElementById('txt_result');
    // const txt1: HTMLInputElement = document.getElementById('txt_1') as HTMLInputElement;
    if (txt1.trim() === '') {
        alert('Ingrese un texto válido.');
        return;
    }
    var textoInvertido = txt1.split('').reverse().join('');
    resultDiv.textContent = "Texto invertido: ".concat(textoInvertido);
}
