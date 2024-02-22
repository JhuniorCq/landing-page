const contenedorAfinador = document.querySelector('.contenedor-afinador');
const selectInstrumento = document.getElementById('select-instrumento');
const selectAfinador = document.getElementById('select-afinador')
console.log(selectAfinador)
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
    const opcionSeleccionada = selectInstrumento.value;
    const afinadorSeleccionado = selectAfinador.value;
    console.log(afinadorSeleccionado)
    contenedorOpcionSeleccionada.innerText = '';

    if(opcionSeleccionada === 'guitarra' && afinadorSeleccionado === 'opcion1') {
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

const restringirDefaultInstrumento = () => {
    const opcionDefault = document.getElementById('default-instrumento');
    opcionDefault.disabled = true;
}

const restringirDefaultAfinador = () => {
    const opcionDefault = document.getElementById('default-afinador');
    opcionDefault.disabled = true;
}

selectAfinador.addEventListener('change', mostrarAfinadorInstrumento);
selectInstrumento.addEventListener('click', restringirDefaultInstrumento);
selectAfinador.addEventListener('click', restringirDefaultAfinador)