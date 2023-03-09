//Dibujando en canvas
//Funciones clase

//Variables de texto
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporclick);

//Variables representacion grafica
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

//Declarar funcion representacion grafica
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
}


function dibujoporclick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf
    var espacio = ancho / lineas;


//Criterios de cálculo
while(l < lineas)
{
    yi = espacio * l;
    xf = espacio * (l+1);
    dibujarLinea("blue", 1, yi, xf, 299);
    console.log("Linea " + l)
    l++;
}

dibujarLinea("blue",1,1,0,300)
dibujarLinea("blue",1,299,299,299)

}