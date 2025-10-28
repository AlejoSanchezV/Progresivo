// ------------------------------
// ANIMACIONES DE HOVER (zoom + rebote + sombra)
// ------------------------------
document.querySelectorAll('.gallery-grid img, .cta-button, .hero-content').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    el.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    el.style.transform = 'scale(1.05)';
    el.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1)';
    el.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
  });

  el.addEventListener('mousedown', () => {
    el.style.transform = 'scale(0.95)';
  });

  el.addEventListener('mouseup', () => {
    el.style.transform = 'scale(1.05)';
  });
});

// Efecto de scroll suave (anclas internas)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =====================
// ANIMACIÓN HERO AL CARGAR + AL SCROLL
// =====================
const hero = document.querySelector('.hero');
const heroImage = hero.querySelector('img');

// Al cargar
gsap.from(heroImage, {
  opacity: 0,
  scale: 1.05,
  duration: 1.2,
  ease: 'power2.out'
});

// Al hacer scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const opacity = Math.max(1 - scrollY / 400, 0.2);
  heroImage.style.opacity = opacity;
});


// =====================
// ANIMACIONES DE ENTRADA CON SCROLL (Texto y tarjetas)
// =====================
gsap.utils.toArray('.fade-up').forEach(elem => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out'
  });
});

// ------------------------------
// EFECTO DE SCROLL SUAVE
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ANIMACIÓN DEL FONDO (mousemove con gradiente etéreo)
const bg = document.body;
const spotlight = document.createElement('div');

spotlight.style.position = 'fixed';
spotlight.style.top = '0';
spotlight.style.left = '0';
spotlight.style.width = '100%';
spotlight.style.height = '100%';
spotlight.style.pointerEvents = 'none';
spotlight.style.zIndex = '-1';
spotlight.style.transition = 'background 0.3s ease';
spotlight.style.background = 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3), transparent 40%)';

document.body.appendChild(spotlight);

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth * 100;
  const y = e.clientY / window.innerHeight * 100;

  spotlight.style.background = 'radial-gradient(circle at center, rgba(255, 204, 229, 0.4), transparent 40%)';

spotlight.style.background = `
  radial-gradient(circle at ${x}% ${y}%,
    rgba(255, 220, 240, 0.6),  /* rosa suave */
    rgba(255, 240, 200, 0.5),  /* dorado piel */
    rgba(135, 206, 250, 0.4),  /* azul claro saturado */
    rgba(255, 255, 255, 0.2),
    transparent 60%
  )
`;
});