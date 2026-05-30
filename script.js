
// NAVBAR (ANIMACIÓN)-----

const navbar = document.getElementById('navbar');

// "scroll" se dispara cada vez que el usuario mueve la página
window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); // Agrega clase CSS que la pone blanca
    } else {
    navbar.classList.remove('scrolled'); // La regresa transparente
    }
});

// MENU (PARA EL CELULAR)-----

const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

// Al hacer clic en el botón hamburguesa
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('abierto'); // toggle = si no tiene la clase, la agrega; si la tiene, la quita
});

// Al hacer clic en cualquier link del menú, cerrarlo
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
    navLinks.classList.remove('abierto');
    });
});

// FAQ (ACORDEÓN) -----

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const boton = item.querySelector('.faq-pregunta');

    boton.addEventListener('click', () => {

    const estaAbierto = item.classList.contains('abierto');

    // Primero cerramos TODOS los items
    faqItems.forEach(i => i.classList.remove('abierto'));

    if (!estaAbierto) {
        item.classList.add('abierto');
    }

    });
});

// ANIMACIONES (AL HACER SCROLL) -----

const observer = new IntersectionObserver(

    (entries) => {
    entries.forEach(entry => {
        // Si el elemento es visible
        if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Agrega clase que activa la animación CSS
        observer.unobserve(entry.target);       // Deja de vigilarlo (la animación ya ocurrió)
        }
    });
    },

  { threshold: 0.15 } // Se activa cuando el 15% del elemento es visible

);

// Aplicamos el observer a todos los elementos que queremos animar
document.querySelectorAll(
    '.servicio-card, .testimonio-card, .sobre-mi-grid, .faq-item, .section-header'
).forEach(el => {
  el.classList.add('fade-in-up'); // Agrega la clase inicial (invisible)
  observer.observe(el); // Empieza a vigilarlo
});

// SMOOTH SCROLL (PARA CIERTOS NAVEGADORES) -----

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {
    const destino = document.querySelector(this.getAttribute('href'));

    if (destino) {
      e.preventDefault(); // Evita el salto brusco por defecto
        destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    });
});

// AÑO EN EL FOOTER (SE ACTUALIZA AUTOMÁTICAMENTE) -----

const footerCopy = document.querySelector('.footer-copy');
if (footerCopy) {
    const anioActual = new Date().getFullYear();
    footerCopy.innerHTML = footerCopy.innerHTML.replace('2025', anioActual);
}