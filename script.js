document.addEventListener("DOMContentLoaded", () => {
    const bloques = document.querySelectorAll('.animar-scroll');
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('mostrar');
            }
        });
    }, { threshold: 0.15 });

    bloques.forEach(bloque => observador.observe(bloque));

    const seccionPromo = document.querySelector('.seccion-promo');
    if (seccionPromo) {
        const observadorPromo = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    seccionPromo.classList.add('visible');
                    observadorPromo.unobserve(seccionPromo);
                }
            });
        }, { threshold: 0.2 });

        observadorPromo.observe(seccionPromo);
    }

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.onclick = function () {
            navMenu.classList.toggle('activo');

            const icono = menuToggle.querySelector('i');
            if (navMenu.classList.contains('activo')) {
                icono.className = 'fa-solid fa-xmark';
            } else {
                icono.className = 'fa-solid fa-bars';
            }
        };

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('activo');
                menuToggle.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }

    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    const btnTop = document.getElementById('btn-top');

    if (btnTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btnTop.classList.add('visible');
            } else {
                btnTop.classList.remove('visible');
            }
        });

        btnTop.onclick = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    const formContacto = document.getElementById('form-contacto');
    const msgExito = document.getElementById('msg-exito');

    if (formContacto && msgExito) {

        formContacto.addEventListener('submit', function (e) {
            e.preventDefault();
            const nombre = document.formularioContacto.nombre.value;
            msgExito.innerHTML =
                '<i class="fa-solid fa-circle-check"></i> ¡Gracias, <strong>' +
                nombre + '</strong>! Tu mensaje fue recibido. Te contactaremos pronto.';
            msgExito.classList.add('mostrar');
            formContacto.reset();
            setTimeout(function () {
                msgExito.classList.remove('mostrar');
            }, 5000);
        });
    }

});
