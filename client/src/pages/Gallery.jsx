import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

function useFadeIn(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function FadeSection({ children, className = '' }) {
  const ref = useRef(null);
  useFadeIn(ref);
  return <div ref={ref} className={`fade-section ${className}`}>{children}</div>;
}

const CATEGORIES = ['All', 'Deities', 'Rituals', 'Pilgrims', 'Forest', 'Culture'];

/* Gallery items — mix of Wikipedia public-domain images and descriptive placeholders */
const ITEMS = [
  {
    cat:   'Deities',
    title: 'Sammakka\'s Sacred Altar',
    desc:  'The Gaddhe (altar) of Sammakka decorated with offerings of jaggery, vermillion and turmeric',
    emoji: '🌿',
    bg:    'linear-gradient(135deg, #1a2a0a 0%, #2a3a10 100%)',
    accent:'#7ab040',
    size:  'tall',
    src:   'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sammakka_shrine_Medaram.jpg/800px-Sammakka_shrine_Medaram.jpg',
  },
  {
    cat:   'Pilgrims',
    title: 'Sea of Devotees',
    desc:  'Millions of pilgrims throng the festival grounds during the Maha Darshan on Day 3',
    emoji: '👥',
    bg:    'linear-gradient(135deg, #1a0808 0%, #2a1010 100%)',
    accent:'#e07060',
    size:  'normal',
    src:   'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Medaram_jatara_2018.jpg/800px-Medaram_jatara_2018.jpg',
  },
  {
    cat:   'Rituals',
    title: 'Jaggery Offerings',
    desc:  'Devotees offer jaggery equal to their body weight — a tradition called Bangaram',
    emoji: '⚖️',
    bg:    'linear-gradient(135deg, #1a1408 0%, #2a2010 100%)',
    accent:'#e8a030',
    size:  'normal',
    src:   '',
  },
  {
    cat:   'Forest',
    title: 'Jampanna Vagu',
    desc:  'The sacred red-tinted stream where millions take a holy dip during the Jathara',
    emoji: '🌊',
    bg:    'linear-gradient(135deg, #080a1a 0%, #101520 100%)',
    accent:'#6080e0',
    size:  'wide',
    src:   '',
  },
  {
    cat:   'Culture',
    title: 'Tribal Drumming',
    desc:  'Koya tribal musicians playing dappu and tudumu drums that resound through the forest',
    emoji: '🥁',
    bg:    'linear-gradient(135deg, #1a0a14 0%, #2a1020 100%)',
    accent:'#c06090',
    size:  'normal',
    src:   '',
  },
  {
    cat:   'Deities',
    title: 'The Procession',
    desc:  'The sacred caskets of the goddesses are carried in a grand procession through Jampanna Vagu',
    emoji: '🪔',
    bg:    'linear-gradient(135deg, #1a1000 0%, #2a1e00 100%)',
    accent:'#e8a030',
    size:  'tall',
    src:   '',
  },
  {
    cat:   'Forest',
    title: 'Eturnagaram Sanctuary',
    desc:  'The remote forest setting of Medaram within the Eturnagaram Wildlife Sanctuary',
    emoji: '🌲',
    bg:    'linear-gradient(135deg, #061806 0%, #0c2810 100%)',
    accent:'#50a060',
    size:  'normal',
    src:   '',
  },
  {
    cat:   'Rituals',
    title: 'Sacred Bath',
    desc:  'Devotees taking the auspicious dip in the Jampanna Vagu, believed to cleanse all sins',
    emoji: '🛁',
    bg:    'linear-gradient(135deg, #060c1a 0%, #0c1525 100%)',
    accent:'#4070c0',
    size:  'normal',
    src:   '',
  },
  {
    cat:   'Culture',
    title: 'Folk Dance',
    desc:  'Traditional Koya tribal dances performed during the four days of the Jathara',
    emoji: '💃',
    bg:    'linear-gradient(135deg, #1a0818 0%, #280a24 100%)',
    accent:'#b050b0',
    size:  'wide',
    src:   '',
  },
  {
    cat:   'Pilgrims',
    title: 'The Night Journey',
    desc:  'Devotees travel through the night from across five states to reach Medaram in time for the festival',
    emoji: '🌙',
    bg:    'linear-gradient(135deg, #06060a 0%, #0c0c18 100%)',
    accent:'#8090e0',
    size:  'normal',
    src:   '',
  },
  {
    cat:   'Deities',
    title: 'Vermillion & Turmeric',
    desc:  'The altars glow with offerings of kumkuma (vermillion) and pasupu (turmeric) — sacred to the goddesses',
    emoji: '🔴',
    bg:    'linear-gradient(135deg, #1a0600 0%, #2a0c00 100%)',
    accent:'#e04010',
    size:  'normal',
    src:   '',
  },
  {
    cat:   'Culture',
    title: 'Tribal Handicrafts',
    desc:  'Festival stalls display handcrafted Koya tribal artefacts, jewellery and traditional wares',
    emoji: '🏺',
    bg:    'linear-gradient(135deg, #140c00 0%, #201400 100%)',
    accent:'#c07820',
    size:  'normal',
    src:   '',
  },
];

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? ITEMS
    : ITEMS.filter(i => i.cat === active);

  return (
    <div className="gallery-page page-wrapper">

      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <section className="page-hero page-hero--gallery">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-label">Visual Journey</span>
          <h1 className="page-hero-title">Gallery of<br /><span>Medaram Jathara</span></h1>
          <p className="page-hero-desc">
            A window into the world's largest tribal congregation — its sacred rituals, 
            vibrant culture and the extraordinary devotion of millions.
          </p>
        </div>
      </section>

      {/* ── FILTERS ────────────────────────────────────────── */}
      <FadeSection className="gallery-filters container">
        <div className="filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="gallery-count">
          Showing <strong>{filtered.length}</strong> {active === 'All' ? 'items' : `${active} items`}
        </p>
      </FadeSection>

      {/* ── GRID ───────────────────────────────────────────── */}
      <FadeSection className="gallery-grid container">
        <div className="masonry">
          {filtered.map((item, i) => (
            <div key={`${item.title}-${i}`} className={`gallery-item gallery-item--${item.size}`}>
              <div
                className="gallery-img"
                style={{
                  background: item.src
                    ? `url(${item.src}) center/cover no-repeat, ${item.bg}`
                    : item.bg,
                }}
              >
                {!item.src && (
                  <div className="gallery-placeholder">
                    <span className="gallery-emoji">{item.emoji}</span>
                  </div>
                )}
                <div className="gallery-overlay">
                  <span className="gallery-cat">{item.cat}</span>
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── NOTE ───────────────────────────────────────────── */}
      <FadeSection className="gallery-note container">
        <div className="note-card">
          <span>📸</span>
          <div>
            <h4>Add Your Own Photos</h4>
            <p>
              Replace the placeholder images by adding photos to your <code>src/assets/gallery/</code> 
              folder and updating the <code>src</code> field in each gallery item in <code>Gallery.jsx</code>. 
              Use images with an aspect ratio of 3:2 for best results. Freely-licensed images of the 
              festival are also available on Wikimedia Commons.
            </p>
          </div>
        </div>
      </FadeSection>

      <footer className="site-footer">
        <div className="footer-logo">🪔 Medaram Jathara</div>
        <p className="footer-sub">Asia's Largest Tribal Festival · Telangana, India</p>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/traditions">Traditions</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/guide">Visitor's Guide</Link>
        </nav>
        <p className="footer-copy">A documentation project celebrating the cultural heritage of the Koya tribe · Telangana</p>
      </footer>
    </div>
  );
}
