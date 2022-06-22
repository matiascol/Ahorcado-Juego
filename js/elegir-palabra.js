var ulPalabraElegida = document.getElementById('palabra-elegida');

function elegirPalabra(arrayPalabras,arrayPalabrasYaElegidas){
    var detener = false;
    var palabraDelArray = '';
    if(arrayPalabras.length == arrayPalabrasYaElegidas.length){
        arrayPalabrasYaElegidas.length = 0;
    }
    while (!detener){
        palabraDelArray = arrayPalabras[Math.floor(Math.random()*arrayPalabras.length)];
        if(!arrayPalabrasYaElegidas.includes(palabraDelArray)){
            detener = true;
            arrayPalabrasYaElegidas.push(palabraDelArray);
            return palabraDelArray;
        }
    }   
}

function limpiarUlPalabraElegida(){
    ulPalabraElegida.innerHTML="";
}

function mostrarLetrasNoAcertadas(){
    var liLetrasPalabraElegida = document.getElementsByClassName("letra-palabra-elegida");
    for (var i = 0;i < liLetrasPalabraElegida.length;i++){
        if (!liLetrasPalabraElegida[i].classList.contains("palabra-elegida-acertada")){
            liLetrasPalabraElegida[i].classList.add("palabra-elegida-no-acertada");
        }
    }
}

function ponerPalabra(palabraElegida) {

    var contador = 0;
    var contenido = '';    
    
    for(var letra of palabraElegida){
        contador +=1;
        contenido = `<li id="letra${contador}" class="letra-palabra-elegida">${letra}</li>`;
        ulPalabraElegida.innerHTML += contenido;
    };
}

function seleccionarPalabra(arrayPalabras,arrayPalabrasYaElegidas){
    var palabraElegida = '';
    if (jugarConAgregada){
        palabraElegida = palabraAgregada;
        console.log(palabraElegida);
        limpiarUlPalabraElegida();
        ponerPalabra(palabraElegida);
    }
    else{
        palabraElegida = elegirPalabra(arrayPalabras,arrayPalabrasYaElegidas);
        console.log(palabraElegida);
        limpiarUlPalabraElegida();
        ponerPalabra(palabraElegida);
    }
}