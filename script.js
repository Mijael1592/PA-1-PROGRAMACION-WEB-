// Mostrar Información al presionar el botón
let botonInfo = document.getElementById("infoButton");
let masInfo = document.getElementById("moreInfo");

botonInfo.addEventListener("click", function() {
  if (masInfo.style.display === "none") {
    masInfo.style.display = "block";
    botonInfo.textContent = "Ver menos";
  } else {
    masInfo.style.display = "none";
    botonInfo.textContent = "Ver más";
  }
});

// Formulario de contacto
let formulario = document.getElementById("contactForm");
let respuesta = document.getElementById("formResponse");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // evita que se recargue la página

  // Mostrar un mensaje de respuesta 
  respuesta.innerHTML = "<p class='alert alert-success'>¡Gracias por contactarnos! Te responderemos pronto.</p>";

  // Limpiar el formulario
  formulario.reset();
});
