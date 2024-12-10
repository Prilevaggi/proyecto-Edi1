// Archivo: funciones.js

// Mostrar perfil del deportista
function mostrarPerfil(url) {
    window.location.href = url;
}

// Carrusel de imágenes
let indiceActual = 0;
const imagenesCarrusel = document.querySelectorAll('.foto-carrusel');

function mostrarImagenCarrusel(indice) {
    imagenesCarrusel.forEach((img, i) => {
        img.style.display = i === indice ? 'block' : 'none';
    });
}

function siguienteImagen() {
    indiceActual = (indiceActual + 1) % imagenesCarrusel.length;
    mostrarImagenCarrusel(indiceActual);
}

function anteriorImagen() {
    indiceActual = (indiceActual - 1 + imagenesCarrusel.length) % imagenesCarrusel.length;
    mostrarImagenCarrusel(indiceActual);
}

// Inicializar carrusel al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (imagenesCarrusel.length > 0) {
        mostrarImagenCarrusel(indiceActual);
    }

    // Opcional: añadir controles para avanzar o retroceder
    const carrusel = document.querySelector('.carrusel');
    if (carrusel) {
        const botonSiguiente = document.createElement('button');
        botonSiguiente.textContent = 'Siguiente';
        botonSiguiente.onclick = siguienteImagen;

        const botonAnterior = document.createElement('button');
        botonAnterior.textContent = 'Anterior';
        botonAnterior.onclick = anteriorImagen;

        carrusel.parentElement.append(botonAnterior, botonSiguiente);
    }
});
