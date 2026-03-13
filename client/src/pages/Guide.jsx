import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Guide.css';

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

const ROUTES = [
  {
    from:     'Hyderabad',
    distance: '~240–259 km',
    duration: '5–6 hours by road',
    method:   'Road / Bus',
    note:     'TGSRTC operates 4,000+ special buses during the festival from all major bus stands in Hyderabad. Private cabs and vehicles also available.',
    icon:     '🚌',
  },
  {
    from:     'Warangal',
    distance: '~90–95 km',
    duration: '2–3 hours by road',
    method:   'Road / Bus',
    note:     'Nearest major city. Frequent buses from Warangal bus stand. This is the most popular route for devotees.',
    icon:     '🚎',
  },
  {
    from:     'Mulugu',
    distance: '~25 km',
    duration: '45 minutes by road',
    method:   'Road',
    note:     'Nearest district headquarters to Medaram. Local autos and shared vehicles connect regularly during the festival period.',
    icon:     '🚗',
  },
  {
    from:     'By Air',
    distance: 'Hyderabad (RGIA)',
    duration: 'Fly to Hyderabad, then road',
    method:   'Air + Road',
    note:     'Rajiv Gandhi International Airport, Hyderabad is the nearest airport. Then take a bus or hire a taxi to Medaram.',
    icon:     '✈️',
  },
];

const WHAT_TO_CARRY = [
  { icon: '💧', item: 'Water Bottles',     tip: 'Carry sufficient water; additional water stations are set up along the routes' },
  { icon: '👟', item: 'Comfortable Footwear', tip: 'You will walk several kilometres; wear sturdy, comfortable shoes' },
  { icon: '🧴', item: 'Sunscreen & Towel', tip: 'The festival grounds can be extremely hot; protect yourself from the sun' },
  { icon: '💊', item: 'Basic Medicines',   tip: 'Carry personal medicines, ORS packets and a basic first-aid kit' },
  { icon: '📱', item: 'Charged Phone',     tip: 'Keep emergency contacts saved; network can be congested during peak hours' },
  { icon: '💰', item: 'Cash',              tip: 'Most stalls accept only cash; ATMs can be overwhelmed during the festival' },
  { icon: '🎋', item: 'Jaggery (Bellam)',  tip: 'Purchase jaggery to offer at the altars — it can be bought at the festival grounds' },
  { icon: '🧺', item: 'Light Bag',         tip: 'Carry only essentials in a small bag; large luggage is impractical in the crowds' },
];

const DOS = [
  'Arrive early — crowds build up rapidly after sunrise on Day 3 (Maha Darshan)',
  'Follow the guidance of security personnel and festival volunteers',
  'Maintain silence and decorum near the altars (Gaddelu)',
  'Take the holy dip in Jampanna Vagu early in the morning to avoid long queues',
  'Respect tribal customs and rituals — observe without interfering',
  'Use designated waste bins to keep the forest environment clean',
  'Register your visit on the official Medaram Jathara mobile app for assistance',
  'Carry a printed copy of accommodation details and emergency contacts',
];

const DONTS = [
  'Do not bring plastic bags or single-use plastics — eco-friendly measures are enforced',
  'Do not photograph rituals or tribal priests without permission',
  'Do not crowd or push near the altars during processions',
  'Do not consume alcohol or carry it onto the festival grounds',
  'Do not litter in the forest or near the Jampanna Vagu',
  'Do not leave children unattended — crowds can be overwhelming',
  'Do not bring large vehicles into the inner perimeter during peak hours',
  'Do not ignore medical symptoms — use the free medical camps set up by the government',
];

const FACILITIES = [
  { icon: '🏕️', title: 'Accommodation',       desc: 'Temporary shelters and dormitories are set up by the Telangana government. Book in advance via the official website. Hotels in Mulugu and Warangal fill up quickly.' },
  { icon: '🍽️', title: 'Food & Water',         desc: 'Numerous food stalls serve traditional tribal cuisine and standard fare. The government sets up free water stations and community kitchens (langar) at regular intervals.' },
  { icon: '🏥', title: 'Medical Services',     desc: '42,000+ personnel are deployed. Medical camps, ambulances and bike ambulances are positioned throughout the festival area. First-aid posts are available along all major routes.' },
  { icon: '🚔', title: 'Security',             desc: 'Large-scale security arrangements with police, home guards and volunteers. The festival has a dedicated control room and WhatsApp helpline for emergencies.' },
  { icon: '🚽', title: 'Sanitation',           desc: 'Thousands of temporary sanitation facilities are set up. Cleanliness drives are conducted twice daily. Soap and hygiene kits are distributed at entry points.' },
  { icon: '📡', title: 'Connectivity',         desc: 'An official mobile app, website and WhatsApp chatbot provide real-time information on routes, crowd levels, weather and facilities during the festival.' },
];

export default function Guide() {
  return (
    <div className="guide-page page-wrapper">

      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <section className="page-hero page-hero--guide">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-label">Practical Information</span>
          <h1 className="page-hero-title">Visitor's<br /><span>Guide</span></h1>
          <p className="page-hero-desc">
            Everything you need to plan a safe, comfortable and spiritually fulfilling 
            pilgrimage to the Medaram Jathara.
          </p>
        </div>
      </section>

      {/* ── QUICK FACTS ────────────────────────────────────── */}
      <FadeSection className="guide-quickfacts container">
        <div className="quickfacts-grid">
          {[
            { icon: '📅', label: 'Frequency', value: 'Once every 2 years' },
            { icon: '🗓️', label: 'Month', value: 'Magha (January–February)' },
            { icon: '🌕', label: 'Day', value: 'Full Moon (Purnima) period' },
            { icon: '⏱️', label: 'Duration', value: '4 days' },
            { icon: '📍', label: 'District', value: 'Mulugu, Telangana' },
            { icon: '🌲', label: 'Setting', value: 'Eturnagaram Forest' },
          ].map(f => (
            <div key={f.label} className="quickfact">
              <span className="qf-icon">{f.icon}</span>
              <div>
                <span className="qf-label">{f.label}</span>
                <strong className="qf-value">{f.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── HOW TO REACH ───────────────────────────────────── */}
      <FadeSection className="guide-routes container">
        <span className="section-label">Getting There</span>
        <h2 className="section-title">How to <span>Reach Medaram</span></h2>
        <div className="divider-gold" />
        <div className="routes-grid">
          {ROUTES.map(r => (
            <div key={r.from} className="route-card">
              <div className="route-header">
                <span className="route-icon">{r.icon}</span>
                <div>
                  <h3 className="route-from">From {r.from}</h3>
                  <span className="route-method">{r.method}</span>
                </div>
              </div>
              <div className="route-stats">
                <div><span>Distance</span><strong>{r.distance}</strong></div>
                <div><span>Duration</span><strong>{r.duration}</strong></div>
              </div>
              <p className="route-note">{r.note}</p>
            </div>
          ))}
        </div>
        <div className="bus-note">
          <span>🚌</span>
          <p>
            <strong>TGSRTC Special Buses:</strong> During the Jathara, TGSRTC deploys 4,000+ special buses 
            with 52 bus pick-up points across Telangana, operating directly to Medaram from all 
            major towns. Check the official TGSRTC website or the Medaram Jathara app for schedules.
          </p>
        </div>
      </FadeSection>

      {/* ── WHAT TO CARRY ──────────────────────────────────── */}
      <FadeSection className="guide-carry container">
        <div className="carry-header">
          <span className="section-label">Packing List</span>
          <h2 className="section-title">What to <span>Carry</span></h2>
          <div className="divider-gold" />
        </div>
        <div className="carry-grid">
          {WHAT_TO_CARRY.map(c => (
            <div key={c.item} className="carry-card">
              <span className="carry-icon">{c.icon}</span>
              <div>
                <h4 className="carry-item">{c.item}</h4>
                <p className="carry-tip">{c.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── DO'S AND DONT'S ────────────────────────────────── */}
      <FadeSection className="guide-rules container">
        <div className="rules-header">
          <span className="section-label">Etiquette</span>
          <h2 className="section-title">Do's & <span>Don'ts</span></h2>
          <div className="divider-gold" />
        </div>
        <div className="rules-grid">
          <div className="rules-col rules-col--do">
            <div className="rules-col-header">
              <span>✅</span>
              <h3>Do's</h3>
            </div>
            <ul>
              {DOS.map((d, i) => (
                <li key={i}>
                  <span className="rule-bullet">→</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rules-col rules-col--dont">
            <div className="rules-col-header">
              <span>❌</span>
              <h3>Don'ts</h3>
            </div>
            <ul>
              {DONTS.map((d, i) => (
                <li key={i}>
                  <span className="rule-bullet">✕</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeSection>

      {/* ── FACILITIES ─────────────────────────────────────── */}
      <FadeSection className="guide-facilities container">
        <div className="fac-header">
          <span className="section-label">On-Site Services</span>
          <h2 className="section-title">Festival <span>Facilities</span></h2>
          <div className="divider-gold center" />
        </div>
        <div className="fac-grid">
          {FACILITIES.map(f => (
            <div key={f.title} className="fac-card">
              <span className="fac-icon">{f.icon}</span>
              <h3 className="fac-title">{f.title}</h3>
              <p className="fac-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── EMERGENCY ──────────────────────────────────────── */}
      <FadeSection className="guide-emergency container">
        <div className="emergency-card">
          <div className="emergency-header">
            <span>🆘</span>
            <h3>Emergency Contacts</h3>
          </div>
          <div className="emergency-grid">
            {[
              { label: 'Police Helpline',        number: '100' },
              { label: 'Medical Emergency',      number: '108' },
              { label: 'Festival Control Room',  number: '1800-599-4977' },
              { label: 'TGSRTC Helpline',        number: '040-69440000' },
            ].map(e => (
              <div key={e.label} className="emergency-item">
                <span className="em-label">{e.label}</span>
                <a href={`tel:${e.number}`} className="em-number">{e.number}</a>
              </div>
            ))}
          </div>
          <p className="emergency-note">
            ⚠️ The official Medaram Jathara mobile app provides real-time emergency assistance, 
            crowd density maps and navigation support during the festival period.
          </p>
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
