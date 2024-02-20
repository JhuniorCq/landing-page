
const contenedorProductos = document.querySelector('.contenedor-productos');
const pathImagenes = '../../front-end/assets/img/instrumentos/';
const arrayObjetosImagenes = [];
console.log(contenedorProductos)

const crearObjetoImagen = (nombreInstrumento, direccionImagen, precioInstrumento, descripcionInstrumento) => {
    const objetoImagen = {
        nombreInstrumento: nombreInstrumento,
        direccionImagen: direccionImagen,
        precioInstrumento: precioInstrumento,
        descripcionInstrumento: descripcionInstrumento
    }
    arrayObjetosImagenes.push(objetoImagen)
}

const agregarProductos = () => {
    console.log(contenedorProductos)
    arrayObjetosImagenes.forEach(objetoImagen => {
        console.log(objetoImagen);  
        const divProducto = document.createElement('div');
        divProducto.classList.add('contenedor-producto');
        divProducto.innerHTML = `
            <img src="${objetoImagen['direccionImagen']}" alt="producto" class="producto">
            <h3>${objetoImagen['nombreInstrumento']}</h3>
            <p>${objetoImagen['descripcionInstrumento']}</p>
            <p>${objetoImagen['precioInstrumento']}</p>
            <button class="btn-escoger">Escoger</button>
        `;
        contenedorProductos.append(divProducto);
    });
    
}

crearObjetoImagen('Guitarra clásica', `${pathImagenes}guitarra1.jpeg`, 'S/.300', 'Instrumento ..........');
crearObjetoImagen('Guitarra clásica negra', `${pathImagenes}guitarra2.jpeg`, 'S/.300', 'Instrumento ..........');


agregarProductos();