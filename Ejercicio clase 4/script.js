// Esperar a que el documento cargue
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos el formulario
    const form = document.querySelector("form");
  
    // Evento submit
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que recargue la página
  
      // Aquí podrías enviar los datos a un servidor con fetch(), 
      // pero por ahora solo mostramos el mensaje
      alert("✅ ¡Tu mensaje ha sido recibido! Gracias por contactarnos.");
  
      // Opcional: limpiar el formulario
      form.reset();
    });
  });
  
