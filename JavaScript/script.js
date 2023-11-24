const switchButton = document.getElementById('switch');
const darknav = document.querySelector('.menu');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //agrega o saca la clase 'dark' al body
    darknav.classList.toggle('dark'); //agrega clase 'dark' al nav
    switchButton.classList.toggle('active');//agrega clase "activo" al boton

        if (darknav.classList.contains('dark'))
            document.getElementById('menulogo').src = "recursos/logonuevoosc.png"
        else
            document.getElementById('menulogo').src = "recursos/logonuevocla.png"
});
