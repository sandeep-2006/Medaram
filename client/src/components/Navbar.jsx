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

  /* Close menu on route change */
  useEffect(() => { setOpen(false); }, [location]);

  /* Add shadow after scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <NavLink to="/" className="navbar__brand">
          <span className="navbar__brand-icon">🪔</span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-main">Medaram</span>
            <span className="navbar__brand-sub">Jathara</span>
          </span>
        </NavLink>

        {/* Desktop links */}
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

        {/* Hamburger */}
        <button
          className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
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

      {/* Overlay */}
      {open && (
        <div className="navbar__overlay" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
