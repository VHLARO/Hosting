function updateCountdown() {
    const targetDate = new Date("2025-03-01T00:00:00").getTime(); // Usar fecha y hora de prueba
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "¡La carta ha llegado! Dale click a la imagen";
        
        // Habilitar el enlace de descarga
        const downloadLink = document.getElementById("downloadLink");
        if (downloadLink) {
            downloadLink.style.pointerEvents = 'auto'; // Permite hacer clic
            downloadLink.style.opacity = 1; // Muestra el enlace
        }
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) { // Asegura que el elemento exista
        countdownElement.innerHTML = `Nueva carta en: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Desactivar el enlace de descarga si aún no ha llegado el tiempo
    const downloadLink = document.getElementById("downloadLink");
    if (downloadLink) {
        downloadLink.style.pointerEvents = 'none'; // Desactiva el enlace
        downloadLink.style.opacity = 0.5; // Hace el enlace opaco
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();


document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Posición aleatoria en el ancho de la pantalla
        heart.style.left = Math.random() * 100 + "vw";

        // Tamaño aleatorio (ahora más grande)
        const size = Math.random() * 30 + 30 + "px";  // Tamaño más grande
        heart.style.width = size;
        heart.style.height = size;

        // Duración aleatoria de la animación
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";

        heartsContainer.appendChild(heart);

        // Eliminar el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Generar corazones cada 0.5 segundos
    setInterval(createHeart, 500);
});
