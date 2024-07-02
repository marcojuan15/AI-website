document.addEventListener('DOMContentLoaded', function() {
    const testimonialSection = document.querySelector('.testimonials');
    const fiveStars = document.querySelector('.five-stars');
    const testimonialBoxes = document.querySelectorAll('.testimonial-box');
    const testimonialContainer = document.querySelector('.testimonial-container');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate 5-star image
                fiveStars.style.clipPath = 'inset(0 0 0 0)';

                // Animate testimonial boxes
                testimonialBoxes.forEach((box, index) => {
                    setTimeout(() => {
                        box.style.opacity = 1;
                        box.style.transform = 'translateY(0) scale(1)';
                    }, index * 200);
                });
            } else {
                // Hide elements when section is not in view
                fiveStars.style.clipPath = 'inset(0 50% 0 50%)';

                testimonialBoxes.forEach(box => {
                    box.style.opacity = 0;
                    box.style.transform = 'translateY(-30px) scale(0.95)';
                });
            }
        });
    }, observerOptions);

    sectionObserver.observe(testimonialSection);

    // Set initial styles
    fiveStars.style.clipPath = 'inset(0 50% 0 50%)';
    fiveStars.style.transition = 'clip-path 2s ease';

    testimonialBoxes.forEach(box => {
        box.style.opacity = 0;
        box.style.transform = 'translateY(-30px) scale(0.95)';
        box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Add touch swiping for mobile
    let startX;
    let scrollLeft;

    testimonialContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - testimonialContainer.offsetLeft;
        scrollLeft = testimonialContainer.scrollLeft;
    });

    testimonialContainer.addEventListener('touchmove', (e) => {
        if (!startX) return;
        const x = e.touches[0].pageX - testimonialContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        testimonialContainer.scrollLeft = scrollLeft - walk;
        e.preventDefault();
    });

    testimonialContainer.addEventListener('touchend', () => {
        startX = null;
    });
});