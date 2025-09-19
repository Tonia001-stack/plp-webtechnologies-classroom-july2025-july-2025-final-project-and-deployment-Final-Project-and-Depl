document.addEventListener('DOMContentLoaded', () => {
    // Select elements from the DOM
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    // Add a click event listener to the hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class on both the hamburger and the nav list
            hamburger.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }

    // Optional: Close the menu when a link is clicked (for single-page sites)
    // navList.querySelectorAll('a').forEach(link => {
    //     link.addEventListener('click', () => {
    //         hamburger.classList.remove('active');
    //         navList.classList.remove('active');
    //     });
    // });
});