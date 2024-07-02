document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentlyActiveButton = document.querySelector('.faq-button.active');
            const currentlyActiveAnswer = document.querySelector('.faq-answer.active');

            if (currentlyActiveButton && currentlyActiveButton !== this) {
                currentlyActiveButton.classList.remove('active');
                currentlyActiveAnswer.classList.remove('active');
                currentlyActiveAnswer.style.display = 'none';
            }

            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.classList.remove('active');
                setTimeout(() => {
                    answer.style.display = 'none';
                }, 300); // Match this with your transition time
            } else {
                answer.style.display = 'block';
                setTimeout(() => {
                    answer.classList.add('active');
                }, 10);
            }
        });
    });
});