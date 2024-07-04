



function asignartextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;

}

asignartextoElemento("h1","Desafío: hora de practicar Reto 3");

 


function nombreUsuario() {
    const ingresoNombre = prompt("Ingresa tu nombre");
    asignartextoElemento("h2",`¡Hola, ${ingresoNombre}!`);
    return;
}

nombreUsuario("");


function BotonMasacoporal(){
    let ingresoTalla = document.getElementById(`numeroTalla`).value;
    let ingresoPeso = document.getElementById(`numeroPeso`).value;
    let valorTalla = ingresoTalla * ingresoTalla;
    let valorimc = ingresoPeso/ valorTalla 
    asignartextoElemento("h3","Tu valor IMC es: " + valorimc);
    return;
}
function calcularFactorial() {
    var numero = parseInt(document.getElementById("miInput").value);
    if (isNaN(numero) || numero < 0) {
        return;
    }
    
    var resultado = factorial(numero);
    asignartextoElemento("h5", "Tu factorial es: " + resultado);
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function convertirDolaresAReales() {
    var dolares = parseFloat(document.getElementById("miInputmoneda").value);
    if (isNaN(dolares) || dolares < 0) {
        return;
    }
    
    var reales = dolares * 5.4347;
    asignartextoElemento("h6", "El valor equivalente en reales es: R$ " + reales.toFixed(2));
}
function calcuAreaYPerimetro() {
    var altura = parseFloat(document.getElementById("altura").value);
    var anchura = parseFloat(document.getElementById("anchura").value);

    if (isNaN(altura) || isNaN(anchura) || altura <= 0 || anchura <= 0) {
        return;
    }
    
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);

    asignartextoElemento("h7", "El área de la sala es: " + area + " unidades cuadradas, y el perímetro es: " + perimetro + " unidades.");
}

function calcularSalaAreayPerimetro() {
    var radio = parseFloat(document.getElementById("radio").value);
    var pi = 3.14;

    if (isNaN(radio) || radio <= 0) {
        return;
    }
    
    var area = pi * Math.pow(radio, 2);
    var perimetro = 2 * pi * radio;

    asignartextoElemento("h8", "El área circular es: " + area.toFixed(2) + " y el perímetro es: " + perimetro.toFixed(2));
}

function mostrarTablaMultiplicar() {
    var numero = parseInt(document.getElementById("numero1").value);

    if (isNaN(numero)) {
        return;
    }

    var tabla = "";
    for (var i = 1; i <= 10; i++) {
        tabla += numero + " x " + i + " = " + (numero * i) + "<br>";
    }
    asignartextoElemento("h9", tabla);
}

