const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");

const form = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

const username1 = "jeremymaldo";
const password1 = "12345678";
const email1 = "jeremy@gmail.com";
const username2 = "cristoferfer";
const password2 = "87654321";

form.addEventListener("submit", e=>{
    e.preventDefault();
    let entrar = false;
    let regexEmail =/^[\w-\.]+([\w-]+\.)+[\w-]{2,4}$/;
    let warnings = "";
    parrafo.innerHTML = " ";

    if(password.value.length < 8){
        warnings += `La contraseña no es válida <br>`;
        entrar = true;
    }
    if(username.value.length < 5){
        warnings += `El nombre de usuario no es válido <br>`;
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`;
        entrar = true;
    }
    if(username.value == username1 && password.value != password1){
        warnings += `La contraseña no es correcta <br>`;
        entrar = true
    }
    if(username.value != username1 && password.value == password1){
        warnings += `El nombre de usuario no es correcto <br>`;
        entrar = true
    }
    if(username.value == username2 && password.value != password2){
        warnings += `La contraseña no es correcta <br>`;
        entrar = true
    }
    if(username.value != username2 && password.value == password2){
        warnings += `El nombre de usuario no es correcto <br>`;
        entrar = true
    }
    if(username.value == username1 && password.value == password1 && email.value == email1){
        window.location.href = 'Carrito de compra/index.html';
    }
    if(username.value == username2 && password.value == password2){
        window.location.href = 'Carrito de compra/index.html';
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }
    
})