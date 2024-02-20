
const contenedorProductos = document.querySelector('contenedor-productos');
const pathImagenes = '../assets/img/instrumentos/';
const arrayObjetosImagenes = [];

const crearObjetoImagen = (nombreInstrumeto, direccionImagen, precioInstrumento, descripcionInstrumento) => {
    const objetoImagen = {
        nombreInstrumeto: nombreInstrumeto,
        direccionImagen: direccionImagen,
        precioInstrumento: precioInstrumento,
        descripcionInstrumento: descripcionInstrumento
    }
    arrayObjetosImagenes.push(objetoImagen)
}

const agregarProductos = () => {

    arrayObjetosImagenes.forEach(objetoImagen => {
        console.log(objetoImagen);
        const divProducto = document.createElement('div');
        divProducto.classList.add('contenedor-producto');
        divProducto.innerHTML = `
            <img src="${objetoImagen['direccionImagen']}" alt="producto">
            <h3>${objetoImagen['nombre-imagen']}</h3>
            <p>${objetoImagen['descripcion-imagen']}</p>
            <p>Precio</p>
            <button class="btn-escoger">Escoger</button>
        `;
    });
    
}

crearObjetoImagen('Guitarra clásica', `${pathImagenes}guitarra1`, 'S/.300', 'Instrumento ..........');
crearObjetoImagen('Guitarra clásica negra', `${pathImagenes}guitarra2`, 'S/.300', 'Instrumento ..........');


agregarProductos();