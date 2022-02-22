



const itemsAdentro = document.querySelectorAll('.menu_box a[href^="#"]');
const itemsAfuera =  document.querySelectorAll('.navegacion_items a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      const menuLink =  document.querySelector(`.navegacion_items a[href="#${id}"]`);

            if (entry.isIntersecting) {
                document.querySelector(".navegacion_items .item").classList.remove('hola');
                menuLink.classList.add('hola');
            } else {
                
                menuLink.classList.remove('hola');
            }
    });
}, {
    rootMargin: "-180px 0px -200px 0px"
}

);

itemsAfuera.forEach(itemAfuera => {
    itemAfuera.addEventListener ('click', function() { 
    })
    
    const hash =  itemAfuera.getAttribute("href");
    const target = document.querySelector(hash);

    if (target) {
        observer.observe(target);
    }
})





itemsAdentro.forEach (itemAdentro => {
    itemAdentro.addEventListener('click', CerrarMenuResponsive )
})
