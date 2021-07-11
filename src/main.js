import { cuadros } from './cuadros.js'
import { createSlide } from './slide.js'

// Render de un slide por producto
cuadros.forEach(element => {
    createSlide(element.img, element.name, element.description, element.footer);
})
