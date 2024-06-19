document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carrusel .slide');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const nav = document.querySelector('.nav');
    let lastScrollTop = 0;
    const hideAfterScroll = 500; 

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function moveSlide(step) {
        slideIndex += step;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    // Inicializar el carrusel
    showSlide(slideIndex);

    // Añadir eventos click a las flechas
    leftArrow.addEventListener('click', () => moveSlide(-1));
    rightArrow.addEventListener('click', () => moveSlide(1));

    // Manejar el scroll para ocultar/mostrar la barra de navegación
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > hideAfterScroll) {
            // Scroll hacia abajo - ocultar la barra de navegación
            nav.style.top = '-100px';
        } else if (scrollTop <= hideAfterScroll) {
            // Scroll hacia arriba o menos del umbral - mostrar la barra de navegación
            nav.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
});
