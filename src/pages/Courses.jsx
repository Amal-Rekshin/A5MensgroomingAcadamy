import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, CheckCircle, ArrowRight, Scissors, Sparkles, Award, Target, Heart, ChevronDown, ChevronUp, Star, GraduationCap } from 'lucide-react'
import { useScrollReveal } from '../hooks/useAnimations'
import './Courses.css'

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [openFaq, setOpenFaq] = useState(null)
  const [ref, visible] = useScrollReveal()

  const courses = [
    { title: '60 Days Men Barbering Diploma', duration: '60 Days', level: 'Beginner', price: '₹55,000.00', oldPrice: '₹60,000.00', icon: <Award size={24} />,
      features: ['Basic To Advance Diploma Course', 'Hair | Skin | Chemical Treatment | Coloring | Groom Makeup', 'Welcome Kit Included (Scissors, Combs, Razor, etc.)', 'Live Hands-on Real-World Experience', 'Central & International (LAPT) Certification'],
      syllabus: ['Daily Classes 10 am to 4 pm weekly 6 days'] },
    { title: '30 Days Advance Barbering Course', duration: '30 Days', level: 'Advanced', price: '₹35,000.00', oldPrice: '₹40,000.00', icon: <Scissors size={24} />,
      features: ['Advance Barbering Course', 'Course only for Experience Barber In Industry'],
      syllabus: ['Advance Men Haircuts with live Demo', 'Soc techniques', 'Fading techniques', 'Finger techniques', 'Advance Skin treatment', 'Advance hair treatment', 'Coloring', 'Chemical Treatment'] },
    { title: '10 Days Master Class', duration: '10 Days', level: 'Master', price: '₹10,000.00', oldPrice: '₹15,000.00', icon: <Target size={24} />,
      features: ['Advance Barbering Techniques & Keypoints', 'INCLUDING: ACADEMY CERTIFICATE 🥇'],
      syllabus: ['Scissor Knowledge', 'Trimmer Knowledge', 'Bone structure', 'Face Analysing', 'Section & Partition', 'Skin knowledge ( Advance )', 'Coloring ( Advance )', 'Chemical Treatment knowledge', 'Hair Treatment', 'A5 Signature Techniques & Keypoints'] },
    { title: '75 Days Unisex Hair Dresser Course', duration: '75 Days', level: 'Professional', price: '₹65,000.00', oldPrice: '₹75,000.00', icon: <Star size={24} />,
      features: ['Complete Unisex Hairdressing Course', 'Includes both Men\'s and Women\'s styling', 'Special Scholarship Pricing Applied'],
      syllabus: ['Full day class 10 am to 5 pm', 'Weekly 6 days class'] }
  ]

  const faqs = [
    { q: 'Do I need prior experience to enroll?', a: 'No! Our Beginner courses are designed for absolute beginners. We teach everything from scratch.' },
    { q: 'What certification will I receive?', a: 'You will receive an ISO-certified course completion certificate, internship certificate, and a digital portfolio.' },
    { q: 'Is placement guaranteed?', a: 'We offer 100% placement assistance with a 95% placement rate. Our dedicated placement cell connects you with 100+ partner salons.' },
    { q: 'Can I pay in installments?', a: 'Yes, we offer flexible EMI options and installment plans. Contact us for details.' },
    { q: 'What tools do I need to bring?', a: 'All professional tools and products are provided during training. You will receive a starter kit upon enrollment.' },
  ]

  const filters = ['All', 'Beginner', 'Advanced', 'Master', 'Professional']
  const filtered = activeFilter === 'All' ? courses : courses.filter(c => c.level === activeFilter)

  return (
    <div className="courses-page">
      <section className="page-hero">
        <div className="container">
          <span className="hero-label gold-text">Our Programs</span>
          <h1>Professional <span className="gold-text">Training Courses</span></h1>
          <p>Choose the perfect program to match your career goals and experience level.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className="course-filters">
            {filters.map(f => (
              <button key={f} className={`filter-btn ${activeFilter === f ? 'active' : ''}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>

          <div className="course-listing" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
            {filtered.map((course, i) => (
              <div className="course-detail-card glass-card" key={i}>
                <div className="course-detail-header">
                  <div className="course-detail-icon">{course.icon}</div>
                  <div>
                    <h3>{course.title}</h3>
                    <div className="course-meta">
                      <span className={`course-badge ${course.level.toLowerCase()}`}>{course.level}</span>
                      <span className="course-dur"><Clock size={14} /> {course.duration}</span>
                    </div>
                  </div>
                  <div className="course-price">
                    <span className="price-amount">{course.price}</span>
                    {course.oldPrice && <span className="price-old" style={{ textDecoration: 'line-through', fontSize: '0.8em', color: '#888', marginLeft: '8px' }}>{course.oldPrice}</span>}
                    <span className="price-label">Total Fee</span>
                  </div>
                </div>

                <div className="course-detail-body">
                  <div className="course-features-list">
                    <h4>What You'll Learn</h4>
                    <ul>
                      {course.features.map((f, j) => <li key={j}><CheckCircle size={14} /> {f}</li>)}
                    </ul>
                  </div>
                  <div className="course-syllabus">
                    <h4>Syllabus Overview</h4>
                    <ul>
                      {course.syllabus.map((s, j) => <li key={j}><ArrowRight size={14} /> {s}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="course-detail-footer">
                  <Link to="/contact" className="btn btn-primary"><GraduationCap size={16} /> Enroll Now</Link>
                  <a href="https://wa.me/918610282448" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <span className="label">FAQs</span>
            <h2>Frequently Asked <span className="gold-text">Questions</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item glass-card ${openFaq === i ? 'open' : ''}`} key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openFaq === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
