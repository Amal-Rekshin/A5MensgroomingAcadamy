import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">A<span className="gold-text">5</span></span>
              <span className="logo-sub">Men Grooming Academy</span>
            </div>
            <p>Master the art of grooming with Ellappan Swaminathan. Tamil Nadu’s 1st academy for Hands-on Real-World Experience.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/a5_mengroomingacademy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/johnellappann/" aria-label="Facebook" className="social-icon"><Facebook size={18} /></a>
              <a href="https://www.youtube.com/@A5_Media" aria-label="YouTube" className="social-icon"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/placements">Placements</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="footer-col">
            <h4>Our Courses</h4>
            <ul>
              <li><Link to="/courses">60 Days Men Barbering Diploma</Link></li>
              <li><Link to="/courses">30 Days Advance Barbering Course</Link></li>
              <li><Link to="/courses">10 Days Master Class</Link></li>
              <li><Link to="/courses">75 Days Unisex Hair Dresser Course</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} className="footer-icon" />
                <span>No 63 TG, Anna Nagar, Ayyappakkam Main Rd, Chennai, TN 600077</span>
              </li>
              <li>
                <Phone size={16} className="footer-icon" />
                <a href="tel:+918610282448">+91 86102 82448</a>
              </li>
              <li>
                <Mail size={16} className="footer-icon" />
                <a href="mailto:afivemensgrooming@gmail.com">afivemensgrooming@gmail.com</a>
              </li>
            </ul>
            {/* Map Preview */}
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4705.686813505212!2d80.14619307507861!3d13.10003978722732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52615aebef3189%3A0xfa1792b84d5ae07!2sA5%20Men%20Grooming%20Academy!5e1!3m2!1sen!2sin!4v1783769778334!5m2!1sen!2sin"
                width="100%"
                height="120"
                style={{ border: 0, borderRadius: '12px', opacity: 0.7 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="A5 Hair Academy Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} A5 Men Grooming Academy. All rights reserved.</p>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
