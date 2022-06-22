var mensajeSoloLetras = document.getElementById("mensaje-solo-letras")
var liLetras = document.getElementsByClassName("letra-palabra-elegida");
var ulLetrasNoEncontradas = document.getElementById("letras-no-encontradas");
var contadorErrores = 0;
var letrasIngresadas = [];


function limpiarUlLetrasNoEncotradas(){
    ulLetrasNoEncontradas.innerHTML = "";
}

function limpiarJugar(){
    contadorErrores = 0;
    letrasIngresadas = [];
    limpiarDibujo();
    limpiarUlLetrasNoEncotradas();
}

function validarLetra(letra){
    var respuesta = {esLetra:false,estaEnLetrasIngresadas:false};
    if((letra.toUpperCase() >= 'A' && letra.toUpperCase() <= 'Z') || (letra.toUpperCase() == 'Ñ')){
        respuesta.esLetra=true;
        respuesta.estaEnLetrasIngresadas = false
        letrasIngresadas.forEach(posicion => {
            if(letra.toUpperCase() == posicion){
                respuesta.estaEnLetrasIngresadas = true;
            }
        });
    }else{
        respuesta.esLetra = false;
    }
    return respuesta;
}

function traerPalabraElegida(liLetras){
    
    var letrasPalabraElegida = [];
    for (var i = 0;i < liLetras.length;i++){
        letrasPalabraElegida.push(liLetras[i].innerText);
    }    
    return letrasPalabraElegida;
}

function completarCasillaEnPalabra(posicion){
    liLetras[posicion].classList.add("palabra-elegida-acertada");
}

function buscarLetra(letra,palabra){
    var encontroLetra = false;
    for(var i=0;i<palabra.length;i++){
        if(letra == palabra[i]){
            encontroLetra = true;
            completarCasillaEnPalabra(i);
        }
    }
    return encontroLetra
}


function letraNoEncontrada(letra){
    var contenido='';
    contenido = `<li class="letra-no-encontrada">${letra}</li>`;
    ulLetrasNoEncontradas.innerHTML += contenido;
}

function verificarVictoria(palabra){
    esVictoria = true;
    for(var i = 0; i < liLetras.length ; i++){
        if (!liLetras[i].classList.contains("palabra-elegida-acertada")){
            esVictoria = false;
            break;
        }
    }
    if (esVictoria){
        juegoTerminado = true;
        setTimeout(verMensajeVictoria(palabra),1000);
    }
}

function buscarEnPalabra(letra,palabra){
    
    var letraEncontrada = buscarLetra(letra,palabra);
    if (letraEncontrada){
        verificarVictoria(palabra.join(""));
    }else{
        letraNoEncontrada(letra);
        contadorErrores+=1;
        dibujarAhorcado(contadorErrores);
        if(contadorErrores == 10){
            juegoTerminado = true;
            verMensajePerdio();
            
        }
    }    
}

function leerLetra(elEvento){
    return elEvento.key;
}

function letraSeleccionada(letra,arrayPalabraElegida){
    var caracterElegido = validarLetra(letra);
    if (caracterElegido.esLetra && !caracterElegido.estaEnLetrasIngresadas){
        buscarEnPalabra(letra.toUpperCase(),arrayPalabraElegida);
        letrasIngresadas.push(letra.toUpperCase());
    }else{
        mensajeSoloLetras.classList.add("invisible");
        if (!caracterElegido.esLetra){
            msjErrorSeleccion(mensajeSoloLetras,"¡¡¡SOLO SE PERMITEN LETRAS!!!");
        }else if(caracterElegido.estaEnLetrasIngresadas){
            msjErrorSeleccion(mensajeSoloLetras,`LA LETRA "${letra.toUpperCase()}" YA SE ELIGIO.`);
        }
    }

}

function letraDesdeBoton(codigoLetra){
    var arrayPalabraElegida = traerPalabraElegida(liLetras);
    var letra = String.fromCharCode(codigoLetra);
    letraSeleccionada(letra,arrayPalabraElegida);
}

function alPresionarTecla(e){
    var arrayPalabraElegida = traerPalabraElegida(liLetras);
    var letra = leerLetra(e);
    letraSeleccionada(letra,arrayPalabraElegida);    
}

function jugar(arrayPalabras,arrayPalabrasYaElegidas){
    limpiarJugar();
    juegoTerminado = false;
    seleccionarPalabra(arrayPalabras,arrayPalabrasYaElegidas);
    document.addEventListener('keypress',alPresionarTecla);
}