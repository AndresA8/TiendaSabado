//Comentario de linea

/*
Comentario de bloque
*/

//variables
let nombreUsuario = "Andres"
let estaturaUsuario = 1.81
let edadUsuario = 27
let telefonoUsuario = "3017957189"
let espaisa = true //(banderas)

const APELLIDOS_USUARIO = "Agudelo Pino"

// Unir los mensajes con las variables (Concatenar)
/*console.log("Buenas Tardes "+nombreUsuario+ "su edad es "+edadUsuario)

console.log(`Buenas tardes ${nombreUsuario} su edad es ${edadUsuario}`)*/

//Utilizando el DOM (Document objet model)
let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="Controlando desde JS"
etiquetaTitulo.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")
//console.log(etiquetaTitulo)

let etiquetaMenu=document.getElementById("menu")
etiquetaMenu.textContent="DEMON SLAYER"


let etiquetaFotoDemon=document.getElementById("fotodemon")
etiquetaFotoDemon.src="img/img1.jpg"


//  if(true){
//      let nombreUsuario="Maria";
//  }

//salidas
// console.log(nombreUsuario);
