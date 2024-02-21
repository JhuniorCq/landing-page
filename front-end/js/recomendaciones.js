
const contenedorProductos = document.querySelector('.contenedor-productos');
const pathImagenes = '../../front-end/assets/img/instrumentos/';
const arrayObjetosImagenes = [];
console.log(contenedorProductos)

const crearObjetoImagen = (nombreInstrumento, direccionImagen, precioInstrumento) => {
    const objetoImagen = {
        nombreInstrumento: nombreInstrumento,
        direccionImagen: direccionImagen,
        precioInstrumento: precioInstrumento,
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
            <h3 class="titulo-producto">${objetoImagen['nombreInstrumento']}</h3>
            <p class="precio-producto">${objetoImagen['precioInstrumento']}</p>
            <button class="btn-escoger">Ver producto</button>
        `;
        contenedorProductos.append(divProducto);
    });
    
}

crearObjetoImagen('Guitarra Acústica – Ortega Student Series RST5M-3/4BK – Negro', `${pathImagenes}1.png`, 'S/. 519');
crearObjetoImagen('Guitarra clásica negra', `${pathImagenes}2.png`, 'S/. 300');
crearObjetoImagen('Guitarra clásica negra', `${pathImagenes}3.png`, 'S/. 300');
crearObjetoImagen('Guitarra clásica negra', `${pathImagenes}4.png`, 'S/. 300');
crearObjetoImagen('Guitarra clásica negra', `${pathImagenes}5.png`, 'S/. 300');
crearObjetoImagen('Guitarra clásica negra', `${pathImagenes}6.png`, 'S/. 300');
crearObjetoImagen('Guitarra clásica negra', `${pathImagenes}7.png`, 'S/. 300');
crearObjetoImagen('Guitarra clásica negra', `${pathImagenes}8.png`, 'S/. 300');
crearObjetoImagen('Guitarra clásica negra', `${pathImagenes}9.png`, 'S/. 300');

agregarProductos();