//Productos de la tienda
let nombreProducto="batimovil a escala"
let precioProducto=450000
let descripcionProducto= "Batimovil de la ultima pelicula de batman original"
let aplicadescuento=true

// arreglo tradicional en js
let nombresProductos=["batimovil","camiseta batman"]
let preciosProductos=[450000,70000]

// imprimir un arreglo
console.log(nombresProductos)
console.log(nombresProductos[0]) // para imprimir un solo dato del arreglo 

// creando un objeto en Js
let producto= {
    nombre:"batimovil",
    precio:450000,
    descripcion:"Batimovil de la ultima pelicula de batman original",
    amigos:["robin","catwoman"] // un arreglo dentro de un objeto
} 
console.log(producto)
console.log(producto.nombre) // para mostrar un solo dato en un objeto 
console.log(producto.amigos[0]) // para mostrar dentro del objeto, un arreglo