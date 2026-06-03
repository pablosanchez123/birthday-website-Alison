// ═══════════════════════════════════════════════════════════
//  EMAILJS CONFIG
//  1. Crea cuenta gratis en https://www.emailjs.com
//  2. Conecta tu Gmail en "Email Services" → copia el Service ID
//  3. Crea un template con estas variables:
//       {{place_name}}  {{place_location}}  {{place_emoji}}
//     Asunto: Alison eligió su destino 🎉
//     Cuerpo:
//       ¡Hola Pablo! 💌
//       Alison eligió: {{place_name}} {{place_emoji}}
//       Lugar: {{place_location}}
//  4. Pega tus credenciales aquí abajo
// ═══════════════════════════════════════════════════════════
const EMAILJS_PUBLIC_KEY  = 'TU_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'TU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';

// ── Lugares ──────────────────────────────────────────────────
// Para agregar tus fotos:
//   1. Pon 8 fotos en images/1/ llamadas 1.jpg, 2.jpg ... 8.jpg
//   2. Comenta la línea de picsum y descomenta la de images/
const places = [
  {
    id: 1,
    name: 'Vista Élite Casita 09',
    location: 'San Carlos',
    emoji: '🌋',
    // images: Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/p1_${i+1}/600/400`),
    images: Array.from({ length: 8 }, (_, i) => `images/1/${i+1}.png`),
    desc: 'Casita con jacuzzi privado, cocina equipada e internet de alta velocidad. Hermosa vista al Volcán Arenal con puesta de sol. Piscina con agua temperada, cascada, deck y rancho mirador.',
  },
  {
    id: 2,
    name: 'Cabaña de Montaña en Zarcero',
    location: 'Zarcero',
    emoji: '🏔️',
    // images: Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/p2_${i+1}/600/400`),
    images: Array.from({ length: 8 }, (_, i) => `images/2/${i+1}.png`),
    desc: 'Finca Dubi: cabaña moderna en las montañas de Zarcero rodeada de naturaleza y tranquilidad. Detalles en madera, vistas espectaculares y ambiente acogedor. Perfecta para desconectarse.',
  },
  {
    id: 3,
    name: 'Cabaña Boutique AMORA',
    location: 'Naturaleza',
    emoji: '💑',
    // images: Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/p3_${i+1}/600/400`),
    images: Array.from({ length: 8 }, (_, i) => `images/3/${i+1}.png`),
    desc: 'AMORA Deluxe Escape: cabaña privada y romántica para momentos de paz. Sonido de árboles, cielos estrellados y espacios diseñados para el descanso y la conexión en pareja.',
  },
  {
    id: 4,
    name: 'Verde Escondido',
    location: 'Naturaleza',
    emoji: '🌿',
    // images: Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/p4_${i+1}/600/400`),
    images: Array.from({ length: 8 }, (_, i) => `images/4/${i+1}.png`),
    desc: 'Cabaña con jacuzzi privado en sitio eco-friendly. Cada espacio pensado al detalle para el disfrute y comodidad. Conecta con la naturaleza y vive momentos inolvidables.',
  },
  {
    id: 5,
    name: 'Cabaña Armadillo',
    location: 'Volcán Poás',
    emoji: '🌲',
    // images: Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/p5_${i+1}/600/400`),
    images: Array.from({ length: 8 }, (_, i) => `images/5/${i+1}.png`),
    desc: 'En las laderas del Volcán Poás, rodeada de árboles con barrera natural. Despierta con el canto de los pájaros y el viento. Perfecta para descansar y recargar energía.',
  },
  {
    id: 6,
    name: '¡Sky Hills!',
    location: 'Cinco Esquinas',
    emoji: '☁️',
    // images: Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/p6_${i+1}/600/400`),
    images: Array.from({ length: 8 }, (_, i) => `images/6/${i+1}.png`),
    desc: 'Espacio amplio y sereno con hermosa vista desde las alturas. Jacuzzi, tina y chimenea. El lugar perfecto para desconectar del caos de la ciudad y relajarse en total tranquilidad.',
  },
  {
    id: 7,
    name: 'Vindtopp CR — Loft con Vista al Mar',
    location: 'San Ramón',
    emoji: '🌊',
    // images: Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/p7_${i+1}/600/400`),
    images: Array.from({ length: 8 }, (_, i) => `images/7/${i+1}.png`),
    desc: 'Cabaña tipo loft entre las nubes y montañas de San Ramón. Espectacular vista al Golfo de Nicoya rodeada de bosque nuboso. Una experiencia única y mágica entre las alturas.',
  },
  {
    id: 8,
    name: 'Glamping en Elysium',
    location: 'Selva Tropical',
    emoji: '🦜',
    // images: Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/p8_${i+1}/600/400`),
    images: Array.from({ length: 8 }, (_, i) => `images/8/${i+1}.png`),
    desc: 'Privacidad absoluta en 250 acres de selva tropical. Vista al río, tucanes, colibríes y pizotes. A 1.4 km de una cascada de 145 pies dentro de la propiedad.',
  },
];

// ── Estado ────────────────────────────────────────────────────
let selectedId = null;
const galState = {};

// ── Init ──────────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

renderCards();
initAnimations();
initLoveSection();
spawnHearts();

// Recalculate trigger positions after images finish loading
// (images affect page height, which shifts ScrollTrigger offsets)
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});

document.getElementById('btnSend').addEventListener('click', sendChoice);

// ── Render cards ──────────────────────────────────────────────
function renderCards() {
  document.getElementById('grid').innerHTML = places.map(p => {
    galState[p.id] = 0;
    const imgs = p.images.map((src, i) =>
      `<img class="gallery-img${i === 0 ? ' active' : ''}" src="${src}" alt="${p.name} foto ${i+1}" />`
    ).join('');
    const dots = p.images.map((_, i) =>
      `<button class="gal-dot${i === 0 ? ' active' : ''}" onclick="galGo(event,${p.id},${i})"></button>`
    ).join('');

    return `
      <div class="card" id="card-${p.id}">
        <div class="card-heart-badge" id="badge-${p.id}">♥</div>
        <div class="card-gallery" id="gallery-${p.id}">
          ${imgs}
          <button class="gal-btn gal-prev" onclick="galPrev(event,${p.id})">&#8249;</button>
          <button class="gal-btn gal-next" onclick="galNext(event,${p.id})">&#8250;</button>
          <div class="gal-dots">${dots}</div>
          <span class="card-location">${p.emoji} ${p.location}</span>
        </div>
        <div class="card-body">
          <div class="card-name">${p.name}</div>
          <div class="card-desc" id="desc-${p.id}">${p.desc}</div>
          <button class="btn-more" onclick="toggleDesc(event,${p.id})">Ver más</button>
          <button class="card-select" onclick="selectCard(${p.id})">
            <span class="btn-heart">♥</span>
            <span class="btn-label">Seleccionar</span>
          </button>
        </div>
      </div>`;
  }).join('');
}

// ── Carrusel propio ───────────────────────────────────────────
function galGo(e, id, index) {
  if (e) e.stopPropagation();
  const gallery = document.getElementById(`gallery-${id}`);
  gallery.querySelectorAll('.gallery-img')[galState[id]].classList.remove('active');
  gallery.querySelectorAll('.gal-dot')[galState[id]].classList.remove('active');
  galState[id] = index;
  gallery.querySelectorAll('.gallery-img')[index].classList.add('active');
  gallery.querySelectorAll('.gal-dot')[index].classList.add('active');
}
function galPrev(e, id) {
  e.stopPropagation();
  const len = places.find(p => p.id === id).images.length;
  galGo(e, id, (galState[id] - 1 + len) % len);
}
function galNext(e, id) {
  e.stopPropagation();
  const len = places.find(p => p.id === id).images.length;
  galGo(e, id, (galState[id] + 1) % len);
}

// ── GSAP Animations ───────────────────────────────────────────
function initAnimations() {
  // Set initial state first, then animate in
  gsap.set('.eyebrow',    { opacity: 0, y: 20 });
  gsap.set(['.hero-title', '.lead', '.scroll-cta'], { opacity: 0, y: 40 });
  gsap.set('.hero-name',  { opacity: 0, y: 40, scale: 0.92 });

  // Hero entrance — staggered reveal
  gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.2 })
    .to('.eyebrow',    { opacity: 1, y: 0, duration: 0.7 })
    .to('.hero-title', { opacity: 1, y: 0, duration: 0.8 }, '-=0.35')
    .to('.hero-name',  { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.4)' }, '-=0.45')
    .to('.lead',       { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .to('.scroll-cta', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');

  // Section header on scroll
  gsap.from('.section-header', {
    scrollTrigger: { trigger: '.section-header', start: 'top 82%' },
    opacity: 0, y: 55, duration: 0.9, ease: 'power3.out',
  });

  // Cards stagger on load — sin ScrollTrigger para que nunca queden en opacity 0
  gsap.from('.card', {
    opacity: 0, y: 65, duration: 0.75, ease: 'power3.out',
    stagger: 0.07, delay: 0.3,
  });
}

// ── Love section animations ───────────────────────────────────
function initLoveSection() {
  // Set initial states
  gsap.set('.love-tag',  { opacity: 0, y: 28 });
  gsap.set('.love-card', { opacity: 0, scale: 0.95 });

  const tl = gsap.timeline({
    scrollTrigger: { trigger: '.love-section', start: 'top bottom', once: true },
  });

  tl.to('.love-tag',     { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
    .to('.love-card',    { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out' }, '-=0.3')
    .to('.love-p1',      { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power3.inOut' }, '-=0.4')
    .to('.love-divider', { opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.4')
    .to('.love-p2',      { clipPath: 'inset(0 0% 0 0%)', duration: 1.4, ease: 'power3.inOut' }, '-=0.3');
}

// ── Select card ───────────────────────────────────────────────
function selectCard(id) {
  if (selectedId === id) return;

  // Deselect previous
  if (selectedId) {
    document.getElementById(`card-${selectedId}`).classList.remove('selected');
    document.querySelector(`#card-${selectedId} .btn-label`).textContent = 'Seleccionar';
    gsap.to(`#badge-${selectedId}`, { scale: 0, opacity: 0, duration: 0.25, ease: 'power2.in' });
  }

  // Select new
  selectedId = id;
  document.getElementById(`card-${id}`).classList.add('selected');
  document.querySelector(`#card-${id} .btn-label`).textContent = 'Seleccionado';

  // Heart badge pop-in
  gsap.fromTo(`#badge-${id}`,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(2.5)' }
  );

  // Card highlight pulse
  gsap.fromTo(`#card-${id}`,
    { scale: 1 },
    { scale: 1.02, duration: 0.15, yoyo: true, repeat: 1, ease: 'power1.inOut' }
  );

  // Update & show send bar
  document.getElementById('chosenName').textContent = places.find(p => p.id === id).name;
  const bar = document.getElementById('sendBar');
  const isNew = bar.classList.contains('hidden');
  bar.classList.remove('hidden');
  if (isNew) {
    gsap.fromTo(bar, { y: 90, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.6)' });
  }
}

// ── Toggle description ────────────────────────────────────────
function toggleDesc(e, id) {
  e.stopPropagation();
  const desc     = document.getElementById(`desc-${id}`);
  const expanded = desc.classList.toggle('expanded');
  e.currentTarget.textContent = expanded ? 'Ver menos' : 'Ver más';
}

// ── Send email ─────────────────────────────────────────────────
async function sendChoice() {
  if (!selectedId) return;
  const place = places.find(p => p.id === selectedId);
  const btn   = document.getElementById('btnSend');
  btn.disabled    = true;
  btn.textContent = 'Enviando… 💌';

  try {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      place_name:     place.name,
      place_location: place.location,
      place_emoji:    place.emoji,
    });
    document.getElementById('modalMsg').textContent =
      `Alison eligió "${place.name}" ${place.emoji}. ¡Que empiece la aventura!`;
    document.getElementById('overlay').classList.remove('hidden');
  } catch (err) {
    console.error(err);
    btn.disabled    = false;
    btn.textContent = 'Enviar mi elección 💌';
    alert('Hubo un error al enviar. Verifica tus credenciales de EmailJS en la consola.');
  }
}

// ── Modal ──────────────────────────────────────────────────────
function closeModal() {
  document.getElementById('overlay').classList.add('hidden');
}

// ── Floating hearts ────────────────────────────────────────────
function spawnHearts() {
  const symbols   = ['♥', '♥', '♥', '♡', '💕', '💗', '💖', '💓', '💝'];
  const container = document.getElementById('hearts');
  for (let i = 0; i < 25; i++) {
    const el = document.createElement('span');
    el.className               = 'fheart';
    el.textContent             = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left              = Math.random() * 100 + 'vw';
    el.style.fontSize          = (0.7 + Math.random() * 1.3) + 'rem';
    el.style.animationDuration = (10 + Math.random() * 16) + 's';
    el.style.animationDelay    = (Math.random() * 22) + 's';
    container.appendChild(el);
  }
}
