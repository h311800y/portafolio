const iconoMenu = document.querySelector('#icono-menu'),

menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) =>{

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == '../portafolio/elementos/bars-solid.svg'){
        e.target.setAttribute('src','../portafolio/elementos/bars-solid.svg')
    }else{
        e.target.setAttribute('src','../portafolio/elementos/times-solid.svg')
    }
});

