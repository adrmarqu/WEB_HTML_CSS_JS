const btn2 = document.querySelector("#btn2");
const mostra2 = document.querySelector("output");

const mostrarHtml = (response) =>
{
    mostra2.innerHTML = "";
    const usuario = 
    `
        <p>ID: ${response.id}</p>
        <p>Empleado: ${response.nombre}</p>
        <p>Empresa: ${response.empresa}</p>
        <p>Trabajo: ${response.puesto}</p>
    `;
    mostra2.innerHTML = usuario;
};

const obtenerDatos = () =>
{
    fetch("./server/empleado.json")
        .then((response) =>
        {
            console.log(response);
            console.log(response.type);
            console.log(response.headers.get("Content-Type"));
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.url);
            if (!response.ok)
                throw new Error("Error en la solicitud");
            return response.json();
        })
        .then((response) => mostrarHtml(response))
        .catch((error) => console.log(error));
};

btn2.addEventListener("click", obtenerDatos);