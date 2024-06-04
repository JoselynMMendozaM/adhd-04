function sumar (){
    const num1: number =parseFloat(
        (document.getElementById('textNum1') as HTMLInputElement).value
    )
    const num2 = document.getElementById("txtNum2") as HTMLInputElement;
    const n2: number = parseFloat(num2.value);

    const suma : number = num1 + n2;

    const suma2: number = num1 + parseFloat(num2.value);

    document.getElementById('result')?.innerHTML = "la suma es: " + suma;
}