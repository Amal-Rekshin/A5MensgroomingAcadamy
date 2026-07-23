import { useEffect, useState, useRef } from 'react';
import './SplashScreen.css';
import logo from '/gallery/a5logo.png'

const SplashScreen = ({ onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * -1.5 - 0.5; // Always move upwards
        this.opacity = Math.random() * 0.8 + 0.2;
        this.wobble = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.speedX + Math.sin(this.wobble) * 0.5;
        this.y += this.speedY;
        this.wobble += 0.02;
        
        // Reset when it goes off screen at the top
        if (this.y < -10) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
        }
      }
      draw() {
        ctx.fillStyle = `rgba(255, 190, 11, ${this.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ffbe0b';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const timer = setTimeout(() => {
      onComplete();
    }, 5500); // 5.5 seconds for cinematic effect

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="splash-screen-wrapper">
      <canvas ref={canvasRef} id="splash-particles-canvas"></canvas>
      <div className="splash-container">
        <div className="splash-logo-container">
          <img src="/gallery/a5logo.png" alt="A5 Men Grooming Academy Logo" className="splash-logo" />
        </div>
        <div className="splash-text-container">
          <h1 className="splash-line-1">MEN GROOMING ACADEMY</h1>
          <h2 className="splash-line-2">SCHOOL OF BARBERING</h2>
          <p className="splash-line-3">HAIR <span className="splash-divider">|</span> SKIN <span className="splash-divider">|</span> MAKEUP</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
