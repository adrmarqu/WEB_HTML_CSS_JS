/* 

Un prompt que reciba un numero de 0-10
Devolver si es Suspens, Aprovat, Bé, Notable o Excel·lent
0-4, 5, 6, 7-8, 9-10

*/

function Alumno()
{
    let nota = Number(prompt("Quina nota tens (0-10)?"));
    const intro = "La nota posada es " + nota + "<br/>";

    if (nota >= 0 && nota < 5)
        nota = intro + "Suspens";
    else if (nota >= 5 && nota < 6)
        nota = intro + "Aprovat";
    else if (nota >= 6 && nota < 7)
        nota = intro + "Bé";
    else if (nota >= 7 && nota <= 8)
        nota = intro + "Notable";
    else if (nota >= 9 && nota <= 10)
        nota = intro + "Excel·lent";
    else
        nota = "Nota posada incorrectament";

    document.querySelector("output").innerHTML = nota;
}