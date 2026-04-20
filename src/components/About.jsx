// src/components/About.js
import React, { useState, useEffect } from 'react';
import profileImage from '../assets/1.png.jpeg';

const ROLES = [
  "Front-End Developer",
  "UI/UX Designer", 
  "Web Developer",
  "Design Focused Developer"
];

function About() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait then delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: '#121212' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            About Me
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] mx-auto rounded-full"></div>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            <span className="text-[#E96600]">{displayText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-left flex flex-col justify-center">
            <div className="text-gray-200 text-base sm:text-lg leading-relaxed">
              I am a Front-End Developer (Design Focused) with 1 year of experience in creating clean, modern, and responsive web designs. I specialize in building user-friendly interfaces using HTML and Tailwind CSS, with a strong focus on layout, design consistency, and responsive UI across all devices.
            </div>
            <div className="text-gray-200 text-base sm:text-lg leading-relaxed">
              I have knowledge of JavaScript, which I use to add simple interactivity to web pages. I am passionate about front-end design, improving user experience, and continuously learning new design trends and tools.
            </div>

            {/* Download CV Button */}
            <div className="mt-8 sm:mt-10">
              <a
                href="/Muhammad_Uzair_CV.pdf.pdf"
                download="Muhammad_Uzair_CV.pdf.pdf"
                className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] text-black font-bold text-base sm:text-lg rounded-lg hover:from-[#d55c00] hover:to-[#ff8c3a] transition-all duration-300 shadow-lg shadow-[#E96600]/30 hover:shadow-xl hover:shadow-[#E96600]/40 hover:scale-105"
              >
                <span className="mr-3">↓</span> Download CV
              </a>
            </div>
          </div>

          {/* Right: Profile Image with Neon Glow */}
          <div className="relative flex justify-center lg:justify-end">
            <div 
              className="relative w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[500px] aspect-square rounded-full overflow-hidden border-8 border-[#E96600]/30"
              style={{
                boxShadow: `
                  0 0 15px #E96600,
                  0 0 30px #E96600,
                  0 0 50px rgba(233, 102, 0, 0.5),
                  0 0 80px rgba(233, 102, 0, 0.3)
                `
              }}
            >
              <img
                src={profileImage}
                alt="Muhammad Uzair"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/30 to-[#121212]/70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;