/* 

Un prompt que reciba un numero de 0-10
Otro prompt que reciba un numero de 0-10
Hacer la media de las dos notas
Devolver el resultado con los mismo parametros

*/

function Media()
{
    const nota1 = Number(prompt("Quina nota tens (0-10)?"));
    const nota2 = Number(prompt("Quina nota tens (0-10)?"));

    let nota = (nota1 + nota2) / 2;

    const intro = `Les dues notes introduïdes són: ${nota1} i ${nota2} amb una mitjà de ${nota}\n`;

    if (nota >= 0 && nota < 5)
        nota = "Suspens";
    else if (nota >= 5 && nota < 6)
        nota = "Aprovat";
    else if (nota >= 6 && nota < 7)
        nota = "Bé";
    else if (nota >= 7 && nota <= 8)
        nota = "Notable";
    else if (nota >= 9 && nota <= 10)
        nota = "Excel·lent";
    else
        nota = "Nota posada incorrectament";

    document.querySelector("output").innerHTML = intro + "<br/>" + nota;
}