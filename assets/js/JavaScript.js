
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