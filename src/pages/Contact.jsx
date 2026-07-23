import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useAnimations'
import './Contact.css'

const Contact = () => {
  const [ref, visible] = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form['contact-name'].value
    const phone = form['contact-phone'].value
    const email = form['contact-email'].value || 'Not provided'
    const course = form['contact-course'].value
    const message = form['contact-message'].value || 'Not provided'
    
    const text = `Hello A5 Men Grooming Academy!

*New Enquiry*
Name: ${name}
Phone: ${phone}
Email: ${email}
Course Interest: ${course}
Message: ${message}`

    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/916383792232?text=${encodedText}`, '_blank')
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <span className="hero-label gold-text">Get in Touch</span>
          <h1>Contact <span className="gold-text">Us</span></h1>
          <p>Have questions? We'd love to hear from you. Reach out and start your journey today.</p>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className="contact-grid" style={{ opacity: visible ? 1 : 0, transition: 'all 0.6s ease' }}>
            {/* Form */}
            <div className="contact-form-wrapper">
              <h3>Send Us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" id="contact-name" required placeholder=" " />
                    <label htmlFor="contact-name">Full Name</label>
                  </div>
                  <div className="form-group">
                    <input type="tel" id="contact-phone" required placeholder=" " />
                    <label htmlFor="contact-phone">Phone Number</label>
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" id="contact-email" placeholder=" " />
                  <label htmlFor="contact-email">Email Address</label>
                </div>
                <div className="form-group">
                  <select id="contact-course" required defaultValue="">
                    <option value="" disabled>Select a Course</option>
                    <option>60 Days Men Barbering Diploma</option>
                    <option>30 Days Advance Barbering Course</option>
                    <option>10 Days Master Class</option>
                    <option>75 Days Unisex Hair Dresser Course</option>
                  </select>
                  <label htmlFor="contact-course" className="select-label">Course Interest</label>
                </div>
                <div className="form-group">
                  <textarea id="contact-message" rows="4" placeholder=" "></textarea>
                  <label htmlFor="contact-message">Your Message</label>
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-cards">
                <div className="info-card glass-card">
                  <MapPin size={22} className="info-icon" />
                  <div>
                    <h4>Visit Us</h4>
                    {/* <p>123 Academy Street, Andheri West,<br />Mumbai, Maharashtra 400053</p> */}
                    <p>No 63 TG, Anna Nagar, Ayyappakkam Main Rd,<br /> Ayapakkam, Ambattur, Chennai, Tamil Nadu 600077</p>
                  </div>
                </div>
                <div className="info-card glass-card">
                  <Phone size={22} className="info-icon" />
                  <div>
                    <h4>Call Us</h4>
                    <p><a href="tel:+918610282448">+91 86102 82448</a></p>
                    {/* <p><a href="tel:+919888888888">+91 98888 88888</a></p> */}
                  </div>
                </div>
                <div className="info-card glass-card">
                  <Mail size={22} className="info-icon" />
                  <div>
                    <h4>Email Us</h4>
                    <p><a href="mailto:afivemengroomingacademy@gmail.com">afivemengroomingacademy@gmail.com</a></p>
                    {/* <p><a href="mailto:admissions@a5academy.com">admissions@a5academy.com</a></p> */}
                  </div>
                </div>
                <div className="info-card glass-card">
                  <Clock size={22} className="info-icon" />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/918610282448" className="btn btn-whatsapp contact-wa-btn" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-map glass-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4705.686813505212!2d80.14619307507861!3d13.10003978722732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52615aebef3189%3A0xfa1792b84d5ae07!2sA5%20Men%20Grooming%20Academy!5e1!3m2!1sen!2sin!4v1783769778334!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="A5 Hair Academy Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
