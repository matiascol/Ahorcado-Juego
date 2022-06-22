var ventanaVictoria = document.getElementById("ventana-victoria");
var palabraVictoria = document.getElementById("palabra-victoria");
var botonVictoria = document.getElementById("aceptar-victoria");
var ventanaDerrota = document.getElementById("ventana-perdio");
var botonDerrota = document.getElementById("aceptar-derrota");
var ventanaReinicio = document.getElementById("ventana-reinicio");
var botonAceptarReinicio = document.getElementById("aceptar-reinicio");
var botonCancelarReinicio = document.getElementById("cancelar-reinicio");
var ventanaDesistir = document.getElementById("ventana-desistir");
var botonAceptarDesistir = document.getElementById("aceptar-desistir");
var botonCancelarDesistir = document.getElementById("cancelar-desistir");
var ventanaVerificarPalabra = document.getElementById("ventana-verificar-palabra");
var mensajeVerificarPalabra = document.getElementById("msj-verificar-palabra");
var botonAceptarVerificar = document.getElementById("aceptar-verificar");
var juegoTerminado = false; 

function msjErrorSeleccion(elemento,msj){
    elemento.innerHTML=msj;
    elemento.classList.add("mensaje-solo-letras-visible");
    elemento.classList.remove("invisible");
    setTimeout(()=>{
                        elemento.classList.remove("mensaje-solo-letras-visible");
                        elemento.classList.add("invisible");
                    },2000);
}

function aceptarDerrota(){
    ventanaDerrota.close();
    botonNuevoJuego.addEventListener('click',verMensajeReinicio);
    botonDesistir.addEventListener('click',verMensajeDesistir);

}

function verMensajePerdio(){
    var divCanvas = document.getElementById("contenedor-lienzo");
    juegoTerminado = true;
    divCanvas.classList.add("contenedor-lienzo-tiembla");
    setTimeout(()=>{divCanvas.classList.remove("contenedor-lienzo-tiembla");},1000);
    mostrarLetrasNoAcertadas();
    ventanaDerrota.showModal();
    botonDerrota.addEventListener('click',aceptarDerrota);
}

function aceptarVictoria(){
    ventanaVictoria.close();
}

function verMensajeVictoria(palabra=""){
    juegoTerminado = true;
    palabraVictoria.innerHTML=palabra.toUpperCase();
    setTimeout(()=>{ventanaVictoria.showModal();},500);
    botonVictoria.addEventListener('click',aceptarVictoria)
}

function aceptoReinicio(){
    ventanaReinicio.close();
    jugar(arrayPalabras,arrayPalabrasYaElegidas);
    
}

function verMensajeReinicio(){
    if(!juegoTerminado){
        jugarConAgregada = false;
        ventanaReinicio.showModal();
        botonAceptarReinicio.addEventListener('click',aceptoReinicio);
        botonCancelarReinicio.addEventListener('click',function(){ventanaReinicio.close();});
    }else{
        jugarConAgregada = false;
        jugar(arrayPalabras,arrayPalabrasYaElegidas);
    };
};

function cancelaDesistir(){
    ventanaDesistir.close();
}

function aceptaDesistir(){
    consMsjInicio = true;
    ventanaDesistir.close();
    limpiar();
    seccionJuego.classList.add('invisible');
    seccionMenuPrincipal.classList.remove('invisible');
}

function verMensajeDesistir(){
    juegoTerminado = false;
    ventanaDesistir.showModal();
    botonAceptarDesistir.addEventListener('click',aceptaDesistir);
    botonCancelarDesistir.addEventListener('click',cancelaDesistir);
}

function verMensajeVerificarPalabra(mensaje){
    mensajeVerificarPalabra.innerHTML = mensaje;
    ventanaVerificarPalabra.showModal();
    botonAceptarVerificar.addEventListener('click',function(){
        ventanaVerificarPalabra.close();        
    })
}