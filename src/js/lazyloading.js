// // --------------- Mejora del lazy loading------------------
// //----------------------------------------------------------

// Función para cargar la imagen del CSS
function loadCSSImage(element, imageUrl) {
    const img = new Image();
    img.src = imageUrl;
    img.onload = function () {
        element.style.backgroundImage = `url(${imageUrl})`;
    };
}

// Obtén todos los elementos con las clases 'actual' y 'elemScale'
const elements = document.querySelectorAll('.actual, .elemScale');

// Carga la imagen del CSS para cada elemento
elements.forEach(function (element) {
    const imageUrl = getComputedStyle(element, '::before').getPropertyValue('background-image');
    const imageUrlClean = imageUrl.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
    loadCSSImage(element, imageUrlClean);
});

