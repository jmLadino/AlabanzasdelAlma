        // Función para filtrar elementos por letra
        document.querySelectorAll('.letra').forEach(function(boton) {
          boton.addEventListener('click', function() {
              const letra = boton.textContent;
              filtrarPorLetra(letra);
          });
      });

      // Función para filtrar elementos por letra
      function filtrarPorLetra(letra) {
          const elementos = document.querySelectorAll('.texto-centro');
          elementos.forEach(function(elemento) {
    
      if (letra.toUpperCase() === "TODOS")
      {
        elemento.parentNode.parentNode.style.display = 'block';
        visibleSection(elemento.parentNode.parentNode.parentNode.id, true);
      }
      else
      {
        var primeraLetra = elemento.textContent.charAt(0).toUpperCase();
        if (primeraLetra == "Á") primeraLetra = "A";
        if (primeraLetra == "É") primeraLetra = "E";
        if (primeraLetra == "Í") primeraLetra = "I";
        if (primeraLetra == "Ó") primeraLetra = "O";
        if (primeraLetra == "Ú") primeraLetra = "U";
        if (primeraLetra == "¿") primeraLetra = elemento.textContent.charAt(1).toUpperCase();;
        
        if (primeraLetra === letra.toUpperCase()) {
          elemento.parentNode.parentNode.style.display = 'block';
          visibleSection(elemento.parentNode.parentNode.parentNode.id, true);
        } else {
          elemento.parentNode.parentNode.style.display = 'none';
        }
      }
          });
      }

      // Función para buscar elementos por texto
      document.querySelector('#buscar').addEventListener('keyup', function() {
          const texto = this.value.toLowerCase();
    
    
    if (texto == "")
    {
            visibleSection("indice1", true);
            visibleSection("indice2", true);
            visibleSection("indice3", true);
            visibleSection("indice4", true);

            visibleSection("indice_CuartetoAsaf", true);
            visibleSection("indice_DuoZimrah", true);
            visibleSection("indice_EdithAravena", true);
            visibleSection("indice_HeraldosdelRey", true);
            visibleSection("indice_PrimeraFe", true);
    }
    else{
      debugger; 
      visibleSection("indice1", false);
      visibleSection("indice2", false);
      visibleSection("indice3", false);
      visibleSection("indice4", false);

      visibleSection("indice_CuartetoAsaf", false);
      visibleSection("indice_DuoZimrah", false);
      visibleSection("indice_EdithAravena", false);
      visibleSection("indice_HeraldosdelRey", false);
      visibleSection("indice_PrimeraFe", false);
      
      const elementos = document.querySelectorAll('.texto-centro');
      elementos.forEach(function(elemento) {
        var numero = "";
        if (elemento.parentNode.parentNode.getElementsByClassName("texto-arriba") && elemento.parentNode.parentNode.getElementsByClassName("texto-arriba").length > 0)
        {
          numero = elemento.parentNode.parentNode.getElementsByClassName("texto-arriba")[0].innerText.toLowerCase();
          numero = numero.replace("#", "");
        }
        
        //debugger;
        
        // por defecto todos están ocultos
        elemento.parentNode.parentNode.style.display = 'none';

        var contenido = elemento.textContent.toLowerCase();
        contenido = numero + " " + contenido;
        
        if (contenido.includes(texto)) {
          elemento.parentNode.parentNode.style.display = 'block';
          visibleSection(elemento.parentNode.parentNode.parentNode.id, true);
        } 
      });				
    }
    

  

  });
  
  
      // Función para alternar la visibilidad de las secciones
      function toggleSection(id) {
          var elemento = document.getElementById(id);
          if (elemento.style.display === "" || elemento.style.display === "block") {
              elemento.style.display = "none";
          } else {
              elemento.style.display = "block";
          }
      }
  
      // Función para setear la visibilidad de la sección
      function visibleSection(id, visible) {
    // debugger;
    
          var strSeccion = "";
    var AplicaParent = false;
          if (id == "indice1")
            strSeccion = "seccion1";
          else if (id == "indice2")
            strSeccion = "seccion2";
          else if (id == "indice3")
            strSeccion = "seccion3";
          else if (id == "indice4")
            strSeccion = "seccion4";

          else if (id == "indice_CuartetoAsaf"){
      strSeccion = "seccion_CuartetoAsaf";
      AplicaParent = true;
    }
          else if (id == "indice_DuoZimrah"){
      strSeccion = "seccion_DuoZimrah";
      AplicaParent = true;
    }
          else if (id == "indice_EdithAravena"){
      strSeccion = "seccion_EditAravena";
      AplicaParent = true;
    }
          else if (id == "indice_HeraldosdelRey"){
      strSeccion = "seccion_HeraldosdelRey";
      AplicaParent = true;
    }
          else if (id == "indice_PrimeraFe"){
      strSeccion = "seccion_PrimeraFe";
      AplicaParent = true;
    }
            
          
          var elemento = document.getElementById(strSeccion);
          var strVisible = (visible ? "block" : "none");
          elemento.style.display = strVisible;
    
    var TituloElemento = document.getElementById("Title_" + strSeccion);
    TituloElemento.style.display = strVisible;
    
    if (AplicaParent){
      elemento = elemento.parentNode;
      elemento.style.display = strVisible;
      debugger;
      TituloElemento = document.getElementById("Title_" + elemento.id);
      TituloElemento.style.display = strVisible;	
    }
    
      }


// FUNCIONES DE ORDENAMIENTO DE SECCIONES
function ordenarAlfabeticamente(NombreSeccion) {
  var contenedor = document.getElementById(NombreSeccion);
  var items = contenedor.getElementsByClassName("item");
  var itemsArray = Array.from(items);

  itemsArray.sort(function(a, b) {
    var textoA = a.querySelector(".texto-centro").textContent.trim();
    var textoB = b.querySelector(".texto-centro").textContent.trim();

  textoA = textoA.replace("¿", "");
  textoB = textoB.replace("¿", "");
  
    return textoA.localeCompare(textoB);
  });

  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }

  itemsArray.forEach(function(item) {
    contenedor.appendChild(item);
  });
}

function ordenarPorNumero(NombreSeccion) {
  var contenedor = document.getElementById(NombreSeccion);
  var items = contenedor.getElementsByClassName("item");
  var itemsArray = Array.from(items);

  itemsArray.sort(function(a, b) {
    var NumeroA = parseInt(a.querySelector(".texto-arriba").textContent.trim(), 10);
    var NumeroB = parseInt(b.querySelector(".texto-arriba").textContent.trim(), 10);
    return NumeroA - NumeroB;
  });

  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }

  itemsArray.forEach(function(item) {
    contenedor.appendChild(item);
  });
}  		