import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown, Award, Users, Briefcase, Scissors,
  Star, Play, GraduationCap, Sparkles, Target,
  Clock, BookOpen, CheckCircle, ArrowRight,
  Phone, MessageCircle, TrendingUp, Heart, X
} from 'lucide-react'
import { useScrollReveal, useCountUp } from '../hooks/useAnimations'
import './Home.css'

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(null)

  const [statsRef1, statsCount1] = useCountUp(450, 2000)
  const [statsRef2, statsCount2] = useCountUp(44, 1500)
  const [statsRef3, statsCount3] = useCountUp(20, 1800)

  const [aboutRef, aboutVisible] = useScrollReveal()
  const [coursesRef, coursesVisible] = useScrollReveal()
  const [trainingRef, trainingVisible] = useScrollReveal()
  const [placementRef, placementVisible] = useScrollReveal()
  const [testimonialRef, testimonialVisible] = useScrollReveal()
  const [trainerRef, trainerVisible] = useScrollReveal()
  const [certRef, certVisible] = useScrollReveal()
  const [ctaRef, ctaVisible] = useScrollReveal()
  const [formRef, formVisible] = useScrollReveal()

  const courses = [
    { title: '60 Days Men Barbering Diploma', duration: '60 Days', level: 'Beginner', features: ['Basic To Advance Course', 'Welcome Kit Included', 'Hands-on Real-World Experience', 'LAPT Certification'], icon: <Award size={24} /> },
    { title: '30 Days Advance Barbering Course', duration: '30 Days', level: 'Advanced', features: ['Advance Haircuts & Fading', 'Skin & Hair Treatment', 'Coloring & Chemical', 'For Experienced Barbers'], icon: <Scissors size={24} /> },
    { title: '10 Days Master Class', duration: '10 Days', level: 'Master', features: ['A5 Signature Techniques', 'Advanced Skin & Coloring', 'Face Analyzing & Bone Structure', 'Academy Certificate'], icon: <Target size={24} /> },
  ]

  const testimonials = [
    { name: 'Sudhana', course: 'Student Review', text: 'Enaku zero knowledge hairdresser field la. Na ippo unisex course mudichiruka enoda intrest evlo iruncho Athukana teaching enaku inga carecta kadachuthu. Keerthi mam really thank you, supera puriura mathiri solli kuduthanga.', rating: 5 },
    { name: 'Madhu Mitha', course: 'Student Review', text: 'Attended one day hydra facial class, i really had a great day over there..had both demo and practical sessions with fun and enjoyment... students pampering was amazing and the staffs are the best!!', rating: 5 },
    { name: 'Kabil Arasan', course: 'Student Review', text: '"Great learning experience! I\'ve gained a lot of knowledge in professional barbering. This training will be a strong foundation for my future. Thank you, A5!"', rating: 5 },
    { name: 'Venkataperumal A', course: 'Student Review', text: 'Attending the haircut class at A5 Academy was an incredible experience! Special thanks to Mr.john and Mr. kaalai, they are highly skilled, patient, and passionate about teaching.', rating: 5 },
    { name: 'Vignesh Vikky', course: 'Student Review', text: 'Learned new techniques and skills in haircuts, facials and proper guidance for hair straightening... right place to enhance ur carrier....right place..right guidance....right time!', rating: 5 },
    { name: 'Raj Kumar', course: 'Student Review', text: 'Nan first oru academy ponna apo eanku Class Puriyala Ana eanku A5 men Grooming Academy romba nalla soilekuduthaga... a5me grooming academy oru oru Class la explain pannagaa', rating: 5 },
    { name: 'Men\'s beauty parlour', course: 'Student Review', text: 'I am very satisfied with joining this academy. I feel like a fully qualified worker after joining here. I am very grateful to A5 Academy for perfecting me to this extent.', rating: 5 },
    { name: 'pandi munish', course: 'Customer Review', text: 'I\'m absolutely thrilled with my recent men\'s makeover and hairstyle experience! The team did an outstanding job, and I could not be happier with the results.', rating: 5 },
    { name: 'Naresh Kumar', course: 'Student Review', text: 'Nan entha academy eppadi sollitharuvanganu oru doubt ota vantha, ana unmayavea nalla solli kotutharu, pratical panna vetanga... nalla motivational pannni romba friendly ya ellaraum patharu', rating: 5 },
    { name: 'balaji s', course: 'Student Review', text: 'As a tattoo artist I want to develop my professional traits and very curious to learn hairstyling... successfully I am going to finish both men and women\'s styling in this month with full pledged', rating: 5 },
    { name: 'vignesh chinnasamy', course: 'Student Review', text: 'A5 is a HI-FI Best academy for grow up as a Improved Professional stylist,His teaching level is so good And Easy to Understand. Price Also comfortable to compare other academy.', rating: 5 },
    { name: 'Ramar kumar', course: 'Student Review', text: 'I came here and learned everything completely. Thank you team members and trainers.', rating: 5 },
    { name: 'Lingeshwar B', course: 'Customer Review', text: 'The owner\'s name is John and he was the one who did my hair. Very professional , very friendly, good customer service.', rating: 5 },
    { name: 'Karthik P', course: 'Customer Review', text: 'Went to the salon as a customer and came out with an amazing haircut and made a good relationship with John anna back in 2020... the work is top notch you can see the perfection', rating: 5 },
    { name: 'Aswin thirumurugan', course: 'Customer Review', text: 'The place, the service, the comfort they gave through the haircut, and the end haircut that came out was something that I never expected... Thanks to A5', rating: 5 },
    { name: 'Sumit Agarwal', course: 'Customer Review', text: 'His Style is his Passion, if you are looking a proper and best hair cut in your life, I personally recommend him.', rating: 5 },
    { name: 'BALAVIGNESH arunagiri', course: 'Customer Review', text: 'One of my fav barber if you come once means you won\'t leave this John he is so kind hearted, polite nd funny sometimes. Big fan of your work thala', rating: 5 },
    { name: 'SIMPLY AZAR', course: 'Customer Review', text: 'Today I went for a haircut really vera level transformation pannaru ennoda hair romba curly and Ferg... he is well professional and he will transform to best with any haircut', rating: 5 },
    { name: 'Deepak G', course: 'Customer Review', text: 'If your looking for perfect Haircut this would be a better choice. Ambiance is good. Hairstylist Soo friendly and jovial.', rating: 5 },
    { name: 'deepak kumar', course: 'Customer Review', text: 'Stylist John is most talented and more knowledgeable in his work. He fulfills customer satisfaction to 100%. best place for all type of spa and beauty', rating: 5 },
    { name: 'Vignesh Sha', course: 'Customer Review', text: 'He is simply awesome. I have been his customer for more than 6 years. He is the best hair stylist. You will really like it.', rating: 5 },
    { name: 'Manojkumar AC', course: 'Customer Review', text: 'Can\'t give less than 5Star... He deserves more than 5Star... Best Hairstyles in the town... So Friendly.... Now he is our Family stylish..', rating: 5 },
    { name: 'thaadi bala', course: 'Customer Review', text: 'For past 3 months I was searching for good hairstylist now finally got John he did wat I need fantastic job thank you 💯.', rating: 5 },
    { name: 'pranav styler', course: 'Customer Review', text: 'Love this man ❤️.... He is awsm with his talents with hair ... Best salon i have ever met in my lyf ..', rating: 5 },
    { name: 'Lishwanth Kumar', course: 'Customer Review', text: 'Best hairstylist .....i have been his customer since 2015...one of the best human ever encountered...such a nice guy ...his work is also excellent ..', rating: 5 },
    { name: 'DEEPAK V', course: 'Customer Review', text: 'Awesome and very creative experienced hair stylist everybody should try for a great experience of haircut John bro you are awesome', rating: 5 }
  ]

  const trainers = [
    { name: 'keerthana', role: 'Lead Hair Stylist Trainer', experience: '15+ Years', specialty: 'Precision Cutting & Barbering' },
    { name: 'Anjali Desai', role: 'Senior Color Specialist', experience: '12+ Years', specialty: 'Balayage & Creative Coloring' },
    { name: 'Rohit Malhotra', role: 'Grooming Expert', experience: '10+ Years', specialty: 'Men\'s Grooming & Styling' },
  ]

  const handleHomeSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form['name'].value
    const phone = form['phone'].value
    const course = form['course'].value
    const message = form['message'].value || 'Not provided'
    
    const text = `Hello A5 Men Grooming Academy!

*New Enquiry*
Name: ${name}
Phone: ${phone}
Course Interest: ${course}
Message: ${message}`

    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/918610282448?text=${encodedText}`, '_blank')
  }

  return (
    <div className="home-page">
      {/* ========== HERO SECTION ========== */}
      <section className="hero" id="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          {[...Array(6)].map((_, i) => <div key={i} className="particle" />)}
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <Sparkles size={14} /> India's Premier Hair Training Institute
          </div>
          <h1>
            Master the Art of<br />
            <span className="gold-text">Men's Grooming</span><br />
            with Ellappan Swaminathan
          </h1>
          <p className="hero-subtitle">
            Tamil Nadu’s 1st academy for Hands-on Real-World Experience. Get practical training 
            on real models and earn internationally accredited certificates.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              <GraduationCap size={18} /> Enroll Now
            </Link>
            <a href="#demo" className="btn btn-outline">
              <Play size={18} /> Free Demo Class
            </a>
            <a href="https://wa.me/918610282448" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          {/* Floating Stats */}
          <div className="hero-stats">
            <div className="stat-card glass-card" ref={statsRef1}>
              <span className="stat-number">{statsCount1}+</span>
              <span className="stat-label">Students Completed</span>
            </div>
            <div className="stat-card glass-card" ref={statsRef2}>
              <span className="stat-number">{statsCount2}K+</span>
              <span className="stat-label">Instagram Followers</span>
            </div>
            <div className="stat-card glass-card" ref={statsRef3}>
              <span className="stat-number">{statsCount3}+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ========== TRUSTED BY STRIP ========== */}
      <section className="trusted-strip">
        <div className="container">
          <div className="strip-content">
            <div className="strip-item"><Award size={20} /> <span>LAPT Accredited</span></div>
            <div className="strip-item"><CheckCircle size={20} /> <span>NSDVE Recognized</span></div>
            <div className="strip-item"><Users size={20} /> <span>NSDC Certified</span></div>
            <div className="strip-item"><Briefcase size={20} /> <span>100% Hands-on Real-World Experience</span></div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="section about-section" id="about" ref={aboutRef}>
        <div className={`container ${aboutVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <span className="label">Founder & Mentor</span>
            <h2>Led by <span className="gold-text">Ellappan Swaminathan</span></h2>
            <p>20+ Years of Salon Industry Experience. Tamil Nadu’s first academy to implement Hands-on Real-World Experience.</p>
          </div>
          <div className="about-grid">
            <div className="about-image-area reveal-left" style={{ opacity: aboutVisible ? 1 : 0, transform: aboutVisible ? 'translateX(0)' : 'translateX(-40px)', transition: 'all 0.6s ease' }}>
              <div className="about-img-wrapper">
                <img src="/gallery/owner.jpg" alt="A5 Training Studio" className="about-img" />
              </div>
              <div className="about-experience-badge glass-card">
                <span className="exp-number">20+</span>
                <span className="exp-text">Years of<br />Excellence</span>
              </div>
            </div>
            <div className="about-content reveal-right" style={{ opacity: aboutVisible ? 1 : 0, transform: aboutVisible ? 'translateX(0)' : 'translateX(40px)', transition: 'all 0.6s ease 0.2s' }}>
              <h3>Our Mission</h3>
              <p>To provide world-class, hands-on hair styling education that empowers every student with the skills, confidence, and industry connections to build a thriving career.</p>
              <h3>Why Choose A5?</h3>
              <div className="why-cards">
                <div className="why-card gold-card">
                  <Award size={28} className="why-icon" />
                  <h4>Expert Trainers</h4>
                  <p>Learn from industry veterans with 10-15+ years of salon experience</p>
                </div>
                <div className="why-card gold-card">
                  <Scissors size={28} className="why-icon" />
                  <h4>Live Practical Sessions</h4>
                  <p>100% hands-on training on real clients in our in-house salon</p>
                </div>
                <div className="why-card gold-card">
                  <Briefcase size={28} className="why-icon" />
                  <h4>Career Support</h4>
                  <p>Dedicated placement cell with 100+ partner salon network</p>
                </div>
                <div className="why-card gold-card">
                  <Sparkles size={28} className="why-icon" />
                  <h4>Modern Equipment</h4>
                  <p>Train with professional-grade tools and premium products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COURSES SECTION ========== */}
      <section className="section courses-section" id="courses" ref={coursesRef}>
        <div className="container">
          <div className="section-header">
            <span className="label">Our Courses</span>
            <h2>Professional <span className="gold-text">Training Programs</span></h2>
            <p>Choose from our range of expertly designed courses to match your goals and experience level.</p>
          </div>
          <div className="courses-grid" style={{ opacity: coursesVisible ? 1 : 0, transform: coursesVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
            {courses.map((course, index) => (
              <div className="course-card gold-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="course-card-header">
                  <div className="course-icon">{course.icon}</div>
                  <span className={`course-badge ${course.level.toLowerCase()}`}>{course.level}</span>
                </div>
                <h3>{course.title}</h3>
                <div className="course-duration">
                  <Clock size={14} /> {course.duration}
                </div>
                <ul className="course-features">
                  {course.features.map((f, i) => (
                    <li key={i}><CheckCircle size={14} /> {f}</li>
                  ))}
                </ul>
                <Link to="/courses" className="btn btn-outline course-btn">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY BENTO PREVIEW ========== */}
      <section className="section training-section" id="gallery-preview" ref={trainingRef}>
        <div className="container">
          <div className="section-header">
            <span className="label">Life at A5</span>
            <h2>Experience the <span className="gold-text">Journey</span></h2>
            <p>From hands-on training to graduation ceremonies, see what it's like to be part of our academy.</p>
          </div>
          <div className="bento-grid" style={{ opacity: trainingVisible ? 1 : 0, transform: trainingVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
            <Link to="/gallery" className="bento-item bento-large glass-card">
              <img src="/gallery/training15.png" alt="Live Training" className="bento-bg" />
              <div className="bento-content"><Scissors size={48} /><span>Live Model Training</span></div>
            </Link>
            <Link to="/gallery" className="bento-item glass-card">
              <img src="/gallery/reward1.JPG" alt="Academy Events" className="bento-bg" />
              <div className="bento-content"><Star size={36} /><span>Academy Events</span></div>
            </Link>
            <Link to="/gallery" className="bento-item glass-card">
              <img src="/gallery/guest2.JPG" alt="Guest Masterclasses" className="bento-bg" />
              <div className="bento-content"><Users size={36} /><span>Guest Masterclasses</span></div>
            </Link>
            <Link to="/gallery" className="bento-item bento-wide glass-card">
              <img src="/gallery/graduate1.JPG" alt="Graduation Ceremonies" className="bento-bg" />
              <div className="bento-content"><GraduationCap size={36} /><span>Graduation Ceremonies</span></div>
            </Link>
            <Link to="/gallery" className="bento-item glass-card">
              <img src="/gallery/training2.jpg" alt="Professional Setup" className="bento-bg" />
              <div className="bento-content"><Sparkles size={36} /><span>Professional Setup</span></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PLACEMENT SECTION ========== */}
      <section className="section placement-section" id="placements" ref={placementRef}>
        <div className="container">
          <div className="section-header">
            <span className="label">Placement Guidance</span>
            <h2>Your Career <span className="gold-text">Starts Here</span></h2>
            <p>We don't just train you — we help you build a successful career.</p>
          </div>
          <div className="placement-grid" style={{ opacity: placementVisible ? 1 : 0, transform: placementVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
            <div className="placement-card gold-card">
              <BookOpen size={32} className="placement-icon" />
              <h4>Interview Preparation</h4>
              <p>Mock interviews and resume building workshops</p>
            </div>
            <div className="placement-card gold-card">
              <Briefcase size={32} className="placement-icon" />
              <h4>Internship Support</h4>
              <p>Hands-on internship at partner salons during training</p>
            </div>
            <div className="placement-card gold-card">
              <Users size={32} className="placement-icon" />
              <h4>Salon Placement</h4>
              <p>Direct placement assistance with 100+ partner salons</p>
            </div>
            <div className="placement-card gold-card">
              <Star size={32} className="placement-icon" />
              <h4>Portfolio Building</h4>
              <p>Professional photo portfolio of your best work</p>
            </div>
          </div>
          <div className="placement-stats">
            <div className="pstat glass-card"><TrendingUp size={20} /><span className="pstat-num">₹15K - ₹50K</span><span className="pstat-label">Starting Salary Range</span></div>
            <div className="pstat glass-card"><Users size={20} /><span className="pstat-num">95%</span><span className="pstat-label">Placement Rate</span></div>
            <div className="pstat glass-card"><Briefcase size={20} /><span className="pstat-num">100+</span><span className="pstat-label">Partner Salons</span></div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="section testimonials-section" id="testimonials" ref={testimonialRef}>
        <div className="container">
          <div className="section-header">
            <span className="label">Student Stories</span>
            <h2>What Our <span className="gold-text">Students Say</span></h2>
            <p>Real stories from real students who transformed their careers with A5.</p>
          </div>
          <div className="testimonials-grid" style={{ opacity: testimonialVisible ? 1 : 0, transform: testimonialVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
            {testimonials.map((t, i) => (
              <div className="testimonial-card glass-card" key={i} onClick={() => setActiveTestimonial(t)} style={{ cursor: 'pointer' }}>
                <div className="stars">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.course}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Modal */}
        {activeTestimonial && (
          <div className="home-modal-overlay" onClick={() => setActiveTestimonial(null)}>
            <div className="testimonial-modal glass-card" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setActiveTestimonial(null)} aria-label="Close"><X size={24} /></button>
              <div className="stars" style={{ marginBottom: '1rem' }}>
                {[...Array(activeTestimonial.rating)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
              </div>
              <p className="testimonial-text-full" style={{ fontSize: '1.1rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '2rem', color: 'var(--color-text)' }}>
                "{activeTestimonial.text}"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ width: '56px', height: '56px', fontSize: '1.4rem' }}>{activeTestimonial.name[0]}</div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-body)' }}>{activeTestimonial.name}</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{activeTestimonial.course}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========== TRAINERS ========== */}
      <section className="section trainers-section" id="trainers" ref={trainerRef}>
        <div className="container">
          <div className="section-header">
            <span className="label">Our Team</span>
            <h2>Meet Your <span className="gold-text">Expert Trainers</span></h2>
            <p>Learn from the best in the industry.</p>
          </div>
          <div className="trainers-grid" style={{ opacity: trainerVisible ? 1 : 0, transform: trainerVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
            {trainers.map((tr, i) => (
              <div className="trainer-card glass-card" key={i}>
                <div className="trainer-avatar">{tr.name.split(' ').map(n => n[0]).join('')}</div>
                <h4>{tr.name}</h4>
                <span className="trainer-role">{tr.role}</span>
                <div className="trainer-details">
                  <span><Award size={14} /> {tr.experience}</span>
                  <span><Scissors size={14} /> {tr.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CERTIFICATION ========== */}
      <section className="section cert-section" id="certification" ref={certRef}>
        <div className="container">
          <div className="section-header">
            <span className="label">Certification</span>
            <h2>Industry-Recognized <span className="gold-text">Certificates</span></h2>
            <p>Earn credentials that open doors across the beauty industry.</p>
          </div>
          <div className="cert-grid" style={{ opacity: certVisible ? 1 : 0, transform: certVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
            <div className="cert-card gold-card"><GraduationCap size={32} /><h4>Course Certificate</h4><p>Official completion certificate for every program</p></div>
            <div className="cert-card gold-card"><Award size={32} /><h4>Training Completion</h4><p>Practical skills verification by expert trainers</p></div>
            <div className="cert-card gold-card"><Briefcase size={32} /><h4>Internship Certificate</h4><p>Verified salon internship experience record</p></div>
            <div className="cert-card gold-card"><Star size={32} /><h4>Recognition Badge</h4><p>Digital badge for portfolio and social media</p></div>
          </div>
        </div>
      </section>

      {/* ========== ADMISSION CTA ========== */}
      <section className="section cta-section" id="enroll" ref={ctaRef}>
        <div className="cta-bg"></div>
        <div className={`container cta-content ${ctaVisible ? 'visible' : ''}`}>
          <h2>Ready to Start Your<br /><span className="gold-text">Dream Career?</span></h2>
          <p>Join the next batch and transform your passion into a profession. Limited seats available.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary"><GraduationCap size={18} /> Apply for Admission</Link>
            <a href="#demo" className="btn btn-outline"><Play size={18} /> Book Free Demo Class</a>
            <a href="https://wa.me/918610282448" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp Now</a>
          </div>
        </div>
      </section>

      {/* ========== INQUIRY FORM ========== */}
      <section className="section form-section" id="demo" ref={formRef}>
        <div className="container">
          <div className="section-header">
            <span className="label">Get in Touch</span>
            <h2>Enquire <span className="gold-text">Now</span></h2>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
          </div>
          <div className="form-wrapper" style={{ opacity: formVisible ? 1 : 0, transform: formVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
            <form className="inquiry-form glass-card" onSubmit={handleHomeSubmit} id="inquiry-form">
              <div className="form-group">
                <input type="text" id="name" required placeholder=" " />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="form-group">
                <input type="tel" id="phone" required placeholder=" " />
                <label htmlFor="phone">Phone Number</label>
              </div>
              <div className="form-group">
                <select id="course" required defaultValue="">
                  <option value="" disabled>Select a Course</option>
                  <option>60 Days Men Barbering Diploma</option>
                  <option>30 Days Advance Barbering Course</option>
                  <option>10 Days Master Class</option>
                </select>
                <label htmlFor="course" className="select-label">Course Interest</label>
              </div>
              <div className="form-group">
                <textarea id="message" rows="3" placeholder=" "></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Submit Enquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
