import { TrendingUp, Users, Briefcase, Star, Award, MapPin, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useAnimations'
import './Placements.css'

const Placements = () => {
  const [ref, visible] = useScrollReveal()

  const stories = [
    // { name: 'Rahul SharmaVenkat Perumal', role: 'Senior Stylist', salon: 'Zazzle', salary: '₹25,000/month', course: 'Master Barber Program' },
    // { name: 'Vasanthan', role: 'Color Specialist', salon: 'Naturals', salary: '₹25,000/month', course: 'Hair Coloring & Keratin' },
    // { name: 'Guna Singh', role: 'Lead Barber', salon: 'Tony and Guy', salary: '₹35,000/month', course: 'Professional Styling' },
    // { name: 'Karthicka', role: 'Styling Expert', salon: 'Naturals Academy', salary: '₹40,000/month', course: 'Professional Styling' },

    {
      name: 'Venkat Perumal',
      role: 'Creative Haircut & Color Specialist',
      salon: 'Zazzle',
      salary: '₹25,000/month',
    },
    {
      name: 'Vasanthan',
      role: 'Hair Transformation Artist',
      salon: 'Naturals',
      salary: '₹25,000/month',
    },
    {
      name: 'Guna Singh',
      role: 'Precision Cut & Balayage Expert',
      salon: 'Tony and Guy',
      salary: '₹35,000/month',
    },
    {
      name: 'Karthicka',
      role: 'Fashion Hair Stylist & Color Designer',
      salon: 'Naturals Academy',
      salary: '₹40,000/month',
    }
  ]

  const processSteps = [
    { title: 'Resume Building', desc: 'Expert assistance in crafting a professional resume that highlights your new skills.', icon: <Briefcase size={24} /> },
    { title: 'Portfolio Creation', desc: 'Build a strong portfolio showcasing your best work during hands-on training sessions.', icon: <Star size={24} /> },
    { title: 'Interview Prep', desc: 'Mock interviews and personality development sessions to build your confidence.', icon: <Users size={24} /> },
    { title: 'Direct Placement', desc: 'Exclusive campus drives and direct referrals to top salons across the country.', icon: <Award size={24} /> },
  ]
  return (
    <div className="placements-page">
      <section className="page-hero">
        <div className="container">
          <span className="hero-label gold-text">Career Launch</span>
          <h1>Placement <span className="gold-text">Success</span></h1>
          <p>Our graduates work at the best salons across India. Your career starts at A5.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className="placement-hero-stats" style={{ opacity: visible ? 1 : 0, transition: 'all 0.6s ease' }}>
            <div className="ph-stat glass-card"><TrendingUp size={28} /><span className="ph-num">95%</span><span>Placement Rate</span></div>
            <div className="ph-stat glass-card"><Users size={28} /><span className="ph-num">5000+</span><span>Placed Students</span></div>
            <div className="ph-stat glass-card"><Briefcase size={28} /><span className="ph-num">100+</span><span>Partner Salons</span></div>
            <div className="ph-stat glass-card"><Star size={28} /><span className="ph-num">₹15K-50K</span><span>Starting Salary</span></div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label">Success Stories</span>
            <h2>Where Our <span className="gold-text">Graduates Work</span></h2>
          </div>
          <div className="stories-grid">
            {stories.map((s, i) => (
              <div className="story-card gold-card" key={i}>
                <div className="story-avatar">{s.name[0]}</div>
                <h4>{s.name}</h4>
                <span className="story-role">{s.role}</span>
                <div className="story-details">
                  <span><MapPin size={14} /> {s.salon}</span>
                  <span><TrendingUp size={14} /> {s.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <span className="label">Our Process</span>
            <h2>How We Support <span className="gold-text">Your Career</span></h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <div className="process-card glass-card" key={i}>
                <div className="process-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Placements
