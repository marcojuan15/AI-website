document.addEventListener('DOMContentLoaded', function() {
    const text = "Andreas Massouras";
    const typingText = document.getElementById('typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust typing speed here
        } else {
            // Remove the blinking cursor effect after typing is complete
            typingText.style.borderRight = 'none';
        }
    }

    // Start the typing animation
    typeWriter();
});