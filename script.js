/* ── Configurare site ───────────────────────────────────────────── */
/* 💡 Editează datele de contact și textele de aici!               */
const CONFIG = {
  // ── Identitate ──────────────────────────────
  numeSite: "Dulce Vis", // Numele afacerii tale
  tagline: "Patiserie Artizanală",
  heroTitlu: "Fiecare felie e\no poveste dulce",
  heroSubtitlu: "Prăjituri făcute cu dragoste, din cele mai fine ingrediente.",

  // ── Contact ─────────────────────────────────
  instagram: "@murariub", // username Instagram
  instagramUrl: "https://www.instagram.com/murariub/",
  whatsapp: "+40 758 341 842", // numărul tău de WhatsApp
  whatsappUrl: "https://wa.me/40758341842",
  facebook: "Bianca Murariu", // numele paginii Facebook
  facebookUrl: "https://www.facebook.com/bianca.murariu.7",
  email: "murariubiancamaria@yahoo.ro",

  // ── Footer ──────────────────────────────────
  anFondare: "2024",
};

/* ── Date prăjituri ─────────────────────────────────────────────── */
/* 💡 Adaugă sau modifică prăjituri direct în acest array!          */
const PRAJITURI = [
  {
    nume: "Choux cu Inserție",
    tag: "Premium",
    imagini: [
      "images/choux-cu-insertie-4.jpeg",
      "images/choux-cu-insertie-5.jpeg",
      "images/choux-cu-insertie-3.jpeg",
      "images/choux-cu-insertie-1.jpeg",
      "images/choux-cu-insertie-2.jpeg",
      "images/choux-cu-insertie-sectiune.jpeg",
      "images/choux-cu-insertie-6.jpeg",
      "images/choux-cu-insertie-7.jpeg",
    ],
    descriere:
      "Choux-uri ușoare și crocante, cu inserție surpriză în interior. Disponibile cu cremă fină de fistic, coulis de zmeură, căpșuni proaspeți sau fructe de pădure. Fiecare bucățică ascunde un miez aromat.",
    stele: "★★★★★",
    pret: "~105 lei/kg",
    categorie: "Choux",
    ingrediente: [
      "Pâte à choux",
      "Unt 82%",
      "Ouă bio",
      "Faină",
      "Pastă de fistic 100%",
      "Mascarpone",
      "Frișcă naturală 35%",
      "Zmeură / Căpșuni / Fructe de pădure",
      "Zahăr pudră",
      "Vanilie bourbon",
      "Gelatină",
    ],
    preparare: [
      "Se prepară aluatul choux din apă, unt, faină și ouă, se formează rondele cu poșul și se coc la 200°C până devin aurii și uscate.",
      "Inserția se prepară din fructe proaspete cu zahăr și gelatină, se toarnă în forme mici de silicon și se congelează până la consistență solidă.",
      "Crema de fistic se obține din pastă de fistic, mascarpone și frișcă bătută, aromatizată cu vanilie bourbon.",
      "Choux-urile răcite se umplu: se introduce inserția congelată în centru, se completează cu cremă de fistic și se pudrează cu zahăr sau fistic măcinat.",
    ],
  },
  {
    nume: "Tarte cu Fructe Proaspete",
    tag: "De sezon",
    imagini: ["images/tarte-fructe-1.jpeg"],
    descriere:
      "Tarte mini cu coajă crocantă, cremă de vanilie mătăsoasă și fructe proaspete de sezon — căpșuni, afine și kiwi. Ușoare, colorate și irezistibile.",
    stele: "★★★★★",
    pret: "~85 lei/kg",
    categorie: "Tarte",
    ingrediente: [
      "Aluat tarte",
      "Unt 82%",
      "Zahăr pudră",
      "Ouă bio",
      "Lapte",
      "Amidon",
      "Vanilie bourbon",
      "Mascarpone",
      "Căpșuni proaspete",
      "Afine",
      "Kiwi",
    ],
    preparare: [
      "Aluatul fraged se prepară din unt, făină, zahăr pudră și ou, se frământă rapid și se lasă la rece 30 min.",
      "Se presează în forme mici de tartă și se coace orb la 175°C până devine auriu și crocant.",
      "Crema de vanilie se fierbe din lapte, gălbenușuri, zahăr și amidon, se răcește și se incorporează mascarponele.",
      "Se umple fiecare coajă cu cremă și se decorează cu fructe proaspete aranjate cu grijă.",
    ],
  },
  {
    nume: "Éclair cu Ciocolată Belgiană",
    tag: "Nou",
    imagini: ["images/eclere-1.jpeg"],
    descriere:
      "Eclere clasice franțuzești umplute cu cremă de patisier și acoperite cu glazură fină din ciocolată belgiană neagră 70%. Crusta perfectă, crema mătăsoasă.",
    stele: "★★★★★",
    pret: "~90 lei/kg",
    categorie: "Eclere",
    ingrediente: [
      "Pâte à choux",
      "Lapte integral",
      "Gălbenușuri bio",
      "Zahăr",
      "Amidon",
      "Ciocolată belgiană 70%",
      "Unt 82%",
      "Vanilie bourbon",
    ],
    preparare: [
      "Se pregătește pâte à choux din apă, unt, faină și ouă, se coc la 200°C.",
      "Crema de patisier se fierbe din lapte, gălbenușuri, zahăr și amidon, se aromatizează cu vanilie.",
      "Éclerele răcite se umplu cu cremă folosind un poș cu duză fină.",
      "Glazura de ciocolată se toarnă caldă și se lasă să se întărească la temperatura camerei.",
    ],
  },
  {
    nume: "Candy Bar de Eveniment",
    tag: "La comandă",
    imagini: [
      "images/candy-bar-vedere-generala-2.jpg",
      "images/candy-bar-eveniment-1.jpg",
      "images/candy-bar-eveniment-2.jpg",
      "images/candy-bar-napoleon-vanilie-1.jpg",
      "images/candy-bar-napoleon-cacao-1.jpg",
      "images/candy-bar-eclere-1.jpg",
      "images/candy-bar-choux-craquelin-2.jpg",
      "images/candy-bar-verrine-ciocolata-1.jpg",
      "images/candy-bar-choux-albi-2.jpg",
    ],
    descriere: "Masă de dulciuri completă pentru evenimente și petreceri — choux craquelin, eclere decorate, prăjituri Napoleon, verrine de ciocolată și choux albi glazurați, toate coordonate cromatic după tema evenimentului.",
    stele: "★★★★★",
    pret: "La comandă",
    categorie: "Evenimente",
    ingrediente: ["Choux craquelin", "Eclere decorate", "Prăjitură Napoleon vanilie", "Prăjitură Napoleon cacao", "Verrine ciocolată cu frișcă", "Choux albi glazurați", "Decor auriu și floral"],
    preparare: [
      "Fiecare element se prepară proaspăt și se coordonează ca temă cromatică cu evenimentul.",
      "Masa include minim 5 tipuri de dulciuri, aranjate pe suporturi aurii și tăvi decorative.",
      "Cantitățile se stabilesc în funcție de numărul de invitați — de la 30 până la sute de porții.",
      "Livrarea și aranjarea la fața locului este inclusă pentru comenzile de candy bar complet."
    ]
  },
  {
    nume: "Tort de Ciocolată cu Vișine",
    tag: "Bestseller",
    imagini: [
      "images/tort_cioco_1.jpeg",
      "images/tort_cioco_2.jpeg",
      "images/tort_cioco_3.jpeg",
    ],
    descriere:
      "Tort elegant cu blat pufos de cacao, straturi generoase de cremă de ciocolată și vișine, acoperit cu ganache negru lucios. Decorat cu praline artizanale și perle de zahăr — impresionează la orice ocazie.",
    stele: "★★★★★",
    pret: "~150 lei/kg",
    categorie: "Torturi",
    ingrediente: [
      "Blat de cacao",
      "Cacao neagră",
      "Ouă bio",
      "Zahăr",
      "Unt 82%",
      "Smântână 35%",
      "Ciocolată neagră 70%",
      "Vișine din compot",
      "Frișcă naturală 35%",
      "Praline ciocolată",
      "Perle de zahăr",
    ],
    preparare: [
      "Blatul de cacao se prepară din ouă bătute cu zahăr, se încorporează cacao și făina, se coace la 180°C și se taie în 4–5 straturi egale.",
      "Crema de ciocolată se obține din smântână fiartă cu ciocolată neagră, se răcește și se bate până devine aerată și fermă.",
      "Se montează tortul alternând straturi de blat, cremă de ciocolată și vișine bine scurse.",
      "Exteriorul se acoperă cu ganache lucios, se decorează cu rozete de cremă, praline asortate și perle de zahăr.",
    ],
  },
  {
    nume: "Madlene",
    tag: "Clasic",
    imagini: ["images/madlene_1.jpeg"],
    descriere:
      "Madlene pufoase cu cocoașă perfectă, coapte în forme tradiționale franțuzești. Aromate cu lămâie, vanilie sau portocală — o delicatesă simplă și elegantă, perfectă cu ceaiul.",
    stele: "★★★★★",
    pret: "~70 lei/kg",
    categorie: "Prăjituri",
    ingrediente: [
      "Ouă bio",
      "Zahăr",
      "Unt 82%",
      "Făină",
      "Praf de copt",
      "Coajă de lămâie",
      "Vanilie bourbon",
      "Miere",
    ],
    preparare: [
      "Ouăle se bat cu zahărul și mierea până obținem o spumă palidă și voluminoasă.",
      "Se incorporează făina cernută cu praful de copt și coaja de lămâie rasă.",
      "Untul topit și răcit se adaugă la final, aluatul se lasă la rece minimum 1 oră — esențial pentru cocoașă.",
      "Se toarnă în forme unse de madeleine și se coc la 210°C timp de 10–12 minute până devin aurii.",
    ],
  },
  {
    nume: "Platou Asortat",
    tag: "Comandă",
    imagini: [
      "images/platou-asortament-1.jpeg",
      "images/platou-asortament-2.jpeg",
      "images/platou-asortament-3.jpeg",
      "images/platou-asortament-4.jpeg",
      "images/platou-asortament-5.jpeg",
      "images/platou-asortament-6.jpeg",
      "images/platou-asortament-7.jpeg",
      "images/platou-asortament-8.jpeg",
    ],
    descriere:
      "Platou personalizat cu selecție de choux, eclere, tarte și prăjituri asortate — ideal pentru evenimente, petreceri sau cadou. Compoziția se stabilește împreună cu voi.",
    stele: "★★★★★",
    pret: "La comandă",
    categorie: "Platouri",
    ingrediente: [
      "Choux cu inserție",
      "Eclere cu ciocolată belgiană",
      "Tarte cu fructe proaspete",
      "Prăjitură cu cacao și frișcă",
      "Macarons",
      "Decor floral comestibil",
    ],
    preparare: [
      "Fiecare element al platou-ului se prepară proaspăt în ziua livrării sau cu o zi înainte.",
      "Compoziția se alege în funcție de preferințele și numărul de persoane — minim 20 bucăți.",
      "Platoul se asamblează cu grijă, intercalând culori și texturi pentru un aspect festiv.",
      "Livrarea se face în cutii speciale pentru transport, însoțite de instrucțiuni de păstrare.",
    ],
  },
];

const prefersReducedMotion =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

/* ── Aplică CONFIG ──────────────────────────────────────────────── */
document.getElementById("logo-text").innerHTML =
  CONFIG.numeSite.split(" ")[0] +
  " <span>" +
  (CONFIG.numeSite.split(" ")[1] || "") +
  "</span>";
document.querySelector("title").textContent =
  CONFIG.numeSite + " — " + CONFIG.tagline + " | Prăjituri, Torturi & Macarons";
document.getElementById("hero-title").innerHTML = CONFIG.heroTitlu
  .replace(/\n/g, "<br />")
  .replace(/(o poveste dulce|sweet|special)/gi, "<em>$1</em>");
document.getElementById("hero-subtitle").textContent = CONFIG.heroSubtitlu;
document.getElementById("footer-year").textContent = new Date().getFullYear();
document.getElementById("footer-name").textContent = CONFIG.numeSite;

/* ── Social links ───────────────────────────────────────────────── */
const socialData = [
  {
    cls: "social-instagram",
    icon: "📸",
    name: "Instagram",
    handle: CONFIG.instagram,
    url: CONFIG.instagramUrl,
  },
  {
    cls: "social-whatsapp",
    icon: "💬",
    name: "WhatsApp",
    handle: CONFIG.whatsapp,
    url: CONFIG.whatsappUrl,
  },
  {
    cls: "social-facebook",
    icon: "📘",
    name: "Facebook",
    handle: CONFIG.facebook,
    url: CONFIG.facebookUrl,
  },
  {
    cls: "social-email",
    icon: "✉️",
    name: "Email",
    handle: CONFIG.email,
    url: "mailto:" + CONFIG.email,
  },
];

const socialLinks = document.getElementById("social-links");
socialData.forEach((s) => {
  socialLinks.innerHTML += `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link ${s.cls}">
      <div class="social-icon">${s.icon}</div>
      <div class="social-info">
        <span class="social-name">${s.name}</span>
        <span class="social-handle">${s.handle}</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="#ff5bb0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        style="margin-left:auto">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>`;
});

/* ── Navbar scroll state ────────────────────────────────────────── */
const mainNav = document.getElementById("mainNav");
window.addEventListener(
  "scroll",
  () => mainNav.classList.toggle("scrolled", window.scrollY > 40),
  { passive: true },
);

/* ── Hamburger / Mobile Menu ────────────────────────────────────── */
const hamburgerBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  hamburgerBtn.classList.toggle("open", isOpen);
  hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  });
});

/* ── Cake Cards (grilă cu tilt 3D) ──────────────────────────────── */
const cakeGrid = document.getElementById("cakeGrid");

PRAJITURI.forEach((p, i) => {
  cakeGrid.innerHTML += `
    <article class="cake-card" data-index="${i}" data-tilt>
      <div class="cake-card-img-wrap">
        <img class="cake-card-img" src="${p.imagini[0]}" alt="${p.nume}" width="600" height="800" loading="lazy" />
        <span class="cake-tag">${p.tag}</span>
      </div>
      <div class="cake-card-body">
        <h3 class="cake-card-name">${p.nume}</h3>
        <p class="cake-card-desc">${p.descriere}</p>
        <p class="cake-card-price"><span class="cake-card-price-label">est.</span>${p.pret}</p>
        <div class="cake-card-footer">
          <span class="cake-card-link">
            Detalii
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
          <span class="cake-card-stars">${p.stele}</span>
        </div>
      </div>
    </article>`;
});

cakeGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".cake-card");
  if (card) openModal(parseInt(card.dataset.index));
});

/* ── Tilt 3D care urmărește cursorul ────────────────────────────── */
function initTilt() {
  if (prefersReducedMotion || isTouch) return;
  const MAX = 9; // grade
  document.querySelectorAll("[data-tilt]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${px * MAX * 2}deg`);
      el.style.setProperty("--rx", `${-py * MAX * 2}deg`);
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--rx", "0deg");
    });
  });
}
initTilt();

/* ── Parallax hero (mouse / scroll) ─────────────────────────────── */
function initHeroParallax() {
  if (prefersReducedMotion) return;
  const scene = document.getElementById("heroScene");
  if (!scene) return;
  const layers = scene.querySelectorAll("[data-depth]");
  // Păstrează transformarea de bază (rotație + adâncime) definită în CSS
  layers.forEach((l) => {
    l.dataset.base = getComputedStyle(l).transform.replace("none", "");
  });
  let tx = 0, ty = 0, cx = 0, cy = 0;

  window.addEventListener(
    "pointermove",
    (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true },
  );

  (function loop() {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    layers.forEach((l) => {
      const d = parseFloat(l.dataset.depth) || 0.05;
      l.style.transform =
        `translate3d(${cx * d * 240}px, ${cy * d * 240}px, 0) ${l.dataset.base}`;
    });
    scene.style.transform = `rotateX(${-cy * 3}deg) rotateY(${cx * 3}deg)`;
    requestAnimationFrame(loop);
  })();
}
initHeroParallax();

/* ── Canvas fundal — particule „bokeh" 3D ───────────────────────── */
function initBackground() {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, dpr, particles;
  const COLORS = ["rgba(255,91,176,", "rgba(230,194,92,", "rgba(255,255,255,"];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    const count = Math.min(60, Math.round((window.innerWidth * window.innerHeight) / 26000));
    particles = Array.from({ length: count }, () => spawn());
  }
  function spawn() {
    const z = Math.random(); // adâncime: 0 = departe, 1 = aproape
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      z,
      r: (4 + z * 22) * dpr,
      vy: (0.1 + z * 0.5) * dpr,
      vx: (Math.random() - 0.5) * 0.3 * dpr,
      a: 0.04 + z * 0.14,
      c: COLORS[(Math.random() * COLORS.length) | 0],
    };
  }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y + p.r < 0) {
        p.y = h + p.r;
        p.x = Math.random() * w;
      }
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      g.addColorStop(0, p.c + p.a + ")");
      g.addColorStop(1, p.c + "0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  resize();
  window.addEventListener("resize", resize);
  if (!prefersReducedMotion) frame();
  else {
    // un singur cadru static
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      g.addColorStop(0, p.c + p.a + ")");
      g.addColorStop(1, p.c + "0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
initBackground();

/* ── Modal ──────────────────────────────────────────────────────── */
const overlay = document.getElementById("modalOverlay");
const modalImg = document.getElementById("modalImg");
const modalBadge = document.getElementById("modalBadge");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalIng = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const modalOrder = document.getElementById("modalOrderBtn");
const modalPrice = document.getElementById("modalPrice");

/* ── Modal gallery state ─────────────────────────────────────── */
let galleryImages = [];
let galleryIndex = 0;
const galleryPrev = document.getElementById("modalGalleryPrev");
const galleryNext = document.getElementById("modalGalleryNext");
const galleryDots = document.getElementById("modalGalleryDots");

function setGallerySlide(i) {
  galleryIndex = (i + galleryImages.length) % galleryImages.length;
  modalImg.style.opacity = "0";
  setTimeout(() => {
    modalImg.src = galleryImages[galleryIndex];
    modalImg.style.opacity = "1";
  }, 150);
  galleryDots
    .querySelectorAll(".modal-gallery-dot")
    .forEach((d, idx) => d.classList.toggle("active", idx === galleryIndex));
}

function openModal(index) {
  const p = PRAJITURI[index];
  galleryImages = p.imagini;
  galleryIndex = 0;

  modalImg.src = galleryImages[0];
  modalImg.alt = p.nume;
  modalImg.style.opacity = "1";
  modalBadge.textContent = p.categorie;
  modalTag.textContent = p.tag;
  modalTitle.textContent = p.nume;
  modalDesc.textContent = p.descriere;
  modalPrice.textContent = p.pret;

  modalIng.innerHTML = p.ingrediente.map((i) => `<li>${i}</li>`).join("");

  modalSteps.innerHTML = p.preparare
    .map(
      (s, i) =>
        `<li><span class="step-num">${i + 1}</span><span>${s}</span></li>`,
    )
    .join("");

  modalOrder.href = `#contact`;

  /* Gallery controls */
  const multi = galleryImages.length > 1;
  galleryPrev.style.display = multi ? "flex" : "none";
  galleryNext.style.display = multi ? "flex" : "none";
  galleryDots.innerHTML = multi
    ? galleryImages
        .map(
          (_, i) =>
            `<button class="modal-gallery-dot${i === 0 ? " active" : ""}" data-gi="${i}" aria-label="Imaginea ${i + 1}"></button>`,
        )
        .join("")
    : "";

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.getElementById("modalOrderBtn").addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Gallery navigation
galleryPrev.addEventListener("click", () => setGallerySlide(galleryIndex - 1));
galleryNext.addEventListener("click", () => setGallerySlide(galleryIndex + 1));
galleryDots.addEventListener("click", (e) => {
  const dot = e.target.closest(".modal-gallery-dot");
  if (dot) setGallerySlide(parseInt(dot.dataset.gi));
});

// Touch swipe pe imaginea din modal
let modalTouchX = 0;
modalImg.addEventListener(
  "touchstart",
  (e) => {
    modalTouchX = e.touches[0].clientX;
  },
  { passive: true },
);
modalImg.addEventListener(
  "touchend",
  (e) => {
    if (galleryImages.length < 2) return;
    const diff = modalTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40)
      setGallerySlide(galleryIndex + (diff > 0 ? 1 : -1));
  },
  { passive: true },
);

/* ── HTML-in-Canvas — card „viu" randat în canvas ───────────────── */
/* https://developer.chrome.com/blog/html-in-canvas-origin-trial      */
(function initHtmlInCanvas() {
  const stage = document.getElementById("showcaseStage");
  const statusEl = document.getElementById("showcaseStatus");
  const statusText = document.getElementById("showcaseStatusText");
  if (!stage) return;

  // Alege un produs „vedetă" (preferabil bestseller-ul)
  const featured =
    PRAJITURI.find((p) => /bestseller/i.test(p.tag)) || PRAJITURI[0];

  // Construiește cardul real (interactiv + accesibil)
  const card = document.createElement("div");
  card.className = "hic-card css3d";
  card.id = "hicCard";
  card.innerHTML = `
    <img src="${featured.imagini[0]}" alt="${featured.nume}" width="640" height="400" loading="lazy" />
    <div class="hic-card-body">
      <h3>${featured.nume}</h3>
      <span class="hic-price">${featured.pret}</span>
      <button type="button" id="hicOrderBtn">Comandă acum ✦</button>
    </div>`;
  stage.appendChild(card);

  card.querySelector("#hicOrderBtn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });

  // Feature detection pentru API-ul HTML-in-Canvas (2D)
  const supported =
    typeof CanvasRenderingContext2D !== "undefined" &&
    typeof CanvasRenderingContext2D.prototype.drawElementImage === "function";

  if (!supported || prefersReducedMotion) return; // rămâne fallback-ul CSS 3D

  try {
    // Creează canvasul și mută cardul ca DIRECT child (cerință API)
    const canvas = document.createElement("canvas");
    canvas.id = "hicCanvas";
    canvas.setAttribute("layoutsubtree", "");
    canvas.layoutSubtree = true; // unele build-uri folosesc proprietatea
    stage.appendChild(canvas);

    // Cardul devine copil al canvasului: invizibil direct, dar desenat de noi.
    card.classList.remove("css3d");
    card.style.transformOrigin = "top left";
    canvas.appendChild(card);

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function sizeCanvas() {
      const cw = card.offsetWidth || 320;
      const ch = card.offsetHeight || 420;
      const pad = 90; // spațiu pentru înclinare
      canvas.width = (cw + pad) * dpr;
      canvas.height = (ch + pad) * dpr;
      canvas.style.width = cw + pad + "px";
      canvas.style.height = ch + pad + "px";
    }
    sizeCanvas();

    // Parallax după cursor
    let targetRX = 0, targetRY = 0, rx = 0, ry = 0;
    canvas.addEventListener("pointermove", (e) => {
      const r = canvas.getBoundingClientRect();
      targetRY = ((e.clientX - r.left) / r.width - 0.5) * 0.5;
      targetRX = ((e.clientY - r.top) / r.height - 0.5) * -0.4;
    });
    canvas.addEventListener("pointerleave", () => {
      targetRX = 0;
      targetRY = 0;
    });

    let t = 0;
    function render() {
      t += 0.016;
      rx += (targetRX - rx) * 0.08;
      ry += (targetRY - ry) * 0.08;

      const cw = card.offsetWidth;
      const ch = card.offsetHeight;
      const cx = canvas.width / dpr / 2;
      const cy = canvas.height / dpr / 2;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pseudo-3D: rotație lentă + înclinare după mouse, simulată afin
      const sway = Math.sin(t * 0.6) * 0.12 + ry;
      const tilt = Math.cos(t * 0.5) * 0.05 + rx;
      ctx.translate(cx, cy);
      ctx.transform(
        Math.cos(sway),      // scaleX pe orizontală (efect de „întoarcere")
        tilt * 0.4,          // shear vertical
        -sway * 0.18,        // shear orizontal
        1 - Math.abs(tilt) * 0.15,
        0,
        0,
      );
      ctx.translate(-cw / 2, -ch / 2);

      // Desenează HTML-ul real în canvas; matricea returnată aliniază hit-testing-ul
      const m = ctx.drawElementImage(card, 0, 0);
      if (m) card.style.transform = m.toString();

      requestAnimationFrame(render);
    }

    // paint event: re-desenează când conținutul cardului se schimbă (hover, focus)
    canvas.addEventListener("paint", () => {
      if (typeof canvas.requestPaint === "function") return; // bucla rAF acoperă deja
    });

    window.addEventListener("resize", sizeCanvas);
    requestAnimationFrame(render);

    statusEl.classList.add("live");
    statusText.textContent = "Live — randat cu HTML-in-Canvas API";
  } catch (err) {
    // Orice eroare → revenim curat la fallback-ul CSS 3D
    console.warn("HTML-in-Canvas indisponibil:", err);
    const existingCanvas = document.getElementById("hicCanvas");
    if (existingCanvas) {
      stage.appendChild(card);
      existingCanvas.remove();
    }
    card.classList.add("css3d");
    card.style.transform = "";
  }
})();

/* ── Contact form — FormSubmit.co AJAX ─────────────────────────── */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById("formSubmitBtn");

  btn.textContent = "Se trimite...";
  btn.disabled = true;

  fetch("https://formsubmit.co/ajax/" + CONFIG.email, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      Nume: form.querySelector('[name="Nume"]').value,
      Email_Telefon: form.querySelector('[name="Email_Telefon"]').value,
      Mesaj: form.querySelector('[name="Mesaj"]').value,
      _subject: "Comandă nouă — " + CONFIG.numeSite + " 🎂",
      _captcha: "false",
    }),
  })
    .then((r) => r.json())
    .then((r) => {
      if (r.success === "true" || r.success === true) {
        document.getElementById("formSuccess").style.display = "block";
        form
          .querySelectorAll("input, textarea, button[type=submit]")
          .forEach((el) => (el.style.opacity = "0.4"));
      } else {
        btn.textContent = "Eroare — încearcă din nou";
        btn.disabled = false;
      }
    })
    .catch(() => {
      btn.textContent = "Eroare — încearcă din nou";
      btn.disabled = false;
    });
});

/* ── Animate on scroll ──────────────────────────────────────────── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        observer.unobserve(en.target);
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll("[data-animate]")
  .forEach((el) => observer.observe(el));

/* ── Page URL (folosit în JSON-LD) ─────────────────────────────── */
const pageUrl = window.location.origin + window.location.pathname;

/* ── JSON-LD Structured Data ────────────────────────────────────── */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Bakery",
      "@id": pageUrl + "#business",
      name: CONFIG.numeSite,
      description:
        "Patiserie artizanală cu prăjituri făcute cu dragoste din cele mai fine ingrediente. Torturi personalizate, macarons parizieni, eclere, cheesecake și tiramisu.",
      url: pageUrl,
      telephone: CONFIG.whatsapp,
      email: CONFIG.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Iași",
        addressRegion: "Iași",
        addressCountry: "RO",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Iași",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Județul Iași",
          },
        },
        {
          "@type": "City",
          name: "Hârlău",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Județul Iași",
          },
        },
      ],
      sameAs: [CONFIG.instagramUrl, CONFIG.facebookUrl, CONFIG.whatsappUrl],
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=85",
      priceRange: "90–220 lei/kg",
      servesCuisine: ["Patiserie Artizanală", "Deserturi Fine"],
      foundingDate: CONFIG.anFondare,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Specialitățile " + CONFIG.numeSite,
        itemListElement: PRAJITURI.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: p.nume,
            description: p.descriere,
            image: p.imagini[0],
            category: p.categorie,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              ratingCount: "1",
            },
            offers: {
              "@type": "Offer",
              price: p.pret.replace(/[^\d]/g, ""),
              priceCurrency: "RON",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: p.pret.replace(/[^\d]/g, ""),
                priceCurrency: "RON",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: "1",
                  unitCode: "KGM",
                },
              },
            },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": pageUrl + "#website",
      name: CONFIG.numeSite,
      description: CONFIG.heroSubtitlu,
      url: pageUrl,
      inLanguage: "ro-RO",
    },
  ],
};
const ldScript = document.createElement("script");
ldScript.type = "application/ld+json";
ldScript.textContent = JSON.stringify(structuredData);
document.head.appendChild(ldScript);
