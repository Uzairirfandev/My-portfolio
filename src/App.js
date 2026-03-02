import React, { useState, useEffect } from 'react';
import { Header, About, Portfolio, Contact, Footer, Hero, Services } from './components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Update active section based on scroll
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aurora mouse effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scroll for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#121212] overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#E96600] to-[#ff8c3a] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Aurora Background Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(233, 102, 0, 0.12), 
            rgba(233, 102, 0, 0.06) 40%, 
            transparent 70%)`,
        }}
      />
      
      {/* Floating Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section 
                  ? 'bg-[#E96600] border-[#E96600] scale-125' 
                  : 'border-gray-600 hover:border-[#E96600] hover:scale-110'
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#E96600] rounded-full animate-pulse opacity-40" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#ff8c3a] rounded-full animate-bounce opacity-30" />
        <div className="absolute bottom-30 left-20 w-1 h-1 bg-[#E96600] rounded-full animate-ping opacity-30" />
        <div className="absolute bottom-50 right-10 w-2 h-2 bg-[#ff8c3a] rounded-full animate-pulse opacity-40" />
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-[#E96600] rounded-full animate-bounce opacity-30" />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-[#E96600]/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-[#ff8c3a]/10 rotate-45 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
