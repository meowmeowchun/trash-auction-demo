document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const slideWidth = 320; // Width of each slide including margin

    function cloneSlides() {
        const slides = document.querySelectorAll('.carousel-item');
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            carousel.appendChild(clone);
        });
    }

    function slideCarousel(direction) {
        if (direction === 'left') {
            carousel.style.transition = 'transform 0.5s ease';
            carousel.style.transform = `translateX(${slideWidth}px)`;
            setTimeout(() => {
                carousel.style.transition = 'none';
                carousel.style.transform = 'translateX(0)';
                carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
            }, 500);
        } else if (direction === 'right') {
            carousel.style.transition = 'transform 0.5s ease';
            carousel.style.transform = `translateX(-${slideWidth}px)`;
            setTimeout(() => {
                carousel.style.transition = 'none';
                carousel.style.transform = 'translateX(0)';
                carousel.appendChild(carousel.firstElementChild);
            }, 500);
        }
    }

    cloneSlides();

    leftArrow.addEventListener('click', () => slideCarousel('left'));
    rightArrow.addEventListener('click', () => slideCarousel('right'));
});
