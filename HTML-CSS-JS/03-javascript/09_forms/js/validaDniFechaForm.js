const m1 = document.querySelector("#mostra1");
const m2 = document.querySelector("#mostra2");
const error = document.querySelector("#error");

/* Forma original */
/* const formu = document.forms["firstContact"]; */

/* Forma moderna */
const formu = document.firstContact;

const fechaN = formu.miedad;
const vDni = formu.dni;
const pdni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;
const borrar = formu.borrar;

formu.addEventListener("submit", (e) =>
{
    const myedad = edad();
    const mydni = c_dni();
    if (!myedad || !mydni)
    {
        e.preventDefault();
        error.innerHTML =
        "ERRORUM   No se ha podido enviar el formulario. Por favor, revisa que todos los campos estén rellenados correctamente.";
        error.style.color = "red";
        return false;
    }
    else
        return formu.submit(), true;
});

const edad = () =>
{
    let fechaNacimiento = fechaN.value;
    let fechaNace = new Date(fechaNacimiento);
    let fechaActual = new Date();

    let mi_edad = Math.floor((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365);
    if (mi_edad >= 18 && mi_edad <= 100) return true;
    return false;
};

const c_dni = () =>
{
    let rdni = vDni.value;
    rdni = rdni.toUpperCase();
    let numero, unaLetra;
    let resul = rdni.match(pdni);
    let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

    if (resul)
    {
        numero = rdni.substr(0, rdni.length - 1);
        numero = numero.replace("X", 0);
        numero = numero.replace("Y", 1);
        numero = numero.replace("Z", 2);
        unaLetra = rdni.substr(rdni.length - 1, 1);
        numero = numero % 23;
        letra = letra.substring(numero, numero + 1);

        if (letra !== unaLetra) return false;
        return true;
    }
    else
        return false;
};

const pasaValor = (e) =>
{
    let result;

    switch (e.target.name)
    {
        case "miedad":
            result = edad();
            if (result)
            {
                m1.innerHTML = "Tienes más de 18 años y menos de 100 años";
                m1.style.color = "green";
                fechaN.style.border = "solid 2px green";
                error.innerHTML = "";
            }
            else
            {
                m1.innerHTML = "No puedes registrarte porque tienes menos de 18 años o más de 100 años";
                m1.style.color = "red";
                fechaN.style.border = "solid 1px red";
            }
            break ;

        case "dni":
            result = c_dni();
            if (result)
            {
                m2.innerHTML = "DNI válido";
                m2.style.color = "green";
                vDni.style.border = "solid 2px green";
                error.innerHTML = "";
            }
            else
            {
                m2.innerHTML = "DNI o NIE no válido";
                m2.style.color = "red";
                vDni.style.border = "solid 1px red";
            }
            break ;
    }
};

borrar.addEventListener("click", () =>
{
    m1.innerHTML = "";
    m2.innerHTML = "";
    fechaN.style.border = "solid 1px gray";
    vDni.style.border = "solid 1px gray";

});

const listeners = [formu.miedad, formu.dni];

for (const listener of listeners) listener.
    addEventListener("keyup", pasaValor);
