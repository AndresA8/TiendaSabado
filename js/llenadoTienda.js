
export function pintarTienda(){
    // arreglo de objetos
    let productos =[
        {foto:'img/tienda1.jpg', nombre: "Termo UA", precio: 70000, descripcion: "Termo agua, mango de agarre antideslizante"},
        {foto:'img/tienda2.jpg', nombre: "Tapabocas", precio: 120000, descripcion: "Tapabocas antifluido UA"},
        {foto:'img/tienda3.jpg', nombre: "Morral UA", precio: 280000, descripcion: "Morral edicion limitada, tela impermeable"},
        {foto:'img/tienda4.jpg', nombre: "Gorra", precio: 100000, descripcion: "Gorra, color gris, tela impermeable"},
        {foto:'img/tienda5.jpg', nombre: "Pantaloneta", precio: 80000, descripcion: "Pantaloneta corta, tela antifluidos"},
        {foto:'img/tienda6.jpg', nombre: "Audifonos JBL UA", precio: 350000, descripcion: "JBL UA edition limitada"},
        {foto:'img/tienda7.jpg', nombre: "Gorro UA", precio: 50000, descripcion: "Gorro pasamontañismo, doble faz"},
        {foto:'img/tienda8.jpg', nombre: "Camisa UA", precio: 80000, descripcion: "Camisa antifluidos"},
        {foto:'img/tienda9.jpg', nombre: "Tennis Under Armour", precio: 400000, descripcion: "Tennis UA edition basket "},
        {foto:'img/tienda10.jpg', nombre: "leggins hombre UA", precio: 110000, descripcion: "Licra deportiva hombre talla unica"},
    ]
    
    
    // Creo la referencia al componente padre.
    // creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    
    //Recorriendo un arreglo con JS(buscar,seleccionar)
    productos.forEach(function(producto){
       /* console.log(producto.nombre)
        console.log(producto.precio)
        console.log(producto.foto)
        console.log(producto.descripcion)*/
    
        //Receta para pintar con JS
        //1.Comience a crear la estructura que necesite
    
        //creo columna
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //creo la tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        // Creo imagen
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        //Creo el nombre
        let nombre=document.createElement("h4")
        nombre.innerHTML=producto.nombre
        nombre.classList.add("align-self-center")
    
        //Creo el precio
        let precio=document.createElement("h3")
        precio.innerHTML= "$ " + producto.precio
        precio.classList.add("precio")
    
        //Creo un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4")
        boton.textContent="Ver producto"
        
    
        //2. Ordenar la estructura (jerarquia Fila_Col-tarjeta-img)
        tarjeta.appendChild(foto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(boton)
       
    
       
    
    
    })
}




/* escuchando clic en el boton
let boton=document.getElementById("boton") 

//detectando el primer evento 
boton.addEventListener("click",cambiarFoto)

//creando una funcion
function cambiarFoto(){
    let foto=document.getElementById("fotoPrueba")
    foto.src="img/img4.png"
}
*/
