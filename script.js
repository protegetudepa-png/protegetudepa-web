const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const form = document.getElementById('leadForm');
const formMessage = document.getElementById('formMessage');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nombre = data.get('nombre') || '';
    const telefono = data.get('telefono') || '';
    const email = data.get('email') || '';
    const distrito = data.get('distrito') || '';
    const servicio = data.get('servicio') || '';
    const metraje = data.get('metraje') || '';
    const mensaje = data.get('mensaje') || '';

    const mensajeWhatsapp = [
      'Hola, quiero cotizar una inspección de departamento.',
      '',
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Email: ${email}`,
      `Distrito: ${distrito}`,
      `Servicio: ${servicio}`,
      `Metraje: ${metraje}`,
      `Mensaje: ${mensaje}`,
    ].join('\n');

    const url = `https://wa.me/51999999999?text=${encodeURIComponent(mensajeWhatsapp)}`;
    window.open(url, '_blank');

    formMessage.textContent = 'Se abrió WhatsApp con tu solicitud. Luego puedes conectar este formulario a correo o CRM.';
    form.reset();
  });
}
