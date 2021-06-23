import { cuadros } from './cuadros.js'
import { slide } from './slide.js'

// Render de un slide por producto
cuadros.forEach(element => {
    var s = document.createElement('div');
    s.innerHTML = "<img src='" + element.img + "' style='width:25%' alt='...'>";
    s.classList.add("carousel-item");
    document.getElementById("carouselCuadrosSlides").append(s);
})
