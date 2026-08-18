'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'support', 'help', 'sessions', 'reach-out', 'booking'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'support', label: 'Services' },
    { id: 'sessions', label: 'Sessions' },
    { id: 'booking', label: 'Book', isCta: true },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, 'home')}>
            <span className="nav-logo-icon">🌿</span>
            Vaddepalli Latha
          </a>

          <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${activeSection === link.id ? 'active' : ''} ${link.isCta ? 'nav-cta' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label === 'Book' ? 'Book Session' : link.label}
              </a>
            ))}
          </div>

          <button
            className={`hamburger ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-nav-overlay ${mobileOpen ? 'active' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
}
