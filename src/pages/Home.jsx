import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function useFadeIn(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.12 }
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

const STATS = [
  { value: '~3 Crore',   label: 'Devotees per Jathara',       sub: 'Estimated attendance'    },
  { value: 'Biennial',   label: 'Held Every Two Years',       sub: 'During Magha full moon'  },
  { value: '4 Days',     label: 'Festival Duration',          sub: 'Full cycle of rituals'   },
  { value: '13th Cent.', label: 'Historical Origins',         sub: 'Kakatiya period'         },
  { value: 'World #1',   label: 'Tribal Congregation',        sub: 'Largest on Earth'        },
];

const SECTIONS = [
  {
    to:    '/history',
    title: 'History & Legend',
    desc:  'The story of Sammakka and Saralamma — two revered figures whose courage and sacrifice gave rise to one of India\'s most significant tribal traditions.',
    icon:  '📜',
    color: 'blue',
  },
  {
    to:    '/traditions',
    title: 'Traditions & Rituals',
    desc:  'Sacred Koya tribal customs, entirely free of Brahminic influence, preserved across centuries by generations of indigenous priests and devotees.',
    icon:  '🪘',
    color: 'navy',
  },
  {
    to:    '/gallery',
    title: 'Photo Gallery',
    desc:  'A visual record of the Jathara — the sacred altars, the river bathing, the processions, and the extraordinary human gathering in the forest.',
    icon:  '🖼️',
    color: 'blue',
  },
  {
    to:    '/guide',
    title: "Visitor's Guide",
    desc:  'Practical information for planning your visit — how to reach Medaram, what to bring, government facilities, and important etiquette guidelines.',
    icon:  '🗺️',
    color: 'navy',
  },
];

export default function Home() {
  return (
    <div className="home page-wrapper">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-grid-texture" />
        <div className="hero-inner container">
          <div className="hero-content">
            <span className="hero-eyebrow">
              Documenting Asia's Largest Tribal Festival
            </span>
            <h1 className="hero-title">
              Sammakka Saralamma<br />
              <span>Medaram Jathara</span>
            </h1>
            <p className="hero-subtitle">
              Telangana, India &nbsp;·&nbsp; Held biennially in the forests of Mulugu District
            </p>
            <p className="hero-desc">
              A living heritage of the Koya tribe — a sacred biennial gathering that has 
              drawn devotees from across India for centuries, honouring two remarkable women 
              whose story of courage and sacrifice remains deeply meaningful to millions of people.
            </p>
            <div className="hero-actions">
              <Link to="/history" className="btn-primary">Explore the History</Link>
              <Link to="/guide"   className="btn-outline btn-outline--white">Plan Your Visit</Link>
            </div>
          </div>
          <div className="hero-badge-col">
            <div className="hero-badge">
              <div className="badge-top">Asia's Largest</div>
              <div className="badge-main">Tribal Festival</div>
              <div className="badge-sub">Recognised by Telangana State</div>
              <div className="badge-year">Est. 13th Century</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 4v12M4 12l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <Fade>
        <div className="stats-bar">
          {STATS.map(s => (
            <div key={s.label} className="stat">
              <strong className="stat-value">{s.value}</strong>
              <span  className="stat-label">{s.label}</span>
              <span  className="stat-sub">{s.sub}</span>
            </div>
          ))}
        </div>
      </Fade>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <Fade className="home-about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="label">About This Festival</span>
              <h2 className="section-title">A Sacred Gathering of<br /><span>Deep Significance</span></h2>
              <div className="rule" />
              <p>
                The Sammakka Saralamma Jathara — widely known as the Medaram Jathara — holds a profound 
                place in the lives of millions of people across India. Held in a remote forest village in 
                Mulugu District, Telangana, it is recognised as the world's single largest tribal 
                religious congregation, drawing an estimated three crore devotees every two years.
              </p>
              <p>
                The festival commemorates Sammakka and Saralamma — a mother and daughter from the 
                Koya tribe who lived in the 13th century. Their story of standing firmly for justice 
                and their people, even against great odds, continues to inspire profound devotion. 
                Their memory is honoured with absolute sincerity by devotees who travel great distances 
                on foot, often under challenging conditions.
              </p>
              <p>
                What makes the Jathara especially significant is its indigenous character. Every ritual 
                is conducted solely by Koya tribal priests, making it one of the most authentic 
                expressions of Adivasi spirituality in India — free from outside religious influence 
                and shaped entirely by the community it belongs to.
              </p>
              <Link to="/history" className="btn-link">
                Learn the full history <span>→</span>
              </Link>
            </div>
            <div className="about-visual">
              <div className="about-card-stack">
                <div className="about-info-card about-info-card--top">
                  <span className="aic-icon">🌿</span>
                  <div>
                    <strong>Declared State Festival</strong>
                    <p>Officially recognised by the Government of Andhra Pradesh in 1998; continued by Telangana after 2014.</p>
                  </div>
                </div>
                <div className="about-info-card about-info-card--main">
                  <div className="aic-stat">
                    <span className="aic-big">100%</span>
                    <span className="aic-label">Tribal Tradition</span>
                  </div>
                  <p className="aic-text">All rituals conducted exclusively by Koya tribal priests — no Vedic or Brahminic influence.</p>
                </div>
                <div className="about-info-card about-info-card--bottom">
                  <span className="aic-icon">📍</span>
                  <div>
                    <strong>Medaram Village</strong>
                    <p>Tadvai Mandal, Mulugu District, within the Eturnagaram Wildlife Sanctuary.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* ── EXPLORE SECTIONS ─────────────────────────────── */}
      <Fade>
        <div className="home-explore">
          <div className="container">
            <div className="explore-header">
              <span className="label">Explore This Site</span>
              <h2 className="section-title">What You Will <span>Find Here</span></h2>
              <div className="rule" />
            </div>
            <div className="explore-grid">
              {SECTIONS.map(s => (
                <Link key={s.to} to={s.to} className={`explore-card explore-card--${s.color}`}>
                  <span className="explore-card__icon">{s.icon}</span>
                  <h3 className="explore-card__title">{s.title}</h3>
                  <p  className="explore-card__desc">{s.desc}</p>
                  <span className="explore-card__cta">
                    Read more <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Fade>

      {/* ── HERITAGE STATEMENT ───────────────────────────── */}
      <Fade>
        <div className="home-statement">
          <div className="container">
            <div className="statement-inner">
              <div className="statement-icon">🏛️</div>
              <div className="statement-text">
                <span className="label label--white">Cultural Heritage</span>
                <h2 className="section-title section-title--white">
                  A Living Tradition That<br /><span>Belongs to Its People</span>
                </h2>
                <div className="rule rule--white" />
                <p>
                  This website is offered as a respectful documentation of the Sammakka 
                  Saralamma Jathara. The stories, traditions, and beliefs presented here 
                  belong to the Koya tribal community and the millions of devotees for whom 
                  this festival is a deeply personal and sacred part of life.
                </p>
                <p>
                  Visitors and readers are encouraged to approach this heritage with the 
                  respect and care it deserves — recognising that behind every ritual and 
                  every tradition stands a living community with centuries of history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* ── QUICK FACTS ──────────────────────────────────── */}
      <Fade>
        <div className="home-facts container">
          <div className="facts-header">
            <span className="label">At a Glance</span>
            <h2 className="section-title">Key Facts About<br /><span>Medaram Jathara</span></h2>
            <div className="rule" />
          </div>
          <div className="facts-grid">
            {[
              { icon:'📍', heading:'Location',     body:'Medaram Village, Tadvai Mandal, Mulugu District, Telangana — within the Eturnagaram Wildlife Sanctuary, part of the historic Dandakaranya Forest.' },
              { icon:'🗓️', heading:'When',         body:'Once every two years during the full moon (Purnima) of Magha month (January–February). The 2026 Maha Jathara was held from 28–31 January.' },
              { icon:'🌊', heading:'Jampanna Vagu',body:'A tributary of the River Godavari, named after the warrior son of Sammakka. Taking a sacred bath here is one of the most significant acts of the pilgrimage.' },
              { icon:'🏛️', heading:'Governance',   body:'All rituals are led by Koya tribal priests. The Telangana government provides extensive infrastructure, medical services, transport and security.' },
              { icon:'🌍', heading:'Reach',         body:'Devotees travel from Telangana, Andhra Pradesh, Chhattisgarh, Maharashtra, Odisha, Karnataka and Jharkhand — and from across India.' },
              { icon:'🚌', heading:'Access',        body:'TGSRTC operates over 4,000 special buses from across Telangana during the Jathara. The nearest city is Warangal (~90 km) and Hyderabad (~240 km).' },
            ].map(f => (
              <div key={f.heading} className="fact-card">
                <span className="fact-icon">{f.icon}</span>
                <h4 className="fact-heading">{f.heading}</h4>
                <p  className="fact-body">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="facts-cta">
            <Link to="/guide" className="btn-primary">Full Visitor's Guide</Link>
          </div>
        </div>
      </Fade>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="site-footer">
        <p className="footer-brand">Medaram Jathara</p>
        <p className="footer-tagline">Cultural Heritage Documentation · Telangana, India</p>
        <nav className="footer-nav">
          {[['/', 'Home'], ['/history', 'History'], ['/traditions', 'Traditions'], ['/gallery', 'Gallery'], ['/guide', "Visitor's Guide"]].map(([to, label]) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
        <p className="footer-copy">
          A documentation project in respectful acknowledgement of the Koya tribal community and the devotees of Sammakka and Saralamma.
        </p>
      </footer>
    </div>
  );
}
