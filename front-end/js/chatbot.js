
const contenedorChat = document.querySelector('.contenedor-chat');
const botonEnviar = document.querySelector('.btn-enviar');
const inputSearch = document.querySelector('.input-search');
const respuestasIA = [
    '¡Depende de tus gustos y de qué tipo de música te interese tocar! Si estás buscando empezar, algunos instrumentos populares para principiantes incluyen la guitarra acústica o eléctrica, el piano o el teclado, la batería y el ukelele. Cada uno tiene sus propias ventajas y desafíos, así que piensa en qué tipo de música te gusta y qué instrumento te llama más la atención. Si buscas algo menos convencional, podrías probar con el violín, la flauta, el saxofón, la trompeta o incluso instrumentos étnicos como el djembe o el sitar. Lo más importante es elegir un instrumento que te emocione y te motive a practicar. ¿Alguno de estos te llama la atención?',
    `
        ¡Excelente elección! La guitarra es un instrumento versátil y divertido de aprender. Aquí tienes algunas canciones recomendadas para principiantes:
        1. "Knockin' on Heaven's Door" - Bob Dylan
        2. "Wonderwall" - Oasis
        3. "Horse with No Name" - America
        4. "Let It Be" - The Beatles
        5. "Wish You Were Here" - Pink Floyd
        6. "Hallelujah" - Leonard Cohen / Jeff Buckley
        7. "Hey There Delilah" - Plain White T's
        8. "Time of Your Life (Good Riddance)" - Green Day
        9. "Brown Eyed Girl" - Van Morrison
        10. "House of the Rising Sun" - The Animals
        Estas canciones suelen tener patrones de acordes sencillos y son ideales para principiantes.
        ¡Diviértete tocando!
    `,
    
]

/*
    Pregunta 1: ¿Qué instrumentos musicales me recomiendas?
    Pregunta 2: Usaré la guitarra, ¿con qué canciones me recomiendas empezar?
*/

let iterador = 0;

const enviarMensaje = (evento) => {
    evento.preventDefault();

    if(inputSearch.value === '') {
        alert('Ingrese un mensaje porfavor.');
        return;
    }

    iterador++;

    if(iterador === 3) {
        alert('Solo se permiten 2 preguntas en la versión gratuita');
        return;
    } else if(iterador === 1) {
        contenedorChat.innerText = '';
    }

    const contenedorMensajeUsuario = document.createElement('div');
    contenedorMensajeUsuario.classList.add('contenedor-mensaje-usuario');
    contenedorMensajeUsuario.innerHTML = `
        <p class="parrafo-usuario">
            <span class="nombre-chat">Tú</span>
            <span class="mensaje-usuario mensaje">${inputSearch.value}</span>
        </p>
    `;

    const contenedorMensajeIA = document.createElement('div');
    contenedorMensajeIA.classList.add('contenedor-mensajeIA');
    contenedorMensajeIA.innerHTML = `
        <p class="parrafo-IA">
            <span class="nombre-chat">Melodic Tune</span>
            <span class="mensaje-IA mensaje">${respuestasIA[iterador-1]}</span>
        </p>
    `;
    console.log(respuestasIA[iterador-1])
    setTimeout(function() {
        contenedorChat.append(contenedorMensajeIA);
    }, 1000)
    contenedorChat.append(contenedorMensajeUsuario);
}

const crearMensajeUsuario = () => {

}

const crearMensajeIA = () => {

}





botonEnviar.addEventListener('click', enviarMensaje);