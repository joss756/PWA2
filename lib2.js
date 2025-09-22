// console.log('Bienvenido');

    var lienzo = document.getElementById("lienzo");
    var cd = lienzo.getContext("2d");

    function exhibirLineas() {
      var x = 0;
      while (x < 400) {
        cd.beginPath();   // Se inicia un trazo nuevo
        cd.moveTo(x, 0);  // Punto inicial (x,0)
        cd.lineTo(400, 300 - x); // Punto final (400, 300-x)
        cd.stroke();      // Dibuja la línea
        x = x + 10;       // Aumenta el espaciado
      }
    }