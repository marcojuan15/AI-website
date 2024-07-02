document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('starsCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const stars = [];
    const numStars = 15;

    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 10 + 5; // Random size between 5 and 15
            this.speedX = (Math.random() - 0.5) * 0.2; // Slower speed
            this.speedY = (Math.random() - 0.5) * 0.2; // Slower speed
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.01; // Slow rotation
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;

            // Bounce off edges
            if (this.x < this.size || this.x > canvas.width - this.size) {
                this.speedX = -this.speedX;
            }
            if (this.y < this.size || this.y > canvas.height - this.size) {
                this.speedY = -this.speedY;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const angle = (i * 4 * Math.PI) / 5;
                const x = Math.cos(angle) * this.size;
                const y = Math.sin(angle) * this.size;
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.closePath();

            // Create glow effect
            ctx.shadowColor = '#F39C12';
            ctx.shadowBlur = 15;

            ctx.fillStyle = '#F39C12';
            ctx.fill();

            ctx.restore();
        }
    }

    function init() {
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            star.update();
            star.draw();
        });
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', function() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        stars.length = 0; // Clear existing stars
        init(); // Reinitialize stars
    });

    // Rest of your testimonial section JavaScript
    // ...
});