import Navbar from './components/Navbar';
import CounterStats from './components/CounterStats';
import BookingForm from './components/BookingForm';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-bg-decoration hero-leaf-1">🍃</div>
        <div className="hero-bg-decoration hero-leaf-2">🌿</div>
        <div className="hero-bg-decoration hero-leaf-3">🍂</div>
        <div className="hero-bg-decoration hero-circle-1" />
        <div className="hero-bg-decoration hero-circle-2" />

        <div className="container">
          <div className="hero-content">
            <p className="hero-tagline">🌿 Let&apos;s talk, you matter.</p>
            <h1 className="hero-title">
              Your Journey to
              <span>Inner Peace</span>
              Starts Here
            </h1>
            <p className="hero-name">Vaddepalli Latha</p>
            <p className="hero-credential">MA Clinical Psychology</p>
            <p className="hero-description">
              Offering a compassionate, confidential, and non-judgmental space
              for individuals seeking emotional support and guidance. With 5+
              years of experience in Clinical, Corporate, and Rehabilitation
              Counselling.
            </p>

            <div className="hero-values">
              <div className="hero-value">
                <div className="hero-value-icon">🤝</div>
                <span>Compassionate</span>
              </div>
              <div className="hero-value">
                <div className="hero-value-icon">🔒</div>
                <span>Confidential</span>
              </div>
              <div className="hero-value">
                <div className="hero-value-icon">💚</div>
                <span>Non-Judgmental</span>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#booking" className="btn btn-primary">
                📅 Book a Session
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img src="/latha-vaddepalli.jpg" alt="Vaddepalli Latha, MA Clinical Psychology" />
              {/*
                style={{
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(135deg, #2C5545 0%, #5B8A72 40%, #C9A96E 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  fontSize: '4rem',
                }}
              >
                <span>🧠</span>
                <span
                  style={{
                    fontSize: '1rem',
                    marginTop: '16px',
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    opacity: 0.9,
                  }}
                >
                  Healing begins with a conversation
                </span>
              */}
            </div>
            <div className="hero-image-decoration">
              <div className="hero-deco-ring" />
              <div className="hero-deco-dots" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <CounterStats />

      {/* ===== ABOUT SECTION ===== */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-image-wrapper reveal-left">
            <div className="about-image">
              <img src="/latha-about.jpg" alt="Vaddepalli Latha" />
              {/*
                style={{
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(135deg, #3D7A5F 0%, #2C5545 50%, #C9A96E 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem',
                }}
              >
                🌿
              */}
              <div className="about-image-accent" />
            </div>
            <div className="about-experience-badge">
              <span className="number">5+</span>
              <span className="text">Years Experience</span>
            </div>
          </div>

          <div className="about-content reveal-right">
            <div className="section-badge">✨ About Me</div>
            <h2 className="section-title">
              A Safe Space for Your Mental Well-being
            </h2>
            <p className="about-text">
              I am pursuing a Ph.D. as a doctoral scholar and am committed to providing a safe, empathetic, and transformative therapeutic experience. My approach integrates evidence-based techniques with genuine human connection, helping you navigate life's challenges with greater clarity, confidence, and resilience.
            </p>
            <p className="about-text">
              With experience spanning clinical settings, corporate wellness
              programs, and rehabilitation centres, I bring a holistic
              understanding of mental health to every session.
            </p>

            <div className="qualifications-grid stagger-children">
              <div className="qualification-item">
                <div className="qualification-icon">🎓</div>
                <span className="qualification-text">
                  MA clinical psychology
                </span>
              </div>
              <div className="qualification-item">
                <div className="qualification-icon">🏥</div>
                <span className="qualification-text">Clinical Counselling</span>
              </div>
              <div className="qualification-item">
                <div className="qualification-icon">🏢</div>
                <span className="qualification-text">
                  Corporate Wellness
                </span>
              </div>
              <div className="qualification-item">
                <div className="qualification-icon">💪</div>
                <span className="qualification-text">
                  Rehabilitation Counselling
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AREAS OF SUPPORT ===== */}
      <section className="support" id="support">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge">🌱 Areas of Support</div>
            <h2 className="section-title">How I Can Support You</h2>
            <p className="section-subtitle">
              I offer guidance across a wide range of emotional and psychological
              challenges, helping you find your path to wellness.
            </p>
          </div>

          <div className="support-grid stagger-children">
            <div className="support-card">
              <div className="support-card-icon">😟</div>
              <h3 className="support-card-title">Anxiety & Stress</h3>
              <p className="support-card-text">
                Learn effective coping strategies to manage anxiety, panic
                attacks, and everyday stress.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon">💔</div>
              <h3 className="support-card-title">Depression</h3>
              <p className="support-card-text">
                Navigate through feelings of sadness, hopelessness, and low
                motivation with guided support.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon">💑</div>
              <h3 className="support-card-title">Relationship Issues</h3>
              <p className="support-card-text">
                Improve communication, resolve conflicts, and build healthier
                relationships.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon">😤</div>
              <h3 className="support-card-title">Anger Management</h3>
              <p className="support-card-text">
                Develop healthy ways to express and manage anger constructively.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon">🧘</div>
              <h3 className="support-card-title">Self-Esteem</h3>
              <p className="support-card-text">
                Build confidence, overcome self-doubt, and develop a positive
                self-image.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon">🌙</div>
              <h3 className="support-card-title">Sleep & Wellness</h3>
              <p className="support-card-text">
                Address sleep disorders, burnout, and overall mental wellness
                holistically.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon">🎯</div>
              <h3 className="support-card-title">Career Guidance</h3>
              <p className="support-card-text">
                Navigate career transitions, work-life balance, and professional
                growth challenges.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon">🌊</div>
              <h3 className="support-card-title">Grief & Loss</h3>
              <p className="support-card-text">
                Process grief, cope with loss, and find meaning through difficult
                times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW I CAN HELP ===== */}
      <section className="help" id="help">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge">💡 My Approach</div>
            <h2 className="section-title">How I Can Help</h2>
            <p className="section-subtitle">
              My therapeutic approach is tailored to your unique needs, combining
              proven techniques with compassionate care.
            </p>
          </div>

          <div className="help-grid stagger-children">
            <div className="help-card">
              <div className="help-card-icon">🗣️</div>
              <h3 className="help-card-title">Talk Therapy</h3>
              <p className="help-card-text">
                A safe space to express your thoughts and emotions freely,
                guided by empathetic listening.
              </p>
            </div>
            <div className="help-card">
              <div className="help-card-icon">🧩</div>
              <h3 className="help-card-title">CBT Techniques</h3>
              <p className="help-card-text">
                Cognitive Behavioural Therapy to identify and transform negative
                thought patterns.
              </p>
            </div>
            <div className="help-card">
              <div className="help-card-icon">🎯</div>
              <h3 className="help-card-title">Goal Setting</h3>
              <p className="help-card-text">
                Structured goal-setting to create actionable steps toward your
                mental wellness journey.
              </p>
            </div>
            <div className="help-card">
              <div className="help-card-icon">🧘‍♀️</div>
              <h3 className="help-card-title">Mindfulness</h3>
              <p className="help-card-text">
                Mindfulness and relaxation techniques to cultivate inner peace
                and emotional balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SESSION DETAILS ===== */}
      <section className="sessions" id="sessions">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge">📋 Session Details</div>
            <h2 className="section-title">What to Expect</h2>
            <p className="section-subtitle">
              Every session is a step toward understanding yourself better and
              building a healthier life.
            </p>
          </div>

          <div className="sessions-content">
            <div className="session-details-list stagger-children">
              <div className="session-detail">
                <div className="session-detail-icon">⏱️</div>
                <div className="session-detail-content">
                  <div className="session-detail-label">Duration</div>
                  <div className="session-detail-value">
                    45 – 60 minutes per session
                  </div>
                </div>
              </div>
              <div className="session-detail">
                <div className="session-detail-icon">💻</div>
                <div className="session-detail-content">
                  <div className="session-detail-label">Mode</div>
                  <div className="session-detail-value">
                    Online (Google Meet) / Offline
                  </div>
                </div>
              </div>
              <div className="session-detail">
                <div className="session-detail-icon">🌐</div>
                <div className="session-detail-content">
                  <div className="session-detail-label">Languages</div>
                  <div className="session-detail-value">
                    English, Telugu, Hindi
                  </div>
                </div>
              </div>
              <div className="session-detail">
                <div className="session-detail-icon">🔒</div>
                <div className="session-detail-content">
                  <div className="session-detail-label">Privacy</div>
                  <div className="session-detail-value">
                    100% Confidential & Secure
                  </div>
                </div>
              </div>
            </div>

            <div className="session-price-card reveal-scale">
              <div className="session-price-label">Session Fee</div>
              <div className="session-price-amount">₹500</div>
              <div className="session-price-per">per session</div>
              <a href="#booking" className="btn">
                📅 Book Your Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO CAN REACH OUT ===== */}
      <section className="reach-out" id="reach-out">
        <div className="container">
          <div className="reach-out-content">
            <div className="reveal-left">
              <div className="section-badge">🤗 Who Can Reach Out</div>
              <h2 className="section-title">Everyone Deserves Support</h2>
              <p className="reach-out-text">
                Whether you&apos;re going through a tough phase or simply want
                someone to talk to — <em>you are welcome here</em>. You don&apos;t
                need to have a &quot;serious problem&quot; to seek help.
              </p>

              <div className="reach-out-list stagger-children">
                <div className="reach-out-item">
                  <div className="reach-out-item-icon">🎓</div>
                  <div className="reach-out-item-content">
                    <h4>Students</h4>
                    <p>Academic stress, peer pressure, career confusion</p>
                  </div>
                </div>
                <div className="reach-out-item">
                  <div className="reach-out-item-icon">💼</div>
                  <div className="reach-out-item-content">
                    <h4>Working Professionals</h4>
                    <p>Burnout, work-life balance, workplace conflicts</p>
                  </div>
                </div>
                <div className="reach-out-item">
                  <div className="reach-out-item-icon">👪</div>
                  <div className="reach-out-item-content">
                    <h4>Parents & Families</h4>
                    <p>Parenting challenges, family dynamics, communication</p>
                  </div>
                </div>
                <div className="reach-out-item">
                  <div className="reach-out-item-icon">👤</div>
                  <div className="reach-out-item-content">
                    <h4>Anyone in Need</h4>
                    <p>Life transitions, emotional struggles, self-discovery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reach-out-quote reveal-right">
              <blockquote>
                &quot;You don&apos;t have to see the whole staircase, just take
                the first step.&quot;
                <cite>— Martin Luther King Jr.</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOOKING SECTION ===== */}
      <section className="booking" id="booking">
        <div className="container">
          <div className="booking-content">
            <div className="booking-info reveal-left">
              <div className="section-badge">📅 Book a Session</div>
              <h2 className="section-title">
                Ready to Take the First Step?
              </h2>
              <p className="booking-info-text">
                Fill out the form and I&apos;ll get back to you within 24 hours
                to confirm your session. All information shared is strictly
                confidential.
              </p>

              <div className="booking-contact-item">
                <div className="booking-contact-icon">📧</div>
                <div>
                  <div className="booking-contact-label">Email</div>
                  <div className="booking-contact-value">
                    <a href="mailto:lathavasanta49@gmail.com">lathavasanta49@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="booking-contact-item">
                <div className="booking-contact-icon">📱</div>
                <div>
                  <div className="booking-contact-label">Phone</div>
                  <div className="booking-contact-value">+91 6280835389</div>
                </div>
              </div>
              <div className="booking-contact-item">
                <div className="booking-contact-icon">📍</div>
                <div>
                  <div className="booking-contact-label">Location</div>
                  <div className="booking-contact-value">
                    Vijayawada, Andhra Pradesh
                  </div>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>

      {/* ===== DISCLAIMER ===== */}
      <section className="disclaimer">
        <div className="container">
          <div className="disclaimer-content reveal">
            <div className="section-badge">⚠️ Important Note</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
              Disclaimer
            </h2>

            <div className="disclaimer-items">
              <div className="disclaimer-item">
                <span className="disclaimer-item-icon">🔒</span>
                <p className="disclaimer-item-text">
                  All sessions are strictly confidential and conducted in a safe,
                  non-judgmental environment.
                </p>
              </div>
              <div className="disclaimer-item">
                <span className="disclaimer-item-icon">⚕️</span>
                <p className="disclaimer-item-text">
                  Counselling is not a substitute for psychiatric treatment or
                  medication. If needed, referrals will be provided.
                </p>
              </div>
              <div className="disclaimer-item">
                <span className="disclaimer-item-icon">🚨</span>
                <p className="disclaimer-item-text">
                  In case of a mental health emergency, please contact a crisis
                  helpline or visit the nearest hospital immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>🌿 Vaddepalli Latha</h3>
              <p>
                Providing compassionate counselling services to help you navigate
                life&apos;s challenges with clarity, resilience, and hope.
              </p>
            </div>

            <div className="footer-contact">
              <h4>Get in Touch</h4>
              <div className="footer-contact-item">
                <span>📧</span>
                <span>lathavasanta49@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <span>📍</span>
                <span>Vijayawada, Andhra Pradesh</span>
              </div>
              <div className="footer-contact-item">
                <span>🕐</span>
                <span>Mon - Sat: 10 AM - 7 PM</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Vaddepalli Latha. All rights
              reserved.
            </p>
            <p className="footer-bottom-quote">
              &quot;Healing begins with a single conversation.&quot;
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
