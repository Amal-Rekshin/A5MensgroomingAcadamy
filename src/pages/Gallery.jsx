import { useState } from 'react'
import { X, Scissors, Sparkles, Users, Camera, Star } from 'lucide-react'
import { useScrollReveal } from '../hooks/useAnimations'
import './Gallery.css'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxItem, setLightboxItem] = useState(null)
  const [ref, visible] = useScrollReveal()

  const categories = ['All', 'Graduation', 'Training', 'Events', 'Guest']

  const items = [
    { category: 'Graduation', image: '/gallery/graduate1.JPG', label: 'Annual Graduation Ceremony', size: 'normal' },
    { category: 'Graduation', image: '/gallery/graduate2.JPG', label: 'Celebrating Student Success', size: 'tall' },
    { category: 'Graduation', image: '/gallery/graduate3.JPG', label: 'A5 Academy Convocation', size: 'wide' },
    { category: 'Graduation', image: '/gallery/graduate4.jpg', label: 'Batch of 2024', size: 'normal' },
    { category: 'Graduation', image: '/gallery/graduate5.jpg', label: 'Proud Graduates', size: 'tall' },
    { category: 'Graduation', image: '/gallery/graduate6.jpg', label: 'Diploma Award Ceremony', size: 'wide' },
    { category: 'Graduation', image: '/gallery/graduate7.jpg', label: 'Annual Graduation Ceremony', size: 'normal' },
    { category: 'Graduation', image: '/gallery/graduate8.jpg', label: 'Celebrating Student Success', size: 'tall' },
    { category: 'Graduation', image: '/gallery/graduate9.jpg', label: 'A5 Academy Convocation', size: 'wide' },
    { category: 'Graduation', image: '/gallery/groupgraduate1.JPG', label: 'Batch of 2024', size: 'normal' },
    { category: 'Graduation', image: '/gallery/groupgraduate2.JPG', label: 'Proud Graduates', size: 'tall' },
    { category: 'Graduation', image: '/gallery/groupgraduate3.JPG.jpeg', label: 'Diploma Award Ceremony', size: 'wide' },
    { category: 'Graduation', image: '/gallery/groupgraduate4.JPG.jpeg', label: 'Annual Graduation Ceremony', size: 'normal' },
    { category: 'Graduation', image: '/gallery/groupgraduate5.JPG.jpeg', label: 'Celebrating Student Success', size: 'tall' },
    { category: 'Guest', image: '/gallery/guest1.JPG', label: 'International Hair Expert', size: 'wide' },
    { category: 'Guest', image: '/gallery/guest2.JPG', label: 'Advanced Color Workshop', size: 'normal' },
    { category: 'Guest', image: '/gallery/guest3.JPG', label: 'Guest Artist Masterclass', size: 'tall' },
    { category: 'Guest', image: '/gallery/guest4.JPG', label: 'Creative Styling Session', size: 'wide' },
    { category: 'Guest', image: '/gallery/guest5.JPG', label: 'Celebrity Stylist Demo', size: 'normal' },
    { category: 'Events', image: '/gallery/reward1.JPG', label: 'Industry Connect Meetup', size: 'tall' },
    { category: 'Events', image: '/gallery/reward2.JPG', label: 'Hair & Beauty Expo 2024', size: 'wide' },
    { category: 'Events', image: '/gallery/reward3.JPG', label: 'Grand Salon Opening', size: 'normal' },
    { category: 'Events', image: '/gallery/reward4.JPG', label: 'Academy Milestone Celebration', size: 'tall' },
    { category: 'Events', image: '/gallery/reward5.JPG', label: 'Annual Awards Night', size: 'wide' },
    { category: 'Events', image: '/gallery/reward6.JPG', label: 'Award Winning Styles', size: 'normal' },
    { category: 'Training', image: '/gallery/training1.jpg', label: 'Fade & Blend Mastery', size: 'tall' },
    { category: 'Training', image: '/gallery/training10.jpg', label: 'Hands-on Practical', size: 'wide' },
    { category: 'Training', image: '/gallery/training11.jpg', label: 'Student Portfolio Shoot', size: 'normal' },
    { category: 'Training', image: '/gallery/training12.jpg', label: 'Advanced Skin Care Class', size: 'tall' },
    { category: 'Training', image: '/gallery/training13.jpg', label: 'Tool Handling & Safety', size: 'wide' },
    { category: 'Training', image: '/gallery/training14.png', label: 'Precision Haircut Practice', size: 'normal' },
    { category: 'Training', image: '/gallery/training15.png', label: 'Live Model Training', size: 'tall' },
    { category: 'Training', image: '/gallery/training16.png', label: 'Classroom Theory Session', size: 'wide' },
    { category: 'Training', image: '/gallery/training17.png', label: 'Balayage Technique Practice', size: 'normal' },
    { category: 'Training', image: '/gallery/training18.png', label: 'Keratin Treatment Demo', size: 'tall' },
    { category: 'Training', image: '/gallery/training19.png', label: 'Fade & Blend Mastery', size: 'wide' },
    { category: 'Training', image: '/gallery/training2.jpg', label: 'Hands-on Practical', size: 'normal' },
    { category: 'Training', image: '/gallery/training20.png', label: 'Student Portfolio Shoot', size: 'tall' },
    { category: 'Training', image: '/gallery/training21.png', label: 'Advanced Skin Care Class', size: 'wide' },
    { category: 'Training', image: '/gallery/training22.png', label: 'Tool Handling & Safety', size: 'normal' },
    { category: 'Training', image: '/gallery/training23.png', label: 'Precision Haircut Practice', size: 'tall' },
    { category: 'Training', image: '/gallery/training24.png', label: 'Live Model Training', size: 'wide' },
    { category: 'Training', image: '/gallery/training25.png', label: 'Classroom Theory Session', size: 'normal' },
    { category: 'Training', image: '/gallery/training26.png', label: 'Balayage Technique Practice', size: 'tall' },
    { category: 'Training', image: '/gallery/training3.jpg', label: 'Keratin Treatment Demo', size: 'wide' },
    { category: 'Training', image: '/gallery/training4.png', label: 'Fade & Blend Mastery', size: 'normal' },
    { category: 'Training', image: '/gallery/training5.jpg', label: 'Hands-on Practical', size: 'tall' },
    { category: 'Training', image: '/gallery/training6.jpg', label: 'Student Portfolio Shoot', size: 'wide' },
    { category: 'Training', image: '/gallery/training7.jpg', label: 'Advanced Skin Care Class', size: 'normal' },
    { category: 'Training', image: '/gallery/training8.jpg', label: 'Tool Handling & Safety', size: 'tall' },
    { category: 'Training', image: '/gallery/training9.jpg', label: 'Precision Haircut Practice', size: 'wide' }
  ]

  const [visibleCount, setVisibleCount] = useState(12)

  const handleFilterChange = (category) => {
    setActiveFilter(category)
    setVisibleCount(12)
  }

  const filtered = activeFilter === 'All' ? items : items.filter(i => i.category === activeFilter)
  const displayedItems = filtered.slice(0, visibleCount)

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="container">
          <span className="hero-label gold-text">Our Work</span>
          <h1>Student <span className="gold-text">Gallery</span></h1>
          <p>See the transformations, training sessions, and events that define A5 Hair Academy.</p>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className="gallery-filters">
            {categories.map(c => (
              <button key={c} className={`filter-btn ${activeFilter === c ? 'active' : ''}`} onClick={() => handleFilterChange(c)}>{c}</button>
            ))}
          </div>

          <div className="masonry-grid" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
            {displayedItems.map((item, i) => (
              <div className={`masonry-item ${item.size}`} key={i} onClick={() => setLightboxItem(item)}>
                {item.image ? (
                  <img src={item.image} alt={item.label} className="masonry-img" />
                ) : (
                  <div className="masonry-placeholder">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                )}
                <div className="masonry-overlay">
                  <span className="masonry-category">{item.category}</span>
                  <h4>{item.label}</h4>
                </div>
              </div>
            ))}
          </div>
          
          {visibleCount < filtered.length && (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button className="btn btn-outline" onClick={() => setVisibleCount(filtered.length)}>
                Show More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div className="lightbox" onClick={() => setLightboxItem(null)}>
          <button className="lightbox-close" onClick={() => setLightboxItem(null)}><X size={24} /></button>
          <div className="lightbox-content glass-card" onClick={e => e.stopPropagation()}>
            <div className="lightbox-image">
              {lightboxItem.image ? (
                <img src={lightboxItem.image} alt={lightboxItem.label} />
              ) : (
                <>
                  {lightboxItem.icon}
                  <span>{lightboxItem.label}</span>
                </>
              )}
            </div>
            <div className="lightbox-info">
              <span className="masonry-category">{lightboxItem.category}</span>
              <h3>{lightboxItem.label}</h3>
              <p>Professional work by A5 Hair Academy students and trainers.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
