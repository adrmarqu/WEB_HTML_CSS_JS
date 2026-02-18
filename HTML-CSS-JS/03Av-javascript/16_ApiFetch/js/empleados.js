const btn3 = document.querySelector("#btn3");
const mostra3 = document.querySelector("output");

const mostrarHtml2 = (empleados) =>
{
    mostra3.innerHTML = "";
    empleados.forEach(empleado => 
    {
        empleado = 
        `
            <p>ID: ${empleado.id}</p>
            <p>Empleado: ${empleado.nombre}</p>
            <p>Empresa: ${empleado.empresa}</p>
            <p>Trabajo: ${empleado.puesto}</p>
            <hr/>
        `;
        mostra3.innerHTML += empleado;
    });
};

const obtenerDatos2 = () =>
{
    fetch("./server/empleados.json")
        .then((response) =>
        {
            if (!response.ok)
                throw new Error("Error en la solicitud");
            return response.json();
        })
        .then((response) => 
        {
            console.log(response);
            mostrarHtml2(response);
        })
        .catch((error) => console.log(error));
};

btn3.addEventListener("click", obtenerDatos2);