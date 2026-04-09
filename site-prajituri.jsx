import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ArrowRight, Instagram, MessageCircle, Facebook, Mail, Star } from "lucide-react";

/* =======================================================
   ⚙️  CONFIGURARE — modifică ușor aici
======================================================= */
const CONFIG = {
  numeSite:    "Dulce Vis",
  tagline:     "Patiserie Artizanală",
  heroTitlu:   ["Fiecare felie e", "o poveste dulce"],
  heroSubtitlu:"Prăjituri făcute cu dragoste, din cele mai fine ingrediente.",
  instagram:   "@murariub",
  instagramUrl:"https://www.instagram.com/murariub/",
  whatsapp:    "+40 758 341 842",
  whatsappUrl: "https://wa.me/40758341842",
  facebook:    "Bianca Murariu",
  facebookUrl: "https://www.facebook.com/bianca.murariu.7",
  email:       "murariubiancamaria@yahoo.ro",
};

/* =======================================================
   🎂  DATE PRĂJITURI — adaugă sau modifică după bunul plac
======================================================= */
const PRAJITURI = [
  {
    id: 1,
    nume: "Tort cu Fragi și Frișcă",
    tag: "Bestseller",
    categorie: "Torturi",
    imagine: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=85",
    descriere: "Un tort aerian și elegant, cu blat pufos de vanilie, strat generos de frișcă naturală și fragi proaspeți. Perfect pentru ocazii speciale.",
    ingrediente: ["Blat pufos vanilie", "Frișcă naturală 35%", "Fragi proaspeți", "Sirop de trandafiri", "Zahăr pudră", "Ouă bio", "Unt 82%"],
    preparare: [
      "Se bate frișca rece până obținem o cremă fermă, se adaugă zahăr pudră și vanilie.",
      "Blatul se taie în 3 straturi egale, se însiropează ușor cu sirop de trandafiri.",
      "Se asamblează straturile alternând frișcă și fragi tăiați.",
      "Se ornează cu fragi întregi și rozete de frișcă, se lasă la rece 4 ore.",
    ],
  },
  {
    id: 2,
    nume: "Éclair cu Ciocolată Belgiană",
    tag: "Nou",
    categorie: "Eclere",
    imagine: "https://images.unsplash.com/photo-1609881723812-d87e1c64fbd7?w=700&q=85",
    descriere: "Eclere clasice franțuzești umplute cu cremă de patisier și acoperite cu glazură fină din ciocolată belgiană neagră 70%. Crustă perfectă.",
    ingrediente: ["Pâte à choux", "Lapte integral", "Gălbenușuri bio", "Zahăr", "Amidon", "Ciocolată belgiană 70%", "Unt 82%", "Vanilie bourbon"],
    preparare: [
      "Se pregătește pâte à choux din apă, unt, făină și ouă, se coc la 200°C.",
      "Crema de patisier se fierbe din lapte, gălbenușuri, zahăr și amidon.",
      "Éclerele răcite se umplu cu cremă folosind un poș cu duză fină.",
      "Glazura de ciocolată se toarnă caldă și se lasă să se întărească.",
    ],
  },
  {
    id: 3,
    nume: "Cheesecake Fructe de Pădure",
    tag: "Fără coacere",
    categorie: "Cheesecake",
    imagine: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700&q=85",
    descriere: "Cheesecake cremos pe bază de biscuiți, cu umplutură bogată de mascarpone și Philadelphia, acoperit cu sos vibrant de fructe de pădure.",
    ingrediente: ["Biscuiți digestivi", "Unt topit", "Mascarpone 500g", "Philadelphia 250g", "Frișcă", "Zahăr", "Gelatină", "Zmeură", "Mure", "Afine"],
    preparare: [
      "Biscuiții se mixează cu untul topit și se presează în formă, se dau la rece 30 min.",
      "Cremele se bat împreună cu zahăr și gelatină hidratată până textură mătăsoasă.",
      "Se toarnă peste blat și se lasă la frigider minimum 6 ore.",
      "Sosul de fructe se prepară fiert, răcit și turnat peste tort înainte de servire.",
    ],
  },
  {
    id: 4,
    nume: "Tiramisu Classic",
    tag: "Tradițional",
    categorie: "Deserturi",
    imagine: "https://images.unsplash.com/photo-1542124948-dc391252a940?w=700&q=85",
    descriere: "Rețeta originală italiană cu piscoturi înmuiate în espresso, cremă bogată de mascarpone și gălbenușuri, pudrată cu cacao Valrhona.",
    ingrediente: ["Piscoturi Savoiardi", "Mascarpone 500g", "Gălbenușuri bio 6 buc", "Zahăr 150g", "Espresso 300ml", "Cacao Valrhona", "Rom brun"],
    preparare: [
      "Gălbenușurile se bat cu zahărul la bain-marie până cremă palidă și voluminoasă.",
      "Se incorporează mascarponele rece cu mișcări delicate.",
      "Piscoturile se înmoaie rapid în espresso cu rom și se aranjează în strat.",
      "Se alternează straturi de cremă și piscoturi, se pudrează și se lasă la rece 12 ore.",
    ],
  },
  {
    id: 5,
    nume: "Macarons Parizieni",
    tag: "Artizanal",
    categorie: "Macarons",
    imagine: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=700&q=85",
    descriere: "Macarons delicați cu cochilie crocantă și interior moale, umplute cu ganache fin. Disponibili în zmeură, vanilie, ciocolată și pistachio.",
    ingrediente: ["Făină de migdale 150g", "Zahăr pudră 150g", "Albușuri 110g", "Zahăr 150g", "Apă 50ml", "Colorant", "Ganache ciocolată albă"],
    preparare: [
      "Se prepară meringue italian din zahăr și apă la 118°C, se bat albușurile.",
      "Se incorporează meringue în amestecul de migdale (macaronage).",
      "Se formează rondele cu poșul, se lasă la uscat 45 minute.",
      "Se coc la 150°C timp de 14 minute, se umplu după răcire completă.",
    ],
  },
  {
    id: 6,
    nume: "Tort Red Velvet",
    tag: "Special",
    categorie: "Torturi",
    imagine: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=700&q=85",
    descriere: "Tort sofisticat cu blat catifelat roșu-rubin și cremă bogată de cream cheese. Un desert dramatic și delicios, perfect pentru aniversări.",
    ingrediente: ["Faină 250g", "Cacao 2 linguri", "Colorant roșu", "Unt 115g", "Zahăr 300g", "Ouă bio 2 buc", "Lapte bătut", "Cream cheese 500g"],
    preparare: [
      "Se mixează untul cu zahărul până cremă palidă, se adaugă ouăle pe rând.",
      "Se incorporează alternativ făina cu cacao și laptele bătut cu colorant.",
      "Se coc blaturilela 175°C timp de 30 de minute, se răcesc complet.",
      "Crema de cream cheese se bate cu unt și zahăr pudră, se asamblează elegant.",
    ],
  },
];

const HERO_SLIDES = [
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1400&q=85", alt: "Tort cu fragi" },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1400&q=85", alt: "Patiserie artizanală" },
  { src: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=1400&q=85", alt: "Macarons colorați" },
  { src: "https://images.unsplash.com/photo-1542124948-dc391252a940?w=1400&q=85", alt: "Tiramisu clasic" },
  { src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=1400&q=85", alt: "Desert fin" },
];

/* ======================================================= */

const C = {
  roz: "#e91e8c",
  rozDeschis: "#fce4f3",
  auriu: "#c9a84c",
  auriuDeschis: "#f7e9c0",
  textInchis: "#2d1a26",
  textGri: "#7a5c6e",
  fundal: "#fff8fd",
  alb: "#ffffff",
};

/* ── Modal ─────────────────────────────────────────────── */
function Modal({ prajitura, onClose, onOrder }) {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!prajitura) return null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        background: "rgba(45,26,38,0.75)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div style={{
        background: C.alb, borderRadius: 32, maxWidth: 860, width: "100%",
        maxHeight: "90vh", overflowY: "auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
        animation: "slideUp 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        scrollbarWidth: "none",
      }}>
        {/* Imagine stânga */}
        <div style={{ position: "relative", minHeight: 400 }}>
          <img src={prajitura.imagine} alt={prajitura.nume}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px 0 0 32px", display: "block" }} />
          <div style={{
            position: "absolute", inset: 0, borderRadius: "32px 0 0 32px",
            background: "linear-gradient(to top, rgba(45,26,38,0.6) 0%, transparent 60%)",
          }} />
          <span style={{
            position: "absolute", bottom: 20, left: 20, zIndex: 2,
            background: "rgba(255,255,255,0.18)", backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.4)", color: "#fff",
            padding: "7px 16px", borderRadius: 50,
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1,
          }}>
            {prajitura.categorie}
          </span>
          <button onClick={onClose} style={{
            position: "absolute", top: 16, right: 16, zIndex: 10,
            width: 40, height: 40, borderRadius: "50%",
            background: "rgba(255,255,255,0.92)", border: "none",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          }}>
            <X size={18} />
          </button>
        </div>

        {/* Content dreapta */}
        <div style={{ padding: "40px 36px 36px", display: "flex", flexDirection: "column", gap: 20, overflowY: "auto" }}>
          <span style={{
            display: "inline-block", background: C.rozDeschis, color: C.roz,
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
            padding: "5px 14px", borderRadius: 50, width: "fit-content",
          }}>
            {prajitura.tag}
          </span>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.9rem", color: C.textInchis, lineHeight: 1.2 }}>
            {prajitura.nume}
          </h2>

          <p style={{ fontSize: "0.92rem", color: C.textGri, lineHeight: 1.8 }}>
            {prajitura.descriere}
          </p>

          <div>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.auriu, marginBottom: 12 }}>
              ✦ Ingrediente
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {prajitura.ingrediente.map((ing, i) => (
                <span key={i} style={{
                  background: C.auriuDeschis, color: "#7a5c00",
                  fontSize: "0.8rem", padding: "5px 14px", borderRadius: 50, fontWeight: 600,
                }}>
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.auriu, marginBottom: 12 }}>
              ✦ Mod de preparare
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {prajitura.preparare.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 14, fontSize: "0.87rem", color: C.textGri, lineHeight: 1.6 }}>
                  <span style={{
                    flexShrink: 0, width: 28, height: 28,
                    background: `linear-gradient(135deg, ${C.roz}, #c0157a)`,
                    color: "#fff", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.68rem", fontWeight: 700, marginTop: 2,
                  }}>
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
            <button onClick={() => { onOrder(); onClose(); }} style={{
              flex: 1, background: `linear-gradient(135deg, ${C.roz}, #c0157a)`,
              color: "#fff", border: "none", padding: "14px 20px",
              borderRadius: 50, fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}>
              🎂 Comandă acum
            </button>
            <button onClick={onClose} style={{
              flex: 1, background: "transparent", color: C.roz,
              border: `2px solid ${C.roz}`, padding: "14px 20px",
              borderRadius: 50, fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
            }}>
              Înapoi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Cake Card ─────────────────────────────────────────── */
function CakeCard({ prajitura, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0, width: 300,
        background: C.alb, borderRadius: 24,
        overflow: "hidden", cursor: "pointer",
        boxShadow: hovered
          ? "0 20px 50px rgba(233,30,140,0.22)"
          : "0 4px 20px rgba(233,30,140,0.08)",
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s",
      }}
    >
      <div style={{ overflow: "hidden", position: "relative" }}>
        <img src={prajitura.imagine} alt={prajitura.nume} style={{
          width: "100%", height: 220, objectFit: "cover", display: "block",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.5s ease",
        }} />
        <span style={{
          position: "absolute", top: 14, right: 14,
          background: `linear-gradient(135deg, ${C.roz}, #c0157a)`,
          color: "#fff", fontSize: "0.65rem", fontWeight: 700,
          letterSpacing: 1.5, textTransform: "uppercase",
          padding: "5px 12px", borderRadius: 50,
        }}>
          {prajitura.tag}
        </span>
      </div>
      <div style={{ padding: "22px 24px 24px" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, marginBottom: 8, color: C.textInchis }}>
          {prajitura.nume}
        </h3>
        <p style={{
          fontSize: "0.87rem", color: C.textGri, lineHeight: 1.6, marginBottom: 18,
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {prajitura.descriere}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: C.roz, display: "flex", alignItems: "center", gap: 5 }}>
            Detalii <ArrowRight size={14} style={{ transition: "transform 0.3s", transform: hovered ? "translateX(4px)" : "translateX(0)" }} />
          </span>
          <span style={{ color: C.auriu, fontSize: "0.85rem", letterSpacing: 2 }}>★★★★★</span>
        </div>
      </div>
    </div>
  );
}

/* ── Hero Carousel ─────────────────────────────────────── */
function HeroCarousel({ onScrollDown }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((n) => {
    setCurrent((n + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const startAuto = useCallback(() => {
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % HERO_SLIDES.length), 5000);
  }, []);

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, [startAuto]);

  const handleArrow = (dir) => {
    clearInterval(timerRef.current);
    goTo(current + dir);
    startAuto();
  };

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Slides */}
      <div style={{ display: "flex", height: "100%", transform: `translateX(-${current * 100}%)`, transition: "transform 0.9s cubic-bezier(0.77,0,0.18,1)" }}>
        {HERO_SLIDES.map((slide, i) => (
          <div key={i} style={{ minWidth: "100%", height: "100%", position: "relative", flexShrink: 0 }}>
            <img src={slide.src} alt={slide.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(45,26,38,0.65) 0%, rgba(233,30,140,0.2) 50%, rgba(45,26,38,0.4) 100%)",
            }} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 10,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "0 24px", color: "#fff",
      }}>
        <span style={{
          display: "inline-block",
          background: "rgba(201,168,76,0.22)", border: "1px solid #c9a84c",
          color: "#f7e9c0", fontSize: "0.72rem", letterSpacing: 3,
          textTransform: "uppercase", padding: "6px 20px", borderRadius: 50, marginBottom: 24,
        }}>
          ✦ Patiserie Artizanală ✦
        </span>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          lineHeight: 1.1, marginBottom: 20,
          textShadow: "0 2px 30px rgba(0,0,0,0.3)",
        }}>
          {CONFIG.heroTitlu[0]}<br />
          <em style={{ fontStyle: "italic", color: "#f7e9c0" }}>{CONFIG.heroTitlu[1]}</em>
        </h1>

        <p style={{ fontSize: "1.1rem", fontWeight: 300, letterSpacing: 1, maxWidth: 480, marginBottom: 40, opacity: 0.9 }}>
          {CONFIG.heroSubtitlu}
        </p>

        <a href="#prajituri" onClick={(e) => { e.preventDefault(); onScrollDown(); }} style={{
          background: `linear-gradient(135deg, ${C.roz}, #c0157a)`,
          color: "#fff", textDecoration: "none",
          padding: "16px 48px", borderRadius: 50,
          fontSize: "0.95rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
          boxShadow: "0 8px 30px rgba(233,30,140,0.45)",
          display: "inline-block",
        }}>
          Descoperă prăjiturile
        </a>
      </div>

      {/* Arrows */}
      {[{ dir: -1, side: "left", label: "←" }, { dir: 1, side: "right", label: "→" }].map(({ dir, side, label }) => (
        <button key={side} onClick={() => handleArrow(dir)} style={{
          position: "absolute", top: "50%", [side]: 24, transform: "translateY(-50%)",
          zIndex: 10, background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)",
          color: "#fff", width: 52, height: 52, borderRadius: "50%", fontSize: "1.3rem",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(6px)",
        }}>
          {label}
        </button>
      ))}

      {/* Dots */}
      <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", gap: 10 }}>
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => { clearInterval(timerRef.current); goTo(i); startAuto(); }} style={{
            width: i === current ? 28 : 10,
            height: 10, borderRadius: 5, border: "none", cursor: "pointer",
            background: i === current ? C.roz : "rgba(255,255,255,0.45)",
            transition: "all 0.4s",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ── Contact Section ───────────────────────────────────── */
function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const socials = [
    { icon: <Instagram size={22} color="#fff" />, label: "Instagram", handle: CONFIG.instagram, url: CONFIG.instagramUrl, bg: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af)" },
    { icon: <MessageCircle size={22} color="#fff" />, label: "WhatsApp", handle: CONFIG.whatsapp, url: CONFIG.whatsappUrl, bg: "#25D366" },
    { icon: <Facebook size={22} color="#fff" />, label: "Facebook", handle: CONFIG.facebook, url: CONFIG.facebookUrl, bg: "#1877F2" },
    { icon: <Mail size={22} color="#fff" />, label: "Email", handle: CONFIG.email, url: `mailto:${CONFIG.email}`, bg: `linear-gradient(135deg, ${C.roz}, #c0157a)` },
  ];

  return (
    <section id="contact" style={{ padding: "100px 48px", background: C.fundal }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
        {/* Stânga */}
        <div>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: C.auriu, display: "block", marginBottom: 12 }}>
            ✦ Hai să vorbim
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", marginBottom: 16, color: C.textInchis, lineHeight: 1.2 }}>
            Scrie-mi,{" "}
            <em style={{ fontStyle: "italic", color: C.roz }}>te aștept!</em>
          </h2>
          <p style={{ fontSize: "1rem", color: C.textGri, lineHeight: 1.8, marginBottom: 40 }}>
            Fie că vrei să comanzi o prăjitură personalizată sau ai o întrebare, sunt mereu disponibilă să te ajut. Alege metoda care ți se potrivește!
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 18, textDecoration: "none",
                  padding: "16px 22px", borderRadius: 18, background: C.alb,
                  boxShadow: "0 3px 15px rgba(233,30,140,0.07)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(6px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(233,30,140,0.18)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.boxShadow = "0 3px 15px rgba(233,30,140,0.07)"; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 14, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: C.textGri, marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 700, color: C.textInchis }}>{s.handle}</div>
                </div>
                <ArrowRight size={18} color={C.roz} style={{ marginLeft: "auto" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Formular */}
        <div style={{ background: C.alb, borderRadius: 28, padding: 40, boxShadow: "0 8px 40px rgba(233,30,140,0.08)" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: 28, color: C.textInchis }}>
            Trimite un mesaj 💌
          </h3>
          {!sent ? (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              {[
                { label: "Numele tău", key: "name", type: "text", placeholder: "ex. Maria Ionescu" },
                { label: "Email sau telefon", key: "contact", type: "text", placeholder: "ex. maria@gmail.com sau 07xx xxx xxx" },
              ].map((field) => (
                <div key={field.key} style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: C.textGri, marginBottom: 8 }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type} placeholder={field.placeholder} required
                    value={form[field.key]}
                    onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                    style={{
                      width: "100%", padding: "14px 18px", border: `2px solid #f0e0ec`,
                      borderRadius: 14, fontFamily: "inherit", fontSize: "0.95rem",
                      color: C.textInchis, background: C.fundal, outline: "none", boxSizing: "border-box",
                    }}
                    onFocus={(e) => e.target.style.borderColor = C.roz}
                    onBlur={(e) => e.target.style.borderColor = "#f0e0ec"}
                  />
                </div>
              ))}
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: C.textGri, marginBottom: 8 }}>
                  Mesajul tău
                </label>
                <textarea
                  placeholder="Descrie ce îți dorești — prăjitură, tort personalizat, comandă..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  style={{
                    width: "100%", height: 110, padding: "14px 18px", border: "2px solid #f0e0ec",
                    borderRadius: 14, fontFamily: "inherit", fontSize: "0.95rem",
                    color: C.textInchis, background: C.fundal, outline: "none", resize: "none", boxSizing: "border-box",
                  }}
                  onFocus={(e) => e.target.style.borderColor = C.roz}
                  onBlur={(e) => e.target.style.borderColor = "#f0e0ec"}
                />
              </div>
              <button type="submit" style={{
                width: "100%", padding: 16,
                background: `linear-gradient(135deg, ${C.roz}, #c0157a)`,
                color: "#fff", border: "none", borderRadius: 50,
                fontSize: "1rem", fontWeight: 700, letterSpacing: 1, cursor: "pointer",
              }}>
                Trimite mesajul ✦
              </button>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🎂</div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: C.textInchis, marginBottom: 8 }}>
                Mesaj trimis!
              </h4>
              <p style={{ color: C.textGri, fontSize: "0.95rem", lineHeight: 1.7 }}>
                Mulțumesc! Te contactez în cel mai scurt timp. 💕
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Main App ───────────────────────────────────────────── */
export default function App() {
  const [selectedPrajitura, setSelectedPrajitura] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const prajituriiRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToPrajituri = () => {
    prajituriiRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Drag to scroll
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollLeft - (x - startX) * 1.4;
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", background: C.fundal, color: C.textInchis, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { display: none; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: scale(0.9) translateY(30px); opacity: 0 } to { transform: scale(1) translateY(0); opacity: 1 } }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 48px",
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
        boxShadow: "0 2px 20px rgba(233,30,140,0.08)",
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: C.roz, letterSpacing: 1 }}>
          {CONFIG.numeSite.split(" ")[0]}{" "}
          <span style={{ color: C.auriu }}>{CONFIG.numeSite.split(" ")[1]}</span>
        </span>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <button onClick={scrollToPrajituri} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color: C.textInchis }}>
            Prăjituri
          </button>
          <button onClick={scrollToContact} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color: C.textInchis }}>
            Contact
          </button>
          <button onClick={scrollToContact} style={{
            background: `linear-gradient(135deg, ${C.roz}, #c0157a)`,
            color: "#fff", border: "none", padding: "10px 24px", borderRadius: 50,
            fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
          }}>
            Comandă acum
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <HeroCarousel onScrollDown={scrollToPrajituri} />

      {/* ── Prajituri Section ── */}
      <section ref={prajituriiRef} style={{ padding: "100px 0 80px", background: C.fundal }}>
        <div style={{ textAlign: "center", marginBottom: 60, padding: "0 48px" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: C.auriu, display: "block", marginBottom: 12 }}>
            ✦ Specialitățile noastre
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: C.textInchis, lineHeight: 1.2 }}>
            Prăjiturile <em style={{ fontStyle: "italic", color: C.roz }}>noastre</em>
          </h2>
          <div style={{ width: 60, height: 3, background: `linear-gradient(to right, ${C.roz}, ${C.auriu})`, margin: "16px auto 0", borderRadius: 2 }} />
        </div>

        {/* Slider */}
        <div style={{ position: "relative", overflow: "hidden", padding: "20px 0 40px" }}>
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: 0, width: 60, zIndex: 2, pointerEvents: "none",
            background: `linear-gradient(to right, ${C.fundal}, transparent)`,
          }} />
          <div style={{
            position: "absolute", top: 0, bottom: 0, right: 0, width: 60, zIndex: 2, pointerEvents: "none",
            background: `linear-gradient(to left, ${C.fundal}, transparent)`,
          }} />

          <div
            ref={sliderRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            style={{
              display: "flex", gap: 28, padding: "10px 60px",
              overflowX: "auto", scrollbarWidth: "none",
              cursor: isDragging ? "grabbing" : "grab",
            }}
          >
            {PRAJITURI.map((p) => (
              <CakeCard key={p.id} prajitura={p} onClick={() => setSelectedPrajitura(p)} />
            ))}
          </div>
        </div>

        {/* Nav buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 12 }}>
          {["←", "→"].map((arrow, i) => (
            <button key={arrow} onClick={() => sliderRef.current?.scrollBy({ left: i === 0 ? -340 : 340, behavior: "smooth" })} style={{
              width: 46, height: 46, borderRadius: "50%", border: `2px solid ${C.roz}`,
              background: C.alb, color: C.roz, fontSize: "1.1rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {arrow}
            </button>
          ))}
        </div>
      </section>

      {/* ── Quote Strip ── */}
      <section style={{
        background: `linear-gradient(135deg, ${C.roz} 0%, #c0157a 50%, #8b1057 100%)`,
        padding: "80px 48px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#fff", maxWidth: 700, margin: "0 auto 16px", lineHeight: 1.6 }}>
          "Dulciurile bune nu au nevoie de ocazie specială — ele <em>creează</em> ocazia."
        </p>
        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", letterSpacing: 2, textTransform: "uppercase" }}>
          — {CONFIG.numeSite}, cu drag ❤
        </p>
      </section>

      {/* ── Contact ── */}
      <div ref={contactRef}>
        <ContactSection />
      </div>

      {/* ── Footer ── */}
      <footer style={{ background: C.textInchis, color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "32px 24px", fontSize: "0.85rem" }}>
        <p>© {new Date().getFullYear()} <span style={{ color: C.roz }}>{CONFIG.numeSite}</span>. Făcut cu <span style={{ color: C.roz }}>♥</span> și zahăr pudră.</p>
      </footer>

      {/* ── Modal ── */}
      {selectedPrajitura && (
        <Modal
          prajitura={selectedPrajitura}
          onClose={() => setSelectedPrajitura(null)}
          onOrder={scrollToContact}
        />
      )}
    </div>
  );
}
