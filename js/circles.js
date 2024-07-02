document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('circleCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const circles = [];
    const numCircles = 20;

    class Circle {
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.dx = (Math.random() - 0.5) * 0.5; // Reduced speed
            this.dy = (Math.random() - 0.5) * 0.5; // Reduced speed
            this.color = `rgba(246, 44, 98, ${Math.random() * 0.3 + 0.1})`;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();

            // Add glow effect
            ctx.shadowBlur = 20;
            ctx.shadowColor = 'rgba(246, 44, 98, 0.5)';
        }

        update() {
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }

    function init() {
        circles.length = 0; // Clear existing circles
        for (let i = 0; i < numCircles; i++) {
            const radius = Math.random() * 10 + 5; // Varied sizes from 10 to 40
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            circles.push(new Circle(x, y, radius));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        circles.forEach(circle => {
            circle.update();
        });
    }

    init();
    animate();

    window.addEventListener('resize', function() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        init();
    });
});