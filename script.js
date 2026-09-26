// 1. Lógica para abrir la cortina de bienvenida
const btnAbrir = document.getElementById("btn-abrir");
const cortina = document.getElementById("cortina-bienvenida");

btnAbrir.addEventListener("click", () => {
    cortina.classList.add("abrir");
});

// 2. Control del Contador de Tiempo (Configurado a 4 años atrás, ej. 2022)
// Parámetros: (Año, Mes [0-11 donde 1 es Febrero], Día, Hora, Minuto, Segundo)
const fechaInicio = new Date(2022, 1, 14, 0, 0, 0); 

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    if (diferencia > 0) {
        const segundosTotales = Math.floor(diferencia / 1000);
        const dias = Math.floor(segundosTotales / (3600 * 24));
        const horas = Math.floor((segundosTotales % (3600 * 24)) / 3600);
        const minutos = Math.floor((segundosTotales % 3600) / 60);
        const segundos = segundosTotales % 60;

        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;
    }
}

setInterval(actualizarContador, 1000);
actualizarContador();

// 3. Control del Botón de Música "PRIMER AÑO" con 'monaco.mpeg'
const btnMusica = document.getElementById("btn-musica");
const musicaFondo = document.getElementById("musica-fondo");
let reproduciendo = false;

btnMusica.addEventListener("click", () => {
    if (!reproduciendo) {
        musicaFondo.play().then(() => {
            reproduciendo = true;
            btnMusica.textContent = "🎶 PAUSAR MÚSICA";
            btnMusica.classList.add("reproduciendo");
        }).catch(error => {
            console.log("Error al reproducir audio:", error);
            alert("No se pudo reproducir el archivo 'monaco.mpeg'. Revisa que esté en la misma carpeta.");
        });
    } else {
        musicaFondo.pause();
        reproduciendo = false;
        btnMusica.textContent = "🎵 PRIMER AÑO";
        btnMusica.classList.remove("reproduciendo");
    }
});