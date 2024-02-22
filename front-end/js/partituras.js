const selectInstrumento = document.getElementById('select-instrumento');
const selectCancion = document.getElementById('select-cancion');
const selects = document.querySelectorAll('.select');
const contenedor = document.querySelector('.contenedor');
const contenedorVideo = document.querySelector('.contenedor-video')
const video = document.getElementById('video');
let reproduciendo = false;

const mostrarPartituras = () => {
    const contenedorOpcionSeleccionada = document.querySelector('.contenedor-opcion-seleccionada');
    const opcionSeleccionada = selectInstrumento.value;
    const cancionSeleccionada = selectCancion.value;
    const pathPartituras = '../assets/img/partituras/dragon-ball/';
    // const a = 
    contenedorOpcionSeleccionada.innerText = '';

    if(opcionSeleccionada === 'guitarra' && cancionSeleccionada === 'opcion1') {
        const div = document.createElement('div');
        div.classList.add('contenedor-hojas');
        div.innerHTML = `
            <img src="${pathPartituras}pagina-1.jpg" alt="Partitura">
        `;
    
        contenedorOpcionSeleccionada.append(div);

        const divPlayPausa = document.createElement('div');
        divPlayPausa.classList.add('contenedor-botones');
        divPlayPausa.innerHTML = `
            <a href="#" class="btn-play-pausa pausa">
                <i class="bi bi-play-circle-fill"></i>
            </a>
        `;

        contenedor.append(divPlayPausa);

        const btnPlayPausa = document.querySelector('.btn-play-pausa');
        btnPlayPausa.addEventListener('click', cambiarPausarPlay);
    }
}

const cambiarPausarPlay = (evento) => {
    evento.preventDefault();
    
    const boton = evento.target;
    const elementoAnchor = boton.parentElement;
    console.log(boton, boton.parentElement);

    if(elementoAnchor.classList.contains('pausa')) {
        elementoAnchor.classList.remove('pausa');
        elementoAnchor.classList.add('play');
        elementoAnchor.innerHTML = `
            <i class="bi bi-pause-circle-fill"></i>
        `;
        
        contenedorVideo.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AuGIwXpCXa8?si=6x6zRpz1jFp3b3sH&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;

        console.log('Me reproduciré')
    } else if(elementoAnchor.classList.contains('play')) {
        elementoAnchor.classList.remove('play');
        elementoAnchor.classList.add('pausa');
        elementoAnchor.innerHTML = `
        <i class="bi bi-play-circle-fill"></i>
        `;

        contenedorVideo.innerHTML = `
            <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/AuGIwXpCXa8?si=6x6zRpz1jFp3b3sH" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
        console.log('Me pondré en pausa')
    }
    
}

const restringirDefaultInstrumento = () => {
    const opcionDefault = document.getElementById('default-instrumento');
    opcionDefault.disabled = true;
}

const restringirDefaultCancion = () => {
    const opcionDefault = document.getElementById('default-cancion');
    opcionDefault.disabled = true;
}

selectCancion.addEventListener('change', mostrarPartituras);
selectInstrumento.addEventListener('click', restringirDefaultInstrumento);
selectCancion.addEventListener('click', restringirDefaultCancion);