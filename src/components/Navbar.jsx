import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/placements', label: 'Placements' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="main-navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">A<span className="gold-text">5</span></span>
          <span className="logo-sub">Men Grooming Academy</span>
        </Link>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a href="tel:+918610282448" className="btn btn-primary btn-sm">
              <Phone size={16} /> Call Now
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary btn-sm nav-cta-desktop">
            Enroll Now
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            id="menu-toggle-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
