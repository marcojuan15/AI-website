document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateBoxes(entry.target.closest('.why-choose-us'));
            } else {
                hideBoxes(entry.target.closest('.why-choose-us'));
            }
        });
    }, { threshold: 0.2 });

    const whyChooseUsSection = document.querySelector('.why-choose-us');
    observer.observe(whyChooseUsSection);

    function animateBoxes(section) {
        const boxes = section.querySelectorAll('.reason-box');
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('visible');
            }, index * 200); // Stagger the animation
        });
    }

    function hideBoxes(section) {
        const boxes = section.querySelectorAll('.reason-box');
        boxes.forEach(box => {
            box.classList.remove('visible');
        });
    }
});