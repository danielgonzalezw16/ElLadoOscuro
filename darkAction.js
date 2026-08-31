const busq = document.querySelector(".busqueda");
const text = busq.querySelector('input'); text.type = "text"; 
// Con (text.type= "text") podemos hacer que se vuelva de tipo texto

busq.addEventListener("submit", 
    function(evento){
        evento.preventDefault();

        // Obtenemos el texto y con Trim() limpiamos lo vacio
        const valor= text.value.trim().toLowerCase();

        if (valor === 'snoopy'){
            //EJ: window.open para una url funcional, y _blank para pestaña nueva
            //EJ: window.location.href('snoopy.png') para ir a una locacion
            window.open("categoria snoopys.html",'_blank');
        }

    const imagens = [
        "darkAssets/Imagenes/Snoopy.jpg",

    ];


    let indiceActual = 0 ;
    const boton = document.getElementById("btnCambiar");
    const imagen= document.getElementById("darkAssets/Imagenes/Snoopy.jpg");

    boton.addEventListener("click", function(){
        indiceActual = (indiceActual +1)% imagenes.length;
        imagen.src = imagene[indiceActual];
    });
});

// SECCION PRINCIPAL ANUNCIOS
// --------------------------
// Son las Constantes para Ambos Botones
const antesPrincipal = document.getElementById('p-izq');
const despuesPrincipal = document.getElementById('p-der');

// Es la lista para las imagenes y guardar el orden
const imgs = Array.from(document.querySelectorAll('.pelu-item'));
const tiposImgs = ['item-left', 'item-center', 'item-right'];

// Es la funcion para Actualizar cada vez que cambian de posicion
function nuevoGanador() {
  imgs.forEach((img, index) => {
    // Quitamos todas las clases que haya
    img.classList.remove('item-left', 'item-center', 'item-right');
    // Ponemos la nueva clase que esta ahora, en el Array
    img.classList.add(tiposImgs[index]);
  });
}

// Evento para cuando se mueve a la derecha
despuesPrincipal.addEventListener('click', () => {
  // Sacamos la ultima para ponerla al principio
  const ultImg = tiposImgs.pop(); // pop es para ver la ultima
  tiposImgs.unshift(ultImg); // Agrega un elemento al principio
  nuevoGanador();
});

// Evento para la flecha Izquierda (Retroceder)
antesPrincipal.addEventListener('click', () => {
  // Quitamos la primera para ponerla al final
  const primImg = tiposImgs.shift(); //Para ver la primera
  tiposImgs.push(primImg); //Para colocar el elemento al final
  nuevoGanador();
});

