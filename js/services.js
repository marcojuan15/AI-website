document.addEventListener('DOMContentLoaded', function() {
    const serviceRows = document.querySelectorAll('.service-row');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const serviceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const serviceItems = entry.target.querySelectorAll('.service-item');
            const connectingLine = entry.target.querySelector('.connecting-line');
            
            if (entry.isIntersecting) {
                serviceItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                });

                setTimeout(() => {
                    connectingLine.classList.add('visible');
                }, serviceItems.length * 100 + 100);
            } else {
                serviceItems.forEach(item => {
                    item.classList.remove('visible');
                });
                connectingLine.classList.remove('visible');
            }
        });
    }, observerOptions);

    serviceRows.forEach(row => {
        serviceObserver.observe(row);
    });
});