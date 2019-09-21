var v;
var nobre;
var usuario;
var pass;
// nombre = "Juan";
// nombre = 1231;
// var a = function cargar()
function cargar() {
    alert("cargar");
    var boton = document.getElementById("btn");
    // boton.onclick = log;
    boton.addEventListener("click", mostrar);
}
window.addEventListener("load", cargar);
// window.onload = cargar;
// window.onload =a();

function log() {
    var a = document.getElementById("User");
    alert(a.value);
}

function mostrar() {
    alert("Se hizo click desde la función mostrar!!!");
    usuario = document.getElementById("User").value;
    pass = document.getElementById("password").value;

    //usuario = document.getElementById("User");
    //pass = document.getElementById("password");
    //if(usuario.value == "")
    //alert (usuario);
    // if(usuario == undefined || pass == undefined || usuario == "" || pass == "")
    // {
    //     alert("Usuario o contraseña invalido");
    //     console.log("user: "+usuario+" pass"+pass);
    // }
    // else
    // {
    //     alert("login correcto");
    //     console.log(usuario,pass);
    // }

    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        console.log("llego respuesta!!!", http.readyState, http.status);
        if (http.readyState == 4 && http.status == 200) {
            console.log("tenemos respuesta!!!", http.responseText);
            if(http.responseText == "false")
            {
                alert("Login incorrecto");
            }
        }
    }
    // http.open("GET", "http://localhost:3000/loginUsuario?usr="+usuario+"&pass="+pass);
    // http.send();

    //para metodo POST hay que setear el REQUESTHEADER
    http.open("POST", "http://localhost:3000/loginUsuario");
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send("usr="+usuario+"&pass="+pass);
}



// if(nombre == "1231")
// {
    // alert("el nombre es 1231");
// }
// else    
// {   
    // alert("El nombre no es 1231");
// }
// console.log(sumar(1,2));
// function sumar(num1,num2)
//document.getElementById("User").value
// {
    //console.log(num1);
    // return num1+num2;
// }






