const contenedorAfinador = document.querySelector('.contenedor-afinador');
const selectInstrumento = document.getElementById('select-instrumento');
console.log(contenedorAfinador)
// const crearCuadrado = (contenedorCuadricula) => {
//     for(let i=0; i<8; i++) {
//         for(let j=0; j<19; j++) {
//             const divCuadrado = document.createElement('div');
//             divCuadrado.classList.add('cuadricula');
//             contenedorCuadricula.append(divCuadrado);
//         }
//     }
// }

const mostrarAfinadorInstrumento = () => {
    // const contenedorOpcionSeleccionada = document.querySelector('.contenedor-opcion-seleccionada');
    const opcionSeleccionada = selectInstrumento.value;
    console.log(opcionSeleccionada);

    if(opcionSeleccionada === 'guitarra') {
        const div = document.createElement('div');
        div.classList.add('contenedor-opcion-seleccionada');
        div.innerHTML = `
            <div class="contenedor-animacion">
                <div class="contenedor-cuadricula">
                </div>

            </div>

            <div class="contenedor-guitarra">
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


        // const contenedorCuadricula = document.querySelector('.contenedor-cuadricula');
        // // crearCuadrado(contenedorCuadricula);
        // console.log(contenedorCuadricula)
        // for(let i=0; i<8; i++) {
        //     for(let j=0; j<19; j++) {
        //         const divCuadrado = document.createElement('div');
        //         divCuadrado.classList.add('cuadricula');
        //         contenedorCuadricula.append(divCuadrado);
        //     }
        // }
        
        contenedorAfinador.append(div);

    }
}

const restringirOpcionDefault = () => {
    const opcionDefault = document.getElementById('default');
    opcionDefault.disabled = true;
}



selectInstrumento.addEventListener('change', mostrarAfinadorInstrumento);
selectInstrumento.addEventListener('click', restringirOpcionDefault);