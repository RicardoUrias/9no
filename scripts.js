document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const button = document.getElementById('addElement');
    const counter = document.getElementById('counter');

    let elementCount = 0; 

    function addElement() {
        const newElement = document.createElement('img');
        newElement.classList.add('element');
        newElement.src = "img/descarga.png";
        newElement.alt = `Imagen dinámica ${container.childElementCount + 1}`;
        newElement.width = 100;
        newElement.height = 100;
        container.appendChild(newElement);
        elementCount++; 
        updateCounter(); 
    }

    button.addEventListener('click', addElement);

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        console.log('Posición del scroll:', scrollPosition);

        if (scrollPosition > 550) {
            container.style.backgroundColor = '#003785';
            counter.style.display = 'block'; 
        } else {
            container.style.backgroundColor = '';
            counter.style.display = 'none'; 
        }
    });

    function updateCounter() {
        counter.textContent = `"Mike" Wazowski: ${elementCount}`;
    }

    for (let i = 0; i < 1; i++) {
        addElement();
    }
});
