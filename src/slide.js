export function createSlide(img, name, description) {
    var s = document.createElement('div');
    s.innerHTML = "<div class='container'><div class='row'><div class='col-md-6 col-12 mt-4'><img class='container-galeria_logo' src='../nowen/galeria/logoimggaleria.png'><div class='container-galeria_txt'><h1>" + name + "</h1><h2>" + description + "</h2></div></div><div class='col-md-6 col-12 mt-5 mb-5 text-center'><img class='container-galeria_cuadro' src='"+img+"'></div></div></div>"
    s.classList.add("carousel-item");
    document.getElementById("carouselCuadrosSlides").append(s);
}