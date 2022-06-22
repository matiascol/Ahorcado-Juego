var botonAgregarPalabra = document.getElementById("agregar-palabra");
var botonCancelarAgregarPalabra = document.getElementById("cancelar-agregar-palabra");
var palabraSeleccionada = document.getElementById("ingrese-palabra");
var jugarConAgregada = false
var palabraAgregada = '';

function incluyeNoLetras(palabra){
    var respuesta = false;
    for(var i = 0;i < palabra.length;i++){
        if (!(palabra[i] <= 'Z' && palabra[i] >= 'A') && palabra[i] != 'Ñ'){
            respuesta = true;
        };
    };
    return respuesta;
}

function verificarPalabra(palabra){
    var respuesta = false;
    if (palabra.length == 0){
        verMensajeVerificarPalabra("Debe escribir una palabra");
    }else if(arrayPalabras.includes(palabra)){
        verMensajeVerificarPalabra(`La palabra ${palabra} ya esta en el juego.`);
    }else if(incluyeNoLetras(palabra)){
        verMensajeVerificarPalabra('No se permiten signos, numeros o letras acentuadas');
    }else{
        respuesta = true;
    };
    return respuesta;
}

function eligioAgregarPalabra(){
    var palabra = palabraSeleccionada.value.toUpperCase();
    if (verificarPalabra(palabra)){
        arrayPalabras.push(palabra);
        verMensajeVerificarPalabra(`¡¡¡La palabra ${palabra} se agregó al juego!!! Jugar con la palabra agregada.`);
        palabraAgregada = palabra;
        palabraSeleccionada.innerText = "";
        jugarConAgregada = true;
        eligioJuego();
    }
}

function eligioCancelarAgregarPalabra(){
    seccionGuardado.classList.add('invisible');
    seccionMenuPrincipal.classList.remove('invisible');
}

function agregarPalabra(arrayPalabras){
    palabraSeleccionada.focus();
    botonAgregarPalabra.addEventListener('click',eligioAgregarPalabra);
    botonCancelarAgregarPalabra.addEventListener('click',eligioCancelarAgregarPalabra);

}