import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './History.css';

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

const TIMELINE = [
  {
    period: '13th Century',
    title:  'The Divine Child',
    text:   `During a hunting expedition in the dense forests near Medaram, a group of Koya 
             tribesmen witnessed an extraordinary sight — a radiant infant girl playing fearlessly 
             among tigers. They believed her to be an incarnation of Vanadurga, the forest goddess. 
             The tribal chief Medaraju adopted her and named her Sammakka. She grew to master 
             education, warfare, and statecraft, and was known for her compassion toward her people.`,
    icon:   '🌿',
  },
  {
    period: '13th Century',
    title:  'Queen of Medaram',
    text:   `Sammakka married Pagididda Raju, the prince of the Koya tribe who ruled the 
             Medaram region along the banks of the Godavari River. Together they had two 
             children — Saralamma (Sarakka) and the warrior Jampanna. Under their reign, 
             Medaram flourished as a prosperous tribal kingdom deep in the Dandakaranya forests.`,
    icon:   '👑',
  },
  {
    period: '13th Century',
    title:  'The Battle Against the Kakatiyas',
    text:   `A series of devastating droughts brought severe hardship to the Medaram region. 
             Despite the suffering, the Kakatiya emperor Prataparudra demanded tribute payments 
             from Medaram. Sammakka and her family refused, declaring their independence. 
             This act of defiance provoked a military response from the Kakatiya army, leading 
             to a fierce battle at the Sampangi stream (now called Jampanna Vagu).`,
    icon:   '⚔️',
  },
  {
    period: '13th Century',
    title:  'The Sacrifice of Jampanna',
    text:   `In the fierce battle, Sammakka's son Jampanna fought valiantly against the Kakatiya 
             forces. Overwhelmed by grief after the death of his comrades, Jampanna leapt into the 
             stream and attained martyrdom. The stream has since been named Jampanna Vagu in his 
             honour. The water of this stream runs red — attributed spiritually to Jampanna's blood 
             and scientifically to the iron-rich red soil composition of the region.`,
    icon:   '🌊',
  },
  {
    period: '13th Century',
    title:  "Sammakka's Disappearance",
    text:   `After the deaths of her family, Sammakka, severely wounded, fought on alone before 
             retreating into the forest. Pursing soldiers found only a box of vermillion (kumkuma) 
             where she had vanished. Saralamma too was martyred in battle. The tribal community 
             believed both mother and daughter had become divine forces — guardians of the forest 
             and protectors of their people — and began to worship them.`,
    icon:   '✨',
  },
  {
    period: 'Ancient Onwards',
    title:  'The Birth of the Jathara',
    text:   `Following the martyrdom of Sammakka and Saralamma, the Koya tribe instituted a 
             biennial festival to honour their memory and seek their blessings. The worship was 
             conducted entirely by tribal priests with no Vedic or Brahminic influence, preserving 
             the pure indigenous character of the festival. The four altars (Gaddelu) represent 
             Sammakka, Saralamma, Pagididda Raju, and Govindaraju (Sammakka's brother-in-law).`,
    icon:   '🪔',
  },
  {
    period: '1998',
    title:  'Declared a State Festival',
    text:   `For centuries, the only way to reach the remote village of Medaram was by bullock cart. 
             In 1998, the Andhra Pradesh government declared the Medaram Jathara an official state 
             festival and constructed the first motorable road to the village. This marked a 
             turning point that opened the festival to millions of non-tribal devotees from across 
             India — Andhra Pradesh, Maharashtra, Odisha, Chhattisgarh, Karnataka, and Jharkhand.`,
    icon:   '🛣️',
  },
  {
    period: '2026',
    title:  'Maha Jathara 2026',
    text:   `The 2026 Maha Jathara was held from January 28–31. The Telangana government invested 
             over ₹250 crore in infrastructure, including reconstruction of the sacred altars, 
             roads, water supply, medical camps, and sanitation. An estimated three crore devotees 
             attended the four-day festival, cementing Medaram Jathara's status as the world's 
             largest recurring tribal religious congregation.`,
    icon:   '🌟',
  },
];

export default function History() {
  return (
    <div className="history-page page-wrapper">

      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <section className="page-hero page-hero--history">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-label">Origins & Legacy</span>
          <h1 className="page-hero-title">History of<br /><span>Medaram Jathara</span></h1>
          <p className="page-hero-desc">
            A story of courage, sacrifice, and the deification of two heroic women 
            who defied the Kakatiya empire to protect their people.
          </p>
        </div>
      </section>

      {/* ── LEGEND INTRO ───────────────────────────────────── */}
      <FadeSection className="history-intro container">
        <div className="history-intro-inner">
          <span className="section-label">The Legend</span>
          <h2 className="section-title">Sammakka & <span>Saralamma</span></h2>
          <div className="divider-gold" />
          <div className="legend-text-grid">
            <p>
              The Medaram Jathara is rooted in one of the most powerful legends of tribal India — 
              the story of Sammakka and her daughter Saralamma, a mother-daughter pair who sacrificed 
              their lives resisting unjust rule, and who were subsequently elevated to the status of 
              goddesses by their devoted people.
            </p>
            <p>
              Unlike most Hindu festivals, the Jathara has no Vedic or Brahminic influence. The rituals 
              are entirely conducted by Koya tribe priests, making it a rare, pure expression of 
              indigenous Adivasi spiritual tradition. The festival celebrates not just devotion, 
              but resistance — the unbroken spirit of India's tribal communities.
            </p>
          </div>
        </div>
      </FadeSection>

      {/* ── DEITY CARDS ────────────────────────────────────── */}
      <FadeSection className="deity-section container">
        <div className="deity-grid">
          {[
            { name: 'Sammakka', role: 'The Divine Mother', desc: 'A girl found playing with tigers in the forest, believed to be an incarnation of Vanadurga (the forest goddess). She grew up to become a fierce warrior queen who led her tribe against the Kakatiya empire.', icon: '🌿' },
            { name: 'Saralamma', role: 'The Daughter', desc: 'Daughter of Sammakka and Pagididda Raju, Saralamma fought alongside her mother in the battle against the Kakatiya army. Her idol is enshrined at Kannepalli village near Medaram.', icon: '🔥' },
            { name: 'Pagididda Raju', role: 'The Tribal King', desc: 'The Koya prince who married Sammakka and ruled the Medaram region. His insignia — a flag, Aderalu and Bandaru — are carried in procession from Punugondla village to Medaram.', icon: '⚔️' },
            { name: 'Jampanna', role: 'The Warrior Son', desc: 'The brave son of Sammakka who fought valiantly at the stream that now bears his name — Jampanna Vagu. His martyrdom is commemorated with a sacred bath in the red waters of the stream.', icon: '🌊' },
          ].map(d => (
            <div key={d.name} className="deity-card">
              <span className="deity-icon">{d.icon}</span>
              <h3 className="deity-name">{d.name}</h3>
              <p className="deity-role">{d.role}</p>
              <p className="deity-desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── TIMELINE ───────────────────────────────────────── */}
      <FadeSection className="history-timeline container">
        <div className="timeline-header">
          <span className="section-label">Chronology</span>
          <h2 className="section-title">The <span>Story</span> Through Time</h2>
          <div className="divider-gold" />
        </div>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-connector">
                <span className="timeline-dot">{item.icon}</span>
              </div>
              <div className="timeline-card">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── JAMPANNA VAGU ──────────────────────────────────── */}
      <FadeSection className="jampanna-section container">
        <div className="jampanna-card">
          <div className="jampanna-text">
            <span className="section-label">Sacred Water</span>
            <h2 className="section-title">Jampanna <span>Vagu</span></h2>
            <div className="divider-gold" />
            <p>
              Jampanna Vagu is a tributary of the mighty River Godavari, named after the warrior 
              son of Sammakka who attained martyrdom in its waters. The stream runs a striking 
              reddish colour — believed by devotees to be stained by Jampanna's blood, and 
              explained scientifically by the iron-rich red soil composition of the region.
            </p>
            <p>
              A holy dip in the Jampanna Vagu is considered one of the most sacred acts during 
              the Jathara. Devotees believe the sacred bath cleanses sins, reminds them of the 
              sacrifice of their gods, and infuses the bather with courage and strength. Millions 
              queue to take this auspicious bath during the four days of the festival.
            </p>
          </div>
          <div className="jampanna-visual">
            <div className="river-visual">
              <span>🌊</span>
              <p className="river-name">Jampanna Vagu</p>
              <p className="river-desc">Tributary of River Godavari</p>
              <div className="river-stats">
                <div><strong>Colour</strong><span>Red (Iron-rich soil)</span></div>
                <div><strong>Significance</strong><span>Sacred bathing site</span></div>
              </div>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ── RECOGNITION ────────────────────────────────────── */}
      <FadeSection className="recognition-section container">
        <div className="recognition-header">
          <span className="section-label">Global Recognition</span>
          <h2 className="section-title">From Forest Village to <span>World Stage</span></h2>
          <div className="divider-gold center" />
        </div>
        <div className="recognition-grid">
          {[
            { stat: '#2',         desc: 'Second largest gathering in India after Kumbh Mela' },
            { stat: 'World #1',   desc: 'Largest recurring tribal religious congregation on Earth' },
            { stat: '~3 Crore',   desc: 'Estimated devotees at Maha Jathara 2026' },
            { stat: 'UNESCO',     desc: 'Recognised as Intangible Cultural Heritage of significance' },
          ].map(r => (
            <div key={r.stat} className="recognition-card">
              <span className="recognition-stat">{r.stat}</span>
              <p className="recognition-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── CTA ────────────────────────────────────────────── */}
      <FadeSection className="history-cta container">
        <p>Want to experience this living legend?</p>
        <div className="cta-buttons">
          <Link to="/traditions" className="btn-primary">Explore Traditions</Link>
          <Link to="/guide"      className="btn-ghost">Plan Your Visit</Link>
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
