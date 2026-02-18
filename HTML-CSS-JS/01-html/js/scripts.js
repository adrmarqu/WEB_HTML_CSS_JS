let miVideo = document.getElementById("musicos");

function otraAlerta()
{
    window.confirm("Esta ventana es un confirm. Apreta 'aceptar' para cerrarlo");
}

function reproducePara()
{
    if (miVideo.paused) miVideo.play();
    else miVideo.pause();
}
 
function big()
{
    miVideo.width = 560;
}
 
function small()
{
    miVideo.width = 320;
}

function normal()
{
    miVideo.width = 420;
}