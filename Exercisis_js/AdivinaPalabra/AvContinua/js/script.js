const hint = document.querySelector(".pista span");
const left = document.querySelector(".restantes span");
const err = document.querySelector(".letrasErroneas span");
const inputs = document.querySelector(".inputs");
const letter = document.querySelector(".lletra");
const out = document.querySelector(".mostra");
const reset = document.querySelector(".reset-btn");

let intentos;
let end;

/* Donde se guardan las letras equivocadas */
const arrayLetras = [];

/* Donde se guardan las letras de la palabra que faltan */
const arrayPalabra = [];

/* La lista de inputs que forman la palabra */
let wordInputs;

const startGame = () =>
{
    const num = Math.floor(Math.random() * listado.length);

    palabra = listado[num].palabra;
    hint.innerHTML = listado[num].pista;

    if (palabra.length < 7)
        intentos = 6;
    else
        intentos = 8;

    left.innerHTML = intentos;

    inputs.innerHTML = "";
    out.innerHTML = "";
    err.innerHTML = "";
    letter.value = "";
    letter.disabled = false;
    arrayPalabra.length = 0;
    arrayLetras.length = 0;

    for (let i = 0; i < palabra.length; i++)
    {
        arrayPalabra.push(palabra[i]);

        const input = document.createElement("input");
        input.type = "text";

        inputs.appendChild(input);
    }

    wordInputs = document.querySelectorAll(".inputs input");
    end = 0;
};

const endGame = (m, color, state) =>
{
    /* Mensaje aleatorio */
    const num = Math.floor(Math.random() * m.length);
    out.innerHTML = m[num];
    out.style.color = color;

    /* Escribir en intentos en caso de ganaa */
    if (color === "green")
        left.innerHTML = "Haz click en Volver a empezar";

    /* Escribir en letras erroneas */
    err.innerHTML = state;

    /* Completar palabra */
    for (let i = 0; i < palabra.length; i++)
        wordInputs[i].value = palabra[i].toUpperCase();

    /* Desactivar juego */
    end = 1;
    letter.disabled = true;
};

const checkInput = () =>
{
    const repeatError = (letra) =>
    {
        for (let i = 0; i < arrayLetras.length; i++)
            if (arrayLetras[i] === letra)
                return true;
        return false;
    };

    const win = () =>
    {
        for (let i = 0; i < arrayPalabra.length; i++)
            if (arrayPalabra[i] != 0)
                return false;
        return true;
    };

    if (palabra === "" || !(/^[a-zA-Z]$/.test(letter.value)) || end)
    {
        letter.value = "";
        return ;
    }

    const letra = letter.value.toLowerCase();
    letter.value = "";

    let found = false;

    /* Mirar si la letra existe */

    for (let i = 0; i < palabra.length; i++)
    {
        if (palabra[i] === letra)
        {
            found = true;
            arrayPalabra[i] = 0;
            wordInputs[i].value = letra.toUpperCase();
        }
    }

    /* Mirar si ya has fallado esa letra */

    if (!found)
        found = repeatError(letra);

    /* Si has fallado una nueva letra */

    if (!found)
    {
        intentos--;
        left.innerHTML = intentos;
        arrayLetras.push(letra);
    
        err.innerHTML = arrayLetras[0];
        for (let i = 1; i < arrayLetras.length; i++)
            err.innerHTML += ", " + arrayLetras[i];
    }

    /* Mirar si la partida acaba */

    if (intentos === 0)
        endGame(msgError(), "red", "No tienes mas intentos");
    else if (win())
        endGame(msg(), "green", "Has ganado");
};

document.addEventListener("DOMContentLoaded", startGame);
reset.addEventListener("click", startGame);
letter.addEventListener("keyup", checkInput);