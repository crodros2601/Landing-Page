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

}