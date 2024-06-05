function sumar() {
    var _a;
    var num1 = parseFloat(document.getElementById('textNum1').value);
    var num2 = document.getElementById("txtNum2");
    var n2 = parseFloat(num2.value);
    var suma = num1 + n2;
    var suma2 = num1 + parseFloat(num2.value);
    (_a = document.getElementById('result')) === null || _a === void 0 ? void 0 : _a.innerHTML = "la suma es: " + suma;
}
