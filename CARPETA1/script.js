function cambio(){
    document.getElementById("fondo").classList.add("rojo");
}

function textos(){
    document.getElementById("textoUno").innerHTML = "cambio";
    document.getElementById("textoDos").innerHTML = "cambio";
    document.getElementById("textoTres").innerHTML = "cambio";
}

function maMenor(){
    let numero = document.getElementById("numero").value;
    if(numero > 10){
        document.getElementById("resultado").innerHTML = "El numero es mayor";
    } else{
        document.getElementById("resultado").innerHTML = "El numero es menor";
    }
}
var usuario = {
    nombre: "daniel caro",
    edad: 22,
    correo: "daniel.caroc@uniagustiniana.edu.co"
}

function misDatos(){
    
    
    document.getElementById("datos").innerHTML = 
    `<p>Nombre: ${usuario.nombre}</p>
    <p>Edad: ${usuario.edad}</p>
    <p>Correo: ${usuario.correo}</p>`
}

function lista(){
    var notas = ["Miguel","Daniel","Santiago", "Paula", usuario.nombre];

    for(var i = 0; i<notas.length; i++){
        document.getElementById("laLista").innerHTML += `<li>${notas[i]}</li>`;
    }
}