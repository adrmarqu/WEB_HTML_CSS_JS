/* 

Que pida por prompt el nombre del dia de la semana y utilizando un switch, guardar el numero del dia (1-7) en una variable. Luego hacer un alert que diga "dia de la setmana x"

*/

function Dia()
{
    let dia = 8;
    
    const out = document.querySelector("output");
    let day = prompt("Que dia de la semana es hoy?");
    day = day.toUpperCase()
    const sel = "Dia seleccionat: " + day;

    switch (day)
    {
        case "DILLUNS":
            dia--;
        case "DIMARTS":
            dia--;
        case "DIMECRES":
            dia--;
        case "DIJOUS":
            dia--;
        case "DIVENDRES":
            dia--;
        case "DISSABTE":
            dia--;
        case "DIUMENGE":
            dia--;
            out.innerHTML = `${sel}<br/>dia de la setmana ${dia}`;
            break;
        default:
            out.innerHTML = "Error (" + day + "): Tens de possar un dia de la setmana en català (DILLUNS-DIUMENGE)";
    }
}