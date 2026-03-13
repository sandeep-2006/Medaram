import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const STATS = [
  { value: '~3 Crore', label: 'Devotees per Festival' },
  { value: '13th C.',  label: 'Origins in History'    },
  { value: '4 Days',   label: 'Festival Duration'     },
  { value: '1998',     label: 'Declared State Festival' },
];

const EXPLORE = [
  { to: '/history',    icon: '📜', title: 'History',         desc: 'The legend of Sammakka & Saralamma and the battle against the Kakatiyas'        },
  { to: '/traditions', icon: '🪘', title: 'Traditions',      desc: 'Sacred rituals, offerings, tribal dances and the Koya way of worship'          },
  { to: '/gallery',    icon: '🖼️', title: 'Gallery',         desc: 'A visual journey through the worlds largest tribal congregation'              },
  { to: '/guide',      icon: '🗺️', title: "Visitor's Guide", desc: 'How to reach Medaram, what to carry and tips for a fulfilling pilgrimage'       },
];

/* Simple intersection-observer hook for fade-in */
function useFadeIn(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function FadeSection({ className = '', children }) {
  const ref = useRef(null);
  useFadeIn(ref);
  return <div ref={ref} className={`fade-section ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <div className="home page-wrapper">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-particles">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">Asia's Largest Tribal Festival</p>
          <h1 className="hero-title">
            <span className="hero-title-top">Medaram</span>
            <span className="hero-title-main">Jathara</span>
          </h1>
          <p className="hero-tagline">
            Sammakka · Saralamma · Jampanna · Pagididda Raju
          </p>
          <p className="hero-desc">
            Every two years, millions of devotees journey deep into the forests of
            Telangana to honour two heroic tribal goddesses — a mother and daughter
            who defied an empire.
          </p>
          <div className="hero-actions">
            <Link to="/history" className="btn-primary">Discover the Legend</Link>
            <Link to="/guide"   className="btn-ghost">Plan Your Visit</Link>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────── */}
      <FadeSection className="home-stats">
        {STATS.map(({ value, label }) => (
          <div key={label} className="stat-card">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </FadeSection>

      {/* ── INTRO ──────────────────────────────────────────── */}
      <FadeSection className="home-intro container">
        <div className="intro-text">
          <span className="section-label">About the Festival</span>
          <h2 className="section-title">The <span>Kumbh Mela</span> of Telangana</h2>
          <div className="divider-gold" />
          <p>
            The Sammakka Saralamma Jathara — popularly known as the <em>Medaram Jathara</em> — 
            is the world's single largest tribal religious congregation, held biennially 
            in the deep forests of the Eturnagaram Wildlife Sanctuary, Mulugu district, Telangana.
          </p>
          <p>
            Rooted in the 13th-century resistance of Koya tribal queen Sammakka and her 
            daughter Saralamma against the Kakatiya rulers, the festival is a living testament 
            to courage, sacrifice, and the unbroken spirit of India's tribal communities.
          </p>
          <p>
            With no Vedic or Brahminic influence, all rituals are conducted exclusively by 
            Koya tribe priests, preserving centuries of indigenous tradition. An estimated 
            three crore devotees attended the 2026 Maha Jathara, making it second only to 
            the Kumbh Mela in India's pilgrimage scale.
          </p>
          <Link to="/history" className="btn-link">Read the full history →</Link>
        </div>
        <div className="intro-visual">
          <div className="intro-image-wrap">
            <div className="intro-img-placeholder">
              <div className="deity-symbol">
                <span>🌿</span>
                <h3>Sammakka & Saralamma</h3>
                <p>Guardians of the Koya tribe</p>
              </div>
            </div>
            <div className="intro-badge">
              <span>Declared State Festival</span>
              <strong>1998</strong>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ── EXPLORE CARDS ─────────────────────────────────── */}
      <FadeSection className="home-explore">
        <div className="container">
          <div className="explore-header">
            <span className="section-label">Navigate</span>
            <h2 className="section-title">Explore <span>Medaram</span></h2>
            <div className="divider-gold center" />
          </div>
          <div className="explore-grid">
            {EXPLORE.map(({ to, icon, title, desc }) => (
              <Link to={to} key={to} className="explore-card">
                <span className="explore-icon">{icon}</span>
                <h3 className="explore-title">{title}</h3>
                <p className="explore-desc">{desc}</p>
                <span className="explore-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ── QUOTE ─────────────────────────────────────────── */}
      <FadeSection className="home-quote">
        <div className="quote-inner container">
          <span className="quote-mark">"</span>
          <blockquote>
            The Medaram Jathara is not merely a religious event — it is a vibrant 
            celebration of Telangana's tribal heritage, a living symbol of the 
            indomitable spirit of India's indigenous communities.
          </blockquote>
          <cite>— Telangana Government, Official Declaration</cite>
        </div>
      </FadeSection>

      {/* ── LOCATION HIGHLIGHT ────────────────────────────── */}
      <FadeSection className="home-location container">
        <div className="location-card">
          <span className="section-label">Where to Find Us</span>
          <h2 className="section-title">Nestled in the <span>Sacred Forests</span></h2>
          <div className="divider-gold" />
          <div className="location-details">
            <div className="loc-item">
              <span className="loc-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Medaram Village, Tadvai Mandal, Mulugu District, Telangana</p>
              </div>
            </div>
            <div className="loc-item">
              <span className="loc-icon">🌲</span>
              <div>
                <strong>Setting</strong>
                <p>Inside the Eturnagaram Wildlife Sanctuary, part of Dandakaranya Forest</p>
              </div>
            </div>
            <div className="loc-item">
              <span className="loc-icon">🚌</span>
              <div>
                <strong>Distance</strong>
                <p>~240 km from Hyderabad · ~90 km from Warangal</p>
              </div>
            </div>
            <div className="loc-item">
              <span className="loc-icon">📅</span>
              <div>
                <strong>Frequency</strong>
                <p>Once every two years, during the full moon of Magha (February)</p>
              </div>
            </div>
          </div>
          <Link to="/guide" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
            View Visitor's Guide
          </Link>
        </div>
      </FadeSection>

      {/* ── FOOTER ────────────────────────────────────────── */}
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
        <p className="footer-copy">
          A documentation project celebrating the cultural heritage of the Koya tribe · Telangana
        </p>
      </footer>
    </div>
  );
}
