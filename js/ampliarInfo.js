
export function ampliarInformacion(event){

    let producto={}
    if(event.target.classList.contains("btn")){
        
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector("h3").textContent,
            descripcion:event.target.parentElement.querySelector("p").textContent
            
            
        }
        console.log(producto)

        //Asociando los valores respectivos al modal
        let foto=document.getElementById("fotoinfo")
        foto.src=producto.foto
        let nombre=document.getElementById("nombreinfo")
        nombre.textContent=producto.nombre
        let precio=document.getElementById("precioinfo")
        precio.textContent=producto.precio
        let descripcion=document.getElementById("desinfo")
        descripcion.textContent=producto.descripcion
       
    }
}