/* 

Que pida un numero por prompt y utilizando los 3 bucles, haz un contador hasta 0 y se muestre en la consola

*/

function Bucles()
{
    const out = document.querySelector("output");
    let original, num, result = "";
    
    original = Number(prompt("Introduce un número"));
    while (isNaN(original))
        original = Number(prompt("Introduce un número"));

    /* WHILE */

    num = original;
    while (num >= 0)
        result += `Contador en el "while" de: ${num--}<br/>`
    result += "<br/>";

    /* FOR */

    for (num = original; num >= 0; num--)
        result += `Contador en el "for" de: ${num}<br/>`;
    result += "<br/>";

    /* DO WHILE */

    num = original
    do
    {
        /* Por si el numero es menor de 0 */
        if (num < 0)
            break;
        result += `Contador en el "do while" de: ${num--}<br/>`;
    }
    while (num >= 0);

    out.innerHTML = result;
}