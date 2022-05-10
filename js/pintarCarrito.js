export function pintarCarrito(suma){

    let capsula=document.getElementById("capsula")
    capsula.textContent=suma // text content modifica el texto 
    capsula.classList.remove("invisible") //quitar 
}