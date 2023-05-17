//Alertas
//alert("Soy Santiago Florez Web...")

//Variables
let nombre = "Santiago";
let apellido = "Florez"

//Constantes
let altura = 187;

//Mostrar por consola
console.log(nombre);
console.log(altura)

//Concatenacion
let concatenacion = nombre + " " + apellido

//Seleccionar elementos de la pagina
let datos = document.querySelector("#datos");
datos.innerHTML = `

    <hr/>
    <h1>Soy la caja de Datos</h1>
    <h2>Mi nombre es: ${concatenacion}</h2>
    <h3>Mi altura: ${altura} cm</h2>

`;

//Condiciones
altura = 180;

if(altura > 185){
    datos.innerHTML += "<h1>Eres una persona alta</h1>"
}else{
    datos.innerHTML += "<h1>Eres una persona baja</h1>"
}


//Bucles

