async function cargarTraducciones() {
    const response = await fetch('traducciones.json');
    const data = await response.json();
    return data;
}

let traducciones;

cargarTraducciones().then(data => {
    traducciones = data;
    cambiarIdioma('es'); // Establecer idioma por defecto
});

function cambiarIdioma(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = traducciones[lang][key];
    });
    document.documentElement.lang = lang; // Opcional
}
