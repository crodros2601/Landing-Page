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

    document.querySelector('.contenedorSeleccion').scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(() => {
        const flechaScroll = document.querySelector('.flechaScroll');
        flechaScroll.style.opacity = '0';
        flechaScroll.style.visibility = 'hidden';
    },100);
};

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