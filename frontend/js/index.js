// Logo animation
const logo = document.getElementById('logo');
const loader = document.getElementById('loader-overlay');

logo.addEventListener('click', () => {
    logo.style.transition = 'transform 0.2s';
    logo.style.transform = 'scale(1.15)';
    setTimeout(() => {
        logo.style.transform = 'scale(1)';
        setTimeout(() => {
            loader.classList.add('active');
            setTimeout(() => {
                window.location.href = '/frontend/html/lobby.html';
            }, 1200);
        }, 150);        
    }, 150);
});