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

// Social links
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
        stroke="#e91e8c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        style="margin-left:auto">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>`;
});

/* ── Hero Carousel ──────────────────────────────────────────────── */
const track = document.getElementById("carouselTrack");
const slides = track.querySelectorAll(".carousel-slide");
const dotsEl = document.getElementById("carouselDots");
let current = 0;
let autoTimer;

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.addEventListener("click", () => goTo(i));
  dotsEl.appendChild(dot);
});

function goTo(n) {
  current = (n + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  dotsEl
    .querySelectorAll(".dot")
    .forEach((d, i) => d.classList.toggle("active", i === current));
}

function startAuto() {
  autoTimer = setInterval(() => goTo(current + 1), 5000);
}

function resetAuto() {
  clearInterval(autoTimer);
  startAuto();
}

document.getElementById("carouselPrev").addEventListener("click", () => {
  goTo(current - 1);
  resetAuto();
});
document.getElementById("carouselNext").addEventListener("click", () => {
  goTo(current + 1);
  resetAuto();
});

startAuto();

/* ── Touch swipe — hero carousel ───────────────────────────────── */
let heroTouchStartX = 0;
track.addEventListener(
  "touchstart",
  (e) => {
    heroTouchStartX = e.touches[0].clientX;
  },
  { passive: true },
);
track.addEventListener(
  "touchend",
  (e) => {
    const diff = heroTouchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? current + 1 : current - 1);
      resetAuto();
    }
  },
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

/* ── Cake Cards Slider ──────────────────────────────────────────── */
const sliderTrack = document.getElementById("sliderTrack");

PRAJITURI.forEach((p, i) => {
  sliderTrack.innerHTML += `
    <div class="cake-card" data-index="${i}">
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
    </div>`;
});

// Drag to scroll
let isDown = false,
  startX,
  scrollLeft;
sliderTrack.addEventListener("mousedown", (e) => {
  isDown = true;
  sliderTrack.classList.add("grabbing");
  startX = e.pageX - sliderTrack.offsetLeft;
  scrollLeft = sliderTrack.scrollLeft;
});
sliderTrack.addEventListener("mouseleave", () => {
  isDown = false;
  sliderTrack.classList.remove("grabbing");
});
sliderTrack.addEventListener("mouseup", () => {
  isDown = false;
  sliderTrack.classList.remove("grabbing");
});
sliderTrack.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderTrack.offsetLeft;
  sliderTrack.scrollLeft = scrollLeft - (x - startX) * 1.4;
});

document
  .getElementById("sliderLeft")
  .addEventListener("click", () =>
    sliderTrack.scrollBy({ left: -340, behavior: "smooth" }),
  );
document
  .getElementById("sliderRight")
  .addEventListener("click", () =>
    sliderTrack.scrollBy({ left: 340, behavior: "smooth" }),
  );

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

// Click pe card
sliderTrack.addEventListener("click", (e) => {
  const card = e.target.closest(".cake-card");
  if (card) openModal(parseInt(card.dataset.index));
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

// Butonul "Comandă acum" din modal închide modalul și scroll la contact
document.getElementById("modalOrderBtn").addEventListener("click", closeModal);

// ESC key
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

/* ── Contact form — FormSubmit.co AJAX ─────────────────────────── */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById("formSubmitBtn");
  const originalText = btn.textContent;

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
/* Canonical-ul este definit static în <head> pentru SEO mai robust  */
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
