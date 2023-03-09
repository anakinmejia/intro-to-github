var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;


dibujarLinea("red", 149, 149, 151, 151, papel)


//Declarar funcion representacion grafica
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var colorcito = "black";
    var movimiento = 5;
    if(evento.keyCode == teclas.UP)
    {
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
    }

    if(evento.keyCode == teclas.DOWN)
    {
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
    }

    if(evento.keyCode == teclas.LEFT)
    {
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
    }
    if(evento.keyCode == teclas.RIGHT)
    {
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
    }

}