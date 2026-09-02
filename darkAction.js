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

// Lista para los Ids y cambiar su funcion
const tiposIds = ['Pokemon','Snoopy','Anime']

// Es la funcion para Actualizar cada vez que cambian de posicion
function nuevoGanador() {
  imgs.forEach((img, index) => {

    img.classList.remove('efecto')
    // Agregamos 'cambio' a la clase para que se sepa que esta en transicion
    img.classList.add('cambio');

    // Quitamos todas las clases que haya
    img.classList.remove('item-left', 'item-center', 'item-right');

    // Ponemos la nueva clase que esta ahora, en el Array
    img.classList.add(tiposImgs[index]);

    // Cambiamos el ID de la imagen por su ID real
    img.id=tiposIds[index];

    setTimeout(() => {
      img.classList.remove('cambio');
      // Por si pone el mouse al medio mientras aun esta en transicion, el matches es para saber si esta
      // pasando lo del parentesis, en este caso ':hover', que es si tienes el mouse encima
      if (img.classList.contains('item-center') && img.matches(':hover')) {
                img.classList.add('efecto');
      }
    }, 490); 
  });
}

// Funcion para Actualizar el Click en las imagenes
function nuevoClickeador() {
    // Diccionario para las imagenes
    const peluches = {
      Pokemon: 'categoria pokemon.html',
      Snoopy: 'categoria snoopys.html',
      Anime: 'categoria Anime.html'
    };

    // Ciclo para el URL de las imagenes
    for (const id in peluches) {
      const img = document.getElementById(id);
      if (img) {
        img.addEventListener('click', () => {
        if (img.className.split(' ').includes('item-center')){
          img.style.cursor = 'pointer'; // para que se vea clickeable
          
            window.open(peluches[id]);
          

        } else if (img.className.split(' ').includes('item-left')){
            img.style.cursor = 'pointer';
            
              const primImg = tiposImgs.shift(); //Para ver la primera
              tiposImgs.push(primImg); //Para colocar el elemento al final
              nuevoGanador();
            

        } else if (img.className.split(' ').includes('item-right')){
            img.style.cursor = 'pointer';
            
              const ultImg = tiposImgs.pop(); // pop es para ver la ultima
              tiposImgs.unshift(ultImg); // Agrega un elemento al principio
              nuevoGanador();
            
        }
        });

        // Para si el mouse esta encima
        img.addEventListener('mouseenter', () => {
          if (img.classList.contains('item-center') && !img.classList.contains('cambio')) {
              img.classList.add('efecto');
          }
        });
        
        // Para si el mouse esta fuera
        img.addEventListener('mouseleave', () => {
          img.classList.remove('efecto');
        });
      }
    };
   
};

document.addEventListener('DOMContentLoaded', () => {


  nuevoClickeador();
  

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

});
