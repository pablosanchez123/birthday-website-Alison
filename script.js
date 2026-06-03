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
const EMAILJS_PUBLIC_KEY  = 'O65sMmh6xke96jiHL';
const EMAILJS_SERVICE_ID  = 'service_9ir8m29';
const EMAILJS_TEMPLATE_ID = 'template_dvr7hpx';

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

// ── Fotos de pareja ───────────────────────────────────────────
const photos = [
  { file: '0e46fae0-86dd-4a22-80b4-1237d322cc3d.jpg', caption: 'mis favoritos 💕',     rot: -8,  dx:  5, size: 'md' },
  { file: '1192d73a-8f0f-473f-a044-41ab192b9f6b.jpg', caption: 'siempre juntos',       rot:  6,  dx: -4, size: 'lg' },
  { file: '315e7639-8ecd-4a7a-a57f-313a3be5c3e9.jpg', caption: 'momentos así',         rot: -3,  dx:  7, size: 'md' },
  { file: '32e49936-e831-4eb7-b307-56a7ff57b6cb.jpg', caption: 'para siempre',         rot: 11,  dx: -6, size: 'sm' },
  { file: '51e63ea1-6515-46fc-b932-9c1488fcedfc.jpg', caption: 'tú y yo nada más',     rot: -12, dx:  3, size: 'md' },
  { file: '66a08500-1c2e-4b1c-b438-58f3ee28db2e.jpg', caption: 'así de bonito',        rot:  4,  dx: -7, size: 'lg' },
  { file: '79abe79d-8b18-4a2b-ae12-9231d1b32519.jpg', caption: 'mi lugar favorito',    rot:  8,  dx:  6, size: 'sm' },
  { file: '7a042b39-6810-441a-8738-895f3ebec7e3.jpg', caption: 'te amo amor',          rot: -5,  dx: -3, size: 'md' },
  { file: '82401029-a77a-4bab-8e8a-2de9ac59b6ba.jpg', caption: 'nuestro mundo',        rot: 12,  dx:  2, size: 'sm' },
  { file: '8f622d7f-466d-4c4c-9a05-1febe5a5900b.jpg', caption: 'siempre tú',           rot: -9,  dx: -8, size: 'lg' },
  { file: '9cd2d045-dbaa-404b-bbe2-914b296f1ef7.jpg', caption: 'feliz de tenerte',     rot:  5,  dx:  4, size: 'md' },
  { file: 'a7b14bc6-fe71-41d3-ae8b-0715c7122ebf.jpg', caption: 'cada momento',         rot: -7,  dx: -2, size: 'sm' },
  { file: 'c655aa2f-a893-4aa4-afed-d995e741c3cf.jpg', caption: 'mi todo ❤️',           rot: 13,  dx:  7, size: 'md' },
  { file: 'd431533d-e162-490a-ba10-9ceef4ce88dc.jpg', caption: 'cada momento contigo', rot: -4,  dx: -5, size: 'lg' },
  { file: 'e4693fed-68cb-4651-bb08-f0d4189b900f.jpg', caption: 'mi todo',              rot:  9,  dx:  5, size: 'sm' },
  { file: 'ff805409-fdb4-486a-9432-73713a68a41a.jpg', caption: 'te quiero tanto',      rot: -11, dx: -4, size: 'md' },
];

// ── Estado ────────────────────────────────────────────────────
let selectedId = null;
const galState = {};

// ── Init ──────────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

renderCards();
renderAlbum();
initAnimations();
initLoveSection();
spawnHearts();
startCounter();

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

// ── Album polaroid ────────────────────────────────────────────
function renderAlbum() {
  const grid = document.getElementById('polaroidGrid');
  grid.innerHTML = photos.map(p => `
    <div class="polaroid size-${p.size}" style="--rot:${p.rot}deg;--dx:${p.dx}px">
      <div class="polaroid-tape"></div>
      <div class="polaroid-img">
        <img src="images/fotos/${p.file}" alt="${p.caption}" loading="lazy" />
      </div>
    </div>
  `).join('');

  const items = grid.querySelectorAll('.polaroid');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const i = [...items].indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.05 });

  items.forEach(el => obs.observe(el));
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
  gsap.set('.eyebrow',     { opacity: 0, y: 20 });
  gsap.set(['.hero-title', '.lead', '.scroll-cta', '.counter-box'], { opacity: 0, y: 40 });
  gsap.set('.hero-name',   { opacity: 0, y: 40, scale: 0.92 });

  // Hero entrance — staggered reveal
  gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.2 })
    .to('.eyebrow',     { opacity: 1, y: 0, duration: 0.7 })
    .to('.hero-title',  { opacity: 1, y: 0, duration: 0.8 }, '-=0.35')
    .to('.hero-name',   { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.4)' }, '-=0.45')
    .to('.lead',        { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .to('.counter-box', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    .to('.scroll-cta',  { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');

  // Section header on scroll
  gsap.from('.section-header', {
    scrollTrigger: { trigger: '.section-header', start: 'top 82%' },
    opacity: 0, y: 55, duration: 0.9, ease: 'power3.out',
  });

  // Cards stagger on load — sin ScrollTrigger para que nunca queden en opacity 0
  const cardTween = gsap.from('.card', {
    opacity: 0, y: 65, duration: 0.75, ease: 'power3.out',
    stagger: 0.07, delay: 0.3,
  });
  // Red de seguridad: si el ticker se ralentiza (pestaña sin foco) y la animación
  // se congela a medias, forzamos el estado final para que todas las tarjetas
  // queden perfectamente alineadas en la grilla.
  setTimeout(() => {
    cardTween.progress(1).kill();
    gsap.set('.card', { clearProps: 'transform,opacity' });
  }, 2200);
}

// ── Love section animations ───────────────────────────────────
function initLoveSection() {
  // On touch devices skip animations entirely — content is visible via CSS
  if (window.matchMedia('(hover: none)').matches) return;

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

// ── Relationship counter ───────────────────────────────────────
function startCounter() {
  const start = new Date('2025-10-26T21:00:00-06:00'); // 26 oct 2025 9pm Costa Rica

  function update() {
    const now = new Date();

    // Months
    let months = (now.getFullYear() - start.getFullYear()) * 12 +
                 (now.getMonth() - start.getMonth());
    const anchor = new Date(start);
    anchor.setMonth(anchor.getMonth() + months);
    if (anchor > now) months--;
    anchor.setMonth(start.getMonth() + months);

    // Remaining time after full months
    const rem   = now - anchor;
    const days  = Math.floor(rem / 864e5);
    const hours = Math.floor((rem % 864e5) / 36e5);
    const mins  = Math.floor((rem % 36e5) / 6e4);
    const secs  = Math.floor((rem % 6e4) / 1e3);

    document.getElementById('cnt-months').textContent = months;
    document.getElementById('cnt-days').textContent   = days;
    document.getElementById('cnt-hours').textContent  = hours;
    document.getElementById('cnt-mins').textContent   = String(mins).padStart(2, '0');
    document.getElementById('cnt-secs').textContent   = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
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
