


window.addEventListener('load',   () => { 

const btnMenubar = document.getElementById('icono_menu');
btnMenubar.addEventListener('click', menuResponsive);

const btnCerrarMenubar = document.getElementById('icono_menu_cerrar');
btnCerrarMenubar.addEventListener('click', CerrarMenuResponsive) 

function menuResponsive() {  
    document.getElementById('menu_responsive').classList.toggle('hide');
    document.getElementById('secciones_cards').classList.toggle('ocultar_seccion');
    document.getElementById('particles-js').classList.toggle('desaparecer_secciones');
    document.getElementById('btn').classList.toggle('ocultar_esta_vaina');
    
}



function CerrarMenuResponsive() {
    document.getElementById('menu_responsive').classList.toggle('hide');
    document.getElementById('particles-js').classList.toggle('desaparecer_secciones');
    document.getElementById('secciones_cards').classList.toggle('ocultar_seccion');
    document.getElementById('btn').classList.toggle('ocultar_esta_vaina');
    
}

})





