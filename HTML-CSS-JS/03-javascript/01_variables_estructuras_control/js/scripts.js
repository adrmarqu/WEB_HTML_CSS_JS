function salir()
{
    location.replace("https://www.w3schools.com/");
   /*  open("https://www.w3schools.com/"); */
}

function salirono()
{
    let salirono = confirm("Volver a cargar el juego?");
        if (salirono)
            location.reload();
        else
            salir();
}