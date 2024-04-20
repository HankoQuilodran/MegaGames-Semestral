
//Funciones de Tabs
function openTab(evt, TabName) {
    // Declarar Variables
    var i, tabcontent, tablinks;
  
    // Obtener todos los elementos de clase Tab y esconderlos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Obtener todos los elementos de clase Tablink y desactivarlos
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Mostrar y activar Tab seleccionado
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
/*======================*/
/* Go Up button */
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*=============== */

//login 

let emailL = document.getElementById("email_L");
let passwordL = document.getElementById("password_L");

let nombreR = document.getElementById("nombre_R")
let emailR = document.getElementById("email_R")
let passwordR = document.getElementById("password_R")

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");
let error5 = document.getElementById("error5");

let btnEntrar = document.getElementById("btnEntrar");
let btnRegistrar = document.getElementById("btnRegistrar")

let emailLV = "";
let passwordLV = "";

let nombreRV = "";
let emailRV = "";
let passwordRV = "";

btnEntrar.addEventListener("click", function(e) {

  e.preventDefault();

  error1.innerHTML = "";
  error2.innerHTML = "";
    
  emailLV = emailL.value;
  passwordLV = passwordL.value;

  if(emailLV === ""){
    error1.innerHTML = "debe ingresar email";
    error1.style.color = "red";
    alert("email no tiene que estar vacio");
    return;
  }

  if(passwordLV === ""){
    error2.innerHTML = "debe ingresar password";
    error2.style.color = "red";
    alert("password no tiene que estar vacio");
    return;
  }
  

});

btnRegistrar.addEventListener("click", function(e) {

  e.preventDefault();


  error3.innerHTML = "";
  error4.innerHTML = "";
  error5.innerHTML = "";

  nombreRV = nombreR.value;
  emailRV = emailR.value;
  passwordRV = passwordR.value;
  
  if(nombreRV === ""){
    error3.innerHTML = "debe ingresar nombre";
    error3.style.color = "red";
    alert("nombre no tiene que estar vacio");
    return;
  }

  if(emailRV === ""){
    error4.innerHTML = "debe ingresar email";
    error4.style.color = "red";
    alert("email no tiene que estar vacio");
    return;
  }

  if(passwordRV === ""){
    error5.innerHTML = "debe ingresar password";
    error5.style.color = "red";
    alert("password no tiene que estar vacio");
    return;
  }

});
