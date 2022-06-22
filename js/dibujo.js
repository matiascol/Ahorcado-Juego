var miLienzo = document.getElementById("lienzo"); 
var lapiz = miLienzo.getContext("2d");
lapiz.strokeStyle="red";
lapiz.lineWidth = 3;

function limpiarDibujo(miLienzo,lapiz){
    miLienzo = document.getElementById("lienzo"); 
    lapiz = miLienzo.getContext("2d");
    lapiz.clearRect(0,0,200,200);
    lapiz.strokeStyle="blue";
    lapiz.lineWidth = 3;
}

function dibujarLinea(xi,yi,xf,yf){
    lapiz.beginPath();
    lapiz.moveTo(xi,yi);
    lapiz.lineTo(xf,yf);
    lapiz.stroke();   
}

function dibujarCirculo(x,y,r,ai,af,sentido){
    lapiz.beginPath();
    lapiz.arc(x,y,r,ai,af,sentido);
    lapiz.stroke();
}

function dibujarAhorcado(etapa){
    switch (etapa){
        case 1: // linea base
            dibujarLinea(20,175,100,175);
            break;
        case 2: // linea hacia arriba
            dibujarLinea(60,175,60,25);
            break;
        case 3: // linea hacia la derecha
            dibujarLinea(59,26,140,26);
            break;
        case 4: // linea hacia abajo
            dibujarLinea(138,25,138,50);
            break;
        case 5: // cabeza
            dibujarCirculo(138,65,15,0,Math.PI*2,false)
            break;
        case 6: // cuerpo
            dibujarLinea(138,78,138,123);
            break;
        case 7: // brazo derecho
            dibujarLinea(138,80,108,110);
            break;
        case 8: // brazo izquierdo
            dibujarLinea(138,80,168,110);
            break;
        case 9: // pierna derecha
            dibujarLinea(138,123,108,153);
            break;
        case 10: // pierna izquierda
            dibujarLinea(138,123,168,153);
            break;
    }
}