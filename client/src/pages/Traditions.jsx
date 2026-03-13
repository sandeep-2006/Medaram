import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Traditions.css';

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

const RITUALS = [
  {
    icon:  '⚖️',
    title: 'Bangaram — The Jaggery Offering',
    tag:   'Sacred Offering',
    desc:  `The most iconic ritual of the Medaram Jathara is the offering of jaggery (bellam) 
            to the goddesses. Devotees offer jaggery equal to their own body weight — a practice 
            called "Bangaram" (meaning gold), as jaggery is considered as precious as gold in this 
            context. Massive heaps of jaggery offerings surround the altars throughout the festival.`,
  },
  {
    icon:  '🛁',
    title: 'Holy Dip in Jampanna Vagu',
    tag:   'Purification',
    desc:  `Taking a sacred bath in the reddish waters of the Jampanna Vagu is considered one of 
            the most auspicious acts during the Jathara. Devotees believe the dip cleanses past sins, 
            instils courage, and connects them spiritually with the warrior Jampanna, who attained 
            martyrdom in these very waters during the battle against the Kakatiya army.`,
  },
  {
    icon:  '🎋',
    title: 'Bamboo Worship',
    tag:   'Forest Tradition',
    desc:  `In keeping with the deep connection between the Koya tribe and their forest home, bamboo 
            holds special sanctity in the Jathara. Tribal devotees worship bamboo as a representation 
            of the forest goddess. The altars (Gaddelu) are constructed with bamboo and the procession 
            includes sacred bamboo poles adorned with the deities' insignia.`,
  },
  {
    icon:  '🐐',
    title: 'Animal Sacrifice',
    tag:   'Ancient Custom',
    desc:  `Animal sacrifice — typically goats and chickens — forms a part of the ancient tribal 
            tradition at the Jathara. Devotees offer animals to the goddesses as an expression of 
            supreme devotion. This practice reflects the pre-Vedic, indigenous character of the 
            festival and is conducted according to Koya customs rather than any Brahminic ritual.`,
  },
  {
    icon:  '💇',
    title: 'Head Tonsuring',
    tag:   'Devotion',
    desc:  `Many devotees observe the practice of shaving their heads (mundan) as an act of 
            complete surrender and devotion to the goddesses. The hair is offered as a sacred 
            gift. Some devotees are believed to enter a trance-like state during the festival, 
            dancing to the thunderous beats of the tribal drums as if possessed by the deity.`,
  },
  {
    icon:  '🥥',
    title: 'Coconut & Vermillion',
    tag:   'Offering',
    desc:  `Along with jaggery, devotees offer coconuts, turmeric, vermillion (kumkuma), and in 
            some instances, animal blood at the altars. Vermillion holds special significance — 
            legend holds that when pursuers searched for the wounded Sammakka, they found only 
            a container of kumkuma where she had vanished, signalling her divine transcendence.`,
  },
  {
    icon:  '🥁',
    title: 'Tribal Music & Dance',
    tag:   'Cultural Expression',
    desc:  `The four days of the Jathara resound with the rhythmic beating of tribal drums (dappu, 
            tudumu) and the melodies of traditional instruments. Koya tribal artists perform folk 
            dances in elaborate traditional costumes. The air fills with tribal songs narrating the 
            stories of Sammakka and Saralamma, passed down through generations by oral tradition.`,
  },
  {
    icon:  '🌿',
    title: 'Forest Procession',
    tag:   'Sacred Ritual',
    desc:  `One of the most moving moments of the Jathara is the sacred procession of the deity 
            caskets from their forest abodes to the altars at Medaram, and their ceremonial return 
            at the festival's close. The procession is led exclusively by Koya tribal priests and 
            accompanied by thousands of devotees. The deities are believed to "visit" their people 
            during the four days of the Jathara.`,
  },
];

const FOUR_DAYS = [
  {
    day: 'Day 1',
    name: 'Arrival of Saralamma',
    desc: 'The idol of Saralamma is brought in a sacred procession from Kannepalli village to the Medaram Gaddhe through the Jampanna Vagu. The insignia of Pagididda Raju, Govindaraju and Nagulamma also arrive from their respective villages. Pujas begin with great fervour.',
  },
  {
    day: 'Day 2',
    name: 'Arrival of Sammakka',
    desc: 'The principal goddess Sammakka descends from the Chilakalagutta forest hillock to the main altar (Gaddhe) at Medaram. This is the most awaited moment of the Jathara, marked by an explosion of devotion as millions of pilgrims throng the arena.',
  },
  {
    day: 'Day 3',
    name: 'Maha Darshan',
    desc: 'The peak of the festival. All four deities — Sammakka, Saralamma, Pagididda Raju and Govindaraju — are present at the altars. Devotees gather in their millions to offer jaggery, take the sacred dip, and seek blessings. This day witnesses the largest single-day human gathering.',
  },
  {
    day: 'Day 4',
    name: 'The Divine Return',
    desc: 'The four-day festival concludes with a ceremonial farewell as the deities\' caskets are returned to their forest abodes. This "return to the forest" is a moving and spiritually charged moment, as devotees bid farewell to their goddesses until the next biennial Jathara.',
  },
];

export default function Traditions() {
  return (
    <div className="traditions-page page-wrapper">

      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <section className="page-hero page-hero--traditions">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-label">Customs & Rituals</span>
          <h1 className="page-hero-title">Traditions of<br /><span>Medaram Jathara</span></h1>
          <p className="page-hero-desc">
            Ancient Koya tribal customs preserved across centuries — a festival with no Vedic 
            influence, governed entirely by the indigenous wisdom of India's tribal priests.
          </p>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────── */}
      <FadeSection className="traditions-intro container">
        <div className="trad-intro-inner">
          <span className="section-label">A Festival Unlike Any Other</span>
          <h2 className="section-title">Pure <span>Tribal Heritage</span></h2>
          <div className="divider-gold" />
          <div className="trad-intro-text">
            <p>
              What sets the Medaram Jathara apart from all other major Indian festivals is its 
              absolutely non-Brahminic, non-Vedic character. Every single ritual — from the arrival 
              of the deity caskets to the final farewell — is conducted exclusively by Koya tribe 
              priests according to centuries-old indigenous customs.
            </p>
            <p>
              There are no Brahmin priests, no Sanskrit mantras, no Vedic hymns. The Jathara is 
              a living archive of pre-Vedic tribal spirituality — one that has survived invasions, 
              political changes, and modernisation, continuing to draw millions who reconnect with 
              their roots in the sacred forest.
            </p>
          </div>
        </div>
      </FadeSection>

      {/* ── THE FOUR GADDELU ───────────────────────────────── */}
      <FadeSection className="gaddelu-section container">
        <div className="gaddelu-header">
          <span className="section-label">The Four Altars</span>
          <h2 className="section-title">The Sacred <span>Gaddelu</span></h2>
          <div className="divider-gold center" />
          <p className="gaddelu-intro-text">
            At the heart of Medaram are the four Gaddelu — sacred altars (thrones) of the four 
            deities. Two weeks before the Jathara, each altar is adorned with new clothes and 
            jewellery to honour the arriving deities.
          </p>
        </div>
        <div className="gaddelu-grid">
          {[
            { name: 'Sammakka', origin: 'From the Chilakalagutta forest hillock', colour: '#e8a030', icon: '🌿' },
            { name: 'Saralamma', origin: 'From Kannepalli village, near Medaram', colour: '#c0392b', icon: '🔥' },
            { name: 'Pagididda Raju', origin: 'Insignia from Punugondla village', colour: '#4a9060', icon: '⚔️' },
            { name: 'Govindaraju', origin: 'From Kondayi village, via Dubbagatta Vaddes', colour: '#7060c0', icon: '🌊' },
          ].map(g => (
            <div key={g.name} className="gadde-card" style={{ '--accent': g.colour }}>
              <span className="gadde-icon">{g.icon}</span>
              <h3 className="gadde-name">{g.name}</h3>
              <p className="gadde-origin">{g.origin}</p>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── FOUR DAYS ──────────────────────────────────────── */}
      <FadeSection className="four-days-section">
        <div className="container">
          <div className="days-header">
            <span className="section-label">Festival Schedule</span>
            <h2 className="section-title">Four Days of <span>Devotion</span></h2>
            <div className="divider-gold center" />
          </div>
          <div className="days-grid">
            {FOUR_DAYS.map((d, i) => (
              <div key={i} className="day-card">
                <div className="day-number">{d.day}</div>
                <div className="day-body">
                  <h3 className="day-name">{d.name}</h3>
                  <p className="day-desc">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ── RITUALS ────────────────────────────────────────── */}
      <FadeSection className="rituals-section container">
        <div className="rituals-header">
          <span className="section-label">Sacred Practices</span>
          <h2 className="section-title">Rituals & <span>Customs</span></h2>
          <div className="divider-gold center" />
        </div>
        <div className="rituals-grid">
          {RITUALS.map(r => (
            <div key={r.title} className="ritual-card">
              <div className="ritual-header-row">
                <span className="ritual-icon">{r.icon}</span>
                <span className="ritual-tag">{r.tag}</span>
              </div>
              <h3 className="ritual-title">{r.title}</h3>
              <p className="ritual-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── KEY FACT ───────────────────────────────────────── */}
      <FadeSection className="traditions-fact container">
        <div className="fact-card">
          <span className="fact-icon">🏛️</span>
          <div>
            <h3>A Festival of Communal Harmony</h3>
            <p>
              The Medaram Jathara transcends tribal boundaries, uniting communities from Telangana, 
              Andhra Pradesh, Chhattisgarh, Maharashtra, Odisha, Karnataka, and beyond. Though rooted 
              in Koya tribal tradition, it welcomes all — making it not just a religious festival, 
              but a powerful symbol of India's cultural plurality and unity.
            </p>
          </div>
        </div>
      </FadeSection>

      {/* ── CTA ────────────────────────────────────────────── */}
      <FadeSection className="trad-cta container">
        <p>Ready to witness these living traditions?</p>
        <div className="cta-buttons">
          <Link to="/gallery" className="btn-primary">View Gallery</Link>
          <Link to="/guide"   className="btn-ghost">Plan Your Visit</Link>
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
