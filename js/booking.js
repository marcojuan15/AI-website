document.addEventListener('DOMContentLoaded', function() {
    const bookCallBtnLarge = document.getElementById('bookCallBtnLarge');
    
    bookCallBtnLarge.addEventListener('click', function() {
        // Replace 'YOUR_BOOKING_LINK' with the actual link you want to open
        window.open('YOUR_BOOKING_LINK', '_blank');
    });
});