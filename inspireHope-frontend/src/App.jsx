import heroImg from './assets/hero.png'
import './App.css'

const impactStats = [
  { value: '18K+', label: 'Lives reached through inclusive outreach' },
  { value: '320+', label: 'Volunteers mobilized across programs' },
  { value: '42', label: 'Community events delivered last year' },
]

const focusAreas = [
  {
    title: 'For donors',
    description:
      'Support verified causes, follow campaign progress, and see how each contribution helps families and neighborhoods thrive.',
  },
  {
    title: 'For volunteers',
    description:
      'Discover service opportunities, register for events, and stay connected to programs that match your skills and passion.',
  },
  {
    title: 'For beneficiaries',
    description:
      'Request assistance with dignity, track support applications, and access a platform built for clarity and inclusion.',
  },
  {
    title: 'For administrators',
    description:
      'Coordinate outreach, monitor activity, and manage operations with role-aware tools designed for impact teams.',
  },
]

const initiatives = [
  'Emergency support and beneficiary assistance',
  'Volunteer registration and event coordination',
  'Transparent donation experiences for supporters',
]

const upcomingMoments = [
  {
    title: 'Community Health Day',
    meta: 'May 12 | Accra Central',
    text: 'A full-day outreach bringing screenings, wellness education, and volunteer-led support to underserved families.',
  },
  {
    title: 'Youth Skills Lab',
    meta: 'May 24 | Kumasi Hub',
    text: 'Hands-on mentorship sessions focused on digital literacy, confidence building, and employment readiness.',
  },
  {
    title: 'Care Package Drive',
    meta: 'June 8 | Regional collection points',
    text: 'A coordinated donation and packing effort to deliver essentials to households facing urgent need.',
  },
]

const journey = [
  {
    step: '01',
    title: 'Join the mission',
    text: 'Create an account as a donor, volunteer, beneficiary, or administrator and access the tools built for your role.',
  },
  {
    step: '02',
    title: 'Take meaningful action',
    text: 'Donate, register for events, apply for support, or manage community programs from one connected experience.',
  },
  {
    step: '03',
    title: 'See shared impact',
    text: 'Follow activity, stay informed, and help grow a platform that strengthens belonging in every community it serves.',
  },
]

const values = [
  {
    title: 'Inclusion',
    text: 'We create spaces where every person is seen, heard, and welcomed without barriers.',
  },
  {
    title: 'Dignity',
    text: 'We deliver support with empathy, respect, and care for every person we serve.',
  },
  {
    title: 'Transparency',
    text: 'We value clear communication, accountability, and visible impact across our programs.',
  },
  {
    title: 'Community',
    text: 'We believe change grows stronger when people work together with trust and shared purpose.',
  },
]

const stories = [
  {
    name: 'Abena, beneficiary family advocate',
    text: 'The support process felt clear and respectful. We were not treated like a number. We were treated like people who mattered.',
  },
  {
    name: 'Samuel, volunteer mentor',
    text: 'Serving through InspireHope gave me a practical way to show up for young people and help them see real possibility ahead.',
  },
  {
    name: 'Efua, donor partner',
    text: 'What stood out most was the transparency. I could see the mission, the people, and the outcomes all connected clearly.',
  },
]

const faqs = [
  {
    question: 'How can I support InspireHope Foundation?',
    answer:
      'You can support by donating, volunteering, partnering with the foundation, or helping share community programs with others.',
  },
  {
    question: 'Can beneficiaries apply for support online?',
    answer:
      'Yes. The platform is designed to let beneficiaries submit applications, follow progress, and receive updates in a more accessible way.',
  },
  {
    question: 'Are volunteer opportunities open to everyone?',
    answer:
      'Volunteer opportunities are open to people who want to contribute their time and skills, with different roles available depending on each event or program.',
  },
]

const members = [
  {
    name: 'Kezia Narweh',
    role: 'Executive Director',
    detail:
      'Leads the foundation vision, partnerships, and long-term community strategy with a strong focus on inclusion.',
  },
  {
    name: 'Rose Kumi-Larbi',
    role: 'Programs Coordinator',
    detail:
      'Oversees outreach activities, volunteer experiences, and program delivery to ensure every initiative reaches people well.',
  },
  {
    name: 'Margaret Hunt',
    role: 'Community Support Lead',
    detail:
      'Works directly with beneficiaries and families, helping the team deliver assistance with dignity and care.',
  },
  {
    name: 'Francis Roland Bissah',
    role: 'Donor Relations Officer',
    detail:
      'Builds trust with supporters by coordinating campaigns, stewardship, and transparent communication around impact.',
  },
  {
    name: 'Henry Amankwah Famiyeh',
    role: 'Communications and Advocacy Lead',
    detail:
      'Shapes the foundation voice, shares impact stories, and helps the wider community stay informed and engaged.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="InspireHope Foundation home">
          <span className="brand-mark">IH</span>
          <span>
            <strong>InspireHope</strong>
            <small>Foundation</small>
          </span>
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#impact">Impact</a>
          <a href="#programs">Programs</a>
          <a href="#members">Members</a>
          <a href="#faq">FAQ</a>
          <a href="#events">Events</a>
          <a href="#join">Get Involved</a>
        </nav>

        <a className="nav-cta" href="#join">
          Support a Cause
        </a>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">
              Mission: Igniting change, uniting heart and uplifting communities.
            </p>
            <h1>Creating a world where everyone has a place and the opportunity to thrive.</h1>
            <p className="hero-text">
              InspireHope Foundation connects donors, volunteers, beneficiaries, and
              administrators through one thoughtful digital experience centered on
              dignity, action, belonging, and measurable social impact.
            </p>
            <p className="hero-vision">
              Vision: Envisioning a world where everyone belongs and no one is left out.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#join">
                Become a volunteer
              </a>
              <a className="secondary-button" href="#programs">
                Explore programs
              </a>
            </div>

            <ul className="initiative-list" aria-label="Core initiatives">
              {initiatives.map((initiative) => (
                <li key={initiative}>{initiative}</li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-primary">
              <p>Slogan</p>
              <h2>Everyone has a place and the opportunity to thrive.</h2>
            </div>

            <img
              src={heroImg}
              alt="Volunteers and community members celebrating positive change together"
              className="hero-image"
            />

            <div className="hero-card hero-card-accent">
              <p>Vision</p>
              <h2>Envisioning a world where everyone belongs and no one is left out.</h2>
            </div>
          </div>
        </section>

        <section className="impact-strip" id="impact">
          {impactStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="about-section" id="about">
          <article className="about-story-card">
            <p className="eyebrow">About us</p>
            <h2>Compassion organized into practical community action.</h2>
            <p>
              InspireHope Foundation exists to connect generosity, service, and support
              in ways that are easier to access and more meaningful to experience. We
              are building a platform where donors, volunteers, beneficiaries, and
              administrators can work together around one shared mission.
            </p>
          </article>

          <article className="about-story-card about-story-card-light">
            <p className="eyebrow">Why we exist</p>
            <h2>No one should be left on the margins.</h2>
            <p>
              Our work is rooted in the belief that belonging changes lives. By
              combining outreach, assistance, and digital coordination, the foundation
              helps communities respond with more speed, care, and clarity.
            </p>
          </article>
        </section>

        <section className="content-grid" id="programs">
          <div className="section-heading">
            <p className="eyebrow">Platform experience</p>
            <h2>Designed around the people who power social good.</h2>
            <p>
              Every pathway in the platform supports trust, ease of use, and a
              stronger sense of connection between the foundation and the communities
              it serves.
            </p>
          </div>

          <div className="feature-grid">
            {focusAreas.map((area) => (
              <article key={area.title} className="feature-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="values-section">
          <div className="section-heading">
            <p className="eyebrow">Core values</p>
            <h2>Principles that shape every decision and every interaction.</h2>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dual-panel">
          <article className="panel panel-story">
            <p className="eyebrow">Mission and vision</p>
            <h2>Igniting change while building communities of belonging.</h2>
            <p>Mission: Igniting change, uniting heart and uplifting communities.</p>
            <p>Vision: Envisioning a world where everyone belongs and no one is left out.</p>
          </article>

          <article className="panel panel-steps">
            {journey.map((item) => (
              <div key={item.step} className="step-row">
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </article>
        </section>

        <section className="members-section" id="members">
          <div className="section-heading">
            <p className="eyebrow">Our members</p>
            <h2>The people helping the mission take shape every day.</h2>
            <p>
              This section is ready for your team photos. Each member card can display
              an image, role, and short profile so visitors can connect with the people
              behind InspireHope Foundation.
            </p>
          </div>

          <div className="members-grid">
            {members.map((member) => (
              <article key={member.name} className="member-card">
                <div className="member-photo" aria-label={`${member.name} photo placeholder`}>
                  <span>Add image</span>
                </div>
                <div className="member-content">
                  <p className="member-role">{member.role}</p>
                  <h3>{member.name}</h3>
                  <p>{member.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stories-section">
          <div className="section-heading">
            <p className="eyebrow">Impact stories</p>
            <h2>Voices that reflect the trust and care behind the work.</h2>
          </div>

          <div className="stories-grid">
            {stories.map((story) => (
              <article key={story.name} className="story-card">
                <p className="story-quote">{story.text}</p>
                <strong>{story.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="events-section" id="events">
          <div className="section-heading">
            <p className="eyebrow">Upcoming engagement</p>
            <h2>Moments where support turns into visible community change.</h2>
          </div>

          <div className="event-grid">
            {upcomingMoments.map((event) => (
              <article key={event.title} className="event-card">
                <p className="event-meta">{event.meta}</p>
                <h3>{event.title}</h3>
                <p>{event.text}</p>
                <a href="#join">Register interest</a>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-heading">
            <p className="eyebrow">Frequently asked questions</p>
            <h2>Helpful answers for supporters, volunteers, and beneficiaries.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="join-banner" id="join">
          <div>
            <p className="eyebrow">Get involved</p>
            <h2>Bring your generosity, your time, or your voice.</h2>
            <p>
              Join InspireHope Foundation and help create a digital-first support
              system that turns compassion into coordinated action for people who
              deserve both belonging and the opportunity to thrive.
            </p>
          </div>

          <div className="join-actions">
            <a className="primary-button" href="mailto:hello@inspirehopefoundation.org">
              Contact the foundation
            </a>
            <a className="secondary-button secondary-button-light" href="#home">
              Return to top
            </a>
          </div>
        </section>

        <section className="contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Reach out to partner, volunteer, donate, or learn more.</h2>
          </div>

          <div className="contact-grid">
            <article className="contact-card">
              <p className="contact-label">Email</p>
              <strong>hello@inspirehopefoundation.org</strong>
            </article>
            <article className="contact-card">
              <p className="contact-label">Phone</p>
              <strong>+233 20 000 0000</strong>
            </article>
            <article className="contact-card">
              <p className="contact-label">Location</p>
              <strong>Accra, Ghana</strong>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>InspireHope Foundation</strong>
          <p>Creating a world where everyone has a place and the opportunity to thrive.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#impact">Impact</a>
          <a href="#programs">Programs</a>
          <a href="#members">Members</a>
          <a href="#faq">FAQ</a>
          <a href="#events">Events</a>
          <a href="#join">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
