import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Traditions.css';

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

const DETAILED_DAYS = [
  {
    dayLabel: 'Day One',
    title: 'The Arrival of Saralamma',
    subsections: [
      {
        subtitle: 'Sacred Purification at Kannepalli',
        text: "At the village of Kannepalli, Kaka clan priests initiate Day 1 with Manda Melige. This preparatory ritual involves purifying the sanctum with sacred soil and installing a bamboo flagstaff. To ward off evil spirits, they hang a rooster at the village entrance, ensuring a sanctified space before Saralamma's grand departure.",
        img: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Secret Rites and Divine Possession',
        text: 'The Kannepalli temple then closes for "secret" prayers. Chief priest Kaka Saraiah and Koya Vaddes use sacred vermilion and turmeric pots to petition for community well-being. During these confidential rites, the priest enters a spiritual trance, becoming possessed by Goddess Saralamma while the public waits outside in high anticipation.',
        img: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The journey from Kannepalli',
        text: "By evening, the priest emerges carrying the goddess's insignia under a ceremonial umbrella. Following a grand Aarti by Kannepalli villagers, the procession moves rapidly toward Medaram. Devotees, including yellow-clad Shivasatties, offer jaggery and prostrate themselves on the ground, seeking blessings as the goddess travels toward the Jampanna Vagu.",
        img: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Holy Dip of Purification',
        text: 'Before reaching the sacred altars, millions of devotees gather at Jampanna Vagu to take a holy dip. This ritual bath is a mandatory act of purification, believed to wash away sins and cure physical ailments. The stream serves as the spiritual gateway, cleansing the pilgrims before they enter the presence of the goddesses.',
        img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Legend of Sacrifice',
        text: 'The stream is named after Jampanna, the son of Sammakka, who died here fighting the Kakatiya army. Tribal lore says the water turned red with his blood, and today, devotees believe the stream carries his heroic spirit. Pilgrims offer prayers to honor his sacrifice, acknowledging the deep ancestral roots of the tribal resistance',
        img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Crossing the Jampanna Vagu',
        text: 'As the procession arrives from Kannepalli, the possessed priest carries the goddess\'s insignia through the water. This crossing is a moment of intense fervor; women specifically devoted to this practice for children often sprinkle the "sacred" water on themselves, seeking a final blessing before the goddess is seated at the Medaram altars.',
        img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Groom\'s Departure from Punugondla',
        text: 'From Punugondla village in Mahabubabad, Pagididda Raju begins his journey as a symbolic bridegroom. Dressed in festive attire, the deity is escorted by the Penaka clan priests. This "Shobha Yatra" marks the start of his 80-kilometer trek to Medaram to reunite with his consort, the Goddess Sammakka.',
        img: 'https://images.unsplash.com/photo-1604028383870-1376e1a062cf?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Sacred Trek and Insignia',
        text: 'The Penaka Vaddes carry the sacred insignia, including the ceremonial flag and Aderalu pots, entirely on foot. Amidst rhythmic tribal drumbeats and traditional dances, the procession travels through dense forests. This arduous walk reflects the deep ancestral devotion of the Koya people, honoring the historical journey of their warrior chieftain.',
        img: 'https://images.unsplash.com/photo-1604028383870-1376e1a062cf?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Arrival and Vagu Crossing',
        text: "On the evening of Day 1, the procession reaches Medaram. Before being installed on the Gaddelu, the deity's symbols are carried across the Jampanna Vagu stream. This arrival signals the official start of the divine family reunion, where thousands of devotees celebrate the groom's return before the grand festival begins.",
        img: 'https://images.unsplash.com/photo-1604028383870-1376e1a062cf?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Journey of Govindaraju',
        text: 'Govindarraju, the husband of Saralamma, begins his sacred journey from the village of Kondai. Koya priests carry his traditional insignia through the forest, accompanied by the rhythmic beating of Dolu drums and tribal dances. This trek signifies his loyal journey to reunite with the divine family at Medaram.',
        img: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Arrival and Divine Reunion',
        text: 'Upon reaching Medaram, Govindarraju\'s symbols are carried across the Jampanna Vagu for purification. He is then installed on his designated Gaddelu (altar) alongside the other deities. His arrival is a vital part of the divine reunion, representing the bravery of the warriors who fought alongside Sammakka and Saralamma.',
        img: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    dayLabel: 'Day Two',
    title: 'The Arrival of Sammakka',
    subsections: [
      {
        subtitle: 'The Divine Manifestation of Sammakka',
        text: 'Before anything else, it must be understood what exactly rests on that hill. The tribe went into the forest to search for Sammakka after the battle and found a box with kumkum, a few bangles, and tiger footprints at the very spot where she had last been seen.  This sacred vermillion casket known as the Kumkuma Bharina is recognized as the goddess herself. Unlike mainstream traditions, there is no sculpted idol because Sammakka exists as a bamboo stick smeared with vermillion. She remains in a raw and formless state within a cave on the Chilakalagutta hillock where she stays untouched for two full years between festivals.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Secret Sanctuary of the Sorangam',
        text: 'The goddess does not reside on the mountain peak or in an open area but instead rests deep within the belly of the hill. A specific underground passage known as the Sorangam extends two hundred metres into the earth to house the sacred vermillion casket. This tunnel serves as the precise location for Sammakka to dwell in her forest state until the next Jathara begins. This hidden sanctuary protects the divine presence from the outside world and maintains the spiritual purity of the site.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Sacred Awakening of Mande Melige',
        text: 'Mande Melige serves as a crucial precursor to the Jatara and is observed exactly a week before the presiding deities are ceremonially brought from the forest. The most distinctive element of this ritual involves three women and two men from the Siddaboina clan who clean the Sammakka temple at Medaram using water from Jampanna Vagu. They apply sacred anthill soil to the walls and decorate the premises with traditional muggulu. Within Koya animism, this anthill soil represents a living earth spirit where the underworld meets the surface. Smearing the temple walls with this soil is a significant act of invoking deep and primal earth energy into the sacred space.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Ritual Commencement and Spiritual Transition',
        text: 'Prayers begin amidst rhythmic drum beats as festivities continue throughout the entire night to set the main Jatara in motion. Following the conclusion of Mande Melige, the goddess is considered awoken and a week of intense spiritual buildup begins. This ceremony ensures that the sacred corridor between the forest hillock and Medaram is spiritually open for the upcoming divine transition.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Hereditary Duty of the Vadde',
        text: 'The eldest male member of the family, recognized as the Vadde, carries the sacred kumkum bharine representing Sammakka while adorned in traditional bells and belts. This spiritual responsibility is a hereditary honor because the Vadde is born into the role instead of being elected or trained by an institution. The bells and belts he wears during the procession act as sacred physical marks of his duty and are never worn as mere ornaments outside of this specific ritual timeframe.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },

      {
        subtitle: 'The Sacred Installation of the Vanam',
        text: 'On the second day of the Jathara, tall bamboo poles known as Vanams are formally installed on the Gaddelu altars to represent the forest from which the deities emerge. Following special rituals, tribal priests carry these poles to the shrine to prepare for the arrival of Goddess Sammakka from the Chilakalagutta hills. This bamboo installation is not merely a symbol because it is revered as the goddess herself standing at the threshold of her throne before her physical arrival. The previously bare Gadde is considered spiritually alive the moment the Vanam is planted into the sacred ground.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },{
        subtitle: 'The Twilight Trek to Chilakalagutta',
        text: 'The ritualistic journey begins at 4 PM as the Vaddelu priests trek to Chilakalagutta hill during the daylight hours. After performing secret cave rituals through dusk, the priests eventually descend the hill in darkness as part of a precise and intentional schedule. At the exact moment the priests emerge from the forest carrying the sacred casket, the Superintendent of Police fires gunshots into the air to signal the official commencement of her arrival. This return occurs during the night to maintain the sacred nature of her divine transition, echoing the mystery of her original disappearance into the forest.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
      subtitle: 'The Purpose of the Dolus Drums',
        text: 'Kettledrums called Dolus represent the central instrument of Koya tribal worship and are played with deep intentionality rather than for mere aesthetics. Their powerful thundering beat combined with the firing of weapons serves the dual purpose of scaring off tigers that inhabit the Eturnagaram Wildlife Sanctuary and announcing the priests\' entry into sacred territory to the spiritual world.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
      subtitle: 'Arriving at the Medaram Gate: Paada Prakshaalanam',
        text: 'The very first ritual the moment the procession crosses into Medaram is deeply intimate. Upon arrival at the Medaram gate, local women followed the tradition of washing the feet of the priests carrying Sammakka. This is called Paada Prakshaalanam — foot washing. Since the Vadde priest is in a trance and is considered to be Sammakka herself in that moment, washing his feet is washing the goddess\'s feet. Local women of Medaram kneel and pour water over the feet of the trance-possessed priest as he walks through the village gate. It is one of the most ancient and emotionally charged moments of the entire four days.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
      subtitle: 'The Chelapaiah Temple Stop (Mid-Procession Ritual Halt)',
        text: 'Before the goddess even reaches the main Gadde, the procession makes a mandatory ritual halt. Before reaching the main altar, the procession stopped at the Chelapaiah temple for special rituals. The Chelapaiah temple is a small, ancient shrine on the route considered a sacred threshold that must be honoured before Sammakka can formally take her seat. The priests perform a brief but essential puja here, seeking permission and blessing from the presiding spirit of that shrine to allow the goddess to pass through and be installed. Only after these rites are completed does the procession move to the Gadde.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
      subtitle: 'The Edurukollu (The Mass Welcome Sacrifice Along the Route)',
        text: 'Throughout the entire 1.5 km procession route inside Medaram, a wave of offering unfolds ahead of the arriving goddess. Hundreds of live sheep and chickens were offered as Edurukollu — welcome sacrifices. Odi Biyyam (sacred rice) was showered on the deity, while the ground was decorated with intricate patterns of turmeric and vermilion. The air was filled with sounds from the Koya tribal drums amid the spiritual trances of Shivasattulu. ',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
      subtitle: 'The Power Blackout at the Final Installation',
        text: 'One of the most extraordinary moments of the night. For security reasons, the power supply to the immediate altar area was briefly cut during the final installation of the deity. The supply was restored only after Sammakka was securely placed. In absolute darkness, surrounded by millions of waiting devotees, the Siddaboina Vadde approaches the Gadde and plants the Vanam(the sacred bamboo) and places the Kumkuma Bharina at the altar. Sammakka arrives in darkness, just as she once vanished into the forest in darkness. The moment the installation is complete, power is restored, and the entire sacred space floods with light and sound.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
      subtitle: 'The Divine Reunion at the Gadde',
        text: 'The moment Sammakka is installed, something profound is complete. With her arrival, all four major tribal deities — Sammakka, her daughter Saralamma, husband Pagididda Raju, and son-in-law Govinda Raju  were seen seated on their respective Gaddelu. The entire family that died together in battle against the Kakatiyas is now reunited on the Gadde. This is the spiritual heart of the Jatara — not a temple ceremony, but a family coming home.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    dayLabel: 'Day Three',
    title: 'Maha Darshan',
    subsections: [
      {
        subtitle: 'The Convergence of Millions',
        text: 'With all four presences together on the Gaddelu, the third day marks the peak of the festival. Millions of devotees from across India gather in a massive display of shared faith, creating a temporary city deeply rooted in spiritual harmony.',
        img: 'https://images.unsplash.com/photo-1615485981504-2081f2b6e511?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Bangaram Offering',
        text: 'Devotees present jaggery, known locally as Bangaram, often equal to their own body weight. Women also offer Odi Biyyam and other necessary daily items. This sustainable and nature based offering reflects deep traditional wisdom, prioritizing natural forest resources over material wealth.',
        img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Taking the Holy Dip',
        text: 'Millions take a purifying bath in the Jampanna Vagu. Scientifically the red color of the water is attributed to the soil composition, but devotees believe the water reminds them of the sacrifice of their warrior ancestors and induces courage into their souls.',
        img: 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    dayLabel: 'Day Four',
    title: 'The Sacred Return',
    subsections: [
      {
        subtitle: 'Vana Pravesham',
        text: 'The final day is a solemn occasion known as Vana Pravesham. After being worshipped by millions, the deities return to the forest. The atmosphere transitions from celebratory to a quiet and reflective reverence.',
        img: 'https://images.unsplash.com/photo-1418065460487-3e41a6c8e15f?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Farewell Rituals',
        text: 'The Koya priests carefully carry the deity caskets back into the forest. The exact same security and official homage they received upon arriving at the platform are respectfully paid to the Goddesses as they return to their sanctuaries.',
        img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'A Legacy of Sustainability',
        text: 'As the crowds disperse, the underlying principles of the Jathara remain clear. The use of bamboo, earthen altars, and natural offerings aligns perfectly with concepts of ecological balance, showcasing a lived example of sustainable development and indigenous knowledge.',
        img: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

export default function Traditions() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeDay = DETAILED_DAYS[activeDayIndex];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleDaySelect(index) {
    setActiveDayIndex(index);
    setDropdownOpen(false);
  }

  return (
    <div className="traditions-page page-wrapper">

      <section className="page-hero">
        <div className="page-hero-accent" />
        <div className="page-hero-content container">
          <span className="label label--white">Customs & Sacred Practices</span>
          <h1 className="page-hero-title">
            Traditions of<br /><span>Medaram Jathara</span>
          </h1>
          <p className="page-hero-desc">
            The rituals have been shaped entirely by the Koya tribal community 
            over centuries. They are documented here with care and respect for those who 
            hold them as a living and sacred part of their heritage.
          </p>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────── */}
      <Fade>
        <div className="trad-intro container">
          <div className="trad-intro-inner">
            <span className="label">What Makes This Festival Unique</span>
            <h2 className="section-title">A Purely Indigenous <span>Tradition</span></h2>
            <div className="rule" />
            <div className="trad-intro-cols">
              <p>
                The Sammakka Saralamma Jathara stands apart from most major Indian festivals 
                in one important respect. Every aspect of its ritual practice is shaped and led 
                entirely by the Koya tribal community. There are no Vedic hymns, no Brahmin 
                priests, and no Sanskrit mantras.
              </p>
              <p>
                This makes it a significant surviving example of pre Vedic Adivasi spirituality. 
                It is a tradition that has remained in the hands of the community it belongs to, 
                deeply intertwined with ancient knowledge systems and a profound respect for the natural world.
              </p>
            </div>
          </div>
        </div>
      </Fade>

      {/* ── GADDELU EXPLANATION ──────────────────────────── */}
      <Fade>
        <div className="gaddelu-section">
          <div className="container">
            <span className="label">The Sacred Altars</span>
            <h2 className="section-title">Understanding the <span>Gaddelu</span></h2>
            <div className="rule" />
            
            <div className="gadde-explanation">
              <div className="gadde-text-content">
                <h3>What is a Gadde?</h3>
                <p>
                  In the Koya tradition, a Gadde is a sacred earthen platform or altar. 
                  Unlike the towering stone temples found in mainstream traditions, a Gadde is built 
                  using natural and locally sourced materials such as earth and bamboo. This practice 
                  directly reflects a harmonious and sustainable relationship with the forest.
                </p>
                <p>
                  Two weeks before the gathering begins, these altars are meticulously reconstructed, 
                  purified, and adorned with fresh garments by the tribal priests. There are four 
                  distinct Gaddelu at the Medaram festival grounds, each dedicated to a specific 
                  honored figure.
                </p>
              </div>
            </div>

            <div className="gaddelu-clean-list">
              <div className="gadde-clean-card">
                <div className="gadde-clean-header">
                  <h4>Sammakka</h4>
                </div>
                <p>The principal goddess, who descends from the dense forests of the Chilakalagutta hillock.</p>
              </div>
              <div className="gadde-clean-card">
                <div className="gadde-clean-header">
                  <h4>Saralamma</h4>
                </div>
                <p>Arrives via a sacred procession from Kannepalli village, crossing the Jampanna Vagu stream.</p>
              </div>
              <div className="gadde-clean-card">
                <div className="gadde-clean-header">
                  <h4>Pagididda Raju</h4>
                </div>
                <p>The insignia of the tribal leader is carried faithfully from Punugondla village.</p>
              </div>
              <div className="gadde-clean-card">
                <div className="gadde-clean-header">
                  <h4>Govindaraju</h4>
                </div>
                <p>Arrives from Kondayi village, completing the spiritual gathering at the altars.</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* ── DETAILED FOUR DAYS (DROPDOWN) ──────────────── */}
      <div className="detailed-days-section container">
        <Fade>
          <div className="days-header-wrapper">
            <span className="label">Festival Programme</span>
            <h2 className="section-title">Four Days of <span>Sacred Observance</span></h2>
            <div className="rule" />
            <p className="days-intro">
              The festival unfolds over four distinct days. Each day is marked by specific rituals, 
              processions, and profound expressions of faith that draw millions into the heart of the forest.
            </p>
          </div>
        </Fade>

        {/* Day Selector Dropdown */}
        <Fade>
          <div className="day-selector-wrapper">
            <div className="day-dropdown" ref={dropdownRef}>
              <button
                className={`day-dropdown-trigger ${dropdownOpen ? 'open' : ''}`}
                onClick={() => setDropdownOpen(prev => !prev)}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                <span className="day-dropdown-badge">{activeDay.dayLabel}</span>
                <span className="day-dropdown-title">{activeDay.title}</span>
                <span className="day-dropdown-chevron">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {dropdownOpen && (
                <ul className="day-dropdown-menu" role="listbox">
                  {DETAILED_DAYS.map((day, index) => (
                    <li
                      key={index}
                      role="option"
                      aria-selected={activeDayIndex === index}
                      className={`day-dropdown-item ${activeDayIndex === index ? 'active' : ''}`}
                      onClick={() => handleDaySelect(index)}
                    >
                      <span className="day-dropdown-item-badge">{day.dayLabel}</span>
                      <span className="day-dropdown-item-title">{day.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Step dots */}
            <div className="day-step-dots">
              {DETAILED_DAYS.map((_, index) => (
                <button
                  key={index}
                  className={`day-step-dot ${activeDayIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveDayIndex(index)}
                  aria-label={DETAILED_DAYS[index].dayLabel}
                />
              ))}
            </div>
          </div>
        </Fade>

        {/* Active Day Content */}
        <div className="days-vertical-list">
          <Fade key={activeDayIndex} className="day-horizontal-block">
            <div className="day-main-header">
              <span className="day-badge">{activeDay.dayLabel}</span>
              <h3>{activeDay.title}</h3>
            </div>

            <div className="day-subsections">
              {activeDay.subsections.map((sub, subIndex) => (
                <div key={subIndex} className="subsection-row">
                  <div className="subsection-text">
                    <h4>{sub.subtitle}</h4>
                    <p>{sub.text}</p>
                  </div>
                  <div className="subsection-image-wrapper">
                    <img src={sub.img} alt={sub.subtitle} className="placeholder-img" />
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>

        {/* Prev / Next navigation */}
        <div className="day-nav-arrows">
          <button
            className="day-nav-btn"
            onClick={() => setActiveDayIndex(i => Math.max(0, i - 1))}
            disabled={activeDayIndex === 0}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous Day
          </button>
          <button
            className="day-nav-btn"
            onClick={() => setActiveDayIndex(i => Math.min(DETAILED_DAYS.length - 1, i + 1))}
            disabled={activeDayIndex === DETAILED_DAYS.length - 1}
          >
            Next Day
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── COMMUNAL HARMONY ─────────────────────────────── */}
      <Fade>
        <div className="harmony-section container">
          <div className="harmony-card">
            <div className="harmony-icon">🤝</div>
            <div className="harmony-text">
              <h3>A Gathering That Transcends Community</h3>
              <p>
                While the tradition is rooted in the Koya tribal heritage, it has always 
                welcomed people from all backgrounds. Devotees from Telangana, Andhra Pradesh, 
                Chhattisgarh, Maharashtra, Odisha, Karnataka, Jharkhand, and beyond travel 
                to Medaram as pilgrims.
              </p>
              <p>
                This openness reflects the message at the heart of the gathering. The values 
                of fairness, resilience, and care for one's community resonate with people 
                well beyond the tribal community it originated in.
              </p>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="hist-cta">
          <div className="container">
            <p className="cta-prompt">Continue exploring</p>
            <div className="cta-btns">
              <Link to="/gallery" className="btn-primary">View Gallery</Link>
              <Link to="/guide"   className="btn-outline">Visitor's Guide</Link>
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
