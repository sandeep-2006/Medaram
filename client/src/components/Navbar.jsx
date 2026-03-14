import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/',            label: 'Home'           },
  { to: '/history',     label: 'History'        },
  { to: '/traditions',  label: 'Traditions'     },
  { to: '/gallery',     label: 'Gallery'        },
  { to: '/guide',       label: "Visitor's Guide" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location                = useLocation();

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <NavLink to="/" className="navbar__brand">
          <div className="navbar__brand-mark"><span>🪔</span></div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-main">Medaram Jathara</span>
            <span className="navbar__brand-sub">Cultural Heritage · Telangana</span>
          </div>
        </NavLink>

        <ul className="navbar__links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`navbar__drawer${open ? ' navbar__drawer--open' : ''}`}>
        <ul>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `drawer__link${isActive ? ' drawer__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {open && <div className="navbar__overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
