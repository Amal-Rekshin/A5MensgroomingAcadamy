import React from 'react'
import { Instagram } from 'lucide-react'

const InstagramFloat = () => {
  return (
    <a
      href="https://www.instagram.com/a5_mengroomingacademy/"
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-float"
      id="instagram-float-btn"
      aria-label="Follow on Instagram"
    >
      <Instagram size={28} color="#ffffff" strokeWidth={1.5} />
    </a>
  )
}

export default InstagramFloat
