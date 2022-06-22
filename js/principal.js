var ventanaInicio = document.getElementById("ventana-inicio");
var botonInicio = document.getElementById("ingresar-juego");
var botonGuardar = document.getElementById("guardar-palabra");
var seccionMenuPrincipal = document.getElementById("menu-principal");
var seccionJuego = document.getElementById("juego");
var botonNuevoJuego = document.getElementById("nuevo-juego");
var botonDesistir = document.getElementById("desistir");

var seccionGuardado = document.getElementById("guardado-palabra");
var arrayPalabras = ['CEPILLO','MESADA','PERRO','PLAYA','PALABRA','PLANTA','SEMILLA','VEHICULO','ARENA','PALMERA','COCINAR','MANZANA','JUEGO'];
var arrayPalabrasYaElegidas = [];

function mostrarVentana(ventana){
    if(ventana.open){
        ventana.close();
    };
    ventana.showModal();
}

function insertarTeclado(){
    var tecladoVirtual = document.getElementById("teclado-virtual");
    var boton = '';
    var contenidoHTML = '';
    var letraContenida = '';
    for(var i = 65;i<=90;i++){
        
        letraContenida = String.fromCodePoint(i)
        if (letraContenida == 'O'){
            contenidoHTML += '<button type="button" id="botonNN" class = "boton-letra" onclick="letraDesdeBoton(241)">Ñ</button>'
        }
        boton = `<button id="boton${letraContenida}" type="button" class = "boton-letra" onclick="letraDesdeBoton(${i})">${letraContenida}</button>`
        contenidoHTML += boton;
    };
    tecladoVirtual.innerHTML = contenidoHTML;
}


function limpiar(){
    limpiarDibujo(miLienzo,lapiz);
    limpiarUlPalabraElegida();
    limpiarUlLetrasNoEncotradas();
    limpiarJugar(contadorErrores,letrasIngresadas);
    contadorErrores=0;
    letrasIngresadas=[];
}

function eligioJuego(){
    seccionMenuPrincipal.classList.add("invisible");
    seccionGuardado.classList.add("invisible");
    seccionJuego.classList.remove("invisible");
    botonNuevoJuego.addEventListener('click',verMensajeReinicio);
    botonDesistir.addEventListener('click',verMensajeDesistir);
    jugar(arrayPalabras,arrayPalabrasYaElegidas);
}

function eligioGuardado(){
    seccionMenuPrincipal.classList.add("invisible");
    seccionGuardado.classList.remove("invisible");
    seccionJuego.classList.add("invisible");
    agregarPalabra(arrayPalabras);
    
}

function inicio(conMsjInicio){
    
    limpiar();
    insertarTeclado();    
    botonInicio.addEventListener('click',eligioJuego);
    botonGuardar.addEventListener('click',eligioGuardado);

};