// Obtener todos los elementos con la clase "estadoTienda"
let elementosTienda = document.getElementsByClassName("estadoTienda");

// Obtener la fecha actual
let fechaActual = new Date();

// Obtener el día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)
let diaSemana = fechaActual.getDay();

// Obtener la hora actual
let horaActual = fechaActual.getHours();

// Verificar si es viernes, sábado o domingo y está dentro del horario de apertura
if ((diaSemana === 5 || diaSemana === 6 || diaSemana === 0) && horaActual >= 11 && horaActual < 24) {
  // Recorrer todos los elementos y actualizar su contenido y estilo
    for (let i = 0; i < elementosTienda.length; i++) {
        elementosTienda[i].textContent = "¡ABIERTO!";
        elementosTienda[i].style.backgroundColor = "#2ecc71";
    }
} else {
  // Recorrer todos los elementos y actualizar su contenido y estilo
    for (let i = 0; i < elementosTienda.length; i++) {
        elementosTienda[i].textContent = "CERRADO";
        elementosTienda[i].style.backgroundColor = "#e74c3c";
    }
}