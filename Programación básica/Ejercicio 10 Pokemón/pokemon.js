var imagenes = [];
imagenes ["Bolbasor"] = "vaca.png";
imagenes ["Squartle"] = "pollo.png";
imagenes ["Charmander"] = "cerdo.png";


class Pokemon
{
constructor(n, v, a)
    {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write(this.nombre + "<br />");
        document.write(this.vida + "<br />");
        document.write(this.ataque + "<hr />");
    }    
}

var Bolbasor = new Pokemon("Bolbasor",100,50);
var Squartle = new Pokemon("Squartle",80,30);
var Charmander = new Pokemon("Charmander",50,10);

Bolbasor.mostrar();
Squartle.mostrar();
Charmander.mostrar();