// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/1.png.jpeg'; 

function Hero() {
  // Animation for image (same as before)
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.92,
      y: 40 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 1.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left side - Text + Buttons + Stats */}
          <div className="text-center lg:text-left space-y-8 lg:space-y-12 order-2 lg:order-1">
            <div>
              
              
              {/* Muhammad Uzair with smoke/neon glow */}
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mt-2 text-white"
                style={{
                  textShadow: `
                    0 0 10px #E96600,
                    0 0 20px #E96600,
                    0 0 30px #E96600,
                    0 0 40px rgba(233, 102, 0, 0.6)
                  `
                }}
              >
                Muhammad Uzair
              </h1>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-3 text-white">
                FrontEnd Developer
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mt-8">
              <a
                href="#contact"
                className="inline-flex px-10 py-5 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] text-black font-bold text-lg rounded-lg hover:from-[#d55c00] hover:to-[#ff8c3a] transition-all duration-300 shadow-lg shadow-[#E96600]/30 hover:shadow-xl hover:shadow-[#E96600]/40 hover:scale-105"
              >
                Let's Connect
              </a>
              <a
                href="/Muhammad_Uzair_CV.pdf.pdf"
                download="Muhammad_Uzair_CV.pdf.pdf"
                className="inline-flex px-10 py-5 border-2 border-[#E96600] text-[#E96600] font-bold text-lg rounded-lg hover:bg-gradient-to-r hover:from-[#E96600] hover:to-[#ff8c3a] hover:text-black transition-all duration-300 shadow-lg shadow-[#E96600]/20 hover:shadow-xl hover:shadow-[#E96600]/40 hover:scale-105"
              >
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 max-w-md mx-auto lg:mx-0">
              <div className="group relative bg-gradient-to-br from-[#E96600]/10 to-[#E96600]/5 p-6 rounded-2xl border border-[#E96600]/20 hover:border-[#E96600]/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#E96600]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E96600]/5 to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E96600] to-[#ff8c3a]">1+</p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 font-medium">Years Experience</p>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-[#E96600]/10 to-[#E96600]/5 p-6 rounded-2xl border border-[#E96600]/20 hover:border-[#E96600]/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#E96600]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E96600]/5 to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E96600] to-[#ff8c3a]">5+</p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 font-medium">Projects Done</p>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-[#E96600]/10 to-[#E96600]/5 p-6 rounded-2xl border border-[#E96600]/20 hover:border-[#E96600]/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#E96600]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E96600]/5 to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E96600] to-[#ff8c3a]">10+</p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 font-medium">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Animated Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              className="relative w-72 sm:w-80 md:w-96 lg:w-[480px] xl:w-[520px] aspect-[4/5] rounded-3xl overflow-hidden border-4 border-[#E96600]/30 shadow-2xl shadow-[#E96600]/20"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={heroImg}
                alt="Muhammad Uzair"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/70 via-transparent to-transparent"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;