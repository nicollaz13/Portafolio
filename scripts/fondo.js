// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    
    // Selecciona el canvas del documento por su ID
    const canvas = document.getElementById("starsCanvas");

    // Obtiene el contexto 2D del canvas para poder dibujar
    const ctx = canvas.getContext("2d");

    // Función para ajustar el tamaño del canvas al tamaño de la ventana
    function resizeCanvas() {
        canvas.width = window.innerWidth; // Ancho del canvas igual al ancho de la ventana
        canvas.height = window.innerHeight; // Alto del canvas igual al alto de la ventana
    }

    // Llama a la función para asegurarse de que el canvas tenga el tamaño correcto al iniciar
    resizeCanvas();

    // Si el usuario cambia el tamaño de la ventana, ajustamos el canvas nuevamente
    window.addEventListener("resize", resizeCanvas);

    // Array donde se almacenarán todas las estrellas
    const stars = [];

    // Número total de estrellas a dibujar
    const numStars = 200;

    // Genera cada estrella con valores aleatorios y las guarda en el array
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,  // Posición X aleatoria dentro del canvas
            y: Math.random() * canvas.height, // Posición Y aleatoria dentro del canvas
            radius: Math.random() * 0.8 + 0.5,  // Tamaño de la estrella (entre 0.5 y 1.5)
            speed: Math.random() * 0.2 + 0.3, // Velocidad de movimiento (entre 0.1 y 0.4)
        });
    }

    // Función que se encarga de animar las estrellas
    function animateStars() {
        // Borra todo el contenido del canvas antes de dibujar cada frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Color de las estrellas con opacidad del 50%
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";

        // Recorre cada estrella del array y la dibuja en el canvas
        stars.forEach((star) => {
            ctx.beginPath(); // Inicia el dibujo de la estrella
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2); // Dibuja un círculo
            ctx.fill(); // Rellena la estrella con el color definido en fillStyle

            // Mueve la estrella hacia abajo en la pantalla según su velocidad
            star.y += star.speed;

            // Si la estrella sale de la pantalla (llega al final), la reposicionamos arriba
            if (star.y > canvas.height) {
                star.y = 1; // Se reinicia la posición en la parte superior
                star.x = Math.random() * canvas.width; // Se genera una nueva posición X aleatoria
            }
        });

        // Llama a la función de animación en el siguiente frame para crear el efecto de movimiento
        requestAnimationFrame(animateStars);
    }

    // Inicia la animación de las estrellas
    animateStars();
});
