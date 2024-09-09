document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-content');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let index = 0;

    function updateCarousel() {
        const items = document.querySelectorAll('.carousel-content p');
        const itemWidth = items[0].offsetWidth;
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    prevButton.addEventListener('click', function() {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function() {
        const items = document.querySelectorAll('.carousel-content p');
        if (index < items.length - 1) {
            index++;
            updateCarousel();
        }
    });

    document.getElementById('callButton').addEventListener('click', function() {
        window.location.href = 'tel:+89270295842';
    });
});
