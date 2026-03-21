import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './History.css';

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

const DEITIES = [
  {
    name: 'Sammakka',
    role: 'The Principal Goddess',
    desc: `According to the oral tradition of the Koya community, Sammakka was discovered as an infant 
           by the tribal chief Medaraju while on a hunt in the forests near Medaram. Found playing 
           fearlessly among wild tigers, she was believed to be a divine gift — an incarnation of the 
           forest goddess Vanadurga. She was raised with great care, grew into a learned and courageous 
           leader, and later became the principal deity of the Jathara.`,
    icon: '🌿',
    colour: '#1e4db7',
  },
  {
    name: 'Saralamma (Sarakka)',
    role: 'Daughter of Sammakka',
    desc: `Saralamma was the daughter of Sammakka and Pagididda Raju. She fought alongside her family 
           during the conflict with the Kakatiya forces and attained martyrdom on the battlefield. 
           She is worshipped at her own shrine in Kannepalli village, which forms part of the 
           procession circuit of the Jathara. Her name is spoken with deep reverence alongside her mother's.`,
    icon: '🔥',
    colour: '#2e63d4',
  },
  {
    name: 'Pagididda Raju',
    role: 'Tribal King & Husband',
    desc: `Pagididda Raju was the Koya tribal prince who ruled the Medaram region on the banks of 
           the Godavari. He married Sammakka and together they governed their community with care. 
           His insignia — carried from Punugondla village in procession to the main altar — is one 
           of the four sacred presences at the Gaddhe during the Jathara.`,
    icon: '⚔️',
    colour: '#0f2d6b',
  },
  {
    name: 'Jampanna',
    role: 'Warrior Son',
    desc: `Jampanna was Sammakka's son who fought valiantly in the confrontation with the Kakatiya army. 
           The stream now known as Jampanna Vagu — a sacred site where millions of pilgrims take a 
           holy bath during the Jathara — is named in his memory. The stream's reddish hue, caused 
           by the iron-rich local soil, carries deep symbolic meaning for devotees.`,
    icon: '🌊',
    colour: '#1e4db7',
  },
];

const TIMELINE = [
  {
    era:   '13th Century CE',
    event: 'The Discovery of Sammakka',
    body:  `The oral history of the Koya community tells of the tribal chief Medaraju discovering 
            an infant girl in the forest near Medaram, playing undisturbed among tigers. Believing 
            her to be of divine origin, he and his wife raised her as their daughter. She was named 
            Sammakka and grew to become highly educated and skilled in statecraft and warfare.`,
    icon:  '🌿',
  },
  {
    era:   '13th Century CE',
    event: 'A Prosperous Kingdom',
    body:  `Sammakka married Pagididda Raju, the Koya prince of the Medaram region, and together 
            they ruled their community with prosperity and fairness. Their family included their 
            daughter Saralamma, their son Jampanna, and Pagididda Raju's brother Govindaraju. 
            Medaram flourished as a respected tribal settlement within the Dandakaranya forests.`,
    icon:  '👑',
  },
  {
    era:   '13th Century CE',
    event: 'Drought and Demands for Tribute',
    body:  `A prolonged drought brought suffering to the Medaram region. Despite the hardship 
            faced by their people, the Kakatiya ruler Prataparudra continued to demand tribute 
            from the tribe. Sammakka and her family refused, placing the welfare of their people 
            above compliance with what they viewed as an unjust demand during a time of crisis.`,
    icon:  '🌾',
  },
  {
    era:   '13th Century CE',
    event: 'The Confrontation',
    body:  `The refusal to pay tribute led to a military confrontation at the Sampangi stream — 
            today known as Jampanna Vagu. The Koya forces, though numerically smaller, fought 
            with determination. The stream's red-tinted waters, a natural result of the area's 
            iron-rich soil, became inseparably linked in devotees' memory to this event.`,
    icon:  '⚔️',
  },
  {
    era:   '13th Century CE',
    event: 'Sacrifice and Martyrdom',
    body:  `Pagididda Raju, Jampanna, and Saralamma all lost their lives in the confrontation. 
            Sammakka, badly wounded, continued fighting before retreating into the forest. 
            Those who followed could not find her — only a container of vermillion (kumkuma) 
            remained where she had last been. The Koya community understood this as her 
            transformation into a divine presence, and began to honour her as a goddess.`,
    icon:  '✨',
  },
  {
    era:   'Centuries of Tradition',
    event: 'The Birth of the Jathara',
    body:  `Following these events, the Koya community instituted a biennial festival to honour 
            Sammakka, Saralamma, and the other members of the family. All rituals were — and 
            continue to be — conducted entirely by Koya tribal priests, with no Vedic or Brahminic 
            elements. The festival preserved the indigenous spiritual character of the community across generations.`,
    icon:  '🪔',
  },
  {
    era:   '1998',
    event: 'Recognition as a State Festival',
    body:  `For centuries, Medaram could only be reached by bullock cart or on foot through dense 
            forest. In 1998, the Andhra Pradesh government declared the Jathara an official state 
            festival and constructed the first motorable road to the village. This opened the festival 
            to a far larger number of devotees while the government took on responsibility for 
            infrastructure, safety, and facilities.`,
    icon:  '🛣️',
  },
  {
    era:   'Present Day',
    event: 'A Gathering of Millions',
    body:  `The Jathara now draws an estimated three crore devotees every two years, making it the 
            world's single largest tribal religious congregation. The Telangana government invests 
            significantly in roads, water, medical camps, sanitation, and security. Through all 
            this growth, the Koya tribal community continues to lead all sacred rituals, preserving 
            the authentic character of the festival with great care.`,
    icon:  '🌟',
  },
];

export default function History() {
  return (
    <div className="history-page page-wrapper">

      <section className="page-hero">
        <div className="page-hero-accent" />
        <div className="page-hero-content container">
          <span className="label label--white">Origins & Legacy</span>
          <h1 className="page-hero-title">
            History of<br /><span>Medaram Jathara</span>
          </h1>
          <p className="page-hero-desc">
            An account of the events and people that gave rise to one of India's most 
            significant and enduring tribal traditions — told with care for those for whom 
            this history is a living part of their faith and identity.
          </p>
        </div>
      </section>

      {/* ── OPENING CONTEXT ──────────────────────────────── */}
      <Fade>
        <div className="hist-intro container">
          <div className="hist-intro-inner">
            <br>
            </br>
            <span className="label">Understanding the Jathara</span>
            <h2 className="section-title">A Story of <span>People and Principle</span></h2>
            <div className="rule" />
            <div className="hist-intro-cols">
              <p>
                The Sammakka Saralamma Jathara is rooted in the memory of real people whose 
                courage left a lasting impression on their community. Sammakka and Saralamma — 
                a mother and her daughter — are remembered not only as figures of devotion but 
                as leaders who chose to stand firm against what their people experienced as injustice.
              </p>
              <p>
                Their story, preserved through centuries of oral tradition and enacted through 
                living ritual, continues to hold profound meaning for the Koya tribal community 
                and for the millions of devotees — from many different communities and states — 
                who make the journey to Medaram every two years. Understanding this history 
                means understanding why this gathering matters so deeply.
               </p>
            </div>
          </div>
        </div>
      </Fade>

      {/* ── DEITY PROFILES ───────────────────────────────── */}
      <Fade>
        <div className="deity-section">
          <div className="container">
            <span className="label">The Four Honoured Figures</span>
            <h2 className="section-title">Sammakka, Saralamma <span>& Family</span></h2>
            <div className="rule" />
            <div className="deity-grid">
              {DEITIES.map(d => (
                <div key={d.name} className="deity-card" style={{ '--col': d.colour }}>
                  <div className="deity-card__top">
                    <span className="deity-card__icon">{d.icon}</span>
                    <div>
                      <h3 className="deity-card__name">{d.name}</h3>
                      <span className="deity-card__role">{d.role}</span>
                    </div>
                  </div>
                  <p className="deity-card__desc">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>

      {/* ── TIMELINE ─────────────────────────────────────── */}
      <Fade>
        <div className="timeline-section">
          <div className="container">
            <div className="timeline-header">
              <span className="label">Chronological Account</span>
              <h2 className="section-title">The Story <span>Through Time</span></h2>
              <div className="rule" />
              <p className="timeline-intro">
                The following account is drawn from the oral tradition of the Koya community, 
                as documented by scholars and the Telangana government. It is presented with 
                respect for those who hold it as an account of real and sacred events.
              </p>
            </div>
            <div className="timeline">
              {TIMELINE.map((item, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-left">
                    <span className="tl-era">{item.era}</span>
                  </div>
                  <div className="tl-connector">
                    <span className="tl-dot">{item.icon}</span>
                    <span className="tl-line" />
                  </div>
                  <div className="tl-card">
                    <h3 className="tl-event">{item.event}</h3>
                    <p  className="tl-body">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>

      {/* ── JAMPANNA VAGU ────────────────────────────────── */}
      <Fade>
        <div className="jampanna-section container">
          <div className="jampanna-grid">
            <div className="jampanna-text">
              <span className="label">Sacred Site</span>
              <h2 className="section-title">Jampanna <span>Vagu</span></h2>
              <div className="rule" />
              <p>
                Jampanna Vagu is a tributary of the River Godavari that flows through the 
                Medaram region. It bears the name of Jampanna — Sammakka's son — whose memory 
                is deeply associated with these waters. The stream has a distinctive reddish 
                tint caused by the high iron content in the local red soil.
              </p>
              <p>
                For pilgrims, taking a sacred bath in Jampanna Vagu is one of the most 
                significant acts of the entire Jathara. It is understood as an act of 
                remembrance, purification, and connection with the figures being honoured. 
                During the festival, millions of people queue patiently along the banks 
                for this deeply meaningful moment.
              </p>
            </div>
            <div className="jampanna-card">
              <div className="jc-header">
                <span>🌊</span>
                <div>
                  <h3>Jampanna Vagu</h3>
                  <p>Tributary of the River Godavari</p>
                </div>
              </div>
              <div className="jc-facts">
                {[
                  { key: 'Named after',   val: 'Jampanna, warrior son of Sammakka' },
                  { key: 'Water colour',  val: 'Reddish — iron-rich local soil' },
                  { key: 'Significance',  val: 'Sacred bathing site for pilgrims' },
                  { key: 'Location',      val: 'Flows through the Medaram festival area' },
                ].map(f => (
                  <div key={f.key} className="jc-fact">
                    <span>{f.key}</span>
                    <strong>{f.val}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* ── RECOGNITION ──────────────────────────────────── */}
      <Fade>
        <div className="recognition-section container">
          <span className="label">Scale & Significance</span>
          <h2 className="section-title">The Jathara <span>Today</span></h2>
          <div className="rule" />
          <div className="rec-grid">
            {[
              { n: '~3 Crore',   t: 'Devotees Attended',       d: 'Estimated attendance at the 2026 Maha Jathara over four days' },
              { n: 'World #1',   t: 'Tribal Congregation',     d: 'Recognised as the largest recurring tribal religious gathering on Earth' },
              { n: '₹250 Cr+',  t: 'Government Investment',   d: 'Infrastructure, roads, medical, sanitation and facilities for Maha Jathara 2026' },
              { n: '5+ States',  t: 'Devotees Travel From',    d: 'Telangana, Andhra Pradesh, Chhattisgarh, Maharashtra, Odisha and more' },
            ].map(r => (
              <div key={r.n} className="rec-card">
                <span className="rec-num">{r.n}</span>
                <h4  className="rec-title">{r.t}</h4>
                <p   className="rec-desc">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* ── CTA ──────────────────────────────────────────── */}
      <Fade>
        <div className="hist-cta">
          <div className="container">
            <p className="cta-prompt">Continue exploring the Jathara</p>
            <div className="cta-btns">
              <Link to="/traditions" className="btn-primary">Sacred Traditions</Link>
              <Link to="/guide"      className="btn-outline">Visitor's Guide</Link>
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
