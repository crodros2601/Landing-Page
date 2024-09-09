document.addEventListener("DOMContentLoaded", function(){
    const menuBurger = document.querySelector('.menuBurger');
    const menu = document.querySelector('.menu-mobile');
    const cerrar = document.querySelector('.cerrarMenu')

    menuBurger.addEventListener('click', function(){
        menu.classList.toggle('abrir');
    })

    cerrar.addEventListener('click', function(){
        menu.classList.remove('abrir');
    })

    document.addEventListener('click', function(){
        if(!menu.contains(event.target) && !menuBurger.contains(event.target)){
            menu.classList.remove('abrir');
        }
    })
})

function video(){

    const trailer = document.getElementById('trailer');
    const icono = document.getElementById('icono'); 
    const texto = document.getElementById('texto');

    if(trailer.paused){
        trailer.play();
        icono.src= "./img/pausar.png";
        texto.textContent = "Pausar";
    }else{
        trailer.pause();
        icono.src= "./img/reproducir.png";
        texto.textContent = "Reproducir";
    }
};

function scrollContenido() {

    const objetivo = document.querySelector('.contenedorSeleccion');
    const posicionObjetivo = objetivo.getBoundingClientRect().top + window.pageYOffset;
    const posicionInicial = window.pageYOffset;
    const distancia = posicionObjetivo - posicionInicial;
    const duracion = 1000;
    let tiempoInicio = null;

    function animacionScroll(currentTime){
        if(tiempoInicio === null){
            tiempoInicio = currentTime;
        }
        const lapsoTiempo = currentTime - tiempoInicio;
        const recorrido = ease(lapsoTiempo, posicionInicial, distancia, duracion);
        window.scroll(0, recorrido);

        if(lapsoTiempo < duracion){
            requestAnimationFrame(animacionScroll);
        }
    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animacionScroll);

    setTimeout(() => {
        const flechaScroll = document.querySelector('.flechaScroll');
        flechaScroll.style.transition = 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out';
        flechaScroll.style.opacity = '0';
        flechaScroll.style.visibility = 'hidden';
    }, duracion + 100); 
}

    window.addEventListener('scroll', function () {
        const posicionScroll = window.pageYOffset || document.documentElement.scrollTop;
        const flechaScroll = document.querySelector('.flechaScroll');

        if (posicionScroll <= 0) {
            flechaScroll.style.opacity = '1';
            flechaScroll.style.visibility = 'visible';
        } else {
            flechaScroll.style.opacity = '0';
            flechaScroll.style.visibility = 'hidden';
        }
});

window.addEventListener('scroll', function(){

    const posicionScroll = window.pageYOffset || document.documentElement.scrollTop;
    const flechaScroll = document.querySelector('.flechaScroll');

    if(posicionScroll <= 0){
        flechaScroll.style.opacity = '1';
        flechaScroll.style.visibility = 'visible';

    }else{
        flechaScroll.style.opacity = '0';
        flechaScroll.style.visibility = 'hidden';
    }
});

console.log(window.innerHeight);
console.log(window.innerWidth);

let registro = 0;

function mostrarCarousel(index){

    const carousel = document.querySelectorAll('.carouselImg');
    const total = carousel.length;

    carousel.forEach(carousel => carousel.classList.remove('imagenVisible'));

    if(total <= 2){
        registro = 0;
    }else if(index >= total - 2){
        registro = total - 2;
    }else if(index < 0){
        registro = 0;
    }else{
        registro = index;
    }

    const mover = -(registro * 45);
    document.querySelector('.carouselInterior').style.transform = `translateX(${mover}%)`;

    if(total > 3  && (registro >= total - 2)){
        carousel[total - 2].classList.add('imagenVisible');
        carousel[total - 1].classList.add('imagenVisible');
    }else if(total <= 2){
        carousel.forEach(carousel => carousel.classList.add('imagenVisible'));
    }

}

function carouselAnterior(){
    mostrarCarousel(registro - 1);
}

function carouselSiguiente(){
    mostrarCarousel(registro + 1);
}

mostrarCarousel(registro);