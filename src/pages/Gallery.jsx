import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

function useFadeIn(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
}

function Fade({ children, className = '' }) {
  const ref = useRef(null);
  useFadeIn(ref);
  return <div ref={ref} className={`fade-section ${className}`}>{children}</div>;
}

const CATS = ['All', 'Deities & Altars', 'Rituals', 'Pilgrims', 'Forest & Nature', 'Culture'];

const ITEMS = [
  { cat:'Deities & Altars', title:'The Sammakka Altar',     desc:'The principal Gaddhe of Sammakka, adorned with turmeric, vermillion, and offerings from devotees',         img:'/src/pages/Gallery/Screenshot from 2026-04-14 22-57-34.png', span:'tall',   bg:'#e8f0fd', tc:'#1e4db7' },
  { cat:'Pilgrims',          title:'The Journey on Foot',    desc:'Many devotees walk long distances barefoot as an act of devotion, arriving at Medaram after days of travel', img:'/src/pages/Gallery/Screenshot from 2026-04-14 22-58-08.png', span:'normal', bg:'#f0f5ff', tc:'#2e63d4' },
  { cat:'Rituals',           title:'Jaggery Offerings',      desc:'Mountains of jaggery surround the altars — devotees offer their weight in bellam (jaggery) as Bangaram',    img:'/src/pages/Gallery/Screenshot from 2026-04-14 22-58-24.png', span:'wide',   bg:'#eef2f8', tc:'#0f2d6b' },
  { cat:'Forest & Nature',   title:'Jampanna Vagu',          desc:'The sacred stream where millions take a holy dip during the Jathara, named in memory of Jampanna',          img:'/src/pages/Gallery/Screenshot from 2026-04-14 22-58-38.png', span:'normal', bg:'#e8f0fd', tc:'#1e4db7' },
  { cat:'Culture',           title:'Tribal Drumming',        desc:'The resonant rhythms of dappu and tudumu drums fill the festival grounds throughout all four days',          img:'/src/pages/Gallery/Screenshot from 2026-04-14 22-58-51.png', span:'normal', bg:'#f0f5ff', tc:'#2e63d4' },
  { cat:'Deities & Altars',  title:'Sacred Procession',      desc:'The deity caskets are carried in procession from their forest abodes to the main altars at Medaram',        img:'/src/pages/Gallery/Screenshot from 2026-04-14 22-59-00.png', span:'wide',   bg:'#eef2f8', tc:'#0f2d6b' },
  { cat:'Forest & Nature',   title:'Eturnagaram Forest',     desc:'The Jathara takes place within the Eturnagaram Wildlife Sanctuary — the dense forest setting adds to its sacred character', img:'/src/pages/Gallery/Screenshot from 2026-04-14 22-59-14.png', span:'normal', bg:'#e8f5ec', tc:'#145a32' },
  { cat:'Rituals',           title:'Sacred Bath',            desc:'Pilgrims take the auspicious dip in the Jampanna Vagu in the early morning hours before the main darshan',  img:'/src/pages/Gallery/Screenshot from 2026-04-14 22-59-34.png', span:'normal', bg:'#e8f0fd', tc:'#1e4db7' },
  { cat:'Culture',           title:'Tribal Folk Dance',      desc:'Traditional Koya tribal dances performed in ceremonial dress — a form of devotion preserved across generations', img:'/src/pages/Gallery/Screenshot from 2026-04-14 22-59-42.png', span:'normal', bg:'#f5eef8', tc:'#6c2a8a' },
  { cat:'Pilgrims',          title:'A Night of Arrival',     desc:'Devotees arrive through the night from across five states, transforming the forest into a vast gathering',   img:'/src/pages/Gallery/Screenshot from 2026-04-14 22-59-56.png', span:'wide',   bg:'#0c1a38', tc:'#ffffff' },
  { cat:'Deities & Altars',  title:'Vermillion and Turmeric',desc:'The altars glow with the red of kumkuma and the yellow of pasupu — offerings of great significance to the goddesses', img:'/src/pages/Gallery/Screenshot from 2026-04-14 23-00-06.png', span:'normal', bg:'#fdf0e8', tc:'#8b2500' },
  { cat:'Culture',           title:'Tribal Artisans',        desc:'Festival stalls display handcrafted items by Koya artisans — jewellery, artefacts, and traditional wares',  img:'/src/pages/Gallery/Screenshot from 2026-04-14 23-00-17.png', span:'normal', bg:'#eef2f8', tc:'#0f2d6b' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? ITEMS : ITEMS.filter(i => i.cat === active);

  return (
    <div className="gallery-page page-wrapper">

      <section className="page-hero">
        <div className="page-hero-accent" />
        <div className="page-hero-content container">
          <span className="label label--white">Visual Documentation</span>
          <h1 className="page-hero-title">
            Gallery of<br /><span>Medaram Jathara</span>
          </h1>
          <p className="page-hero-desc">
            A visual record of the world's largest tribal congregation — the sacred 
            altars, the forest processions, the river bathing, and the extraordinary 
            gathering of millions who come to honour Sammakka and Saralamma.
          </p>
        </div>
      </section>

      {/* ── FILTERS ──────────────────────────────────────── */}
      <Fade>
        <div className="gallery-filters container">
          <div className="filter-row">
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`filter-btn${active === c ? ' filter-btn--active' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="gallery-count">
            <strong>{filtered.length}</strong> {active === 'All' ? 'items' : `items in "${active}"`}
          </p>
        </div>
      </Fade>

      {/* ── GRID ─────────────────────────────────────────── */}
      <Fade>
        <div className="gallery-grid-wrap container">
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className={`gitem gitem--${item.span}`}
                style={{ '--bg': item.bg, '--tc': item.tc }}
              >
                <div className="gitem__inner">
                  {item.img ? (
                    <img src={item.img} alt={item.title} className="gitem__image" />
                  ) : (
                    <div className="gitem__placeholder">
                      <span className="gitem__icon">{item.icon}</span>
                    </div>
                  )}
                  <div className="gitem__caption">
                    <span className="gitem__cat">{item.cat}</span>
                    <h3  className="gitem__title">{item.title}</h3>
                    <p   className="gitem__desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* ── ADD PHOTOS NOTE ──────────────────────────────── */}
      <Fade>
        <div className="gallery-note container">
          <div className="note-box">
            <span>📸</span>
            <div>
              <h4>Adding Your Own Photographs</h4>
              <p>
                To populate the gallery with real photographs: place your images in 
                <code>src/assets/gallery/</code>, import them into <code>Gallery.jsx</code>, 
                and set the <code>src</code> property on each item. For best results, 
                use landscape images at a 3:2 ratio. Freely licensed photographs of the 
                Jathara are available on Wikimedia Commons — search for 
                "Sammakka Saralamma Jatara".
              </p>
            </div>
          </div>
        </div>
      </Fade>

      <footer className="site-footer">
        <p className="footer-brand">Medaram Jathara</p>
        <p className="footer-tagline">Cultural Heritage Documentation · Telangana, India</p>
        <nav className="footer-nav">
          {[['/', 'Home'], ['/history', 'History'], ['/traditions', 'Traditions'], ['/gallery', 'Gallery'], ['/guide', "Visitor's Guide"]].map(([to, label]) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
        <p className="footer-copy">A documentation project in respectful acknowledgement of the Koya tribal community and the devotees of Sammakka and Saralamma.</p>
      </footer>
    </div>
  );
}
