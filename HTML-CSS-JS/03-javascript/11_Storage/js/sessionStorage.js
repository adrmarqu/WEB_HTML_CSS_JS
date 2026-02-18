/* 

LocalStorage, SessionStorage

Los objetos de almacenaje LocalStorage y Sessionstorage permiten guardar partes de texto de clave/valor en el navegador.

Ambos objetos de lmacenaje proveen los mismos métodos y propiedades:

    - API:
        setItem(clave, valor): Guarda parejas de clave/valor
        getItem(clave): Coge el valor de una clave
        removeItem(clave): Borra una clave con su valor
        clear(): borra todo
        key(indice): Coge la clave de una posición determinada
        length: devuelve el número de items almacenados
        Object.keys: para conseguir todas las claves

    - LocalStorage SessionStorage
        Tanto la clave como el valor deben ser strings
        El limite es de 5MB aprox, dependiendo del navegador
        Los datos estan vínculados al origne (dominio/puerto/protocolo)
        Es compartido entre todas las pestañas y ventanas que tengan el mismo origen. Accesible en una pestaña de navegador, incluyendo iframes del mismo origen
        Sobrevive a reinicios del navegador

    - LocalStorage
        No expiran

    - SessionStorage
        Mueren al cerrar la pestaña

*/

sessionStorage.setItem("Fecha_actual", Date.now());
console.log(sessionStorage.getItem("Fecha_actual"));
/* sessionStorage.removeItem("Fecha_actual"); */

const boton = document.querySelector("#grabar");
const key = document.querySelector("#key");
const value = document.querySelector("#text");

const eliminar = (clave) =>
{
    if (confirm("¿Está seguro?"))
    {
        sessionStorage.removeItem(clave);
        mostrar();
    }
};

const eliminarTodo = () =>
{
    if (confirm("¿Seguro?"))
    {
        sessionStorage.clear();
        mostrar();
    }
};

/* const nuevoItem = () =>
{
    let clave = key.value;
    let valor = value.value;
    sessionStorage.setItem(clave, valor);
    key.value = "";
    value.value = "";
    mostrar();
}; */

const iniciar = () =>
{
    boton.addEventListener("click", () =>
    {
        let clave = key.value;
        let valor = value.value;
        sessionStorage.setItem(clave, valor);
        key.value = "";
        value.value = "";
        mostrar();
    });
    mostrar();
};

const mostrar = () =>
{
    const cajadatos = document.querySelector("output");
    cajadatos.innerHTML = "";

    for (let f = 0; f < sessionStorage.length; f++)
    {
        let clave = sessionStorage.key(f);
        let valor = sessionStorage.getItem(clave);
        sessionStorage.getItem(clave);

        cajadatos.innerHTML += `<div> ${clave} - ${valor} <br><input type="button" onclick="eliminar('${clave}')" value="Eliminar"></div><br>`;
    }
    if (sessionStorage.length)
        cajadatos.innerHTML += `<input type="button" onclick="eliminarTodo()" value="Eliminar Todo"><br><br>`;
};
window.addEventListener("load", iniciar);