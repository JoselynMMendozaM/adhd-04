// Enlazar elementos de HTML con TypeScript
var inputNumero1 = document.getElementById('txtxNumero1');
var inputNumero2 = document.getElementById('txtxNumero2');
var btnResta = document.getElementById('btnResta');
var btnMult = document.getElementById('btnMult');
var btnDiv = document.getElementById('btnDiv');
// añadir evento a los btn(event, función)
btnResta.addEventListener('click', resta);
btnMult.addEventListener('click', multi);
btnDiv.addEventListener('click', divi);
// Enlazar etiqueta (div) donde se mostrará el resultado
var resultDiv = document.getElementById('resultado');
var numero1 = 0;
var numero2 = 0;
// Crear métodos para las diversas operaciones
function recibirValor() {
    var respuesta = 0;
    numero1 = parseFloat(inputNumero1.value);
    numero2 = parseFloat(inputNumero2.value);
    if (isNaN(numero1) || isNaN(numero2)) {
        resultDiv.textContent = "El valor no es un número , no puede hacer la operación";
        respuesta = 100;
    }
    return respuesta;
}
function suma() {
    if (recibirValor() == 100) { //Llamar a la funcion que recibe valores
        resultDiv.textContent = "Error en valores";
    }
    else {
        var suma_1 = numero1 + numero2;
        resultDiv.textContent = "La suma es: " + suma_1;
    }
}
function resta() {
    recibirValor(); //Llamar a la funcion que recibe valores
    var resta = numero1 - numero2;
    resultDiv.textContent = "La resta es: " + resta;
}
function multi() {
}
function divi() {
}
