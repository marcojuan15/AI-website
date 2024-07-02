document.addEventListener('DOMContentLoaded', function() {
    const logos = document.querySelectorAll('.logo');
    const logoSection = document.querySelector('.logo-section');

    function handleLogoVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;
        const triggerTop = window.innerHeight / 5;
        
        const sectionTop = logoSection.getBoundingClientRect().top;
        const sectionBottom = logoSection.getBoundingClientRect().bottom;
        
        if(sectionTop < triggerBottom && sectionBottom > triggerTop) {
            logos.forEach((logo, index) => {
                setTimeout(() => {
                    logo.classList.add('show');
                }, 200 * index);
            });
        } else {
            logos.forEach((logo) => {
                logo.classList.remove('show');
            });
        }
    }

    window.addEventListener('scroll', handleLogoVisibility);
    handleLogoVisibility(); // Check on load in case the section is already in view
});