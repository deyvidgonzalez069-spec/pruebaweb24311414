// 1. Seleccionamos los elementos necesarios del HTML
const snorlaxImg = document.querySelector('.Imagen img');
const overlay = document.getElementById('fullScreenOverlay');
const fullImg = document.getElementById('fullScreenImage');
const closeBtn = document.querySelector('.close-btn');

// 2. Función para abrir la imagen en pantalla completa
snorlaxImg.addEventListener('click', () => {
    overlay.style.display = 'flex'; 
    
    fullImg.src = 'pelon.png'; 
});

// 3. Función para cerrar al hacer clic en la "X"
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'; 
});

// 4. Extra: Cerrar también si haces clic en el fondo negro (fuera de la imagen)
overlay.addEventListener('click', (e) => {
    if (e.target !== fullImg) {
        overlay.style.display = 'none';
    }
});