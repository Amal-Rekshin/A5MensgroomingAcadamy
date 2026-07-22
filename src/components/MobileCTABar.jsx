import { Phone, MessageCircle } from 'lucide-react'
import './MobileCTABar.css'

const MobileCTABar = () => {
  return (
    <div className="mobile-cta-bar" id="mobile-cta-bar">
      <a href="tel:+918610282448" className="btn btn-primary">
        <Phone size={18} /> Call Us
      </a>
      <a
        href="https://wa.me/918610282448"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
    </div>
  )
}

export default MobileCTABar
