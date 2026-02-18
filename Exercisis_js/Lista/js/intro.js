const out1 = document.querySelector("#out1");
const out2 = document.querySelector("#out2");
const out3 = document.querySelector("#out3");
const out4 = document.querySelector("#out4");
const out5 = document.querySelector("#out5");
const out6 = document.querySelector("#out6");
const out7 = document.querySelector("#out7");

const getPrompt = (msg) =>
{
    return (prompt(msg));
}

const checkInput = (input, num) =>
{
    if (input == null)
        return false;
    else if (input.trim() === "")
        return false;
    else if (num && Number.isNaN(Number(input)))
        return false;
    return true;
}

const erase = (id) =>
{
    document.querySelector(id).innerHTML = "";
}

const ej1 = () =>
{
    let num1;
    let num2;

    num1 = Number(getPrompt("Introduce el primer número:"));
    num2 = Number(getPrompt("Introduce el segundo número:"));

    const intro = `De los números ${num1} y ${num2}<br/>`;

    if (num1 < num2)
        out1.innerHTML = `${intro}El numero más grande es: ${num2}<br/>El numero más pequeño es: ${num1}`;
    else if (num1 > num2)
        out1.innerHTML = `${intro}El numero más grande es: ${num1}<br/>El numero más pequeño es: ${num2}`;
    else if (num1 == num2)
        out1.innerHTML = `Los dos numeros: ${num2} y ${num1} són iguales`;
    else
        out1.innerHTML = `Error: No se puede comparar, solo se puede compara entre números`;

}

const ej2 = () =>
{
    let day = getPrompt("Que dia de la semana es hoy?").toUpperCase();
    const intro = "Dia seleccionado: " + day + "<br/>";

    let dia = 8;
    switch (day)
    {
        case "LUNES":
            dia--;
        case "MARTES":
            dia--;
        case "MIERCOLES":
            dia--;
        case "JUEVES":
            dia--;
        case "VIERNES":
            dia--;
        case "SABADO":
            dia--;
        case "DOMINGO":
            dia--;
            out2.innerHTML = `${intro}Dia de la semana ${dia}`;
            break ;
        default:
            out2.innerHTML = "Error (" + day + "): Tienes de poner un dia de la semana en castellano (lunes-domingo)";
    }
}

const ej3 = () =>
{
    let count = 0, num = 0;
    do
    {
        num = getPrompt("Pon un número mayor a 50:");
        if (!checkInput(num, false))
            continue ;
        num = Number(num);
        if (num <= 50)
            count++;
        if (Number.isNaN(num))
            num = 0;
    }
    while (num <= 50);

    if (!count)
        out3.innerHTML = `No se ha introducido ningun número menor o igual a 50`;
    else if (count == 1)
        out3.innerHTML = `Se ha introducido 1 número menor o igual a 50`;
    else
        out3.innerHTML = `Se han introducido ${count} veces un número menor o igual a 50`;
}

const ej4 = () =>
{
    const bucleWhile = (num, sign) =>
    {
        let msg = "Bucle del while:<br/>";
        while (num)
            msg += sign + num-- + "<br/>";
        msg += num + "<br/>";
        return msg;
    };

    const bucleFor = (num, sign) =>
    {
        let msg = "Bucle del for:<br/>";
        for (; num; num--)
            msg += sign + num + "<br/>";
        msg += num + "<br/>";
        return msg;
    };

    const bucleDoWhile = (num, sign) =>
    {
        let msg = "Bucle del dowhile:<br/>";
        if (num)
        {
            do
            {
                msg += sign + num-- + "<br/>";
            }
            while (num);
        }
        msg += num + "<br/>";
        return msg;
    };

    let num = getPrompt("Introduce un número"), sign = "", msg = "";
    if (!checkInput(num, true))
    {
        out4.innerHTML = "Error: el input es incorrecto!";
        return ;
    }
    num = Number(num);
    if (num < 0)
    {
        sign = "-";
        num = -num;
    }
    msg += bucleWhile(num, sign) + "<br/>";
    msg += bucleFor(num, sign) + "<br/>";
    msg += bucleDoWhile(num, sign);

    out4.innerHTML = msg;
}

const ej5 = () =>
{
    const getFactorial = (n) =>
    {
        let msg = "1";
        let nbr = 2;
        while (nbr <= n)
            msg += "X" + nbr++;
        return msg;
    }

    const factorialWhile = (num) =>
    {
        let msg = "Factorial en el while de " + num + ":<br/><br/>1=1<br/>";
        let n = 2, result = 1;

        while (n <= num)
        {
            result *= n;
            msg += getFactorial(n++) + "=" + result + "<br/>";
        }
        return msg;
    }

    const factorialFor = (num) =>
    {
        let msg = "Factorial en el for de " + num + ":<br/><br/>1=1<br/>";

        for (let n = 2, result = 1; n <= num; n++)
        {
            result *= n;
            msg += getFactorial(n) + "=" + result + "<br/>";
        }
        return msg;
    }

    const factorialDoWhile = (num) =>
    {
        let msg = "Factorial en el dowhile de " + num + ":<br/><br/>1=1<br/>";
        let n = 1, result = 1;

        if (n >= num)
            return msg;
        do
        {
            n++;
            result *= n;
            msg += getFactorial(n) + "=" + result + "<br/>";
        }
        while (n < num);
        return msg;
    }

    let input = getPrompt("Introduce un número para hacer el factorial;");
    if (!checkInput(input, true) || Number(input) == 0)
    {
        out5.innerHTML = "Error: el input es incorrecto!";
        return ;
    }

    input = Number(input);
    if (input < 0)
        input = -input;

    let msg = "";
    msg += factorialWhile(input) + "<br/>";
    msg += factorialFor(input) + "<br/>";
    msg += factorialDoWhile(input);
    out5.innerHTML = msg;
}

const getNotaMsg = (nota) =>
{
    let msg = "";
    if (nota >= 0 && nota < 5)
        msg = "Suspendido";
    else if (nota >= 5 && nota < 6)
        msg = "Aprobado";
    else if (nota >= 6 && nota < 7)
        msg = "Bien";
    else if (nota >= 7 && nota <= 8)
        mag = "Notable";
    else if (nota >= 9 && nota <= 10)
        msg = "Excelente";
    else
        msg = "Error";
    return msg;
}

const ej6 = () =>
{
    let nota = getPrompt("Que nota tienes (0-10)?");
    if (!checkInput(nota, true))
    {
        out6.innerHTML = "Error: el input es incorrecto!";
        return ;
    }
    nota = Number(nota);
    const intro = "La nota introducida es " + nota + "<br/><br/>";

    let msg = getNotaMsg(nota);
    if (msg == "Error")
        out6.innerHTML = "Nota introducida incorrectamente!";
    else
        out6.innerHTML = `${intro} ${msg}`;
}

const ej7 = () =>
{
    let nota1 = getPrompt("Nota del primer alumno (0-10):");
    let nota2 = getPrompt("Nota del primer alumno (0-10):");

    if (!checkInput(nota1, true) || !checkInput(nota2, true))
    {
        out7.innerHTML = "Error: Las notas deben de ser numeros del 0 al 10";
        return ;
    }
    nota1 = Number(nota1); nota2 = Number(nota2);

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10)
    {
        out7.innerHTML = "Error: Las notas deben de ser numeros del 0 al 10";
        return ;
    }

    let msg = "Las notas introducidas son " + nota1 + " y " + nota2;

    let nota = (nota1 + nota2) / 2;

    msg += "<br/><br/>La nota media es " + nota + "<br/><br/>";

    msg += getNotaMsg(nota);

    out7.innerHTML = msg;
}