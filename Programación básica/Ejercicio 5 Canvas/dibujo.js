//Dibujando en canvas
//Funciones clase

//Variables
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, yf;


//Invocar funcion

while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea("blue", 1, yi, xf, 299);
    console.log("Linea " + l)
    l++;
}

dibujarLinea("blue",1,1,0,300)
dibujarLinea("blue",1,299,299,299)

//Declarar funcion
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
}