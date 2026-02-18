const btn5 = document.querySelector("#btn5");
const mostra5 = document.querySelector("output");

const mostrarHtml4 = (datos) =>
{
    mostra5.innerHTML = "";
    let html = "<h4>Usuarios piscus</h4>";
    datos.forEach(dato => 
    {
        const { author, download_url } = dato;
        html += 
        `
            <p>Autor: ${author}</p>
            <p>
                Imagen:
                <br>
                <img src="${download_url}" width="200">
                <br>
                <a href="${download_url}" target="new">
                    Descargar original
                </a>
            </p>
            <hr/>
        `;
        mostra5.innerHTML = html;
    });
};

const obtenerDatos4 = () =>
{
    fetch("https://picsum.photos/v2/list?page=2&limit=50")
        .then((response) =>
        {
            if (!response.ok)
                throw new Error("Error en la solicitud");
            return response.json();
        })
        .then((response) => 
        {
            mostrarHtml4(response);
        })
        .catch((error) => 
        {
            console.log(error);
            mostra5.innerHtml = `<p>Error al cargar los datos del empleado</p>`;
        });
};

btn5.addEventListener("click", obtenerDatos4);