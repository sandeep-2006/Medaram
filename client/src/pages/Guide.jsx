import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Guide.css';

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

const ROUTES = [
  { from:'Hyderabad',   dist:'~240–260 km', time:'5–6 hrs by road',  how:'Road / TGSRTC Bus', note:'TGSRTC operates 4,000+ special buses during the Jathara from all major bus stands in Hyderabad. Rajiv Gandhi International Airport is here for those arriving by air.', icon:'🚌' },
  { from:'Warangal',    dist:'~90–95 km',   time:'2–3 hrs by road',  how:'Road / Local Bus',   note:'The nearest major city to Medaram. Regular bus services from Warangal MGBS bus stand. Many devotees use this as a base. Warangal railway station is well connected.', icon:'🚎' },
  { from:'Mulugu',      dist:'~25 km',      time:'~45 minutes',      how:'Local Road',          note:'The nearest district headquarters. Local autos, shared vehicles and state buses operate to Medaram. This is the last point of major services before the festival site.', icon:'🚗' },
  { from:'By Train',    dist:'Via Warangal',time:'Then road to venue',how:'Train + Bus/Road',   note:'Warangal Junction is the nearest major railway station. From there, take a bus or taxi to Medaram (~2–3 hrs). Kazipet Junction is another option.', icon:'🚆' },
];

const PACKING = [
  { icon:'💧', item:'Water & ORS',         tip:'Carry 2–3 litres of water per person. Government water stations are set up but can be crowded. ORS packets are helpful if you are walking long distances.' },
  { icon:'👟', item:'Comfortable Footwear', tip:'You will cover several kilometres on foot. Wear sturdy, well-broken-in shoes or sandals. Many devotees walk barefoot as an act of devotion — carry footwear regardless.' },
  { icon:'🧴', item:'Sun Protection',       tip:'The festival grounds are open to the sun. Carry sunscreen, a cap or scarf, and light full-sleeve clothing to protect yourself, particularly during midday hours.' },
  { icon:'💊', item:'Personal Medicines',   tip:'Carry any prescription medicines you need along with a basic first-aid kit. Government medical camps are available throughout the site, but be prepared.' },
  { icon:'📱', item:'Charged Phone',         tip:'Save all important contacts before you arrive. Keep a portable charger as power banks are useful — network can be congested during peak hours on Day 3.' },
  { icon:'💰', item:'Sufficient Cash',       tip:'Most stalls and services at the festival accept cash only. Carry more than you expect to need. ATMs in the area can be overwhelmed during the festival period.' },
  { icon:'🧺', item:'Light Backpack',        tip:'Carry only what you need — large bags are impractical in the dense crowds. Leave valuables at your accommodation if possible.' },
  { icon:'🎋', item:'Jaggery for Offering',  tip:'You can purchase jaggery at the festival grounds or at shops in Mulugu. If you plan to make the Bangaram offering, decide in advance how much you wish to carry.' },
];

const DOS = [
  'Arrive early — Day 3 (Maha Darshan) sees the largest crowds, so arriving by night or early morning is advisable',
  'Follow instructions from police personnel, volunteers, and festival marshals at all times',
  'Maintain respectful silence and decorum in the vicinity of the Gaddelu (altars) and during processions',
  'Approach the holy bath in Jampanna Vagu early in the morning to avoid long queues',
  'Observe the rituals and processions quietly and respectfully — these are active sacred events',
  'Use the designated waste disposal points to keep the forest environment clean',
  'Keep children, elderly family members, and those with health conditions close to you at all times',
  'Download the official Medaram Jathara app before you arrive for real-time navigation and assistance',
];

const DONTS = [
  'Do not bring plastic bags or single-use plastics onto the festival grounds — eco-friendly rules are enforced',
  'Do not photograph rituals, priests, or sacred proceedings without permission from those involved',
  'Do not push or rush near the altars or during processions — patience is both respectful and safer',
  'Do not bring alcohol onto the festival grounds',
  'Do not litter anywhere — particularly near the Jampanna Vagu and the forest areas',
  'Do not leave children or elderly family members unattended in the crowd',
  'Do not drive personal vehicles into restricted inner areas during peak crowd hours',
  'Do not ignore signs of heat exhaustion or dehydration — seek help at medical camps promptly',
];

const FACILITIES = [
  { icon:'🏕️', t:'Accommodation',     d:'Government dormitories and temporary shelters are set up near the festival site. Space is limited — plan ahead. Hotels and homestays in Mulugu and Warangal should be booked well in advance.' },
  { icon:'🍽️', t:'Food & Water',       d:'Numerous food stalls serve vegetarian and non-vegetarian food. Community kitchens (langar) are operated by various organisations offering free meals. Government water stations are positioned throughout.' },
  { icon:'🏥', t:'Medical Services',   d:'Medical camps staffed by doctors and paramedics are set up throughout the festival area. Ambulances and motorcycle ambulances are deployed. There is no charge for government medical services during the Jathara.' },
  { icon:'🚔', t:'Security',           d:'Large-scale police and security arrangements are in place. A dedicated control room operates round-the-clock. A WhatsApp helpline is available for lost persons and emergencies.' },
  { icon:'🚽', t:'Sanitation',         d:'Thousands of temporary toilet facilities are installed. Sanitation drives are conducted regularly. Soap and hygiene kits are distributed at entry points to the festival site.' },
  { icon:'📡', t:'Information',        d:'The official Medaram Jathara mobile app provides real-time route guidance, crowd density maps, weather updates, and facility locations. A government website is also operational during the festival.' },
];

export default function Guide() {
  return (
    <div className="guide-page page-wrapper">

      <section className="page-hero">
        <div className="page-hero-accent" />
        <div className="page-hero-content container">
          <span className="label label--white">Practical Information</span>
          <h1 className="page-hero-title">
            Visitor's<br /><span>Guide</span>
          </h1>
          <p className="page-hero-desc">
            All the practical information you need to plan a safe and meaningful 
            pilgrimage to the Medaram Jathara — routes, transport, facilities, 
            etiquette, and emergency contacts.
          </p>
        </div>
      </section>

      {/* ── QUICK FACTS ──────────────────────────────────── */}
      <Fade>
        <div className="qf-section container">
          <div className="qf-grid">
            {[
              { icon:'📅', l:'Frequency',  v:'Every two years' },
              { icon:'🌕', l:'Timing',     v:'Magha Purnima (full moon)' },
              { icon:'🗓️', l:'Month',      v:'January – February' },
              { icon:'⏱️', l:'Duration',   v:'Four days' },
              { icon:'📍', l:'District',   v:'Mulugu, Telangana' },
              { icon:'🌲', l:'Setting',    v:'Eturnagaram Forest' },
            ].map(f => (
              <div key={f.l} className="qf-item">
                <span className="qf-icon">{f.icon}</span>
                <div>
                  <span className="qf-label">{f.l}</span>
                  <strong className="qf-value">{f.v}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* ── ROUTES ───────────────────────────────────────── */}
      <Fade>
        <div className="routes-section container">
          <span className="label">Getting There</span>
          <h2 className="section-title">How to <span>Reach Medaram</span></h2>
          <div className="rule" />
          <div className="routes-grid">
            {ROUTES.map(r => (
              <div key={r.from} className="route-card">
                <div className="route-top">
                  <span className="route-icon">{r.icon}</span>
                  <div>
                    <h3 className="route-from">From {r.from}</h3>
                    <span className="route-mode">{r.how}</span>
                  </div>
                </div>
                <div className="route-meta">
                  <div><span>Distance</span><strong>{r.dist}</strong></div>
                  <div><span>Travel time</span><strong>{r.time}</strong></div>
                </div>
                <p className="route-note">{r.note}</p>
              </div>
            ))}
          </div>
          <div className="bus-callout">
            <span>🚌</span>
            <p>
              <strong>TGSRTC Special Services:</strong> During the Jathara, the Telangana State Road 
              Transport Corporation operates over 4,000 special buses with 52 dedicated pick-up 
              points across Telangana, running directly to Medaram. Check the TGSRTC website or the 
              official Medaram Jathara app for current schedules and booking.
            </p>
          </div>
        </div>
      </Fade>

      {/* ── PACKING LIST ─────────────────────────────────── */}
      <Fade>
        <div className="packing-section container">
          <span className="label">Preparation</span>
          <h2 className="section-title">What to <span>Bring</span></h2>
          <div className="rule" />
          <div className="packing-grid">
            {PACKING.map(p => (
              <div key={p.item} className="pack-card">
                <span className="pack-icon">{p.icon}</span>
                <div>
                  <h4 className="pack-item">{p.item}</h4>
                  <p  className="pack-tip">{p.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* ── DOS AND DONTS ─────────────────────────────────── */}
      <Fade>
        <div className="rules-section container">
          <span className="label">Etiquette & Safety</span>
          <h2 className="section-title">Guidance for <span>Visitors</span></h2>
          <div className="rule" />
          <div className="rules-grid">
            <div className="rules-col rules-col--do">
              <div className="rules-col-head">
                <span>✅</span>
                <h3>Please Do</h3>
              </div>
              <ul>
                {DOS.map((d, i) => (
                  <li key={i}><span className="rb rb--do">→</span>{d}</li>
                ))}
              </ul>
            </div>
            <div className="rules-col rules-col--dont">
              <div className="rules-col-head">
                <span>⚠️</span>
                <h3>Please Avoid</h3>
              </div>
              <ul>
                {DONTS.map((d, i) => (
                  <li key={i}><span className="rb rb--dont">✕</span>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade>

      {/* ── FACILITIES ───────────────────────────────────── */}
      <Fade>
        <div className="facilities-section">
          <div className="container">
            <span className="label">On-Site Services</span>
            <h2 className="section-title">Government <span>Facilities</span></h2>
            <div className="rule" />
            <div className="fac-grid">
              {FACILITIES.map(f => (
                <div key={f.t} className="fac-card">
                  <span className="fac-icon">{f.icon}</span>
                  <h3  className="fac-title">{f.t}</h3>
                  <p   className="fac-desc">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>

      {/* ── EMERGENCY ────────────────────────────────────── */}
      <Fade>
        <div className="emergency-section container">
          <div className="emergency-card">
            <div className="em-header">
              <span>🆘</span>
              <h3>Emergency Contacts</h3>
            </div>
            <div className="em-grid">
              {[
                { l:'Police Emergency',      n:'100'           },
                { l:'Medical Emergency',     n:'108'           },
                { l:'Festival Control Room', n:'1800-599-4977' },
                { l:'TGSRTC Helpline',       n:'040-69440000'  },
              ].map(e => (
                <div key={e.l} className="em-item">
                  <span className="em-label">{e.l}</span>
                  <a href={`tel:${e.n}`} className="em-num">{e.n}</a>
                </div>
              ))}
            </div>
            <p className="em-note">
              The official Medaram Jathara mobile app provides real-time emergency assistance, 
              crowd density updates and navigation support throughout the festival period. 
              Download it before you travel.
            </p>
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
