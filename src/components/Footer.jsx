// src/components/Footer.js
import React from 'react';
import logoImage from '../assets/XY TECH.png';

function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <button className="inline-block mb-1" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <img
                src={logoImage}
                alt="Muhammad Uzair Logo"
                className="h-24 w-auto object-contain hover:brightness-110 transition-all duration-300"
              />
            </button>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Full Stack Developer specializing in modern web technologies. Creating digital experiences that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-400 hover:text-[#E96600] transition-colors duration-300">Home</a>
              <a href="#services" className="text-gray-400 hover:text-[#E96600] transition-colors duration-300">Services</a>
              <a href="#about" className="text-gray-400 hover:text-[#E96600] transition-colors duration-300">About Me</a>
              <a href="#portfolio" className="text-gray-400 hover:text-[#E96600] transition-colors duration-300">Portfolio</a>
              <a href="#contact" className="text-gray-400 hover:text-[#E96600] transition-colors duration-300">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <a 
                  href="mailto:Uzairirfan.ai@gmail.com" 
                  className="text-gray-400 hover:text-[#E96600] transition-colors duration-300 flex items-center justify-center md:justify-end gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Uzairirfan.ai@gmail.com
                </a>
              </div>
              <div>
                <a 
                  href="tel:+923274088143" 
                  className="text-gray-400 hover:text-[#E96600] transition-colors duration-300 flex items-center justify-center md:justify-end gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (+92) 327 4088143
                </a>
              </div>
              <div className="flex justify-center md:justify-end gap-4 pt-2">
                <a href="https://www.linkedin.com/in/u-z-a-i-r-/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E96600] transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/uzair_irfan__?igsh=NHIydmd4c3A3d2hh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E96600] transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="https://github.com/uzairirfanofficeai-netizen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E96600] transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Muhammad Uzair. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built with ❤️ using React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;