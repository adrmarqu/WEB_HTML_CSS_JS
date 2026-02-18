const btn4 = document.querySelector("#btn4");
const mostra4 = document.querySelector("output");

const mostrarHtml3 = (empleado) =>
{
    mostra4.innerHTML = 
    `
        <p>ID: ${empleado.id}</p>
        <p>Empleado: ${empleado.nombre}</p>
        <p>Empresa: ${empleado.empresa}</p>
        <p>Trabajo: ${empleado.puesto}</p>
        <hr/>
    `;
};

const obtenerDatos3 = (id) =>
{
    fetch("./server/empleados.json")
        .then((response) =>
        {
            if (!response.ok)
                throw new Error("Error en la solicitud");
            return response.json();
        })
        .then((empleados) => 
        {
            const empleado = empleados.find(emp => emp.id === id);
            if (empleado)
                mostrarHtml3(empleado);
            else
                mostra4.innerHtml = `<p>No se encontro el empleado con el ID: ${id}</p>`;
        })
        .catch((error) =>
        {
            console.log(error);
            mostra4.innerHtml = `<p>Error al cargar los datos del empleado</p>`;
        });
};

btn4.addEventListener("click", () => obtenerDatos3(2));