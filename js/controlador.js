//Comentario de linea

/*
Comentario de bloque
*/
/*
//variables
let nombreUsuario = "Andres"
let estaturaUsuario = 1.81
let edadUsuario = 27
let telefonoUsuario = "3017957189"
let espaisa = true //(banderas)

const APELLIDOS_USUARIO = "Agudelo Pino"

// Unir los mensajes con las variables (Concatenar)
console.log("Buenas Tardes "+nombreUsuario+ "su edad es "+edadUsuario)

console.log(`Buenas tardes ${nombreUsuario} su edad es ${edadUsuario}`)

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
*/

// IMPORTAR MODULOS
import { pintarTienda } from "./llenadoTienda.js";
import{ampliarInformacion} from "./ampliarInfo.js";

//crear un objeto vacio 
let producto={}

// LLamando al modulo de pintar
pintarTienda()

//Llamando al modulo ampliar info
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProduct'))
    //cargar informacion del producto dentro del modal
    producto=ampliarInformacion(event) //Crear un evento
    console.log(producto)
    if(event.target.classList.contains("btn")){
    modalInfoProducto.show()
    }
}) 

//dectetar la accion para añadir al carrito

//carito es un arreglo de productos(arreglo de objetos)

let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener("click",function(event){
    

    //1. Capturar la cantidad del producto
    let cantidad=document.getElementById("cantidadProducto").value // el value solo se le pone a los input, para capturar lo que escribo
    

    //2. Agrego la cantidad al objeto producto
    producto.cantidad=cantidad

   
    //3. Agregar el producto al carrito
    carrito.push(producto) // para sumar datos dentro de un arreglo 
    console.log(carrito)

    //4. Calculo la sumatoria de cantidades
    let suma=0

    carrito.forEach(function(producto){  
        //console.log(producto.cantidad)
        suma=suma+Number(producto.cantidad) //convertir string a numerico

    })

    //console.log(suma)
    let capsula=document.getElementById("capsula")
    capsula.textContent=suma // text content modifica el texto 
    capsula.classList.remove("invisible") //quitar 
})

let limpiarCarrito = document.getElementById("limpiar")
limpiarCarrito.addEventListener("click",function(evento){
    carrito=[]
    let capsula=document.getElementById("capsula")
    capsula.textContent=0
    capsula.classList.add("invisible")
})