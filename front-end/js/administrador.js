const formulario = document.getElementById('formulario');
const nombreInstrumento = document.getElementById('nombre-instrumento');
const cantidadInstrumento = document.getElementById('cantidad-instrumento');
const precioInstrumento = document.getElementById('precio-instrumento');

const recolectarDatos = (evento) => {
    evento.preventDefault();

    const nombreInstrumentoValor = nombreInstrumento.value;
    const cantidadInstrumentoValor = cantidadInstrumento.value;
    const precioInstrumento = precioInstrumento.value;

    
}











formulario.addEventListener('submit', recolectarDatos);