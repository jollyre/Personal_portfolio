const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save the preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// script.js

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'visible' class to sections in the viewport
function checkVisibility() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Check visibility on scroll
window.addEventListener('scroll', checkVisibility);

// Initial check in case sections are already in view
checkVisibility();