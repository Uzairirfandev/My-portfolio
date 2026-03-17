import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'React.js', level: 90, icon: '⚛️', color: '#61DAFB' },
    { name: 'JavaScript', level: 85, icon: '📜', color: '#F7DF1E' },
    { name: 'HTML/CSS', level: 90, icon: '🎨', color: '#E34C26' },
    { name: 'Tailwind CSS', level: 85, icon: '🌊', color: '#06B6D4' },
    { name: 'Three.js', level: 75, icon: '🎮', color: '#000000' },
    { name: 'Framer Motion', level: 80, icon: '🎭', color: '#0055FF' },
    { name: 'Node.js', level: 70, icon: '💚', color: '#339933' },
    { name: 'Git/GitHub', level: 85, icon: '🔧', color: '#F05032' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#121212] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#E96600] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff8c3a] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E96600] to-[#ff8c3a]">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Card */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 rounded-2xl border border-[#E96600]/20 hover:border-[#E96600]/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#E96600]/20">
                
                {/* Glow Effect on Hover */}
                {hoveredSkill === skill.name && (
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                    style={{ backgroundColor: skill.color }}
                  />
                )}

                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E96600] to-[#ff8c3a]">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,.1) 2px, rgba(255,255,255,.1) 4px)`
                    }}></div>
                  </div>
                  
                  {/* Progress Bar */}
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd, ${skill.color}99)`,
                      boxShadow: `0 0 20px ${skill.color}66`
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.1 + 0.5,
                      ease: "easeOut"
                    }}
                  >
                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
                  </motion.div>
                </div>

                {/* Skill Details on Hover */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm text-gray-300 relative z-10"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }}></div>
                      <span>Proficient in {skill.name.toLowerCase()}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-[#E96600]/10 to-[#ff8c3a]/10 rounded-full border border-[#E96600]/30">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">{skills.length}</p>
              <p className="text-sm text-gray-300">Technologies</p>
            </div>
            <div className="w-px h-12 bg-[#E96600]/30"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">
                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
              </p>
              <p className="text-sm text-gray-300">Avg. Proficiency</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Skills;
