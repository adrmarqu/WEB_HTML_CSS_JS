/* 

Pedir dos numeros al usuario con prompt(). Que muestre un alert() indicando cual de los dos es superior e inferior o si son iguales. Hay que mostrar los numeros introducidos.

*/

function Supinf()
{
    let num1 = Number(prompt("Introduce el primer número"));
    let num2 = Number(prompt("Introduce el segundo número"));

    const out = document.querySelector("output");

    const a = `De los numeros ${num1} y ${num2}<br/>`;

    if (num1 < num2)
        out.innerHTML = `${a}<br/>El numero más grande es: ${num2}<br/>El numero más pequeño es: ${num1}`;
    else if (num1 > num2)
        out.innerHTML = `${a}<br/>El numero más grande es: ${num1}<br/>El numero más pequeño es: ${num2}`;
    else if (num1 == num2)
        out.innerHTML = `Los dos numeros: ${num2} y ${num1} són iguales`;
    else
        out.innerHTML = `Error: No se puede comparar, solo se compara con números`;
}
