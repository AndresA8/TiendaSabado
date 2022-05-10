
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


let botonresgistro = document.getElementById("Button")
let modalinforma= new bootstrap.Modal(document.getElementById('modalinforma'))
botonresgistro.addEventListener("click", function (evento) {

    evento.preventDefault()
    //console.log("registrando...") 

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    //console.log(correo,password)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            //console.log("Exito en el registro")
            let textoinformativo=document.getElementById("informaciongeneral")
            let formulario=document.getElementById("formularioregistro")
            formulario.reset()
            textoinformativo.textContent="Registro Exitoso"
            modalinforma.show()
            setTimeout(function(){
                modalinforma.hide()
            },2000)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            //console.log("Upps fallamos"+ errorMessage)
            let textoinformativo=document.getElementById("informaciongeneral")
            textoinformativo.textContent="Registro Errado"+errorMessage
            modalinforma.show()
        });
})