document.addEventListener('DOMContentLoaded', () => {
    const createStar = () => {
        const star = document.createElement('div');
        star.className = 'star';
        const xy = Math.random() * 100;
        const duration = Math.random() * (1.5 - 0.5) + 0.5;

        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `-${duration}s`;

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    };

    // Create 50 stars
    Array.from({ length: 50 }).forEach(createStar);

    // Create a star every 100ms
    setInterval(createStar, 100);
});
