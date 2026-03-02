// src/components/Portfolio.js
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import VanillaTilt from 'vanilla-tilt';

function Portfolio() {
  const projects = [
    {
      name: "SIMVICTUS",
      category: "GAME WEB",
      description: "An immersive gaming platform with advanced multiplayer features and real-time gameplay mechanics.",
      image: "https://image2url.com/r2/default/images/1769165069238-e39688a7-5be7-4753-b124-edd5bbfe0cb6.png",
      link: "https://simvictus.com/",
    },
    {
      name: "SCOUT CAPITALS",
      category: "WEB APP",
      description: "A comprehensive financial management platform for investment tracking and portfolio analysis.",
      image: "https://image2url.com/r2/default/images/1769165010346-55539a1a-87e5-4719-a7fe-ee941ae9aab7.png",
      link: "https://scoutscapital.com/",
    },
    {
      name: "LIFTSOL",
      category: "GYM WEB",
      description: "Modern fitness management system with workout tracking, nutrition planning, and progress monitoring.",
      image: "https://image2url.com/r2/default/images/1769164963707-dea98895-5a9e-476e-aa4c-b603e5431493.png",
      link: "https://liftsol.pk/",
    },
    {
      name: "CREYATI",
      category: "AGENCY",
      description: "Creative digital agency platform showcasing innovative design solutions and brand development services.",
      image: "https://image2url.com/r2/default/images/1769165180822-073c9ca6-0b80-4e57-adb7-704e0af1170d.png",
      link: "https://www.creyeti.com.au/work",
    },
    
    {
      name: "PAKCODER",
      category: "DEVELOPER WEB",
      description: "Professional developer community platform with coding resources, tutorials, and project collaboration tools.",
      image: "https://image2url.com/r2/default/images/1769165331242-810642c7-1635-4c95-9045-8141140ad07c.png",
      link: "https://www.pakcoder.com/",
    },
  ];

  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Vanilla Tilt Ref
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.4,
          gyroscope: true,
        });
      }
    });
  }, []);

  return (
    <section 
      id="portfolio" 
      className="py-20 md:py-32"
      style={{ backgroundColor: '#121212' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            PROJECTS
          </h2>
        </div>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={(el) => (tiltRefs.current[index] = el)}
              className="px-2" // slider ke beech spacing ke liye
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#1a1a1a] rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#E96600]/70 hover:shadow-[0_0_35px_rgba(233,102,0,0.5)] transition-all duration-500 transform hover:-translate-y-3"
                data-tilt
                data-tilt-max="15"
                data-tilt-speed="400"
                data-tilt-glare="true"
                data-tilt-max-glare="0.5"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#E96600] transition-colors duration-300 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-[#E96600]/80 transition-colors duration-300 mb-3">
                    {project.category}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Portfolio;