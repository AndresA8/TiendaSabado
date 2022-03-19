
export function pintarTienda(){
    // arreglo de objetos
    let productos =[
        {foto:'img/producto1.jpg', nombre: "Burger Argentina", precio: 19000,  descripcion: "Pan artesano, carne artesanal 180 grs, chorizo, chimichurri de la casa, queso mozzrella, lechuga, tomate y cebolla"},
        {foto:'img/producto6.jpg', nombre: "Burger Cheddar", precio: 19000, descripcion: "Pan artesano, carne artesanal 180 grs, tocineta, Quesso cheddar, Quesso mozzarella, lechuga, tomate y cebolla caramelizada"},
        {foto:'img/producto3.jpg', nombre: "Churrasco", precio: 25000, descripcion: "Churrasco 250 grs, acompañado de papas rusticas o francesas"},
        {foto:'img/producto7.jpg', nombre: "Picada x2", precio: 32000, descripcion: "Carnes, chorizo, arepa, ensalada"},
        {foto:'img/producto4.jpg', nombre: "Papas Mexicanas", precio: 18000, descripcion: "Papas,carne desmechada, pico de gallo, quesso mozzarella, maiz tierno, sour cream y guacamole"},
        {foto:'img/producto2.jpg', nombre: "Punta de Anca", precio: 23000, descripcion: "Punta de Anca 250 grs, papas rustica o francesas"},
        {foto:'img/producto5.jpg', nombre: "Papas Argentinas", precio: 18000, descripcion: "Papas, carne de res, chorizo, quesso mozzarella, huevos de codorniz y chimichurri artesanal"},
        {foto:'img/producto8.jpg', nombre: "Papas Paisas", precio: 17500, descripcion: "Papas, chicharron, chorizo, cubos de platano, huevos de codorniz"},
        {foto:'img/producto9.jpg', nombre: "Costillas BBQ", precio: 22000, descripcion: "Costillas cerdo 400 grs, papas rusticas o francesas"},
        {foto:'img/producto10.jpg', nombre: "Cañon Cerdo", precio: 23000, descripcion: "Cañon de cerdo 250 grs papas rusticas o francesas"},
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
        foto.classList.add("card-img-top","foto")
        foto.src=producto.foto
    
        //Creo el nombre
        let nombre=document.createElement("h4")
        nombre.innerHTML=producto.nombre
        nombre.classList.add("align-self-center")
    
        //Creo el precio
        let precio=document.createElement("h3")
        precio.innerHTML= "$ " + producto.precio
        precio.classList.add("precio","mt-2")

        // Creo la descripcion
        let descripcion=document.createElement("p")
        descripcion.innerHTML=producto.descripcion
        descripcion.classList.add("text-center")
        descripcion.hidden=true
    
        //Creo un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-5")
        boton.textContent="Ver producto"
        
    
        //2. Ordenar la estructura (jerarquia Fila_Col-tarjeta-img)
        tarjeta.appendChild(foto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(boton)
        tarjeta.appendChild(descripcion)
        
       
    
       
    
    
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
