// Función para filtrar elementos por letra
document.querySelectorAll('.letra').forEach(function (boton) {
  boton.addEventListener('click', function () {
    const letra = boton.textContent;
    filtrarPorLetra(letra);
  });
});

  // Función robusta para móviles (incluye fix iOS)
  function cerrarTeclado() {
    // iOS a veces ignora blur inmediato; este truco ayuda
    document.querySelector('#buscar').readOnly = true;          // truco corto para iOS
    document.querySelector('#buscar').blur();                   // quita el foco => cierra teclado
    setTimeout(() => document.querySelector('#buscar').readOnly = false, 50);
  }

// Función para filtrar elementos por letra
function filtrarPorLetra(letra) {
  const elementos = document.querySelectorAll('.texto-centro');
  elementos.forEach(function (elemento) {

    if (letra.toUpperCase() === "TODOS") {
      elemento.parentNode.parentNode.style.display = 'block';
      visibleSection(elemento.parentNode.parentNode.parentNode.id, true);
    }
    else {
      var primeraLetra = elemento.textContent.charAt(0).toUpperCase();
      if (primeraLetra == "Á") 
        primeraLetra = "A";
      if (primeraLetra == "É") 
        primeraLetra = "E";
      if (primeraLetra == "Í") 
        primeraLetra = "I";
      if (primeraLetra == "Ó") 
        primeraLetra = "O";
      if (primeraLetra == "Ú") 
        primeraLetra = "U";
      if (primeraLetra == "¿") 
        primeraLetra = elemento.textContent.charAt(1).toUpperCase();

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
document.querySelector('#buscar').addEventListener('keyup', function () {
  var texto = this.value.toLowerCase();

  if (texto == "") {
    // hace visible todos los nodos
    const elementos = document.querySelectorAll('.texto-centro');
    elementos.forEach(function (elemento) {
      elemento.parentNode.parentNode.style.display = 'block';
    });

    // oculta todas las secciones, pero deja el título visible
    visibleSection("indice1", false, true);
    visibleSection("indice2", false, true);
    visibleSection("indice3", false, true);
    visibleSection("indice4", false, true);

    visibleSection("indice_ConjuntoGuitanoRECAB", false, true);
    visibleSection("indice_CuartetoAsaf", false, true);
    visibleSection("indice_DuoZimrah", false, true);
    visibleSection("indice_EdithAravena", false, true);
    visibleSection("indice_PrimeraFe", false, true);
  }
  else {
    debugger;
    visibleSection("indice1", false, false);
    visibleSection("indice2", false, false);
    visibleSection("indice3", false, false);
    visibleSection("indice4", false, false);

    visibleSection("indice_ConjuntoGuitanoRECAB", false, false);
    visibleSection("indice_CuartetoAsaf", false, false);
    visibleSection("indice_DuoZimrah", false, false);
    visibleSection("indice_EdithAravena", false, false);
    visibleSection("indice_PrimeraFe", false, false);

    const elementos = document.querySelectorAll('.texto-centro');
    elementos.forEach(function (elemento) {
      var numero = "";
      if (elemento.parentNode.parentNode.getElementsByClassName("texto-arriba") && elemento.parentNode.parentNode.getElementsByClassName("texto-arriba").length > 0) {
        numero = elemento.parentNode.parentNode.getElementsByClassName("texto-arriba")[0].innerText.toLowerCase();
        numero = numero.replace("#", "");
      }

      //debugger;

      // por defecto todos están ocultos
      elemento.parentNode.parentNode.style.display = 'none';

      var contenido = elemento.textContent.toLowerCase();
      contenido = numero + " " + contenido;

      // antes de comparar, normaliza ambos textos para evitar diferencias por puntuación y/o mayúsculas
      texto = normalizeText(texto);
      contenido = normalizeText(contenido);

      if (contenido.includes(texto)) {
        elemento.parentNode.parentNode.style.display = 'block';
        visibleSection(elemento.parentNode.parentNode.parentNode.id, true, true);
      }
    });
  }

  cerrarTeclado();
});

document.querySelector('#buscar').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();           // evita salto de línea/búsqueda
      // da un tick para que termine el último 'input'
      setTimeout(cerrarTeclado, 0);
    }
  });

function normalizeText(text) {
  return text
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "") // Eliminar diacríticos (tildes)
  .replace(/[^\w\s]/g, "") // Eliminar puntuación
  .replace(/\s+/g, " ") // Reemplazar múltiples espacios por un solo espacio
  .trim(); // Eliminar espacios al inicio y al final
}



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
function visibleSection(id, visible, VisibleTitulo) {
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
  else {
    strSeccion = id.replace("indice_", "seccion_");
    AplicaParent = true;
  }

  var elemento = document.getElementById(strSeccion);
  if (!elemento)
    return; // no se encontró.

  var strVisible = (visible ? "block" : "none");
  elemento.style.display = strVisible;

  var TituloElemento = document.getElementById("Title_" + strSeccion);
  TituloElemento.style.display = (VisibleTitulo ? "block" : "none");

  if (AplicaParent) {
    elemento = elemento.parentNode;
    elemento.style.display = strVisible;

    TituloElemento = document.getElementById("Title_" + elemento.id);
    TituloElemento.style.display = (VisibleTitulo ? "block" : "none");
  }
}


// FUNCIONES DE ORDENAMIENTO DE SECCIONES
function ordenarAlfabeticamente(NombreSeccion) {
  var contenedor = document.getElementById(NombreSeccion);
  var items = contenedor.getElementsByClassName("item");
  var itemsArray = Array.from(items);

  itemsArray.sort(function (a, b) {
    var textoA = a.querySelector(".texto-centro").textContent.trim();
    var textoB = b.querySelector(".texto-centro").textContent.trim();

    textoA = textoA.replace("¿", "");
    textoB = textoB.replace("¿", "");

    return textoA.localeCompare(textoB);
  });

  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }

  itemsArray.forEach(function (item) {
    contenedor.appendChild(item);
  });
}

function ordenarPorNumero(NombreSeccion) {
  var contenedor = document.getElementById(NombreSeccion);
  var items = contenedor.getElementsByClassName("item");
  var itemsArray = Array.from(items);

  itemsArray.sort(function (a, b) {
    var NumeroA = parseInt(a.querySelector(".texto-arriba").textContent.trim(), 10);
    var NumeroB = parseInt(b.querySelector(".texto-arriba").textContent.trim(), 10);
    return NumeroA - NumeroB;
  });

  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }

  itemsArray.forEach(function (item) {
    contenedor.appendChild(item);
  });
}  		