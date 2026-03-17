import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaUsers, FaCode, FaLightbulb } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "jibran",
      position: "Senior Developer",
      team: "Frontend Team",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Uzair is an amazing team player! His React skills are top-notch and he always brings creative solutions to complex problems. Working together on the e-commerce platform was a fantastic experience.",
      project: "E-commerce Platform",
      collaboration: "Frontend Development"
    },
    {
      id: 2,
      name: "SAAD",
      position: "UI/UX Designer",
      team: "Design Team",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Uzair perfectly translates my designs into clean, responsive code. His attention to detail and understanding of user experience makes him the ideal frontend developer to work with.",
      project: "Agency Portfolio",
      collaboration: "Design Implementation"
    },
    {
      id: 3,
      name: "Abaid",
      position: "Backend Developer",
      team: "Full-stack Team",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Uzair's Three.js integration with our backend APIs was seamless! His ability to create stunning 3D visualizations while maintaining clean code structure is impressive. Great collaborator!",
      project: "3D Product Showcase",
      collaboration: "API Integration"
    },
    {
      id: 4,
      name: "DANISH FAYAZ",
      position: "Project Manager",
      team: "Management Team",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Uzair consistently delivers high-quality work on time. His problem-solving skills and positive attitude make him a valuable team member. Always ready to help others learn and grow.",
      project: "Creative Portfolio",
      collaboration: "Project Leadership"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const slideVariants = {
    hidden: { 
      opacity: 0, 
      x: 300,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -300,
      scale: 0.8,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#121212] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#E96600] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ff8c3a] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E96600] to-[#ff8c3a]">Collaboration</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What my team members say about working together
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative h-[500px] md:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 md:p-12 rounded-3xl border border-[#E96600]/20 shadow-2xl shadow-[#E96600]/10 h-full flex flex-col justify-between">
                  
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <FaUsers className="text-4xl md:text-5xl text-[#E96600]/30" />
                  </div>

                  {/* Testimonial Content */}
                  <div className="text-center mb-8">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].testimonial}"
                    </p>
                    
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xl" />
                      ))}
                    </div>

                    {/* Project Info */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E96600]/10 rounded-full border border-[#E96600]/30 mb-6">
                      <FaCode className="text-[#E96600]" />
                      <span className="text-sm text-[#E96600] font-medium">
                        {testimonials[currentIndex].project}
                      </span>
                      <span className="text-gray-400">•</span>
                      <FaLightbulb className="text-[#ff8c3a]" />
                      <span className="text-sm text-gray-300">
                        {testimonials[currentIndex].collaboration}
                      </span>
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border-3 border-[#E96600]/50"
                    />
                    <div className="text-left">
                      <h4 className="text-lg md:text-xl font-bold text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm md:text-base text-gray-400">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-sm text-[#E96600]">
                        {testimonials[currentIndex].team}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-12 h-12 bg-[#E96600] text-black rounded-full flex items-center justify-center hover:bg-[#d55c00] transition-colors shadow-lg hover:shadow-xl z-20"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-12 h-12 bg-[#E96600] text-black rounded-full flex items-center justify-center hover:bg-[#d55c00] transition-colors shadow-lg hover:shadow-xl z-20"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </motion.div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-[#E96600] w-8'
                  : 'bg-gray-600 hover:bg-[#E96600]/50'
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E96600] to-[#ff8c3a]">
              {testimonials.length}+
            </p>
            <p className="text-sm text-gray-300 mt-2">Team Members</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E96600] to-[#ff8c3a]">
              5.0
            </p>
            <p className="text-sm text-gray-300 mt-2">Team Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E96600] to-[#ff8c3a]">
              100%
            </p>
            <p className="text-sm text-gray-300 mt-2">Collaboration</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E96600] to-[#ff8c3a]">
              2yr
            </p>
            <p className="text-sm text-gray-300 mt-2">Team Experience</p>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
