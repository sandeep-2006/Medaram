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
        text: "At Kannepalli, Kaka clan priests initiate the Jatara with Manda Melige — a ritual purifying the sanctum with sacred soil and installing a bamboo flagstaff. A rooster is hung at the village entrance to ward off evil spirits, ensuring the entire space is sanctified before Saralamma's ceremonial departure begins.",
        img: 'src/pages/Images/1_1.png'
      },
      {
        subtitle: 'Secret Rites and Divine Possession',
        text: 'The Kannepalli temple closes for secret prayers. Chief priest Kaka Saraiah and the Koya Vaddes use sacred vermilion and turmeric pots to petition for community wellbeing. During these confidential rites — performed away from the waiting public — the priest enters a deep trance, becoming possessed by Goddess Saralamma herself.',
        img: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The journey from Kannepalli',
        text: "By evening, the possessed priest emerges carrying the goddess's insignia under a ceremonial umbrella. Following a grand Aarti, the procession moves rapidly toward Medaram. Devotees — including yellow-clad Shivasatties — offer jaggery and prostrate themselves on the ground, seeking blessings as the goddess travels toward the sacred Jampanna Vagu.",
        img: 'src/pages/Images/1_3.png'
      },
      {
        subtitle: 'The Holy Dip of Purification',
        text: 'Before reaching the sacred altars, millions gather at Jampanna Vagu for a holy dip — a mandatory act of purification believed to wash away sins and cure physical ailments. The stream serves as the spiritual gateway, cleansing pilgrims before they enter the presence of the goddesses at Medaram.',
        img: 'src/pages/Images/1_4.jpg'
      },
      {
        subtitle: 'The Legend of Sacrifice',
        text: 'The stream is named after Jampanna — the son of Sammakka — who died fighting the Kakatiya army at this very spot. Tribal lore says the water turned red with his blood. Pilgrims offer prayers honoring his sacrifice, acknowledging the deep ancestral roots of the tribal resistance that gave rise to the Jatara.',
        img: 'src/pages/Images/1_5.jpg'
      },
      {
        subtitle: 'Crossing the Jampanna Vagu',
        text: "As the Kannepalli procession arrives, the possessed priest carries the goddess's insignia through the water. Women devoted to this practice — particularly those seeking blessings for children — sprinkle the sacred water on themselves. This crossing is a moment of intense fervor before the goddess is seated at the Medaram altars.",
        img: ''
      },
      {
        subtitle: 'The Groom\'s Departure from Punugondla',
        text: "From Punugondla village, Pagididda Raju begins his journey as a symbolic bridegroom. Dressed in festive attire, the deity is escorted by Penaka clan priests in a Shobha Yatra — a ceremonial procession marking the start of his 80-kilometre trek to Medaram to reunite with the Goddess Sammakka.",
        img: 'src/pages/Images/1_6.png'
      },
      {
        subtitle: 'The Sacred Trek and Insignia',
        text: 'Penaka Vaddes carry the sacred insignia — the ceremonial flag and Aderalu pots — entirely on foot through dense forests. Amidst rhythmic tribal drumbeats and traditional dances, the procession travels through the wilderness, reflecting the deep ancestral devotion of the Koya people honoring their warrior chieftain\'s historical journey.',
        img: 'https://images.unsplash.com/photo-1604028383870-1376e1a062cf?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Arrival and Vagu Crossing',
        text: "By evening of Day One, the procession reaches Medaram. Before being installed on the Gaddelu, the deity's symbols are carried across the Jampanna Vagu — a crossing that signals the official start of the divine family reunion. Thousands of devotees celebrate the groom's arrival as the grand festival begins.",
        img: 'https://images.unsplash.com/photo-1604028383870-1376e1a062cf?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Journey of Govindaraju',
        text: 'Govindaraju — the husband of Saralamma — begins his sacred journey from Kondai village. Koya priests carry his traditional insignia through the forest, accompanied by rhythmic Dolu drumbeats and tribal dances. This trek signifies his loyal journey to reunite with the divine family gathering at Medaram.',
        img: 'src/pages/Images/1_7.jpeg'
      },
      {
        subtitle: 'Arrival and Divine Reunion',
        text: "Upon reaching Medaram, Govindaraju's symbols are carried across the Jampanna Vagu for purification. He is installed on his designated Gaddelu alongside the other deities — representing the bravery of warriors who fought alongside Sammakka and Saralamma. His arrival completes the first phase of the sacred family's reunion.",
        img: 'src/pages/Images/1_8.jpg'
      }
    ]
  },
  {
    dayLabel: 'Day Two',
    title: 'The Arrival of Sammakka',
    subsections: [
      {
        subtitle: 'The Divine Manifestation of Sammakka',
        text: 'Unlike mainstream traditions, Sammakka has no sculpted idol. The tribe, searching for her after battle, found a box of kumkum, bangles, and tiger footprints — recognized immediately as the goddess herself. This sacred vermillion casket, the Kumkuma Bharina, rests as a bamboo stick smeared with vermillion inside a cave at Chilakalagutta hillock.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Secret Sanctuary of the Sorangam',
        text: 'Sammakka does not reside on the mountain peak but deep within the hill. A two-hundred-metre underground passage — the Sorangam — houses her sacred casket between festivals. This hidden sanctuary protects the divine presence and maintains the spiritual purity of the site during the two years between each Jatara.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Sacred Awakening of Mande Melige',
        text: 'Observed a week before the Jatara, Mande Melige involves three women and two men from the Siddaboina clan cleaning the Sammakka temple with Jampanna Vagu water. They apply sacred anthill soil to the walls — revered in Koya animism as a living earth spirit — and decorate with traditional muggulu patterns.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Ritual Commencement and Spiritual Transition',
        text: 'Prayers begin amidst rhythmic drumbeats, continuing through the night to set the Jatara in motion. Following Mande Melige, the goddess is considered awoken and a week of spiritual buildup begins. This ceremony ensures the sacred corridor between the forest hillock and Medaram — the path the deity must travel — is spiritually open.',
        img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Hereditary Duty of the Vadde',
        text: 'The eldest male of the Siddaboina family — recognized as the Vadde — carries the sacred kumkum bharine adorned in traditional bells and belts. This spiritual responsibility is hereditary, born into rather than trained for. The bells and belts worn during the procession are sacred marks of duty, never worn as ornaments outside this ritual.',
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
    ]
  },
  {
    dayLabel: 'Day Three',
    title: 'Maha Darshan',
    subsections: [
      {
        subtitle: 'The Sacred Power of Magha Suddha Pournami',
        text: 'Day Three falls on Magha Suddha Pournami — the full moon of the Magha month — considered the single most auspicious day of the Jatara. All four presences are now seated together on their Gaddelu, the sacred family is complete, and the spiritual current building since Day One reaches its absolute peak.',
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Punya Snanam — The Mandatory Purification',
        text: 'Before approaching the Gaddelu, every devotee must first take a Punya Snanam — a sacred bath in the Jampanna Vagu. The belief is absolute: no one stands before the Goddess without first purifying at the stream named after her martyred son. Millions fill the banks from the earliest hours of morning.',
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Varalau Pattatam — Prostrating the Entire Route',
        text: 'Devotees fulfilling a vow — particularly for a child, recovery from illness, or relief from hardship — prostrate flat on the ground across the entire route from Jampanna Vagu to the Gadde. They stretch out fully, mark their fingertip position, stand, step forward, and prostrate again — all the way to the altar.',
        img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Bangaram — Offering Jaggery as Gold',
        text: 'Bangaram means both gold and jaggery in the local tongue. Devotees offer jaggery equal to their own body weight — a substitute for actual gold rooted in forest community values. Weighing scales are kept beside the altars; the jaggery heaps at the feet of the Gaddelu by afternoon, vow after fulfilled vow.',
        img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Odi Biyyam — The Women\'s Sacred Rice Offering',
        text: 'Odi Biyyam is made exclusively by women. Raw rice mixed with turmeric is tied into the fold of a new cloth at the waist — carried against the body from home to the Gadde. Carrying it close throughout the journey is itself part of the offering. At the altar, the cloth is opened and the rice scattered before the deity.',
        img: 'https://images.unsplash.com/photo-1590417174435-4ef18eddbf4b?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Saare — Offering the Household to the Goddess',
        text: 'Alongside Odi Biyyam, women present a Saare — turmeric, kumkum, a mirror, a comb, bangles, betel leaves, and sacred rice. It is a literal placing of a woman\'s entire daily world before the Goddess, a statement that everything used to sustain the family is offered back to the one who protects it.',
        img: 'https://images.unsplash.com/photo-1590417174435-4ef18eddbf4b?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Goat Sacrifice — Asking Permission',
        text: 'Only those who specifically vowed a goat as their Mokku perform the sacrifice. The goat is adorned with turmeric and flowers, led around the Gadde, and offered alcohol. Then — in a gesture rooted in tribal ethics — the devotee formally asks the animal\'s permission. Only after a nod of acceptance is observed does the ritual proceed.',
        img: 'https://images.unsplash.com/photo-1615485981504-2081f2b6e511?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Shivasattulu and Pabba — Blessings for the Childless',
        text: 'Shivasattulu — women in yellow who enter deep spiritual trance — move through the festival grounds as living channels of the Goddess. Couples unable to conceive seek their blessing, called Pabba. The Shivasattu in trance places hands on the woman and speaks words of divine intervention, believed to carry Sammakka\'s direct response.',
        img: 'https://images.unsplash.com/photo-1615485981504-2081f2b6e511?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Head Tonsuring — A Vow Fulfilled',
        text: 'Parents who prayed for a child bring that child — sometimes still an infant — to have their first hair shaved at the Gadde. The hair offered is a declaration that this life belongs to the Goddess. Adults also tonsure as a public act of ego-surrender and gratitude for vows the Goddess honored.',
        img: 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Peak of the Human Congregation',
        text: 'By mid-afternoon, Medaram holds over one crore devotees — the second-largest religious congregation in India and the largest tribal festival in Asia. As the full moon rises over the forest, tribal drums and Akkum horns fill the air. The Gaddelu glow with lamps and offerings, and the four-day circle of devotion reaches completion.',
        img: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    dayLabel: 'Day Four',
    title: 'Tallula Vanapravesham',
    subsections: [
      {
        subtitle: 'The Shift in Atmosphere',
        text: 'The fourth day carries a fundamentally different emotional quality. The drumbeats of arrival are replaced by a quiet, bittersweet reverence. Priests begin the morning with private prayers at the Gaddelu — the final hours are hours of last offerings, last glances, and last prayers before the Goddesses return to the forest for two more years.',
        img: 'https://images.unsplash.com/photo-1418065460487-3e41a6c8e15f?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Final Darshan and Last Offerings at the Gaddelu',
        text: 'Through the morning of Day Four, devotees who could not complete offerings the previous day take their final turn. Turmeric, sarees, coconuts, and Bangaram continue to accumulate at the bamboo altars. Children are lifted to touch the Vanam poles. Old women sit in silence at the edge of the Gadde — unwilling to leave.',
        img: 'https://images.unsplash.com/photo-1418065460487-3e41a6c8e15f?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Tallula Vanapravesham — The Forest Calls Her Back',
        text: 'In the early afternoon, priests begin Tallula Vanapravesham — the entry of the mothers back into the forest. Tallula means mothers in the Koya tongue. Commencement is signaled the same way as arrival: tribal drumbeats, the Akkum horn, and ceremonial prayers at the Gadde. Each deity then departs in sequence — exactly as they arrived.',
        img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Saralamma\'s Return to Kannepalli',
        text: 'Saralamma departs first, carried by the Kaka clan priests who brought her on Day One. As they leave — devotees lie flat on the ground and the priests step over them — an ancient act considered the highest departure blessing. After crossing the Vagu, the procession returns to reinstall her at the Kannepalli temple.',
        img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Sammakka\'s Return to Chilakalagutta',
        text: 'The Siddaboina Vadde — the same hereditary priest who carried her in — now lifts the Kumkuma Bharina from the Gadde. Police honors, official escorts, and the SP are present as on arrival. The procession moves to the forest path, the priest wades the Vagu with the casket raised, and climbs alone back into the Sorangam.',
        img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Symmetry of Honor — Departure Mirrors Arrival',
        text: 'Every honor given to the Goddesses on arrival is repeated — without reduction — on departure. The same police guard, the same officials, the same drums, the same rhythms. The Goddesses are warrior queens whose dignity is unchanged whether entering a city of millions or returning to a dark cave deep in the forest.',
        img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'Thiruguvaram Panduga — The Closing Rites',
        text: 'Days after the Jatara, Thiruguvaram Panduga — the festival of turning back — is observed at Medaram and Kannepalli. Priests purify both sanctums with Jampanna Vagu water, light incense in the Dhupa Deepa ritual, and offer a final Yaata sacrifice as Naivedyam. Late-arriving devotees continue taking the holy dip and fulfilling vows at the quieter altars.',
        img: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Sacred Items Are Locked Away',
        text: 'The Vadde\'s bells and belts, the Gadde pole cloth, all ritual vessels and ornaments — every sacred item from the four days is gathered and sealed inside the temple vaults. They will not be touched, displayed, or used for any other purpose until the preparations for the next Jatara begin two years later.',
        img: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80'
      },
      {
        subtitle: 'The Two-Year Silence Begins',
        text: 'Within days, the roads emptied of millions return to forest tracks. Stalls are dismantled, the grounds cleared. In the Sorangam beneath Chilakalagutta, Sammakka rests again in total darkness — as she has for centuries. Medaram, a village of hundreds in ordinary times, returns to silence. The forest takes everything back until the world is called again.',
        img: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

export default function Traditions() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const sectionRef = useRef(null);

  function scrollToSection() {
    if (sectionRef.current) {
      const navHeight = 70;
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

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
    scrollToSection();
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
      <div className="detailed-days-section container" ref={sectionRef}>
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
            onClick={() => { setActiveDayIndex(i => Math.max(0, i - 1)); scrollToSection(); }}
            disabled={activeDayIndex === 0}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous Day
          </button>
          <button
            className="day-nav-btn"
            onClick={() => { setActiveDayIndex(i => Math.min(DETAILED_DAYS.length - 1, i + 1)); scrollToSection(); }}
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
