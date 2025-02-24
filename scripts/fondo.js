document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("starsCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1 + 0.5,
            speed: Math.random() * 0.3 + 0.1,
        });
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // 0.5 es el nivel de opacidad


        stars.forEach((star) => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 6);
            ctx.fill();

            // Movimiento descendente
            star.y += star.speed;

            // Si la estrella sale de la pantalla, la reposicionamos arriba
            if (star.y > canvas.height) {
                star.y = 1;
                star.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animateStars);
    }

    animateStars();
});
