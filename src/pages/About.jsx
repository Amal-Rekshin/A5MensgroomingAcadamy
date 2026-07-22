import { Award, Users, Briefcase, Scissors, Star, Target, Heart, GraduationCap, CheckCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useAnimations'
import './About.css'

const About = () => {
  const [storyRef, storyVisible] = useScrollReveal()
  const [teamRef, teamVisible] = useScrollReveal()


  const achievements = [
    { icon: <Award size={28} />, title: 'Best Training Institute 2024', desc: 'National Beauty & Wellness Awards' },
    { icon: <Star size={28} />, title: '4.9/5 Student Rating', desc: 'Based on 2000+ verified reviews' },
    { icon: <Users size={28} />, title: '5000+ Alumni Network', desc: 'Working in top salons worldwide' },
    { icon: <GraduationCap size={28} />, title: 'ISO 9001 Certified', desc: 'International quality standards' },
  ]

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-label gold-text">About A5 Men Grooming Academy</span>
          <h1>Led by <span className="gold-text">Ellappan Swaminathan</span></h1>
          <p>20+ Years of Mastery in the Salon Industry, pioneering Hands-on Real-World Experience in Tamil Nadu.</p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section" ref={storyRef}>
        <div className="container">
          <div className="founder-grid" style={{ opacity: storyVisible ? 1 : 0, transform: storyVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
            <div className="founder-image">
              <img src="/gallery/owner.jpg" alt="Ellappan Swaminathan" className="founder-img" />
            </div>
            <div className="founder-content">
              <span className="label gold-text">Founder & Master Trainer</span>
              <h2>2 Decades of Industry Mastery</h2>
              <p>Ellappan Swaminathan is a renowned name in the grooming industry with over 20 years of experience. He founded A5 Men Grooming Academy to provide authentic, real-world training.</p>
              <p>Under his mentorship, A5 became the first academy in Tamil Nadu to completely focus on Hands-on Real-World Experience, ensuring students learn on real human models for true skill development.</p>
              <div className="founder-stats">
                <div className="fstat"><span className="fstat-num">20+</span><span>Years Exp</span></div>
                <div className="fstat"><span className="fstat-num">450+</span><span>Students</span></div>
                <div className="fstat"><span className="fstat-num">44K+</span><span>Followers</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Achievements */}
      <section className="section" ref={teamRef}>
        <div className="container">
          <div className="section-header">
            <span className="label">Recognition</span>
            <h2>Awards & <span className="gold-text">Achievements</span></h2>
          </div>
          <div className="achievements-grid" style={{ opacity: teamVisible ? 1 : 0, transform: teamVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
            <div className="achievement-card gold-card">
              <div className="achievement-icon"><Award size={28} /></div>
              <h4>LAPT Accredited</h4>
              <p>Internationally recognized grooming certification</p>
            </div>
            <div className="achievement-card gold-card">
              <div className="achievement-icon"><CheckCircle size={28} /></div>
              <h4>NSDVE Recognized</h4>
              <p>Government of India training standards</p>
            </div>
            <div className="achievement-card gold-card">
              <div className="achievement-icon"><Users size={28} /></div>
              <h4>NSDC Certified</h4>
              <p>National Skill Development Corporation partnership</p>
            </div>
            <div className="achievement-card gold-card">
              <div className="achievement-icon"><Star size={28} /></div>
              <h4>44K Followers</h4>
              <p>Trusted community on Instagram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card glass-card">
              <Target size={36} className="mission-icon" />
              <h3>Our Mission</h3>
              <p>To democratize professional hair education and make world-class training accessible to every aspiring stylist, regardless of background.</p>
            </div>
            <div className="mission-card glass-card">
              <Heart size={36} className="mission-icon" />
              <h3>Our Vision</h3>
              <p>To become the global benchmark for hair styling education, producing graduates who set trends and lead the beauty industry.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
