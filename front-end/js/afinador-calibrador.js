const contenedorAfinador = document.querySelector('.contenedor-afinador');
const selectInstrumento = document.getElementById('select-instrumento');

const crearCuadrado = (contenedorCuadricula) => {
    for(let i=0; i<8; i++) {
        for(let j=0; j<21; j++) {
            const divCuadrado = document.createElement('div');
            divCuadrado.classList.add('cuadricula');
            contenedorCuadricula.append(divCuadrado);
        }
    }
}

const mostrarAfinadorInstrumento = () => {
    const contenedorOpcionSeleccionada = document.querySelector('.contenedor-opcion-seleccionada');
    console.log(contenedorOpcionSeleccionada)
    const opcionSeleccionada = selectInstrumento.value;
    console.log(opcionSeleccionada);

    contenedorOpcionSeleccionada.innerText = '';

    if(opcionSeleccionada === 'guitarra') {
        const div = document.createElement('div');
        div.classList.add('contenedor-guitarra');
        div.innerHTML = `
            <div class="contenedor-animacion">
                <div class="contenedor-cuadricula">
                    <div class="cuadricula"></div>
                </div>

            </div>

            <div class="contenedor-guitarra2">
                <div class="contenedor-botones">
                    <button class="boton">D</button>
                    <button class="boton">A</button>
                    <button class="boton">E</button>
                </div>

                <div class="contenedor-cabezal">
                    <img src="assets/img/cabezal-guitarra.png" alt="Cabezal de una guitarra" class="cabezal-guitarra">
                </div>

                <div class="contenedor-botones">
                    <button class="boton">G</button>
                    <button class="boton">B</button>
                    <button class="boton">E</button>
                </div>
            </div>
        `;

        contenedorOpcionSeleccionada.append(div);
        const contenedorCuadricula = document.querySelector('.contenedor-cuadricula');
        crearCuadrado(contenedorCuadricula);
    }
}

const restringirOpcionDefault = () => {
    const opcionDefault = document.getElementById('default');
    opcionDefault.disabled = true;
}



selectInstrumento.addEventListener('change', mostrarAfinadorInstrumento);
selectInstrumento.addEventListener('click', restringirOpcionDefault);