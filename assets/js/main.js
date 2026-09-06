
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
});
