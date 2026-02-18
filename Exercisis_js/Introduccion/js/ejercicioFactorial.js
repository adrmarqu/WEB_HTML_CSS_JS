/* 

Que pida un numero por prompt
Escriba por consola el factorial completo
Utilizar while, for, do while

*/

function Factorial()
{
    const out = document.querySelector("output");

    let original, num, result, factorial = "";

    original = Number(prompt("Introduce un número"));
    while (isNaN(original) || original <= 0)
        original = Number(prompt("Introduce un número"));

    original = String(original);

    let intro = "El factorial de " + original + " es en el ";
    let bucle, r = "";


    result = 1;
    bucle = "\"while\": ";
    num = original;
    while (num)
    {
        result *= num;
        factorial += num--;
        if (num)
            factorial += "x";
        else
            factorial += "=" + result;
    }
    r += intro + bucle + "<br/>" + factorial + "<br/>" + "<br/>";


    result = 1;
    factorial = "";
    bucle = "\"for\": ";
    for (num = original; num; num--)
    {
        result *= num;
        factorial += num;
        if (num > 1)
            factorial += "x";
        else
            factorial += "=" + result;
    }
    r += intro + bucle + "<br/>" + factorial + "<br/>" + "<br/>";



    result = 1;
    factorial = "";
    bucle = "\"do while\": ";
    num = original


    do
    {
        result *= num;
        factorial += num--;
        if (num)
            factorial += "x";
        else
            factorial += "=" + result;
    }
    while (num);

    r += intro + bucle + "<br/>" + factorial;

    out.innerHTML = r;
}