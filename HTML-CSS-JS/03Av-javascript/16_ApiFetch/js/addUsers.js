const btn6 = document.querySelector("#btn6");
const mostra6 = document.querySelector("output");

const mostrarHtml5 = (datos) =>
{
    mostra6.innerHTML = "";
    let html = "<h4>Usuarios random</h4>";
    let id = 1;

    datos.forEach(dato => 
    {
        const { name, picture, location, phone } = dato;
        /*
        Asi es como se hace 
        const
        {
            name: {title, first, last},
            phone,
            location: {city, timezone: {description}},
            picture: {large}
        } = dato; 
         
        html += 
        `
            <p><strong>Id:</strong> ${id}</p>
            <p><strong>Foto:</strong><br>
                <img src="${large}" width="100">
            </p>
            <p>
                <strong>Tratamiento:</strong><br>
                ${title} ${first} ${last}
            </p>
            <p><strong>Zona:</strong> ${description}<br>
            <strong>Phone:</strong> ${phone} <br>
            <strong>Ciudad:</strong> ${city}</p>
            <hr/>
        `;
        
        */
        
        html += 
        `
            <p><strong>Id:</strong> ${id}</p>
            <p><strong>Foto:</strong><br>
                <img src="${picture.large}" width="100">
            </p>
            <p>
                <strong>Tratamiento:</strong><br>
                ${name.title} ${name.first} ${name.last}
            </p>
            <p><strong>Zona:</strong>
            ${location.street.number} ${location.street.name}, ${location.state}, ${location.country}, ${location.timezone.description}<br>
            <strong>Phone:</strong> ${phone} <br>
            <strong>Ciudad:</strong> ${location.city}</p>
            <hr/>
        `;
        mostra6.innerHTML = html;
        id++;
    });
};

const obtenerDatos5 = () =>
{
    fetch("https://randomuser.me/api/?page=3&results=10&inc=name,picture,location,phone")
        .then((response) =>
        {
            if (!response.ok)
                throw new Error("Error en la solicitud");
            return response.json();
        })
        .then((response) => 
        {
            mostrarHtml5(response.results);
        })
        .catch((error) => 
        {
            console.log(error);
            mostra6.innerHtml = `<p>Error al cargar los datos del empleado</p>`;
        });
};

btn6.addEventListener("click", obtenerDatos5);