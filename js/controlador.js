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
import {pintarCarrito} from "./pintarCarrito.js";

//crear un objeto vacio 
let producto={}

// Variable GLOBAL MODAL

let modalInfoProducto;
let TotalUSD
let tUSD
let USDdecimal

// LLamando al modulo de pintar
pintarTienda()

//Llamando al modulo ampliar info
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
    if(event.target.classList.contains("btn")){
    modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProduct'))
    //cargar informacion del producto dentro del modal
    producto=ampliarInformacion(event); //Crear un evento
    modalInfoProducto.show()
    
    }
    
}) 

//dectetar la accion para añadir al carrito

//carito es un arreglo de productos(arreglo de objetos)

let carrito=[]

let boton = document.getElementById("añadirCar")
boton.addEventListener("click",function(event){
   
    

    //modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProduct'))
    //modalInfoProducto.hide()

    //1. Capturar la cantidad del producto
    let cantidad=document.getElementById("cantidadProducto").value // el value solo se le pone a los input, para capturar lo que escribo
    

    //2. Agrego la cantidad al objeto producto
    producto.cantidad=cantidad

    let prodExiste = carrito.find((p) => p.nombre === producto.nombre);
    if(prodExiste){
    prodExiste.cantidad = Number(prodExiste.cantidad) + Number(producto.cantidad)
   
    prodExiste.subtotal = Number(producto.precio.replace("COP $", "")) * Number(prodExiste.cantidad);
} else {
  
  
  producto.subtotal= Number(producto.precio.replace("COP $","")) *  Number(producto.cantidad);

  //3. Agregar el producto al carrito

  carrito.push(producto);// para sumar datos dentro de un arreglo, funcion, metodo especial para agg elementos a un elemento
}
    
    // llenamos el carrito

    //4. Calculo la sumatoria de cantidades
    let suma=0
    let sumaTotal = 0
   let usd = 0.00024
    carrito.forEach(function(producto){  
        
    //console.log(producto.cantidad)
    suma=suma+Number(producto.cantidad) //convertir string a numerico
    sumaTotal = sumaTotal + Number(producto.subtotal)
    tUSD = sumaTotal * usd
    USDdecimal= tUSD.toFixed(2);
    })

    let totalNeto = document.getElementById("totalNeto")
    totalNeto.textContent = sumaTotal

    
    //console.log(suma)
    pintarCarrito(suma)
    modalInfoProducto.hide()
})

// convertir a USD
    let USD=document.getElementById("convertir")
    USD.addEventListener("click",function(evento){
    TotalUSD=document.getElementById("totalusd")
    TotalUSD.innerHTML = USDdecimal
    

    
})

    let limpiarCarrito = document.getElementById("Eliminar")
    limpiarCarrito.addEventListener("click",function(evento){
    let contenedor=document.getElementById("contenedorventa")

    carrito=[]
    let capsula=document.getElementById("capsula")
    capsula.textContent=0
    capsula.classList.add("invisible")
    contenedor.innerHTML= ""
    totalNeto.innerHTML=""
    TotalUSD.innerHTML=""
    

    
})

// 4. Ver resumen de venta 

let botonCarrito=document.getElementById("botoncarrito")
botonCarrito.addEventListener("click", function(evento){
    

    let contenedor=document.getElementById("contenedorventa")

    //Borrar el contenido de HTML de una seccion
    contenedor.innerHTML=""

    

    // Recorrer el carrito para pintar los productos en la factura
    let modalVenta = new bootstrap.Modal(document.getElementById('resumenCarrito'))

    carrito.forEach(function(producto){

        //TRAVERSING
            let fila=document.createElement("div")
            fila.classList.add("row")

            let columna1=document.createElement("div")
            columna1.classList.add ("col-12", "col-md-4")

            let columna2=document.createElement("div")
            columna2.classList.add ("col-12", "col-md-8")

            let foto=document.createElement("img")
            foto.classList.add("img-fluid","w-100", "mt-3")
            foto.src=producto.foto

            //Creo el nombre
            let nombre=document.createElement("h4")
            nombre.innerHTML=producto.nombre
            nombre.classList.add("text-center")

            //Cantidad
            let cantidad=document.createElement("h5")
            cantidad.innerHTML="Cantidad: "+producto.cantidad
            cantidad.classList.add("text-center")
    
            //Creo el precio
            let precio=document.createElement("h3")
            precio.innerHTML= producto.precio
            precio.classList.add("precio","mt-2", "text-center")

            let subtotal=document.createElement("h5")
            subtotal.innerHTML= "Subtotal: $" +producto.subtotal
            subtotal.classList.add("Tar-subtotal","text-center")

        

            //PADRES E HIJOS 
            columna1.appendChild(foto)
            columna2.appendChild(nombre)
            columna2.appendChild(precio)
            columna2.appendChild(cantidad)
            columna2.appendChild(subtotal)
            
            fila.appendChild(columna1)
            fila.appendChild(columna2)
            contenedor.appendChild(fila)

    })
    modalVenta.show()

/*carrito=[]
let botonCarrito=document.getElementById*/


})