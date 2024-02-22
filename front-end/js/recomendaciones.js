
const contenedorProductos = document.querySelector('.contenedor-productos');
const pathImagenes = '../../front-end/assets/img/';
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

crearObjetoImagen('Guitarra Acústica – Ortega Student Series RST5M-3/4BK – Negro', `${pathImagenes}producto1.png`, 'S/. 519');
crearObjetoImagen('Bajo – TAKEY – TK-JA5-LPB – Turqueza', `${pathImagenes}producto12.png`, 'S/. 949');
crearObjetoImagen('Bajo – TAKEY – BT05-HC – Natural', `${pathImagenes}producto13.png`, 'S/. 2619');
crearObjetoImagen('Piano Digital CASIO – Celviano AP-270BKC2 – Negro', `${pathImagenes}producto14.png`, 'S/. 1470');
crearObjetoImagen('Cabezal para Guitarra – MARSHALL – JVM1H 50th – Negro', `${pathImagenes}producto15.png`, 'S/. 2919');
crearObjetoImagen('Pedal Analogico KORG – NUVIBE', `${pathImagenes}producto16.png`, 'S/. 1020');
crearObjetoImagen('Guitarra Elétrica – GIBSON – LPS500TONH1 – Tobacco Burst', `${pathImagenes}producto17.png`, 'S/. 919');
crearObjetoImagen('Medeli YODRUM – Batería electrónica digital', `${pathImagenes}producto18.png`, 'S/. 4700');
crearObjetoImagen('Ukelele Concierto Flight DUC380 Jade', `${pathImagenes}producto19.png`, 'S/. 230');

agregarProductos();