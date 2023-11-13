//declarando variables
var nameInput,userInput, paswordInput;

//asignamos las variables cuando toda la pagina este cargada
window.onload = function(){

    //asignamos las variables a los inputs
    nameInput = document.getElementById("name")
    userInput = document.getElementById("User")
    paswordInput = document.getElementById("password")

    //recogemos los enventos
    nameInput.addEventListener('input', createListener(isValidname));
    userInput.addEventListener("input", createListener(isValiduser));
    paswordInput.addEventListener("input", createListener(isValidpasword));

    //funciones de validacion

    //solo de a la a-z en miniscula
    function isValidname(name){
        return/^[a-z]+$/.test(name)
    }

    //debe tener una mayuscula, una minuscula y un numero
    function isValidpasword(password){
        return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)
    }
    //debe tener una mayuscula, una minuscula y un numero
    function isValidpasword(User){
        return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(User)
    }

    //creamos el listener
    function createListener(validator) {
        return e=> {
            const input = e.target;
            const text = e.target.value;
            const valid = validator(text);
            const showTip = text !== "" && !valid;
            const tooltip = e.target.nextElementSibling;
            showOrHideTip(showTip, tooltip, input);
        };
    }
    function showOrHideTip(show,element, message = "first", input){
        if(message=="first"){
            if (show) {
                element.style.display= "inherit";
                input.style.borderBottom = "2px solid #dea54b";
            } else {
                input.style.borderBottom= "2px solid #00bfb2";
                element.style.display= "none";
            }
        }
    }
}




const name = documento.getElementById("name");
const username = document.getElementById("User");
const password = document.getElementById("password");

const formulario = document.getElementById("form");

form.addEventListener("submit", e=>{
    e.preventDefault();
});