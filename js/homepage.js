document.addEventListener('DOMContentLoaded', function() {
    const bookCallBtn = document.getElementById('bookCallBtn');
    
    bookCallBtn.addEventListener('click', function() {
        // Replace 'YOUR_BOOKING_LINK' with the actual link you want to open
        window.open('YOUR_BOOKING_LINK', '_blank');
    });

    const movingLight = document.querySelector('.moving-light');
    const homepage = document.querySelector('.container');

    function checkScroll() {
        const homepageRect = homepage.getBoundingClientRect();
        
        if (homepageRect.top >= 0) {
            movingLight.classList.add('visible');
        } else {
            movingLight.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load

    // Handle video playback on mobile devices
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    // Function to check if the device is mobile
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // If it's a mobile device, remove autoplay attribute and add poster
    if (isMobile()) {
        videos.forEach(video => {
            video.removeAttribute('autoplay');
            video.setAttribute('poster', 'path/to/poster-image.jpg'); // Replace with actual poster image path
        });
    }

    const topics = [
        "A.I. for Entrepreneurs",
        "Process Automation",
        "AI-Powered Analytics",
        "AI Fundamentals",
        "Custom Training Programs"
    ];
    const typingText = document.getElementById('typing-text');
    let topicIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;

    function typeWriter() {
        const currentTopic = topics[topicIndex];

        if (!isWaiting) {
            if (!isDeleting && charIndex <= currentTopic.length) {
                typingText.textContent = currentTopic.substring(0, charIndex);
                charIndex++;
                if (charIndex > currentTopic.length) {
                    isWaiting = true;
                    setTimeout(() => {
                        isWaiting = false;
                        isDeleting = true;
                    }, 2000); // Wait for 2 seconds before deleting
                }
            } else if (isDeleting && charIndex >= 0) {
                typingText.textContent = currentTopic.substring(0, charIndex);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    topicIndex = (topicIndex + 1) % topics.length;
                }
            }
        }

        const typingSpeed = isDeleting ? 50 : 100; // Faster deletion
        setTimeout(typeWriter, typingSpeed);
    }

    // Start the typing animation
    typeWriter();
});