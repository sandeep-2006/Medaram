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
    role: 'The Principal Goddess · Mother',
    desc: `According to the oral tradition of the Koya community, Sammakka was miraculously discovered
           as an infant in the Dandakaranya forests near Medaram. Koya hunters found her playing fearlessly
           amidst wild tigers, radiating a divine aura of golden light. Believed to be a divine gift —
           an incarnation of the forest goddess Vanadurga — she was adopted by the tribal chief Medaraju
           and his wife. She grew to become an extraordinarily skilled warrior, wise leader, and protector
           of the Koya people. She married Pagididda Raju, a Koya chieftain, and ruled her community with
           compassion and courage. When the Kakatiya forces threatened her tribe, she led the resistance
           with extraordinary bravery, fighting till her last breath. She is the principal deity of the
           Jathara — regarded as the embodiment of tribal courage, motherhood, and justice.`,
    icon: '🌿',
    colour: '#1e4db7',
  },
  {
    name: 'Saralamma (Sarakka)',
    role: 'Daughter of Sammakka · Warrior Princess',
    desc: `Saralamma was the eldest daughter of Sammakka and Pagididda Raju, and a fierce warrior in her own right.
           She fought bravely alongside her mother and family in the battle against the Kakatiya forces.
           She attained martyrdom on the battlefield at the Sampangi stream, now revered as Jampanna Vagu.
           Saralamma is worshipped at her own dedicated shrine in Kannepalli village — from where her sacred
           idol is ceremonially brought in procession to Medaram at the start of every Jathara. Her name is
           always spoken alongside Sammakka's — "Sammakka Saralamma" — symbolising an unbreakable bond of
           devotion, sacrifice, and family. Millions worship her as a goddess of valour and protection.`,
    icon: '🔥',
    colour: '#2e63d4',
  },
  {
    name: 'Pagididda Raju',
    role: 'Tribal King · Husband of Sammakka',
    desc: `Pagididda Raju was the Koya tribal prince and chieftain who governed the Medaram region.
           He was a feudatory ruler who maintained harmony between his people and the Kakatiya Empire.
           When a severe drought struck and his people could not pay the tribute demanded by Emperor 
           Prataparudra, he stood firmly beside his people and refused to comply with the unjust demand.
           He fought with great valor in the ensuing battle and was killed while defending his tribe.
           His sacred insignia — brought in ceremonial procession from Punugondla village — occupies one 
           of the four sacred Gaddelu (platforms) at the Medaram shrine, honoured as both a king and 
           a martyr who placed his people above self-interest.`,
    icon: '⚔️',
    colour: '#0f2d6b',
  },
  {
    name: 'Jampanna',
    role: 'Warrior Son · Young Martyr',
    desc: `Jampanna was Sammakka's son who fought valiantly in the confrontation against the Kakatiya
           imperial army. Young and fierce, he refused to retreat even as the battle turned against the
           Koya forces. He eventually fell into the Sampangi stream while fighting, and legend holds that
           his blood turned the stream red. The stream has been known as Jampanna Vagu ever since —
           a name carried by the iron-rich red-tinted waters to this day. For pilgrims, taking the sacred 
           bath in Jampanna Vagu is an act of deep remembrance and spiritual communion with the young 
           warrior's sacrifice. His memory is a cornerstone of the Jathara's emotional and spiritual power.`,
    icon: '🌊',
    colour: '#1e4db7',
  },
  {
    name: 'Govindaraju',
    role: 'Uncle · Loyal Protector',
    desc: `Govindaraju was the brother of Pagididda Raju and a loyal protector of the Sammakka family.
           He too participated in the resistance against the Kakatiya forces, fighting to protect the
           dignity and freedom of the Koya tribal community. His sacred idol is brought in procession
           from Kondai village and installed on its own Gadde (sacred platform) at Medaram, alongside
           the idols of the other honoured figures. His inclusion in the Jathara reflects the collective
           nature of the tribal resistance — a family and community that chose sacrifice over submission.`,
    icon: '🛡️',
    colour: '#1a3a8f',
  },
];

const TIMELINE = [
  {
    era:   '13th Century CE · Origins',
    event: 'The Miraculous Discovery of Sammakka',
    body:  `The oral history of the Koya community begins with a remarkable event in the Dandakaranya forests
            near Medaram, in what is now the Mulugu district of Telangana. Tribal hunters led by the chief
            Medaraju ventured deep into the forest and came upon an extraordinary sight — a newborn baby girl
            lying peacefully in the middle of a clearing, surrounded by a family of wild tigers, unharmed and
            radiant with a divine glow. The hunters were astonished. They believed the child had been sent by the
            forest goddess herself. Medaraju and his wife adopted the child, naming her Sammakka — a name that
            would echo through centuries of tribal memory. She was raised with great love and taught the ways of
            the forest, warfare, and leadership.`,
    icon:  '🌿',
  },
  {
    era:   '13th Century CE · Early Life',
    event: 'Sammakka — A Leader Among Her People',
    body:  `As Sammakka grew, it became clear she was no ordinary woman. She possessed extraordinary wisdom,
            an intimate knowledge of the forest, and a natural command that earned her the respect of all Koya
            chiefs in the region. She became deeply beloved by her people, who saw in her both a protector
            and a spiritual guide. She was versed in tribal governance, the art of herbal medicine, and guerrilla 
            warfare tactics suited to the dense forests of the Deccan plateau. Her reputation spread across the
            tribal settlements of the Dandakaranya, and other Koya leaders came to seek her counsel. She was
            seen not merely as a human leader, but as a divine presence incarnate in mortal form.`,
    icon:  '👑',
  },
  {
    era:   '13th Century CE · Marriage',
    event: 'A Prosperous Kingdom at Medaram',
    body:  `Sammakka married Pagididda Raju, the Koya tribal prince who governed the Medaram region as a
            feudatory under the Kakatiya Empire. Their union brought together two powerful families and
            strengthened the Koya community. The couple had three children: Saralamma (their eldest daughter),
            Nagulamma (younger daughter), and Jampanna (their son). Pagididda Raju's brother, Govindaraju,
            lived with the family and served as a loyal protector. Medaram flourished under their rule —
            a respected tribal settlement in the heart of the Godavari forest belt, known for its independence,
            self-sufficiency, and adherence to ancient Koya customs. The community lived in harmony with the
            forest, following animist traditions free from any Brahminic or Vedic influence.`,
    icon:  '🏡',
  },
  {
    era:   '13th Century CE · Crisis',
    event: 'The Great Drought and the Kakatiya Demand',
    body:  `The kingdom of the Kakatiya dynasty, ruling from Warangal (then called Orugallu), was at the peak
            of its power under Emperor Prataparudra. Pagididda Raju was a tribute-paying vassal of this empire.
            Then disaster struck: a prolonged, devastating drought swept through the region. Crops failed year
            after year. The Koya people, who lived in forest settlements with no alternate sources of food or
            income, fell into extreme poverty. They could barely feed themselves, let alone pay tribute to the
            Kakatiya administration. Despite this dire humanitarian crisis, the Kakatiya tax collectors continued
            to demand the full tribute — the kappam — from the tribe. Pagididda Raju, with Sammakka's full
            support, made a fateful decision: he would not force his starving people to pay. He refused.`,
    icon:  '🌾',
  },
  {
    era:   '13th Century CE · Conflict',
    event: 'The Kakatiya Army Marches on Medaram',
    body:  `The refusal to pay tribute was interpreted by the Kakatiya court as an act of open defiance.
            Emperor Prataparudra dispatched a large imperial military force toward the forests of Medaram to
            forcibly collect the tribute and subjugate the Koya tribe. The Koya people, deeply outnumbered,
            prepared to defend their home. Led by Sammakka, Pagididda Raju, Saralamma, and Jampanna, the
            tribal forces employed their deep knowledge of the jungle terrain to mount a fierce resistance.
            They used guerrilla tactics — ambushing the imperial soldiers in the dense forest, disrupting
            supply lines, and holding their ground. What began as a tax dispute had become a battle for the
            very existence and dignity of the Koya tribe.`,
    icon:  '⚔️',
  },
  {
    era:   '13th Century CE · Sacrifice',
    event: 'The Battle at Sampangi Stream — Martyrdom of the Family',
    body:  `The fiercest fighting took place near the Sampangi stream (today's Jampanna Vagu) at the edge
            of Medaram. Pagididda Raju fought with great courage and was killed in battle. Saralamma,
            the warrior daughter, fought over the very same ground and also attained martyrdom. Young Jampanna
            waged a desperate last stand — legend says he bled into the stream as he fell — and the waters ran
            red, thereafter carrying his name forever. The stream to this day has a reddish tint, attributed
            geologically to iron-rich soil, but held by devotees as the sacred mark of Jampanna's sacrifice.
            With her family slain around her, Sammakka fought on alone, wounded but unyielding. Even in grief 
            and mortal pain, she refused to surrender, reportedly cursing the Kakatiya dynasty before retreating
            into the forest toward Chilukalagutta hill.`,
    icon:  '🩸',
  },
  {
    era:   '13th Century CE · Divine Transformation',
    event: `Sammakka's Disappearance and the Kumkum Bharani`,
    body:  `The Koya people searched desperately for Sammakka after the battle. They followed her trail
            into the forest, toward the Chilukalagutta hill — but found no mortal trace of her. In the spot
            where her trail ended, they discovered only a small vermilion casket — a Kumkum Bharani — and
            tiger paw marks in the earth around it. No body. No possessions. Nothing else. In the tradition
            of the Koya people, there was only one possible interpretation: Sammakka had not died as a mortal
            but had transformed into a divine presence — she had merged with the forest, with the earth, with
            the divine. The Kumkum Bharani became the most sacred representation of Sammakka, and it is this
            casket — borne in procession from the forest hillock — that forms the centrepiece of the Jathara
            to this day. There are no stone idols or anthropomorphic images; the goddess is represented only
            by this sacred vermilion casket and a bamboo staff smeared with turmeric and red powder.`,
    icon:  '✨',
  },
  {
    era:   'Post 13th Century · Legacy',
    event: 'The Birth of the Medaram Jathara',
    body:  `Following these events, the Koya community began to honour Sammakka, Saralamma, Pagididda Raju,
            Govindaraju, and Jampanna through a series of sacred rituals conducted every two years in the
            month of Magha (January–February). These rituals were rooted entirely in the animist traditions
            of the Koya tribe — no Brahminic priests, no Sanskrit mantras, no Vedic fire rituals. All rites
            were performed by Koya tribal priests (Koya Doras) in their own language and tradition. The
            deities were symbolically "brought from the forest" for the festival and returned to the forest
            at its conclusion — reflecting the tribe's deep belief that these divine beings reside in nature.
            What began as a local tribal memorial gathering grew, century by century, into one of the largest
            religious congregations in all of Asia.`,
    icon:  '🪔',
  },
  {
    era:   'Centuries of Tradition · The Offering',
    event: 'Bangaram — The Sacred Offering of Jaggery',
    body:  `One of the most distinctive features of the Medaram Jathara is the offering of Bangaram — the
            Telugu word for gold — which in this festival refers entirely to jaggery (bellam). Pilgrims offer
            blocks of jaggery to the goddesses as a representation of their most valued possession and as a
            fulfillment of vows. Some devotees offer jaggery equal to their own body weight as a gesture of
            total devotion. The tradition is rooted in the tribal economy of the Koya people, where jaggery
            — derived from the forest's sugarcane and palm trees — was a precious commodity. There is no
            distribution of prasad in the traditional manner; the offering is made directly at the altar.
            This jaggery-as-gold offering is unique to the Medaram Jathara and has no parallel in any other
            major Indian religious festival.`,
    icon:  '🍯',
  },
  {
    era:   '1940s–1990s · Isolation',
    event: 'A Festival Preserved in the Forest',
    body:  `For most of its history, Medaram was a remote, densely forested village accessible only by bullock
            cart or on foot through jungle paths. There were no roads, no electricity, and no permanent
            infrastructure. Pilgrims undertook gruelling journeys through thick forest to attend the Jathara.
            This isolation, paradoxically, preserved the festival's authentic character — there was no external
            cultural or commercial pressure. The Koya tribal priests maintained complete control over all sacred
            rites. The festival remained a powerful, deeply personal experience for those who made the difficult
            journey — a testament to the extraordinary faith of millions of devotees spread across what is now
            Telangana, Andhra Pradesh, Chhattisgarh, Maharashtra, and Odisha.`,
    icon:  '🌲',
  },
  {
    era:   '1996–1998 · Recognition',
    event: 'Declaration as State Festival and First Road to Medaram',
    body:  `The historical significance of the Medaram Jathara was formally recognised by the Government of
            Andhra Pradesh in 1996, when it was declared an official State Festival — a recognition of its
            cultural, historical, and spiritual importance to the tribal communities of the region. In 1998,
            the first motorable road was constructed to Medaram village, bridging the gap between the remote
            forest settlement and the wider world. This was a transformative moment: attendance grew dramatically
            with easier access, and the state government took on responsibility for managing the large-scale
            infrastructure needed to accommodate millions of pilgrims — roads, water supply, medical camps,
            sanitation, and security. The festival was no longer just a local tribal memory but a state-wide
            cultural event of the highest order.`,
    icon:  '🛣️',
  },
  {
    era:   '2014 · New State, New Era',
    event: 'Medaram Jathara in Telangana',
    body:  `When the state of Telangana was formed in 2014, carved out of Andhra Pradesh, Medaram was
            incorporated into the new state's Mulugu district. The Telangana government embraced the Jathara
            as one of its signature cultural and heritage events, increasing investment significantly. The
            festival became a source of immense pride for the new state — a powerful symbol of Telangana's
            tribal heritage, indigenous culture, and historical identity. The Koya community's traditions
            continued to be honoured at the centre of all celebrations, with tribal priests retaining their
            sacred authority over the rituals. The state now designates the Jathara as a "Maha Jathara"
            (Grand Festival) every four years, drawing even greater resources and attention.`,
    icon:  '🗺️',
  },
  {
    era:   'Present Day · Global Recognition',
    event: 'The World\'s Largest Tribal Religious Congregation',
    body:  `Today, the Sammakka Saralamma Medaram Jathara is widely recognised as the single largest
            tribal religious congregation in the world. An estimated three crore (30 million) devotees
            attend over four days — a figure that rivals or surpasses even the Kumbh Mela's per-event
            attendance for tribal gatherings. The Telangana government invests hundreds of crores of rupees
            in infrastructure: roads, bridges, lighting, drinking water stations, medical camps staffed by
            hundreds of doctors, sanitation facilities, and security deployment. Despite this massive scale,
            the sacred rituals at the heart of the festival remain entirely in the hands of the Koya tribal
            priests, conducted in exactly the manner they have been for centuries. It is a living, breathing
            balance between ancient tradition and modern logistics — a festival unlike any other in the world.`,
    icon:  '🌟',
  },
];

const SACRED_SITES = [
  {
    title: 'Jampanna Vagu',
    icon: '🌊',
    desc: `The sacred stream named after Sammakka's son Jampanna. Pilgrims take a holy bath here before
           proceeding to the main shrine, in an act of remembrance for the young warrior's sacrifice. The
           stream's reddish tint — caused by iron-rich red soil — is held by devotees as the mark of
           Jampanna's blood. Bathing in Jampanna Vagu is considered the most cleansing spiritual act of
           the Jathara — washing away sin and connecting the pilgrim to the sacred history of the tribe.`,
    facts: [
      { key: 'Named after',  val: 'Jampanna, son of Sammakka & Pagididda Raju' },
      { key: 'Tributary of', val: 'River Godavari' },
      { key: 'Water colour', val: 'Reddish — iron-rich red soil of the region' },
      { key: 'Ritual',       val: 'Sacred holy bath before darshan at main shrine' },
    ],
  },
  {
    title: 'Chilukalagutta Hill',
    icon: '⛰️',
    desc: `This forested hillock is where Sammakka's trail ended after the battle. It is the spot where
           the sacred Kumkum Bharani (vermilion casket) — the divine representation of the goddess — was
           found by the Koya tribe. On the second day of the Jathara, Sammakka's sacred casket is brought
           down from Chilukalagutta in a ceremonial procession to the main shrine at Medaram — the most
           emotionally charged moment of the entire four-day festival, attended by enormous crowds.`,
    facts: [
      { key: 'Significance',  val: 'Where Sammakka disappeared and was divinely transformed' },
      { key: 'Sacred symbol', val: 'Kumkum Bharani (vermilion casket) found here' },
      { key: 'Festival role', val: 'Procession from here on Day 2 is the emotional peak' },
      { key: 'Nature',        val: 'Dense forested hillock in the Medaram forest belt' },
    ],
  },
  {
    title: 'The Gaddelu (Sacred Platforms)',
    icon: '🏛️',
    desc: `The Gaddelu are the sacred raised stone platforms at the Medaram shrine where the deities
           are installed for the duration of the Jathara. There are four Gaddelu — one each for Sammakka,
           Saralamma, Pagididda Raju, and Govindaraju. The deities are not permanent stone idols but are
           symbolically represented by sacred bamboo staffs smeared with turmeric and vermilion, or by
           their sacred caskets. They are "present" at the Gaddelu only during the festival period, and
           are ceremonially returned to the forest on the final day — Tallula Vanapravesham.`,
    facts: [
      { key: 'Location',      val: 'Central shrine area at Medaram village' },
      { key: 'No. of Gaddelu', val: 'Four — one for each principal deity' },
      { key: 'Deity form',    val: 'Turmeric-smeared bamboo staffs and sacred caskets' },
      { key: 'Unique feature', val: 'No permanent stone idols — purely tribal symbolic form' },
    ],
  },
  {
    title: 'Kannepalli (Saralamma\'s Village)',
    icon: '🌾',
    desc: `Kannepalli is the village where Saralamma's sacred shrine is located. The Jathara begins with
           the ceremonial procession of Saralamma's idol from Kannepalli to the main Medaram shrine on Day 1.
           This arrival is marked by tremendous fanfare — tribal drums, thousands of devotees lining the route,
           and the chanting of the goddess's name. The return procession to Kannepalli on the final day
           (Tallula Vanapravesham) marks the formal conclusion of the festival period.`,
    facts: [
      { key: 'Location',       val: 'Near Medaram, Mulugu district, Telangana' },
      { key: 'Festival role',  val: 'Saralamma\'s procession starts from here on Day 1' },
      { key: 'Significance',   val: 'Considered Saralamma\'s permanent divine abode' },
      { key: 'Day 4 ritual',   val: 'Tallula Vanapravesham — idol returned to Kannepalli' },
    ],
  },
];

export default function History() {
  return (
    <div className="history-page page-wrapper">

      <section className="page-hero">
        <div className="page-hero-accent" />
        <div className="page-hero-content container">
          <span className="label label--white">Origins &amp; Legacy · 13th Century to Present</span>
          <h1 className="page-hero-title">
            History of<br /><span>Medaram Jathara</span>
          </h1>
          <p className="page-hero-desc">
            A deeply detailed account of the legend, the sacrifice, and the centuries of living tradition 
            that gave rise to the world's largest tribal religious congregation — the Sammakka Saralamma Jathara.
          </p>
        </div>
      </section>

      {/* ── OPENING CONTEXT ──────────────────────────────── */}
      <Fade>
        <div className="hist-intro container">
          <div className="hist-intro-inner">
            <br />
            <span className="label">Understanding the Jathara</span>
            <h2 className="section-title">A Story of <span>People, Principle &amp; Sacrifice</span></h2>
            <div className="rule" />
            <div className="hist-intro-cols">
              <p>
                The Sammakka Saralamma Medaram Jathara is not merely a religious festival. It is a living
                monument to one of the most powerful stories of tribal resistance in Indian history — the
                story of a mother, her daughter, her husband, her son, and an entire community that chose
                dignity over submission. Rooted in the oral traditions of the Koya tribe, this history
                reaches back over seven centuries to the age of the Kakatiya dynasty and the dense jungles
                of what is now Telangana's Mulugu district.
              </p>
              <p>
                Sammakka and Saralamma — a mother and her daughter — are remembered not only as objects
                of devotion but as leaders who stood against the might of an empire to protect their
                people. Their story, preserved entirely through oral tradition and enacted through living
                ritual, continues to hold profound meaning for the Koya tribal community and for the thirty
                million devotees — from many different communities and states — who make the journey to
                Medaram every two years. To understand this history is to understand why this gathering
                matters so deeply, and why it endures.
              </p>
              <p>
                Unlike most major Indian festivals, the Medaram Jathara is entirely free from Vedic or Brahminic
                influence. There are no Sanskrit mantras, no permanent stone idols, no Brahmin priests.
                All rituals are conducted by Koya tribal priests in their own language and tradition —
                a fact that makes this one of the purest surviving examples of indigenous Dravidian and
                tribal religious practice in India. The festival is, in every sense, the Koya people's own.
              </p>
            </div>
          </div>
        </div>
      </Fade>

      {/* ── KOYA TRIBE CONTEXT ───────────────────────────── */}
      <Fade>
        <div className="koya-section container">
          <span className="label">The Koya People</span>
          <h2 className="section-title">The Tribe at the <span>Heart of the Story</span></h2>
          <div className="rule" />
          <div className="koya-grid">
            <div className="koya-text">
              <p>
                The Koya tribe — also known as Koyas or Koi — are an indigenous Dravidian community who 
                have inhabited the Godavari river basin and the Dandakaranya forests for thousands of years.
                They are one of the Scheduled Tribe communities of Telangana, Andhra Pradesh, Chhattisgarh,
                and Odisha. The Koya people are traditionally forest dwellers, dependent on the forest for
                sustenance, livelihood, and spiritual identity.
              </p>
              <p>
                Their religious tradition is animist — they worship nature, the forest, sacred streams,
                and ancestral deities. They believe that exceptional human beings — particularly those who
                sacrifice their lives for the community — continue to exist as protective divine presences
                after death. This belief lies at the heart of the veneration of Sammakka and Saralamma:
                these were real people, remembered as divine because of the magnitude of their sacrifice.
              </p>
              <p>
                The Koya people's resistance to external domination — whether from medieval empires or
                later from colonial forest policies — is a recurring thread in their history. The story
                of Sammakka and Saralamma fits within this broader pattern: a community fiercely protecting
                its autonomy, its resources, and its way of life. The Medaram Jathara is, at its deepest
                level, a celebration of that spirit of resistance.
              </p>
            </div>
            <div className="koya-facts-card">
              <div className="kf-header">
                <span>🌳</span>
                <div>
                  <h3>The Koya Tribe</h3>
                  <p>Guardians of the Dandakaranya Forests</p>
                </div>
              </div>
              <div className="kf-items">
                {[
                  { key: 'Also known as',    val: 'Koyas, Koi, Gond-Koya' },
                  { key: 'Language',         val: 'Koya (Dravidian family)' },
                  { key: 'Religion',         val: 'Animism — nature-based tribal faith' },
                  { key: 'Region',           val: 'Godavari basin — Telangana, AP, Chhattisgarh, Odisha' },
                  { key: 'Festival role',    val: 'Koya priests conduct all sacred rites exclusively' },
                  { key: 'Distinctive belief', val: 'Exceptional human beings become divine presences' },
                ].map(f => (
                  <div key={f.key} className="kf-item">
                    <span>{f.key}</span>
                    <strong>{f.val}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* ── DEITY PROFILES ───────────────────────────────── */}
      <Fade>
        <div className="deity-section">
          <div className="container">
            <span className="label">The Five Honoured Figures</span>
            <h2 className="section-title">Sammakka, Saralamma <span>&amp; Family</span></h2>
            <div className="rule" />
            <p className="deity-intro">
              The Medaram Jathara honours five figures from the Sammakka family — each with their own
              sacred story, their own shrine or altar, and their own place in the hearts of millions of
              devotees. Here is who they were.
            </p>
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
              <h2 className="section-title">The Full Story <span>Through Time</span></h2>
              <div className="rule" />
              <p className="timeline-intro">
                The following account draws on the oral tradition of the Koya community, documented by
                scholars, historians, and the Government of Telangana. It is presented with deep respect
                for those who hold this as an account of real, sacred events — and for the community
                whose living tradition has kept this history alive across seven centuries.
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

      {/* ── SACRED SITES ─────────────────────────────────── */}
      <Fade>
        <div className="sacred-sites-section container">
          <span className="label">Sacred Geography</span>
          <h2 className="section-title">The Sacred <span>Sites of Medaram</span></h2>
          <div className="rule" />
          <p className="sacred-intro">
            Every location associated with the Sammakka story carries deep spiritual significance.
            These four sacred sites form the geographical heart of the Medaram Jathara, and each 
            plays a distinct role in the four-day festival.
          </p>
          <div className="sacred-grid">
            {SACRED_SITES.map(site => (
              <div key={site.title} className="jampanna-card">
                <div className="jc-header">
                  <span>{site.icon}</span>
                  <div>
                    <h3>{site.title}</h3>
                  </div>
                </div>
                <p className="jc-desc">{site.desc}</p>
                <div className="jc-facts">
                  {site.facts.map(f => (
                    <div key={f.key} className="jc-fact">
                      <span>{f.key}</span>
                      <strong>{f.val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>


      {/* ── CLOSING REFLECTION ───────────────────────────── */}
      <Fade>
        <div className="hist-closing container">
          <div className="hist-closing-inner">
            <span className="label">Enduring Legacy</span>
            <h2 className="section-title">A Story That <span>Will Not Be Forgotten</span></h2>
            <div className="rule" />
            <div className="hist-closing-cols">
              <p>
                Over seven hundred years have passed since Sammakka and Saralamma made their sacrifice
                in the forests of the Deccan. Empires have risen and fallen. Languages have changed.
                Political boundaries have been drawn and redrawn. And yet, every two years, thirty million
                people make their way through the forests of Mulugu district to stand before a bamboo 
                staff smeared with red powder and offer a block of jaggery — in memory of a mother who
                refused to let her people be humiliated.
              </p>
              <p>
                That is the extraordinary power of the Medaram Jathara. It is not sustained by grand
                temples or wealthy endowments. It is sustained by the memory of the Koya people and the
                faith of millions. Every Jathara is a re-enactment of the original story — the deities
                emerge from the forest, receive their people's love and offerings, and return to the forest.
                The message is the same every time: courage is remembered. Sacrifice is sacred. The forest
                does not forget.
              </p>
            </div>
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
