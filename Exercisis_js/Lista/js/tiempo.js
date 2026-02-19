const form = document.forms["formu"];
const city = form.elements["ciudad"];
const country = form.elements["pais"];
const btn = form.elements["btn"];
const errOut = document.getElementById("error");
const out = document.querySelector("#result");

const error = (msg) =>
{
    errOut.innerHTML = `<p>${msg}</p>`;
}

const mostrarTiempo = (datos) =>
{
    const 
    {
        coord: { lon, lat },
        weather: [{ description }],
        main: { temp, pressure, humidity, temp_min, temp_max },
        visibility,
        wind: { speed },
        clouds: { all },
        name
    } = datos;

    const info = 
    `
        <p>Coordenadas: ${lon}, ${lat}</p>
        <p>Descripcion: ${description}</p> <br>
        <p>
            Datos: <br>
            - Temperatura: ${temp} <br>
            - Temperatura mínima: ${temp_min} <br>
            - Temperatura máxima: ${temp_max} <br>
            - Presion: ${pressure} <br>
            - Humedad: ${humidity} <br>
        </p> <br>
        <p>Visibilidad: ${visibility}</p>
        <p>Velocidad del viento: ${speed}</p> 
        <p>Nuves: ${all}</p> <br>
        <p>Ciudad: ${name}</p>
    `;

    out.innerHTML = info;
};

const obtenerTiempo = () =>
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=c63f8b08746256b159b5661b8262100d`)
        .then((response) =>
        {
            if (!response.ok)
            {
                if (response.status === 404)
                    throw new Error("Esa ciudad no existe");
                throw new Error("Error al recibir la solicitud");
            }
            return response.json();
        })
        .then((data) => mostrarTiempo(data))
        .catch((err) => error(err.message));
};

const verTiempo = (e) =>
{
    e.preventDefault();

    if (country.value.trim() === "" || city.value.trim() === "")
        return error("Rellena los campos");

    obtenerTiempo();
};

btn.addEventListener("click", verTiempo);