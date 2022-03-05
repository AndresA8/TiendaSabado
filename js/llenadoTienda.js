// arreglo de objetos

let productos =[
    {foto:'img/producto1.jpg', nombre: "tapabocas demon", precio: 5000, descripcion: "tapabocas antifluido doble faz"},
    {foto:'img/producto2.jpg', nombre: "cintas", precio: 3000, descripcion: "cintas baile demon slayer"},
    {foto:'img/producto3.jpg', nombre: "bolso demon", precio: 20000, descripcion: "Morral edicion limitada, tela impermeable"},
    {foto:'img/producto4.jpg', nombre: "mascaras", precio: 60000, descripcion: "Mascaras demon slayer x3 adorno pared"},
    {foto:'img/producto5.jpg', nombre: "llavero", precio: 3500, descripcion: "Llavero multiple 3 en 1"},
    {foto:'img/producto6.jpg', nombre: "Plato japanesse", precio: 12000, descripcion: "Plato edicion especial, incluye palillos"},
    {foto:'img/producto7.jpg', nombre: "Catanas", precio: 100000, descripcion: "Catanas utilizadas por el maestro &$%%#&%"},
    {foto:'img/producto8.jpg', nombre: "Pintura lienzo", precio: 80000, descripcion: "Pintura en lienzo autografiada"},
    {foto:'img/producto89.jpg', nombre: "Camiseta demos slayer", precio: 40000, descripcion: "Camiseta blanca, edicion final"},
    {foto:'img/producto10.jpg', nombre: "Pintura lienzo Edition ", precio: 200000, descripcion: "Cuadro 40x60 edtion, pared"},
]
//Recorriendo un arreglo con JS(buscar,seleccionar)
productos.forEach(function(producto){
    console.log("Programando desde Js")
})

// escuchando clic en el boton
let boton=document.getElementById("boton") 

//detectando el primer evento 
boton.addEventListener("click",cambiarFoto)

//creando una funcion
function cambiarFoto(){
    let foto=document.getElementById("fotoPrueba")
    foto.src="img/img4.png"
}

//