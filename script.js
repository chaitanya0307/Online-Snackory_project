// Simple animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const cuisineItems = document.querySelectorAll('.cuisine-item');

    cuisineItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';

        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 100); // Stagger animations
    });
});

// Search functionality (Basic Filtering Example)
const searchInput = document.querySelector('.search-bar input');
const cuisines = document.querySelectorAll('.cuisine-item');

searchInput.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    
    cuisines.forEach(cuisine => {
        const text = cuisine.innerText.toLowerCase();
        if (text.includes(searchTerm)) {
            cuisine.style.display = 'flex';
        } else {
            cuisine.style.display = 'none';
        }
    });
});
